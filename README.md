# Claude Design System

A small, dependency-light **React** design system — components, design tokens, and icons —
with a docs site. It mirrors the *Claude Design System* Figma file.

🔗 **Live docs:** https://jonnyslt.github.io/design-system-docs/

New here? This README gets you running and using a component in a few minutes. For deeper
detail see [AGENTS.md](./AGENTS.md). For a plain-language overview of how this system helps
designers, developers, and AI, see [BENEFITS.md](./BENEFITS.md).

## What it's built with

| Tool | Used for |
|---|---|
| **React 18** | Components — plain function components, default exports |
| **Vite** | Dev server and production build |
| **Vanilla CSS** | One `.css` file per component, styled with **CSS custom properties** (design tokens) |
| **React Router** (HashRouter) | The docs site only — not needed to use a component |

**No TypeScript, no Tailwind, no CSS-in-JS.** If you know React and CSS, you already know this
codebase. Styling is just classes + CSS variables.

## Run it locally

```bash
git clone https://github.com/JonnySLT/design-system-docs.git
cd design-system-docs
npm install
npm run dev      # then open the localhost URL it prints
```

- `npm run build` — production build into `dist/`
- `npm run preview` — serve the built site locally

## Using a component

Each component is a single `.jsx` file in `src/components/ui/` plus a matching `.css` file, and
depends only on the design tokens. To use one in your own app:

**1. Import the tokens once, at your app's entry point** (this defines all the CSS variables):

```js
import './tokens/tokens.css'
```

**2. Import the component and use it:**

```jsx
import Button from './components/ui/Button.jsx'

export default function Example() {
  return (
    <Button variant="primary" onClick={() => alert('Saved!')}>
      Save changes
    </Button>
  )
}
```

Every component's props and live examples are on the [docs site](https://jonnyslt.github.io/design-system-docs/),
or in [`components.json`](./components.json) as a machine-readable list.

## Anatomy of a component

Every component follows the same simple pattern: a function component that renders an element
with `ds-*` class names, paired with a CSS file that styles those classes **using tokens** —
never hardcoded colors or sizes. Here's `Badge` in full:

```jsx
// src/components/ui/Badge.jsx
import './Badge.css'

export default function Badge({ children, variant = 'default', size = 'md' }) {
  return (
    <span className={`ds-badge ds-badge--${variant} ds-badge--${size}`}>
      {children}
    </span>
  )
}
```

```css
/* src/components/ui/Badge.css — colors/spacing come from tokens, not hardcoded values */
.ds-badge {
  display: inline-flex;
  border-radius: var(--badge-radius);
  font-family: var(--font-sans);
  font-weight: var(--font-weight-medium);
}
.ds-badge--md      { font-size: 12px; padding: 2px 8px; }
.ds-badge--primary { background: var(--color-interactive-primary-subtle); color: var(--color-interactive-primary); }
.ds-badge--success { background: var(--color-success-bg); color: var(--color-success-text); }
```

**The conventions, in three rules:**
1. One default-exported function component per file; props with sensible defaults.
2. Class names are `ds-{component}` plus modifiers `ds-{component}--{variant}`.
3. Always style with `var(--token)` — never a raw hex or px for color/spacing/radius. (See [TOKENS.md](./TOKENS.md).)

## Project structure

```
src/
  components/ui/      the components — Component.jsx + Component.css
  components/ui/icons.js   all 88 icons as inline SVG
  components/docs/    docs-only helpers (demos, prop tables)
  pages/             docs site pages (foundations + one per component)
  tokens/tokens.css  all design tokens (light + [data-theme="dark"])
  nav.js / App.jsx   docs site navigation + routes
```

## Where to go next

- **[Live docs site](https://jonnyslt.github.io/design-system-docs/)** — browse every component with examples, props, accessibility notes, and do/don't guidelines.
- **[AGENTS.md](./AGENTS.md)** — fuller orientation, including the Figma component map.
- **[components.json](./components.json)** / **[tokens.json](./tokens.json)** — machine-readable component API and design tokens.
- **[TOKENS.md](./TOKENS.md)** — token naming and the Figma-variable mapping.
