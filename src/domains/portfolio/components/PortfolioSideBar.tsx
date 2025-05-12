import { useState, useEffect, useRef } from "react";

import NameCard from "@/components/NameCard";
import SocialLinks from "@/components/SocialLinks";

import { cn } from "@/lib/utils";

export default function PortfolioSideBar() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const observerRefs = useRef<IntersectionObserver[]>([]);

  const sections = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 77; // 원하는 오프셋 값 (px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - yOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Name and navigation */}
      <div className="flex flex-col gap-10">
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
              <a
                href={`#${id}`}
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
      </div>

      {/* Social links */}
      <div className="flex flex-col items-start gap-2 mt-4 md:mt-0">
        <SocialLinks />
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          className="text-muted-foreground hover:text-foreground text-xs"
        >
          Design inspired by Brittany Chiang
        </a>
      </div>
    </div>
  );
}
