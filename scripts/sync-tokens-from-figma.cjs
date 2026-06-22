#!/usr/bin/env node
/* eslint-disable */
// ─────────────────────────────────────────────────────────────────────────────
// Figma → repo token checker (LIGHT mode).
//
// Workflow is Figma-first: designers change variables in Figma, then the repo
// token files must be updated. This script flags repo tokens that have fallen
// behind their Figma source, so the update is mechanical instead of a hunt.
//
//   npm run check:figma-tokens          # report drift (exit 1 on drift)
//
// INPUT: scripts/figma-tokens.snapshot.json — a snapshot of the mirrored Figma
// variables. Refresh it by re-running the use_figma extraction (ask Claude) and
// overwriting that file; then run this to see what changed.
//
// SCOPE — deliberately narrow, to stay safe:
//   • BOTH light and dark modes. Figma's Color collection has Light + Dark modes
//     and is the source of truth for both; the repo's :root and [data-theme="dark"]
//     blocks must match. (Dark was reconciled into Figma first — see changelog
//     v1.0.29 — so Figma now carries the better-tuned dark values.)
//   • Mirrored families only: colour primitives, the 1:1 semantic colours,
//     feedback colours, spacing, radius, font-size (by value), font-weight.
//   • EXCLUDED (curated / not repo tokens, never touched here):
//       - shadows           (repo values are tuned approximations of Figma)
//       - the Components collection (button/*, badge/*, … — applied in CSS, not tokens)
//       - repo-only tokens  (--color-surface, --color-text-disabled, --radius-2xl, …)
//       - duplicate/aliased Figma names (color/bg/brand, color/text/brand, …)
// ─────────────────────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const snapshot = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/figma-tokens.snapshot.json'), 'utf8'));
const cssRaw = fs.readFileSync(path.join(ROOT, 'src/tokens/tokens.css'), 'utf8');

// ── Parse the :root (light) block of tokens.css → { '--name': value } ─────────
const rootBlock = cssRaw.split('[data-theme="dark"]')[0];
const css = {};
for (const m of rootBlock.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
  css[m[1].trim()] = m[2].trim();
}

// Parse the [data-theme="dark"] overrides into { '--name': value }. A semantic
// token's effective dark value is its dark override, or the :root value it inherits.
const darkBlock = cssRaw.split('[data-theme="dark"]')[1] || '';
const cssDark = {};
for (const m of darkBlock.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
  cssDark[m[1].trim()] = m[2].trim();
}
const effectiveDark = cssVar => (cssVar in cssDark) ? cssDark[cssVar] : css[cssVar];

