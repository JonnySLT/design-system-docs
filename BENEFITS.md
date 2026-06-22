# Claude Design System — Why It Helps Each Team

**The big idea:** Figma is the source of truth for the design tokens — colors (light *and*
dark), spacing, radius, type, and shadows — plus component appearance, and the code repo
mirrors it. Code owns implementation details: how components behave, and a couple of CSS-only
specifics (like font fallback fonts). Automated checks keep the shared parts from silently
drifting apart — less manual cross-checking, fewer "the design and the build don't match"
surprises.

## 🎨 For Designers

- **One file, no confusion** — there's exactly one design system file; nobody wastes time
  wondering which is current.
- **The changelog writes itself** — every meaningful change to the Figma file is logged
  automatically with a date and category; a weekly check even catches edits made by hand.
  No more manually maintaining a "what changed" doc.
- **Consistent by construction** — colors, spacing, type, and radius all come from shared
  tokens, so the system stays visually coherent as it grows.
- **Your design decisions are respected** — where the design has been deliberately tuned
  (e.g. dark-mode colors), the system preserves those choices instead of overwriting them.
- **Changes flow to code reliably** — when you update a value in Figma, there's a clear,
  checked process for getting it into the product, so your intent actually ships.

## 💻 For Developers

- **Mistakes get caught before they ship** — automated checks block a deploy if the token
  files disagree, or if the documented component props don't match the real code. No silent
  drift reaching production.
- **One command to verify everything** — `npm run check` confirms tokens and component docs
  are all in sync before you commit.
- **Clear map between Figma and code** — a documented table links every Figma variable to its
  CSS counterpart, so translating a design change is mechanical, not guesswork.
- **Self-documenting components** — `components.json` lists every component's props, types, and
  Figma link in one machine-readable file, kept honest by an automated check.
- **Trustworthy tokens** — light/dark values, spacing, and type are centralized and guarded,
  so you're never hunting for "the real value."

## 🤖 For AI assistants (and the whole team via them)

- **AI can act accurately without hand-holding** — clear instruction files (`AGENTS.md`,
  `CLAUDE.md`, `TOKENS.md`) plus machine-readable indexes (`components.json`, `tokens.json`,
  `llms.txt`) let an AI understand the whole system in one read.
- **Less back-and-forth** — because the rules and structure are written down, AI produces
  correct changelog entries, token updates, and component edits the first time.
- **Safe automation** — AI changes go through the same automated guards as everyone's, so
  AI-assisted work can't quietly break the system.
- **Faster routine work** — repetitive jobs (logging changes, checking for drift, syncing
  tokens) are scripted, freeing people for design and product decisions.

## ✅ The bottom line

The system is **consistent, documented, and self-checking.** Designers' intent is preserved
and flows to code; developers catch problems before users do; and AI can safely speed up the
routine work — so the team spends less time reconciling Figma vs. code and more time building.
