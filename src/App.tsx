// The site's routes, in English at the root and in Korean under /ko. The
// router around them is the browser's in development (main.tsx) and a
// static one at build time (entry-server.tsx), where each route is written
// to its own HTML file.

import "./App.css";

import type { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { LocaleContext, type Locale } from "@/lib/locale";

// Pages
import PortfolioPage from "@/domains/portfolio/PortfolioPage";
import CookPage from "@/domains/cook/CookPage";
import NotFoundPage from "@/components/NotFoundPage";

function inLocale(locale: Locale, page: ReactNode) {
  return <LocaleContext.Provider value={locale}>{page}</LocaleContext.Provider>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={inLocale("en", <PortfolioPage />)} />
      <Route path="/cook" element={inLocale("en", <CookPage />)} />
      <Route path="/ko" element={inLocale("ko", <PortfolioPage />)} />
      <Route path="/ko/cook" element={inLocale("ko", <CookPage />)} />
      {/* Any other path: the bilingual 404 page, written to 404.html */}
      <Route path="*" element={inLocale("en", <NotFoundPage />)} />
    </Routes>
  );
}
