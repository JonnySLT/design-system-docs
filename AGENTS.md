# AGENTS.md — orientation for developers & AI agents

This is the **code counterpart** to the Claude Design System Figma file. The docs site
documents the same components, tokens, and type styles that live in Figma. Read this first
to get productive without spelunking.

## Source of truth

- **Figma file:** `njWLlZEF7ekubL8zrsegQ3` — *Claude Design System* (the only DS file; do not
  reference any other).
- **Tokens:** `src/tokens/tokens.css` is the canonical token file, hand-maintained to mirror
  the Figma variables. See [`TOKENS.md`](./TOKENS.md) for the exact Figma-variable ↔ CSS-variable map.
  **When you change a token, update all three surfaces** — the Figma variable, `tokens.css`, and
  `tokens.json` — then run `npm run check:tokens` to confirm `tokens.css` and `tokens.json` agree
  (it also runs in CI on every push and blocks deploy on drift).
- **Changelog:** auto-maintained in the Figma file's Changelog page — **do not hand-write
  changelog entries.** See the root `CLAUDE.md` workflow (immediate logging on push; a weekly
  sweep catches manual Figma edits).

### Keeping the repo in sync with Figma (Figma-first workflow)

Changes usually land in Figma first, then the repo must catch up. **Run `npm run check` to verify
all three guards at once** (handy before a commit); `check:tokens` and `check:components` also run in
CI and block deploy. The individual guards:

- **`npm run check:tokens`** — verifies `tokens.css` ↔ `tokens.json` agree (runs in CI, blocks deploy).
- **`npm run check:components`** — verifies `components.json`'s documented props match the actual
  component source signatures (runs in CI, blocks deploy). Stale documented props fail; undocumented
  pass-through props warn. An entry whose documented component is implemented by a differently-named
  internal one can set `"sourceSymbol"` to point the check at the right function (e.g. Toast → ToastItem).
- **`npm run check:figma-tokens`** — verifies the repo's **light-mode** tokens still match Figma. It
  compares against `scripts/figma-tokens.snapshot.json`, a committed snapshot of the mirrored Figma
  variables. **Refresh the snapshot** by re-running the `use_figma` extraction (ask Claude — it reads
  every variable with aliases resolved) and overwriting that file, then run the check to see exactly
  which repo tokens are stale and what to set them to.
- **Scope of `check:figma-tokens`** (intentionally narrow, to avoid clobbering curated values):
  light mode only; mirrored families only (colour primitives, 1:1 semantic colours, feedback
  colours, spacing, radius, font-size, font-weight). It does **not** touch **dark mode** (the repo's
  dark palette is independently tuned and intentionally ahead of Figma on several colours), shadows
  (tuned approximations), the Figma `Components` collection (applied in component CSS, not tokens),
  or repo-only tokens. Update those by hand when design intent changes. It is **not** a CI gate —
  the snapshot can be stale, so it's an on-demand tool, not a build blocker.

## Machine-readable index (for tools & AI agents)

- **`components.json`** — every component's import path, props (name/type/default/description),
  Figma node id, and doc URL. Load this to know the whole component API in one file.
- **`tokens.json`** — all design tokens in W3C DTCG format (light values; dark in `tokens.css`).
- **`public/llms.txt`** — served at the site root; an LLM-friendly index of the docs + these files.
- **`TOKENS.md`** — the prose Figma-variable ↔ CSS-variable map.

## Stack

- Vite + React 18, `react-router-dom` **HashRouter**, deployed to **GitHub Pages** via
  `.github/workflows/deploy.yml` (push to `main` → build → deploy).
- No TypeScript in the app — everything is `.jsx`.

## Layout

```
src/
  components/ui/        # the components (Component.jsx + Component.css)
  components/ui/icons.js# all 88 icons as inline SVG (fill=currentColor)
  components/docs/      # docs primitives (ComponentDemo, PropsTable, TokenTable, CodeBlock)
  pages/                # Home, GettingStarted, foundations/*, components/*Page.jsx
  tokens/tokens.css     # canonical design tokens (light + [data-theme="dark"])
  nav.js                # sidebar navigation
  App.jsx               # routes
```

## Tokens — rules

- **Use semantic tokens, never primitives,** in component CSS (e.g. `var(--color-text-muted)`,
  not `var(--slate-500)`).
- Light values in `:root`; dark overrides in `[data-theme="dark"]`.
- Naming differs from Figma in a few places (Figma `color/bg/muted` → repo `--color-surface-raised`,
  Figma `color/feedback/*` → repo `--color-{success,warning,error}-*`). [`TOKENS.md`](./TOKENS.md)
  is the authoritative map — consult it when translating a Figma token to CSS.

## Components

Each component is `Component.jsx` + `Component.css`, documented by `pages/components/ComponentPage.jsx`,
routed in `App.jsx`, and listed in `nav.js`. Figma node IDs (file `njWLlZEF7ekubL8zrsegQ3`):

| Component | Figma node | Component | Figma node |
|---|---|---|---|
| Alert | `44:30` | Nav Item | `198:40` |
| Avatar | `37:50` | Navbar | `170:5` |
| Badge | `35:36` | Radio | `264:9` |
| Button | `24:2` | Select | `97:61` |
| Card | `43:21` | Spinner | `102:20` |
| Checkbox | `39:26` | Tab | `95:21` |
| Icons | Icon page | TabGroup | `420:2` |
| Input | `42:42` | Toast | `104:31` |
| Modal | `46:48` | Toggle | `40:18` |
| Tooltip | `55:22` | | |

**Adding a component:** create `src/components/ui/X.jsx` + `X.css`, a `pages/components/XPage.jsx`
(use `ComponentDemo` + `PropsTable`), and add the route in `App.jsx` and the entry in `nav.js`.

## Figma → code reference

Code Connect (which surfaces a component's React code directly in Figma Dev Mode) requires an
**Organization or Enterprise** plan, so it isn't set up here. Instead, the **component → Figma
node-id table above** and **[`TOKENS.md`](./TOKENS.md)** are the manual Figma→code bridge — use them
to translate a Figma component or variable to its repo counterpart.
