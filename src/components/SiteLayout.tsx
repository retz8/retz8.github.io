import { useEffect, type ReactNode } from "react";

import SiteHeader from "@/components/SiteHeader";

// The page's warm off-white ground, edge to edge.
const GROUND = "#fafaf9";

interface SiteLayoutProps {
  // The page's opening lines, under the site header.
  intro: ReactNode;
  children: ReactNode;
}

// The shell every redesigned page shares: one 800px column with the site
// header and the page's intro on top, its sections, and the footer.
export default function SiteLayout({ intro, children }: SiteLayoutProps) {
  useEffect(() => {
    const previous = document.body.style.backgroundColor;
    document.body.style.backgroundColor = GROUND;
    return () => {
      document.body.style.backgroundColor = previous;
    };
  }, []);

  return (
    <div className="w-full text-left font-geist leading-[normal] text-[#1c1917]">
      <div className="mx-auto box-content flex max-w-[800px] flex-col gap-16 px-6 pt-10 pb-[120px]">
        <header className="flex flex-col gap-8">
          <SiteHeader />
          {intro}
        </header>
        {children}
        <footer className="flex justify-between border-t border-[#e7e5e4] pt-6 text-[14px] text-[#78716c]">
          <span>Think and code elegantly</span>
          <span>Jioh In · 2026</span>
        </footer>
      </div>
    </div>
  );
}
