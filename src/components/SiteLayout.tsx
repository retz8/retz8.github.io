import type { ReactNode } from "react";

import SiteHeader from "@/components/SiteHeader";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/locale";

interface SiteLayoutProps {
  // The page's opening lines, under the site header.
  intro: ReactNode;
  children: ReactNode;
}

// The shell every page shares: one 800px column with the site header and
// the page's intro on top, its sections, and the footer. The warm off-white
// ground is set on body in index.css and the document's language on <html>
// by the build, since the built site runs no script.
export default function SiteLayout({ intro, children }: SiteLayoutProps) {
  const locale = useLocale();

  return (
    <div
      className={cn(
        "w-full text-left font-geist leading-[normal] text-[#1c1917]",
        // Korean wraps between words, not inside them.
        locale === "ko" && "break-keep"
      )}
    >
      <div className="mx-auto box-content flex max-w-[800px] flex-col gap-16 px-6 pt-10 pb-[120px]">
        <header className="flex flex-col gap-8">
          <SiteHeader />
          {intro}
        </header>
        {children}
        <footer className="flex justify-between border-t border-[#e7e5e4] pt-6 text-[14px] text-[#78716c]">
          <span>Think and code elegantly</span>
          <span>{locale === "ko" ? "인지오" : "Jioh In"} · 2026</span>
        </footer>
      </div>
    </div>
  );
}
