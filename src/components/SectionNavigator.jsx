import React from "react";
import { cn } from "@/lib/utils";

export default function SectionNavigator({
  sections,
  activeSection,
  scrollToSection,
}) {
  return (
    <div className="flex flex-col space-y-8">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={cn(
            "relative pl-8 text-left text-sm font-medium transition-colors duration-300",
            activeSection === id
              ? "text-teal-400"
              : "text-slate-400 hover:text-slate-200"
          )}
        >
          <div
            className={cn(
              "absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-current transition-all duration-300",
              activeSection === id ? "w-6" : "w-4"
            )}
          />
          {label}
        </button>
      ))}
    </div>
  );
}
