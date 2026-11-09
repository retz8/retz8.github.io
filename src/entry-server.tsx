// Build entry: renders one route to static markup, and hands the prerender
// script the data it writes the structured data and llms.txt from.
// scripts/prerender.mjs calls it for every page in src/lib/pages.ts.

import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Intro from "@/domains/portfolio/components/Intro";
import { LocaleContext, type Locale } from "@/lib/locale";

export { pages, PROFILES, SITE_URL } from "@/lib/pages";
export { experiences } from "@/domains/portfolio/data/experienceData";
export { projectGroups } from "@/domains/portfolio/data/projectData";

export function render(path: string): string {
  return renderToStaticMarkup(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  );
}

// The intro's sentences as plain text, for the Person's description: the
// page's own words, not a second copy of them.
export function introText(locale: Locale): string {
  const markup = renderToStaticMarkup(
    <LocaleContext.Provider value={locale}>
      <Intro />
    </LocaleContext.Provider>
  );
  return markup
    .replace(/<\/p>/g, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}
