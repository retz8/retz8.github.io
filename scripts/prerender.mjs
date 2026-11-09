// Writes the site to disk: one HTML file per page in src/lib/pages.ts, each
// with its own head, plus sitemap.xml. Runs after `vite build` (the
// template and CSS) and `vite build --ssr` (the renderer), and leaves no
// script in the output: the pages are static documents.

import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");
const { render, pages, SITE_URL } = await import(
  path.join(dist, "server/entry-server.js")
);
const template = await readFile(path.join(dist, "index.html"), "utf8");

const escape = (text) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const url = (pagePath) => SITE_URL + (pagePath === "/" ? "/" : pagePath);
const ogLocale = { en: "en_US", ko: "ko_KR" };
const OG_IMAGE = { width: 1200, height: 630 };

// Written in place of the template's <title>.
function head(page) {
  const { locale, title, description, alternate } = page;
  const other = locale === "en" ? "ko" : "en";
  const tags = [
    `<title>${escape(title)}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
  ];
  if (alternate === undefined) {
    tags.push(`<meta name="robots" content="noindex" />`);
  } else {
    const english = locale === "en" ? page.path : alternate;
    const korean = locale === "ko" ? page.path : alternate;
    tags.push(
      `<link rel="canonical" href="${url(page.path)}" />`,
      `<link rel="alternate" hreflang="en" href="${url(english)}" />`,
      `<link rel="alternate" hreflang="ko" href="${url(korean)}" />`,
      `<link rel="alternate" hreflang="x-default" href="${url(english)}" />`,
      `<meta property="og:locale:alternate" content="${ogLocale[other]}" />`
    );
  }
  const image = `${SITE_URL}/og/${locale}.png`;
  tags.push(
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${locale === "ko" ? "인지오" : "Jioh In"}" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${url(page.path)}" />`,
    `<meta property="og:locale" content="${ogLocale[locale]}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="${OG_IMAGE.width}" />`,
    `<meta property="og:image:height" content="${OG_IMAGE.height}" />`,
    `<meta property="og:image:alt" content="${escape(title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(title)}" />`,
    `<meta name="twitter:description" content="${escape(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`
  );
  return tags.join("\n    ");
}

// "/" → index.html, "/ko/cook" → ko/cook.html. GitHub Pages serves an
// extensionless request from the matching .html file, so the URLs carry
// no trailing slash.
const fileFor = (pagePath) =>
  pagePath === "/" ? "index.html" : `${pagePath.slice(1)}.html`;

function document(page) {
  const expect = (pattern, label) => {
    if (!pattern.test(template)) throw new Error(`template has no ${label}`);
  };
  expect(/<html lang="en">/, "<html lang>");
  expect(/<title>Jioh In<\/title>/, "<title>");
  expect(/<div id="root"><\/div>/, "#root");
  return template
    .replace(/<html lang="en">/, `<html lang="${page.locale}">`)
    .replace(/<title>Jioh In<\/title>/, head(page))
    .replace(/\s*<script type="module"[^>]*><\/script>/g, "")
    .replace(/\s*<link rel="modulepreload"[^>]*>/g, "")
    .replace(/<div id="root"><\/div>/, `<div id="root">${render(page.path)}</div>`);
}

for (const page of pages) {
  const file = path.join(dist, fileFor(page.path));
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, document(page));
  console.log(`${page.path.padEnd(9)} → ${path.relative(dist, file)}`);
}

// The sitemap lists the indexed pages with their language alternates.
const indexed = pages.filter((page) => page.alternate !== undefined);
const sitemap = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
  ...indexed.map((page) => {
    const english = page.locale === "en" ? page.path : page.alternate;
    const korean = page.locale === "ko" ? page.path : page.alternate;
    return [
      `  <url>`,
      `    <loc>${url(page.path)}</loc>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${url(english)}" />`,
      `    <xhtml:link rel="alternate" hreflang="ko" href="${url(korean)}" />`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(english)}" />`,
      `  </url>`,
    ].join("\n");
  }),
  `</urlset>`,
  ``,
].join("\n");
await writeFile(path.join(dist, "sitemap.xml"), sitemap);
console.log("sitemap.xml");

// The pages ship no script: drop the client bundle and the renderer.
await rm(path.join(dist, "server"), { recursive: true, force: true });
const assets = path.join(dist, "assets");
for (const name of await readdir(assets)) {
  if (name.endsWith(".js")) await rm(path.join(assets, name));
}
