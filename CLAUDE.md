## Figma — Claude Design System (njWLlZEF7ekubL8zrsegQ3)

After **any session** that either makes a change to this Figma file **or** pushes and commits changes to the `design-system-demo` repo at the user's request (new or updated icons, components, tokens, text styles, screens, fixes, docs, etc.), you MUST add a new entry to the Changelog page in this Figma file documenting what changed, before finishing. No exceptions.

### Changelog rules

- **File:** `njWLlZEF7ekubL8zrsegQ3` — Changelog page, `Entries` auto-layout frame `762:40`
- **Always insert at the top** — append the new entry to the `Entries` frame then `insertChild(0, entry)` to move it to position 0
- **No Divider needed** — the `Entries` frame uses `itemSpacing: 16`; do not add divider rectangles
- **Version number** — increment the patch version from the most recent entry (e.g. v1.0.3 → v1.0.4)
- **Date** — the format depends on the entry's badge. **`MANUAL` entries** use the Monday–Sunday **week range** `— Month D–D, YYYY` (e.g. `— June 15–21, 2026`), or `— Mon D – Mon D, YYYY` when it spans two months (e.g. `— June 29 – July 5, 2026`) — manual edits are grouped per week. **`REPO PUSH` and `CLAUDE` entries** use the **exact date** `— Month D, YYYY` (e.g. `— June 19, 2026`), since they are logged the moment the change happens.
- **Tag** — use the most relevant category: `SCREENS`, `COMPONENTS`, `TOKENS`, `FIXES`, `DOCUMENTATION`, or `INITIAL RELEASE`
- **Repo-push badge** — when the entry documents a push/commit to the `design-system-demo` repo, the `Header` MUST also include a `REPO PUSH` badge so it is clearly distinguished from Figma-file edits. Clone the category `Tag` pill, set its text to `REPO PUSH`, and bind its fill to `color/interactive/primary` (`VariableID:6:13`) and its text to `color/interactive/primary-fg` (`VariableID:6:15`) so it renders as a filled accent pill. Place it after the category Tag. Entries for Figma-file-only edits omit this badge.
- **Author badge** — identifies who made the change. **Skip it on `REPO PUSH` entries** — a repo push is always authored by Claude, so the `REPO PUSH` badge already implies it; adding `CLAUDE` would be redundant. For every **other** entry, add a dark filled pill as the last `Header` item — fill bound to `VariableID:6:7` (near-black), text bound to `VariableID:6:15` (light) — reading `CLAUDE` for a Figma-file edit you made or `MANUAL` for a change a person made editing the file directly. You can only guarantee the `CLAUDE` badge on your own entries; the `MANUAL` badge is the human editor's responsibility.
- **Entry structure** — `Entry/vX.X.X` frame → `Header` → `Spacer` → one or more `Section/CATEGORY` frames → each section contains `BulletRow`(s) only (no inter-bullet spacers), plus a `LabelPill` **only when the entry has 2+ sections** (see the *Section LabelPill* rule below)
- **Auto-layout & spacing** — all frames must use auto-layout with `layoutSizingHorizontal = FILL` and `layoutSizingVertical = HUG`. For sections: set `itemSpacing` to 8px and bind it to `spacing/2` (`VariableID:7:3`) so bullet gaps are consistent and token-bound. Bullet body text nodes set to `FILL`.
- **Header layer sizing** — every `Header` child (`Version` text, `Date` text, category `Tag` pill, `REPO PUSH` pill, author pill) is `layoutSizingHorizontal = HUG` so they all left-align with even `itemSpacing` gaps. **Never set the `Date` layer to `FILL`** (it would push the pills to the right edge and break consistency with every other entry).
- **Section LabelPill — only with multiple sections** — a single-section entry **omits** the section `LabelPill` (its bullets follow the header `Spacer` directly): the header category Tag already names the category, so a LabelPill would just duplicate it. Include a `LabelPill` per section **only** when the entry has 2+ category sections, so the sections are distinguishable.
- **LabelPill is full-width** — when present, the section `LabelPill` MUST be `layoutSizingHorizontal = FILL` so the grey bar stretches the full content width (label text stays left-aligned). Never set it to `HUG`.
- **Style cloning** — clone text styles, fills, and padding from the most recent existing entry — never hardcode values

### What to log

