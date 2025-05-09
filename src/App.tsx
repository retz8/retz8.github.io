// Root App
// 1. ThemeProvider
// 2. Routing

import "./App.css";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

// Pages
import PortfolioPage from "@/domains/portfolio/PortfolioPage";
import BlogPage from "@/domains/blog/BlogPage";
import CookPage from "@/domains/cook/CookPage";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/cook" element={<CookPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
