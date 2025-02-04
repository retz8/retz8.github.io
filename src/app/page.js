"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import NameCard from "@/components/NameCard";
import SocialLinks from "@/components/SocialLinks";
import AboutMe from "@/components/AboutMe";

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
          rootMargin: "0px 0px -100% 0px", // focus on the top of the element
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
    if (element && mainContentRef.current) {
      const yOffset = -16; // Adjust this value to fine-tune the scroll position
      const y =
        element.getBoundingClientRect().top +
        mainContentRef.current.scrollTop +
        yOffset;

      mainContentRef.current.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Navigation */}
      <div
        className="sticky top-0 w-1/2 h-screen py-20
      flex flex-col justify-between"
      >
        <div className="flex flex-col gap-16">
          <NameCard />

          <nav className="flex flex-col space-y-6">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={cn(
                  "group relative pl-10 text-left text-sm font-medium transition-all duration-150",
                  activeSection === id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
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

        <SocialLinks />
      </div>

      {/* Main Content */}
      <main ref={mainContentRef} className="w-1/2 overflow-y-auto">
        <div className="space-y-16 py-20">
          <section id="about" className="flex items-center">
            <AboutMe />
          </section>

          <section id="projects" className="flex h-[600px]">
            <div>
              <h2 className="text-2xl font-semibold">Projects</h2>
              <p className="mt-4 text-muted-foreground">
                A collection of projects I&apos;ve worked on.
              </p>
            </div>
          </section>

          <section id="experience" className="flex items-center">
            <div>
              <h2 className="text-2xl font-semibold">Experience</h2>
              <div className="mt-8 space-y-12">
                <ExperienceCard
                  date="2024 — PRESENT"
                  title="Senior Frontend Engineer"
                  company="Company A"
                  description="Build and maintain critical components used to construct the frontend across the whole product."
                  tags={["JavaScript", "TypeScript", "React", "Next.js"]}
                />
                <ExperienceCard
                  date="2018 — 2024"
                  title="Lead Engineer"
                  company="Company B"
                  description="Build, style, and ship high-quality websites and digital experiences."
                  tags={["React", "TypeScript", "Node.js", "PHP"]}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function ExperienceCard({ date, title, company, description, tags }) {
  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">{date}</div>
      <div>
        <h3 className="text-xl font-medium">
          {title} · {company}
        </h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