Log every meaningful change — whether edited directly in the Figma file or pushed to the repo: new/updated components, icons, tokens, text styles, screens, layout fixes, docs. One bullet per distinct change. Be specific — name the files, frames, or areas changed and what changed.

### Change detection (auto-draft the changelog from a baseline)

So a person never has to write a changelog entry by hand, the file stores a **baseline fingerprint** in shared plugin data (namespace `changelog`, key `baseline`) — a deep hash per page, component/set, variable, text style, and effect style. Diff against it to find what changed, then write the entry automatically. Baseline last captured June 2026.

**Keep the baseline in sync with your own Figma edits.** Whenever YOU change the Figma file (a component, variable, style, page) and log it immediately in-session, refresh the baseline (re-store the current fingerprint to `changelog/baseline`) right after writing the entry. Otherwise the weekly sweep will re-detect your change and double-log it as `MANUAL`. Repo-push entries and changelog-only edits don't alter the fingerprint, so they need no refresh.

**Fingerprint algorithm** — the canonical function lives at `scripts/figma-fingerprint.js` (the `design-system-demo` repo is the single source of truth). Read that file and embed it **verbatim** at the top of your `use_figma` call, then call `await computeFingerprint()`. It hashes: pages (by name); components/sets via a **deep** signature of the entire subtree (every descendant's geometry, fills/strokes/effects, bound variables, text content, vector paths, layout, and component property definitions) so even internal edits are caught; variables (type + `valuesByMode`); text styles; effect styles. It also exposes `computeFingerprint.diff(baseFp, currentFp)` returning `{added, removed, changed}` per bucket. The baseline is stored under shared-plugin-data key `baseline` as `{ fp, meta }` — so read it with `const { fp: base } = JSON.parse(getSharedPluginData('changelog','baseline'))` and diff `base` against the current fp. Capture and check MUST embed this same file so the hashes line up — never hand-rewrite the algorithm, and never use a divergent copy.

**Run a check** (when asked, or on the weekly scheduled run):
1. Embed `scripts/figma-fingerprint.js`, compute the current fingerprint, read the baseline via `figma.root.getSharedPluginData('changelog','baseline')`, parse it (`{ fp, meta }`), and diff `meta`-less `base.fp` against the current fp with `computeFingerprint.diff(base.fp, current)` to get **added**, **removed**, and **changed** (hash differs) keys per bucket.
2. For each changed entity, read its current properties via `use_figma` to write a specific bullet — the hash only flags WHICH entity moved, not the value.
3. **Attribution** — edits you (Claude) made in the session → `CLAUDE`; anything the diff surfaces that you did not make → `MANUAL` (a person edited the file directly). Figma version history (`GET /v1/files/:key/versions`) can name the human collaborator if needed.
4. **Write automatically — no approval needed.** If there are changes, write the entry per the Changelog rules above: choose the category by what changed (`TOKENS` for variables, `COMPONENTS` for components/sets, etc.), add the author badge (`MANUAL` for human edits, `CLAUDE` for yours), and **no** `REPO PUSH` badge (that badge is only for repo pushes). If nothing changed, do nothing.
5. **Refresh the baseline** — after writing, re-store the current fingerprint to `changelog/baseline` (and update `baselineMeta`) so the next check diffs from this point.

### Annotation component placement

When placing `Annotation` instances next to a frame:

- **Always keep a 32px horizontal gap between the annotation card and the frame it annotates** — measured panel edge to frame edge (right-side panels: panel's left edge at `frameRight + 32`; left-side panels: panel's right edge at `frameLeft − 32`). The dashed connector stretches across the gap so its anchor dot still lands on the component. This 32px spacing is mandatory for every annotation, going forward.
- **Never let the stacked annotations be vertically taller than the frame they reference.** Sum of (panel heights + gaps) must be ≤ the referenced frame's height.
- Stack annotations vertically, centered within the frame's vertical extent, with even gaps and no overlap.
- Each instance's pink dashed connector points left toward the high-level component it annotates.
- Only annotate **high-level** components/sections, not every element.
- If more annotations are needed than fit within the frame height, make the panels more compact (e.g. the 2-column layout) rather than overflowing the frame.

---

## Agent skills

### Issue tracker

Issues live in the repo's GitHub Issues; use the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default label vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout — one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
