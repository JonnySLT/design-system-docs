# Token map — Figma variables ↔ CSS variables

Values in `src/tokens/tokens.css` mirror the Figma variables in the *Claude Design System* file
(`njWLlZEF7ekubL8zrsegQ3`). Most names map 1:1 (slash → dash); a few diverge. When translating a
Figma token to code, use this table.

## Primitives — 1:1 (slash → dash)

`indigo/N`, `slate/N`, `emerald/N`, `amber/N`, `red/N`, `white`, `black` →
`--indigo-N`, `--slate-N`, `--emerald-N`, `--amber-N`, `--red-N`, (white/black used directly).

- Indigo & slate: full `50–900`.
- Emerald / amber: `50, 400, 500, 900`. Red: `50, 500, 600, 900`.

## Semantic colors

| Figma variable | CSS variable | Notes |
|---|---|---|
| `color/bg/default` | `--color-bg-default` | 1:1 |
| `color/bg/subtle` | `--color-bg-subtle` | 1:1 |
| `color/bg/muted` | `--color-surface-raised` | **name differs** (same value) |
| `color/bg/emphasis` | *(none)* | use `--slate-900` / inverse |
| `color/bg/brand` | `--color-interactive-primary` | **name differs** |
| `color/text/default` | `--color-text-default` | 1:1 |
| `color/text/muted` | `--color-text-muted` | 1:1 |
| `color/text/subtle` | *(none)* | value = `--slate-600` |
| `color/text/inverted` | `--color-text-on-primary` | **name differs** |
| `color/text/brand` | `--color-interactive-primary` | **name differs** |
| `color/text/on-brand` | `--color-text-on-primary` / `--color-interactive-primary-fg` | |
| `color/interactive/primary` | `--color-interactive-primary` | 1:1 |
| `color/interactive/primary-hover` | `--color-interactive-primary-hover` | 1:1 |
| `color/interactive/primary-fg` | `--color-interactive-primary-fg` | 1:1 |
| `color/interactive/primary-subtle` | `--color-interactive-primary-subtle` | 1:1 |
| `color/interactive/primary-light` | `--color-interactive-primary-light` | 1:1 |
| `color/interactive/neutral` | `--color-interactive-neutral` | 1:1 |
| `color/border/default` | `--color-border-default` | 1:1 |
| `color/border/strong` | `--color-border-strong` | 1:1 |
| `color/border/focus` | `--color-border-focus` | 1:1 |
| `color/border/brand` | `--color-interactive-primary` | **name differs** |
| `color/feedback/success` | `--color-success-border` / `--color-success-icon` | grouped differently |
| `color/feedback/success-bg` | `--color-success-bg` | |
| `color/feedback/success-text` | `--color-success-text` | |
| `color/feedback/warning*` | `--color-warning-{border,icon,bg,text}` | |
| `color/feedback/error*` | `--color-error-{border,icon,bg,text}` | |
| `color/surface` | `--color-surface` | 1:1 |
| `color/surface-inverse` | `--color-surface-inverse` | 1:1 |
| `color/surface-overlay` | `--color-surface-overlay` | 1:1 (rgba scrim, same both modes) |
| `color/text/disabled` | `--color-text-disabled` | 1:1 |
| `color/text/on-inverse` | `--color-text-on-inverse` | 1:1 |

**CSS-only (not in Figma):** the font fallback stacks inside `--font-sans` / `--font-mono` — Figma
stores only the family name (e.g. `Inter`), and the fallback chain is a CSS concern. Everything else
(surface colours, `--color-text-disabled`, `--radius-2xl`, all shadows) now has a Figma variable.

## Spacing — by value (Figma multiplier → repo t-shirt)

| Figma | CSS | px |
|---|---|---|
| `spacing/1` | `--spacing-xs` | 4 |
| `spacing/2` | `--spacing-sm` | 8 |
| `spacing/3` | `--spacing-md` | 12 |
| `spacing/4` | `--spacing-lg` | 16 |
| `spacing/5` | `--spacing-xl` | 20 |
| `spacing/6` | `--spacing-2xl` | 24 |
| `spacing/8` | `--spacing-3xl` | 32 |
| `spacing/10` | `--spacing-4xl` | 40 |
| `spacing/12` | `--spacing-5xl` | 48 |
| `spacing/16` | `--spacing-6xl` | 64 |
| `spacing/20` | `--spacing-7xl` | 80 |

## Radius

`radius/none|sm|md|lg|xl|2xl|full` → `--radius-none|sm|md|lg|xl|2xl|full` (1:1). `2xl` = 16px.

## Typography

- Font sizes map by value: `--font-size-xs..4xl` = 12/14/16/18/20/24/30/36. Figma's display sizes
  (48, 64) exist only as text styles, not as `--font-size-*` tokens.
- **Text styles** (16: Display/Heading/Body/Label/Code) are documented on the Typography page and
  match the Figma text styles 1:1.

## Shadows

Shadows live in a dedicated **Shadows** collection with **Light / Dark** modes.
`shadow/xs|sm|md|lg|xl|focus|focus-subtle` → `--shadow-xs|sm|md|lg|xl|focus|focus-subtle` (1:1).
Values match the repo exactly (Figma is the source of truth). `xs–xl` are identical in both modes;
`focus` / `focus-subtle` differ per mode (indigo-600 tint in light, indigo-400 in dark).
