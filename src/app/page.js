"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import NameCard from "@/components/NameCard";
import SocialLinks from "@/components/SocialLinks";
import AboutMe from "@/components/AboutMe";
import ProjectsList from "@/components/ProjectsList";
import ExperiencesList from "@/components/ExperiencesList";
import Link from "next/link";
const sections = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXPERIENCE" },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const observerRefs = useRef([]);
  const mainContentRef = useRef(null);

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
    <div className="flex flex-col md:flex-row min-h-screen ">
      {/* Left Navigation */}
      <div
        className="md:fixed md:top-0 w-full md:w-1/3 md:h-screen 
        py-10 md:py-20
      flex flex-row md:flex-col px-8 md:px-0 justify-between"
      >
        <div className="flex flex-col gap-16">
          <NameCard />

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
        </div>

        <div className="flex flex-col gap-4">
          <SocialLinks />
          <span className="hidden md:block text-xs text-muted-foreground/50">
            Inspired by{" "}
            <Link
              href="https://brittanychiang.com/"
              target="_blank"
              className="hover:text-muted-foreground"
            >
              Brittany Chiang
            </Link>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main
        ref={mainContentRef}
        className="w-full md:ml-[33%]
        md:w-2/3 overflow-y-auto px-8 md:px-10"
      >
        <div className="space-y-16 py-5 md:py-20">
          <section id="about" className="flex items-center">
            <AboutMe />
          </section>

          <section id="projects" className="">
            <ProjectsList />
          </section>

          <section id="experience" className="">
            <ExperiencesList />
          </section>
        </div>
      </main>
    </div>
  );
}
