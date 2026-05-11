# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — TypeScript project-references build (`tsc -b`) followed by `vite build`. Type errors block the production build.
- `npm run lint` — ESLint over the repo (flat config in `eslint.config.js`)
- `npm run preview` — preview built output

No test runner is configured.

## Architecture

Single-page React 19 + Vite + TypeScript portfolio. Tailwind v4 is wired via `@tailwindcss/vite` (no `tailwind.config`); design tokens/theme variables live in `src/App.css`. ShadcnUI is configured in `components.json` (style: new-york, base color: zinc, alias `@/components/ui`). Path alias `@/*` → `src/*` is set in both `vite.config.ts` and `tsconfig.app.json`.

### Routing & top-level shell

`src/App.tsx` wraps the app in `ThemeProvider` (light default, key `vite-ui-theme`) and a `HashRouter` with three routes: `/` → `PortfolioPage`, `/blog` → `BlogPage`, `/cook` → `CookPage`. HashRouter is used (likely for static hosting), so internal links must be hash-style.

### Domain structure

Page content is organized by domain under `src/domains/{portfolio,blog,cook}/`. Each domain owns its own `components/`, and content-bearing domains (`portfolio`, `cook`) also own `data/` (static TS/TSX content) and `types/`. Add a new section by extending that domain's `data/` + `types/` and rendering it from the domain's page component — do not centralize data.

### Page layout pattern

All pages compose `src/components/PageLayout.tsx`, which renders a fixed `PageNavigator` (top-right), a left `sidebar` slot, and a scrollable main content area, animated with `motion/react` (`AnimatePresence` + fade/slide). Each domain provides its own sidebar component (`PortfolioSideBar`, `BlogSideBar`, `CookSideBar`) and passes it via the `sidebar` prop. The `selectedPage` prop drives nav highlighting. New pages should follow this pattern rather than building bespoke layouts.

### Shared UI

- `src/components/ui/` — ShadcnUI primitives (add via the shadcn CLI; aliases already set in `components.json`).
- `src/components/` (non-ui) — cross-domain composites: `NameCard`, `SocialLinks`, `HoverLinkIcon`, `ThemeProvider`, `PageLayout`, `PageNavigator`.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).

### Conventions

- Icons: `lucide-react` is the default (per `components.json`); `react-icons` is also installed for brand glyphs.
- Animations: `motion` (Framer Motion successor) is used throughout; prefer `AnimatePresence` with the existing fade/slide pattern for page transitions.
- Known TODO from README: cook page still needs responsive design for mobile.
