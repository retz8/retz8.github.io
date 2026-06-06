# Plan: Blog / Writing Section

> Source PRD: `docs/military/blog-prd.md`

## Before you start: branch off `main`

**Do not implement this on `main`.** Create a dedicated feature branch off `main` first
(e.g. `git switch -c feat/blog-writing`) and do all phase work there. The repo is
`retz8.github.io` (GitHub Pages) — merging to `main` publishes. Keep the work isolated
on a branch and only merge once the section is ready (and you've decided whether the stub
articles should ship publicly).

## Architectural decisions

Durable decisions that apply across all phases (locked during design):

- **Routes**: flat routes on the existing `HashRouter`. `/blog` = list (index), `/blog/:slug` = article detail. Unknown slug redirects to `/blog`. No nested/layout routes.
- **Authoring format**: MDX (`@mdx-js/rollup` + `@mdx-js/react`). One `.mdx` file per article under `src/domains/blog/content/`.
- **Metadata**: YAML frontmatter inside each `.mdx` — `title`, `date`, `summary`. The **slug is derived from the filename** (the stable identifier). Optional `order` field reserved for later manual override.
- **Discovery**: `import.meta.glob` over `src/domains/blog/content/*.mdx` — drop a file in, it appears. No registry to maintain.
- **Ordering**: date-descending by default (PRD "chronological by default").
- **Code highlighting**: build-time via `rehype-pretty-code` (Shiki); light/dark driven by the existing `.dark` class / `ThemeProvider`.
- **Diagrams**: images/SVG only at launch (no Mermaid). MDX-component diagrams remain possible later with no architecture change.
- **Image assets**: `public/blog/<slug>/…`, referenced by absolute path — mirrors the existing `public/projects/…` convention.
- **Layout**: both views compose the existing `PageLayout`. `/blog` keeps the standard `BlogSideBar` (`NameCard`) so it feels identical to portfolio/cook. `/blog/:slug` uses an article-context sidebar (back link + desktop-only TOC).
- **TOC**: auto-generated from headings, sidebar, **desktop-only**; anchors via `rehype-slug`. Active-section-on-scroll highlighting is deferred (nice-to-have).
- **Prev/next**: at the foot of the article, showing neighbor **titles**, following the date order.
- **Prose typography**: `@tailwindcss/typography` themed to existing tokens; Shiki owns `pre/code`, prose defers there.

**New dependencies**: `@mdx-js/rollup`, `@mdx-js/react`, `rehype-pretty-code`, `shiki`, `rehype-slug`, `remark-frontmatter`, `remark-mdx-frontmatter`, `@tailwindcss/typography`.

---

## Phase 1: Tracer — one MDX article renders at its own URL

**User stories**: rich-content article body; an individual article is directly addressable.

### What to build

The thinnest end-to-end cut through every layer. Wire the MDX plugin and frontmatter
chain into `vite.config.ts`, add a single stub `.mdx` article with frontmatter, add the
flat `/blog/:slug` route to `App.tsx`, and render the article (title, date, body) inside
the existing `PageLayout`. No syntax highlighting, prose styling, TOC, or prev/next yet —
this phase only proves the MDX → frontmatter → route → render pipeline works.

### Acceptance criteria

- [ ] `@mdx-js/rollup` + frontmatter plugins are wired into the Vite config and the build (`tsc -b && vite build`) passes.
- [ ] A stub `.mdx` file with `title`/`date`/`summary` frontmatter exists under `src/domains/blog/content/`.
- [ ] Navigating to `/blog/<slug>` renders that article's title, date, and body within `PageLayout`.
- [ ] An unknown slug redirects to `/blog`.

---

## Phase 2: Article list, discovery, and nav entry

**User stories**: browse all articles as a list; each entry shows title/date/summary; selecting opens the article; the Writing section is reachable from primary navigation.

### What to build

Add `import.meta.glob` discovery over the content folder, an `Article` metadata type, and
helpers for date-desc sorting, slug lookup, and neighbor (prev/next) resolution. Replace
the `/blog` stub with a text-forward list (title · date · summary rows), each row linking
to its detail route. Un-comment the `BLOG` item in `PageNavigator`. Render a graceful
empty state when no articles exist.

### Acceptance criteria

- [ ] `BLOG` appears in the top navigation and routes to `/blog`.
- [ ] `/blog` lists all discovered articles as text rows (title, date, summary), date-descending.
- [ ] Clicking a row opens the corresponding `/blog/:slug` article.
- [ ] With no articles present, `/blog` shows a graceful empty state instead of breaking.

---

## Phase 3: Rich content rendering

**User stories**: body supports headings, code snippets, images, and diagrams; content renders cleanly on desktop and mobile; the article reads comfortably.

### What to build

Add Shiki via `rehype-pretty-code` for build-time code highlighting (with light/dark token
CSS keyed off `.dark`). Add `@tailwindcss/typography`, wrap the article body in `prose`, and
theme prose variables to the site's existing tokens — letting Shiki own `pre/code`. Add an
image/SVG to the stub article from `public/blog/<slug>/` to verify the asset path.

### Acceptance criteria

- [ ] Fenced code blocks render with Shiki highlighting and adapt to light/dark theme.
- [ ] Headings, paragraphs, lists, blockquotes render with consistent prose typography matching the site tone.
- [ ] An image/SVG referenced from `public/blog/<slug>/` displays inline in the article.
- [ ] The article reads cleanly on both desktop and mobile widths.

---

## Phase 4: Reading navigation — TOC and prev/next

**User stories**: orient within a long piece; move between articles in the author's order; clear way back to the list.

### What to build

Add `rehype-slug` for heading anchors. Build the article-context sidebar: a "← Writing"
back link and an auto-generated TOC from the article's headings, shown on desktop only.
Add foot-of-article prev/next navigation showing neighbor titles, following date order
(render only the available neighbor at the ends). Add the **second** stub article so
ordering and prev/next are genuinely exercised.

### Acceptance criteria

- [ ] A desktop sidebar TOC lists the article's headings; clicking an entry jumps to that section.
- [ ] The TOC is omitted on mobile (prose-first, no link wall above the article).
- [ ] A back link returns from an article to `/blog`.
- [ ] Foot-of-article prev/next shows neighbor titles and moves between the two articles in date order; ends render only the one available neighbor.
