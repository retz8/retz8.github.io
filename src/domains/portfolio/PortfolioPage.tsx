// Portfolio page - 'portfolio' domain (/)

import { useEffect } from "react";

import SiteHeader from "@/components/SiteHeader";
import Intro from "@/domains/portfolio/components/Intro";
import ExperienceList from "@/domains/portfolio/components/ExperienceList";
import ProjectGroups from "@/domains/portfolio/components/ProjectGroups";

// The page's warm off-white ground, edge to edge.
const GROUND = "#fafaf9";

export default function PortfolioPage() {
  useEffect(() => {
    const previous = document.body.style.backgroundColor;
    document.body.style.backgroundColor = GROUND;
    return () => {
      document.body.style.backgroundColor = previous;
    };
  }, []);

  return (
    <div className="w-full text-left font-geist leading-[normal] text-[#1c1917] [font-synthesis:auto]">
      <div className="mx-auto box-content flex max-w-[800px] flex-col gap-16 px-6 pt-10 pb-[120px]">
        <header className="flex flex-col gap-8">
          <SiteHeader />
          <Intro />
        </header>
        <section id="experience">
          <ExperienceList />
        </section>
        <section id="projects">
          <ProjectGroups />
        </section>
        <footer className="flex justify-between border-t border-[#e7e5e4] pt-6 text-[14px] text-[#78716c]">
          <span>Think and code elegantly</span>
          <span>Jioh In · 2026</span>
        </footer>
      </div>
    </div>
  );
}
