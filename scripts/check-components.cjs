#!/usr/bin/env node
/* eslint-disable */
// ─────────────────────────────────────────────────────────────────────────────
// components.json ↔ component source guard.
//
// components.json is the machine-readable component API (props, Figma node ids,
// doc URLs) that AI/tools rely on. It's hand-maintained, so its prop lists can
// drift from the actual .jsx components. This verifies they agree.
//
//   npm run check:components
//
// For each entry it locates the component in its source file, extracts the
// destructured props from the function signature, and compares against the
// declared props[].name list.
//
//   ERROR  (fails build): a prop is documented in components.json but does NOT
//          exist in the component source (stale/wrong docs), or the declared
//          export cannot be found in the source file.
//   WARN   (does not fail): a real prop exists in source but is undocumented.
//          Pass-through props (className, style, …) are ignored.
//
// Non-.jsx entries (e.g. the icon set) are skipped — they have no prop API.
// ─────────────────────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const components = JSON.parse(fs.readFileSync(path.join(ROOT, 'components.json'), 'utf8')).components;

// Props that components legitimately accept as pass-throughs without documenting.
const IGNORE_UNDOCUMENTED = new Set(['className', 'style', 'id']);

// ── Locate the component fn and return its destructured prop names (or null) ──
function extractSourceProps(src, name) {
  const patterns = [
    new RegExp(`export\\s+default\\s+function\\s+${name}\\s*\\(`),
    new RegExp(`export\\s+function\\s+${name}\\s*\\(`),
    new RegExp(`function\\s+${name}\\s*\\(`),
    new RegExp(`const\\s+${name}\\s*=\\s*\\(`),
    /export\s+default\s+function\s*\(/, // anonymous default
  ];
  let openParen = -1;
  for (const re of patterns) {
    const m = src.match(re);
    if (m) { openParen = m.index + m[0].length - 1; break; }
  }
  if (openParen === -1) return null; // component not found

  // From '(' walk to the first '{' (the destructure). If we hit ')' first,
  // the component takes a non-destructured arg (e.g. `(props)`).
  let i = openParen;
  while (i < src.length && src[i] !== '{') {
    if (src[i] === ')') return []; // no destructuring
    i++;
  }
  if (i >= src.length) return null;

  // Brace-match the destructure block.
  let depth = 0, start = i;
  for (; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (depth === 0) break; }
  }
  const inner = src.slice(start + 1, i);

  // Split on top-level commas, then take the leading identifier of each segment.
  const names = [];
  let buf = '', d = 0;
  for (const ch of inner) {
    if ('{[('.includes(ch)) d++;
    else if ('}])'.includes(ch)) d--;
    if (ch === ',' && d === 0) { names.push(buf); buf = ''; }
    else buf += ch;
  }
  if (buf.trim()) names.push(buf);

  return names
    .map(seg => {
      seg = seg.trim();
      if (!seg || seg.startsWith('...')) return null; // rest element
      const m = seg.match(/^([A-Za-z_$][\w$]*)/);
      return m ? m[1] : null;
    })
    .filter(Boolean);
}

// ── Walk every component entry ────────────────────────────────────────────────
const errors = [];
const warnings = [];
let checked = 0;

for (const c of components) {
  if (!c.import || !c.import.endsWith('.jsx')) continue; // skip non-component entries (icons)
  const file = path.join(ROOT, c.import);
  if (!fs.existsSync(file)) { errors.push(`${c.name}: import file not found (${c.import})`); continue; }

  const src = fs.readFileSync(file, 'utf8');
  // `sourceSymbol` lets an entry whose documented component is implemented by a
  // differently-named internal component (e.g. Toast → ToastItem) point the
  // guard at the right function. Falls back to the entry name.
  const symbol = c.sourceSymbol || c.name;
  const sourceProps = extractSourceProps(src, symbol);

  if (sourceProps === null) {
    errors.push(`${c.name}: could not locate component "${symbol}" in ${c.import}`);
    continue;
  }

  checked++;
  const declared = (c.props || []).map(p => p.name);
  const sourceSet = new Set(sourceProps);
  const declaredSet = new Set(declared);

  for (const p of declared) {
    if (!sourceSet.has(p)) errors.push(`${c.name}: documents prop "${p}" that does not exist in ${c.import}`);
  }
  for (const p of sourceProps) {
    if (!declaredSet.has(p) && !IGNORE_UNDOCUMENTED.has(p)) {
      warnings.push(`${c.name}: source prop "${p}" is undocumented in components.json`);
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────────
if (warnings.length) {
  console.error(`⚠ ${warnings.length} undocumented prop(s):`);
  for (const w of warnings) console.error('    • ' + w);
  console.error('');
}

if (errors.length === 0) {
  console.log(`✓ components.json matches source — ${checked} components checked, no stale props.`);
  process.exit(0);
}

console.error(`✗ components.json drift (${errors.length}):`);
for (const e of errors) console.error('    • ' + e);
console.error('\nFix: update components.json so its props match the actual component signatures.');
process.exit(1);