const norm = v => String(v).toLowerCase().replace(/['"]/g, '').replace(/\s+/g, ' ').trim();

// ── Explicit Figma-variable → CSS-variable map for the mirrored families ──────
// Anything not listed (and not matched by a rule below) is treated as
// "intentionally unmapped" and skipped silently.
const MAP = {
  // Semantic colours — 1:1 and documented renames (see TOKENS.md)
  'color/bg/default': '--color-bg-default',
  'color/bg/subtle': '--color-bg-subtle',
  'color/bg/muted': '--color-surface-raised',
  'color/text/default': '--color-text-default',
  'color/text/muted': '--color-text-muted',
  // NOTE: color/text/inverted is intentionally NOT mapped — it has no clean repo
  // counterpart across both modes (light #FFFFFF matches --color-text-on-primary,
  // but dark #0F172A matches --color-text-on-inverse; neither matches both).
  'color/interactive/primary': '--color-interactive-primary',
  'color/interactive/primary-hover': '--color-interactive-primary-hover',
  'color/interactive/primary-fg': '--color-interactive-primary-fg',
  'color/interactive/primary-subtle': '--color-interactive-primary-subtle',
  'color/interactive/primary-light': '--color-interactive-primary-light',
  'color/interactive/neutral': '--color-interactive-neutral',
  'color/border/default': '--color-border-default',
  'color/border/strong': '--color-border-strong',
  'color/border/focus': '--color-border-focus',
  // Spacing — Figma numeric multiplier → repo t-shirt size (by value)
  'spacing/1': '--spacing-xs', 'spacing/2': '--spacing-sm', 'spacing/3': '--spacing-md',
  'spacing/4': '--spacing-lg', 'spacing/5': '--spacing-xl', 'spacing/6': '--spacing-2xl',
  'spacing/8': '--spacing-3xl', 'spacing/10': '--spacing-4xl', 'spacing/12': '--spacing-5xl',
  'spacing/16': '--spacing-6xl', 'spacing/20': '--spacing-7xl',
  // Radius — 1:1
  'radius/none': '--radius-none', 'radius/sm': '--radius-sm', 'radius/md': '--radius-md',
  'radius/lg': '--radius-lg', 'radius/xl': '--radius-xl', 'radius/full': '--radius-full',
  // Font size — Figma role-based → repo scale (by value)
  'font-size/body/sm': '--font-size-xs', 'font-size/body/md': '--font-size-sm',
  'font-size/body/lg': '--font-size-md', 'font-size/heading/4': '--font-size-lg',
  'font-size/heading/3': '--font-size-xl', 'font-size/heading/2': '--font-size-2xl',
  'font-size/heading/1': '--font-size-3xl', 'font-size/display/sm': '--font-size-4xl',
  // Font weight — 1:1
  'font-weight/regular': '--font-weight-regular', 'font-weight/medium': '--font-weight-medium',
  'font-weight/semibold': '--font-weight-semibold', 'font-weight/bold': '--font-weight-bold',
};

// Figma value → expected CSS value. Numbers (FLOAT) gain a unit; px for spacing/
// radius/font-size, unitless for font-weight. Colours/strings compare as-is.
function expectedCss(figmaName, type, value) {
  if (type === 'FLOAT') {
    if (figmaName.startsWith('font-weight/')) return String(value);
    return `${value}px`;
  }
  return String(value);
}

// Rule-based mapping for the feedback colour family (suffix → repo token).
// color/feedback/<name>        → --color-<name>-icon   (the generic = icon)
// color/feedback/<name>-bg     → --color-<name>-bg
// color/feedback/<name>-text   → --color-<name>-text
// color/feedback/<name>-border → --color-<name>-border
function feedbackTarget(figmaName) {
  const m = figmaName.match(/^color\/feedback\/([a-z]+)(?:-(bg|text|border))?$/);
  if (!m) return null;
  const [, name, suffix] = m;
  return `--color-${name}-${suffix || 'icon'}`;
}

// ── Walk the mirrored families and compare LIGHT values ───────────────────────
const MIRRORED_COLLECTIONS = ['Primitives', 'Color', 'Spacing', 'Typography'];
const stale = [];
const missingTarget = [];
let checked = 0;
let checkedDark = 0;

for (const collName of MIRRORED_COLLECTIONS) {
  const coll = snapshot[collName];
  if (!coll) continue;
  const lightMode = coll.modes.includes('Light') ? 'Light' : 'Value';

  for (const [figmaName, def] of Object.entries(coll.variables)) {
    if (figmaName === 'white' || figmaName === 'black') continue; // used directly
    if (figmaName.startsWith('font-family/')) continue;           // structural (fallback stack); skip value check

    // Resolve target css var: explicit map → primitive rule → feedback rule
    let cssVar = MAP[figmaName];
    if (!cssVar && /^(indigo|slate|emerald|amber|red)\/\d+$/.test(figmaName)) {
      cssVar = '--' + figmaName.replace('/', '-');
    }
    if (!cssVar) cssVar = feedbackTarget(figmaName);
    if (!cssVar) continue; // intentionally unmapped (emphasis, brand aliases, display lg/md, line-height, letter-spacing…)

    const figmaVal = def.modes[lightMode];
    if (figmaVal == null) continue;

    if (!(cssVar in css)) {
      missingTarget.push(`${figmaName}  → ${cssVar} (not found in tokens.css :root)`);
      continue;
    }
    checked++;
    const want = expectedCss(figmaName, def.type, figmaVal);
    if (norm(css[cssVar]) !== norm(want)) {
      stale.push(
        `${figmaName} (light)\n      Figma: ${figmaVal}  (expect css ${want})\n      ${cssVar}: ${css[cssVar]}`
      );
    }

    // Dark-mode check — Color collection only (it has a Dark mode). The repo's
    // effective dark value (override, else inherited :root) must match Figma's
    // dark value. Catches both a wrong override AND a missing one.
    if (def.type === 'COLOR' && def.modes.Dark != null) {
      checkedDark++;
      const repoDark = effectiveDark(cssVar);
      if (norm(repoDark) !== norm(String(def.modes.Dark))) {
        stale.push(
          `${figmaName} (dark)\n      Figma: ${def.modes.Dark}\n      ${cssVar} (dark): ${repoDark}` +
          ((cssVar in cssDark) ? '' : '  [no dark override — inherits :root]')
        );
      }
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────────
const problems = stale.length + missingTarget.length;
if (problems === 0) {
  console.log(`✓ Repo tokens match Figma — ${checked} light + ${checkedDark} dark values checked.`);
  console.log('  (Shadows, the Components collection, and repo-only tokens are out of scope by design.)');
  process.exit(0);
}

console.error(`✗ Repo tokens behind Figma (${problems}):\n`);
if (stale.length) {
  console.error('  STALE — Figma changed, repo not updated:');
  for (const s of stale) console.error('    • ' + s);
}
if (missingTarget.length) {
  console.error('\n  NO TARGET — Figma token has no tokens.css counterpart (review the map):');
  for (const m of missingTarget) console.error('    • ' + m);
}
console.error(
  '\nFix: update src/tokens/tokens.css to the Figma values above — the :root block for\n' +
  '(light) entries and the [data-theme="dark"] block for (dark) entries — then run\n' +
  '`npm run check:tokens` to confirm css ↔ json agree. Figma is the source of truth for both modes.'
);
process.exit(1);
