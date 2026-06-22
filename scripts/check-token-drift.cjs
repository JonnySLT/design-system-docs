#!/usr/bin/env node
/* eslint-disable */
// ─────────────────────────────────────────────────────────────────────────────
// Token drift guard — keeps the three hand-maintained token surfaces in sync.
//
// tokens.json (W3C DTCG, light values)  ─┐
// src/tokens/tokens.css  :root block     ─┴─ must agree on every shared token.
// (Figma variables are the third surface; the weekly fingerprint sweep covers
//  Figma-side drift, so this script guards the repo-local css ↔ json pair.)
//
// Run:  npm run check:tokens   (exits non-zero on any drift)
//
// Deterministic families (spacing, radius, fontSize/Weight, lineHeight,
// fontFamily, shadow, colour primitives) are name-mapped 1:1 and value-checked.
// Semantic colours have documented name divergences (see TOKENS.md), so they
// are value-membership checked: every semantic value in json must exist as some
// :root value in css. This keeps false positives at zero while still catching a
// value edited in one surface but not the other.
// ─────────────────────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const json = JSON.parse(fs.readFileSync(path.join(ROOT, 'tokens.json'), 'utf8'));
const cssRaw = fs.readFileSync(path.join(ROOT, 'src/tokens/tokens.css'), 'utf8');

// ── Parse the :root (light) block of tokens.css into { '--name': value } ──────
const rootBlock = cssRaw.split('[data-theme="dark"]')[0];
const cssVars = {};
const cssValueSet = new Set();
for (const m of rootBlock.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
  const name = m[1].trim();
  const value = m[2].trim();
  cssVars[name] = value;
  cssValueSet.add(norm(value));
}

// ── Normalise a value for comparison ─────────────────────────────────────────
function norm(v) {
  return String(v)
    .toLowerCase()
    .replace(/['"]/g, '')      // quote style differs (fontFamily)
    .replace(/\s+/g, ' ')      // collapse whitespace
    .replace(/;+$/, '')
    .trim();
}

// ── Deterministic family → css-var-name prefix rules ─────────────────────────
const PRIMITIVE_RAMPS = ['indigo', 'slate', 'emerald', 'amber', 'red'];
const SEMANTIC_GROUPS = ['bg', 'text', 'border', 'interactive', 'feedback'];

// Returns the expected css var name for a deterministic token, or null if the
// token is handled by the semantic value-membership path (or intentionally
// skipped, e.g. white/black used directly).
function expectedCssVar(group, keyPath) {
  switch (group) {
    case 'spacing':    return `--spacing-${keyPath}`;
    case 'radius':     return `--radius-${keyPath}`;
    case 'fontSize':   return `--font-size-${keyPath}`;
    case 'fontWeight': return `--font-weight-${keyPath}`;
    case 'lineHeight': return `--line-height-${keyPath}`;
    case 'fontFamily': return `--font-${keyPath}`;
    case 'shadow':     return `--shadow-${keyPath}`;
    case 'color': {
      const [ramp, step] = keyPath.split('.');
      if (PRIMITIVE_RAMPS.includes(ramp)) return `--${ramp}-${step}`;
      return null; // white/black (used directly) or semantic (value-checked)
    }
    default: return null;
  }
}

// ── Flatten a DTCG group into { 'a.b.c': value } ─────────────────────────────
function flatten(node, prefix, out) {
  if (node && typeof node === 'object' && '$value' in node) {
    out[prefix] = node.$value;
    return out;
  }
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith('$')) continue;
    flatten(v, prefix ? `${prefix}.${k}` : k, out);
  }
  return out;
}

// ── Walk every token and check it ─────────────────────────────────────────────
const problems = [];
let checkedDeterministic = 0;
let checkedSemantic = 0;

for (const group of Object.keys(json)) {
  if (group.startsWith('$')) continue;
  const flat = flatten(json[group], '', {});
  for (const [keyPath, value] of Object.entries(flat)) {
    const varName = expectedCssVar(group, keyPath);

    if (varName) {
      checkedDeterministic++;
      if (!(varName in cssVars)) {
        problems.push(`MISSING  ${group}.${keyPath}  → expected css ${varName} (not found)`);
      } else if (norm(cssVars[varName]) !== norm(value)) {
        problems.push(
          `VALUE    ${group}.${keyPath}\n           json: ${value}\n           css ${varName}: ${cssVars[varName]}`
        );
      }
      continue;
    }

    // Semantic colours + white/black → value-membership check
    if (group === 'color') {
      const [head] = keyPath.split('.');
      if (head === 'white' || head === 'black') continue; // used directly
      if (SEMANTIC_GROUPS.includes(head)) {
        checkedSemantic++;
        if (!cssValueSet.has(norm(value))) {
          problems.push(`ORPHAN   color.${keyPath} = ${value}  (value absent from tokens.css :root)`);
        }
      }
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────────
if (problems.length === 0) {
  console.log(
    `✓ Token surfaces in sync — ${checkedDeterministic} deterministic + ${checkedSemantic} semantic colours checked (tokens.json ↔ tokens.css).`
  );
  process.exit(0);
}

console.error(`✗ Token drift detected (${problems.length}):\n`);
for (const p of problems) console.error('  ' + p);
console.error(
  '\nFix: update tokens.json AND src/tokens/tokens.css (and the Figma variable) so all three agree. See TOKENS.md for the name map.'
);
process.exit(1);
