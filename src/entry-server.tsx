// Build entry: renders one route to static markup. scripts/prerender.mjs
// calls it for every page in src/lib/pages.ts and writes the result into
// the built index.html.

import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

export { pages, SITE_URL } from "@/lib/pages";

export function render(path: string): string {
  return renderToStaticMarkup(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  );
}
