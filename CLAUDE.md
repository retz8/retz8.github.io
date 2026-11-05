# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — TypeScript project-references build (`tsc -b`) followed by `vite build`. Type errors block the production build.
- `npm run lint` — ESLint over the repo (flat config in `eslint.config.js`, currently empty)
- `npm run preview` — preview built output

No test runner is configured.

`package-lock.json` was generated on macOS. On Linux, `npm ci` skips the native binaries for rollup, lightningcss and Tailwind's oxide, and the build fails with "Cannot find module". Install them without saving: `npm i --no-save @rollup/rollup-linux-x64-gnu@<rollup version> lightningcss-linux-x64-gnu@<lightningcss version> @tailwindcss/oxide-linux-x64-gnu@<tailwind version>`.

## Design source

The pages are drawn first on the Design canvas "Portfolio Redesign": https://claude.ai/artifact/XzPCyCbdWJPLCXwJsvRffK. Its `Final.dc.html` board is the portfolio page and `Cook.dc.html` the Cook page; `FinalKo.dc.html` and `CookKo.dc.html` are their Korean versions. A visual change starts on the canvas, and the code follows it.

## Architecture

Single-page React 19 + Vite + TypeScript site with two pages. Tailwind v4 is wired via `@tailwindcss/vite` (no `tailwind.config`); theme variables, including the `font-geist` / `font-geist-mono` tokens, live in `src/App.css`. Fonts (Geist, Geist Mono, Noto Sans KR for Hangul) load from Google Fonts in `index.html`. Path alias `@/*` → `src/*` is set in both `vite.config.ts` and `tsconfig.app.json`.

### Routing

`src/App.tsx` wraps the app in `ThemeProvider` and a `HashRouter` with each page in English at the root and in Korean under `/ko`: `/` and `/ko` → `PortfolioPage`, `/cook` and `/ko/cook` → `CookPage`. Any other path redirects to `/`. HashRouter is used for static hosting on GitHub Pages, so internal links must be hash-style (use `Link` / `NavLink`).

### Languages

`src/lib/locale.ts` holds the two locales. Each route sets its locale through `LocaleContext`, and components read it with `useLocale()`; build internal links with `localePath(locale, path)`. Text that differs by language is a `Localized` (`{ en, ko }`) in the domain's `data/`; names that are the same in both stay plain strings (`LocalizedText`). A project diagram whose words read differently in Korean keeps them in a `TEXT` table per language at the top of its thumb; the a2ui-project/a2ui, umichkisa.com and Pastiche diagrams stay in English on both pages.

The Korean pages are written for Korean readers, not translated: their copy is drafted on the canvas's `FinalKo.dc.html` and `CookKo.dc.html` boards first, like any visual change.

Opening the home page (`#/`) sends a reader to `#/ko` when their browser's first language is Korean (`redirectToPreferredLocale`, run in `main.tsx` before the first render). A language picked with the header's language link is stored and wins over the browser's. Links to any other page open as they are.

### Page shell

Every page renders inside `src/components/SiteLayout.tsx`: the warm off-white ground (`#fafaf9`, set on `body` while the page is mounted), one 800px column, `SiteHeader` plus the page's `intro`, the page's sections, and the footer. `SiteHeader` holds the home link, the Cook link (marked current on its page), the GitHub, LinkedIn and email icons, and the link to the same page in the other language. A new page takes the same shell.

### Domain structure

Page content is organized by domain under `src/domains/{portfolio,cook}/`. Each domain owns its `components/`, `data/` (static TS content) and `types/`. Add content by extending that domain's `data/` + `types/`; do not centralize data.

- **portfolio**: `Intro`, `ExperienceList` (from `data/experienceData.ts`), and `ProjectGroups` (from `data/projectData.ts`): groups of `ProjectCard`s, each a diagram over its title and one line, plus optional rows without a diagram.
- **Project diagrams**: `components/thumbs/` holds one component per card, looked up by the card's `id` in `thumbs/index.ts`. Each is the canvas's diagram markup converted element for element, with inline styles, inside `ThumbFrame` (the fixed-height frame with the hairline and hover dim). `ThumbFrame` restores `content-box` sizing because the diagrams were drawn without Tailwind's border-box preflight. Change a diagram on the canvas first, then port it.
- **cook**: `CookIntro` and one `DinnerSection` per dinner in `data/menuData.ts`: the date as its heading, each course's photo beside its names and description. Photos live at `public/foods/<dinner id>/<course id>.webp`; keep them small (about 900×1200).

### Conventions

- Styling: Tailwind utilities with exact sizes (`text-[16px]`, not `text-base`, whose built-in line height differs from the design) and the design's hex colors.
- External links open in a new tab (`target="_blank" rel="noreferrer"`).
- Static files go in `public/`: `public/resume.pdf` is served at `/resume.pdf` for the Experience section's Full resume link.
- The pre-redesign site is kept on the `legacy` branch.
