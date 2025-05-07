import React, { useState, useEffect, useRef } from "react";
import NameCard from "@/components/NameCard";
import { cn } from "@/lib/utils";

export default function AboutSideBar() {
  const [activeSection, setActiveSection] = useState("about");

  const observerRefs = useRef([]);

  const sections = [
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
  ];

  // observer for the active section
  useEffect(() => {
    observerRefs.current.forEach((observer) => observer.disconnect());
    observerRefs.current = [];

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "0px 0px -80% 0px", // focus on the top of the element
        }
      );

      observer.observe(element);
      observerRefs.current.push(observer);
    });

    return () => {
      observerRefs.current.forEach((observer) => observer.disconnect());
    };
  }, []);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 75; // 원하는 오프셋 값 (px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - yOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <NameCard
        header="Jioh In"
        subHeader="Software Engineer"
        description="Think and code elegantly"
      />
      <nav className="hidden md:flex flex-col space-y-6">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={cn(
              "group relative text-left text-sm font-medium transition-all duration-150",
              activeSection === id
                ? "text-primary pl-12"
                : "text-muted-foreground hover:text-foreground pl-8"
            )}
          >
            <div
              className={cn(
                "absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-current transition-all duration-150",
                activeSection === id ? "w-8" : "w-4 group-hover:w-8"
              )}
            />
            <span
              className={cn(
                "inline-block transition-all duration-150",
                activeSection === id
                  ? "translate-x-0"
                  : "translate-x-0 group-hover:translate-x-4"
              )}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
