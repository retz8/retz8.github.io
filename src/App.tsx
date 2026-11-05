// Root App
// 1. ThemeProvider
// 2. Routing, in English at the root and in Korean under /ko

import "./App.css";

import type { ReactNode } from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleContext, type Locale } from "@/lib/locale";

// Pages
import PortfolioPage from "@/domains/portfolio/PortfolioPage";
import CookPage from "@/domains/cook/CookPage";

function inLocale(locale: Locale, page: ReactNode) {
  return <LocaleContext.Provider value={locale}>{page}</LocaleContext.Provider>;
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={inLocale("en", <PortfolioPage />)} />
          <Route path="/cook" element={inLocale("en", <CookPage />)} />
          <Route path="/ko" element={inLocale("ko", <PortfolioPage />)} />
          <Route path="/ko/cook" element={inLocale("ko", <CookPage />)} />
          {/* unknown routes go home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
