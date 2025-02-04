"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const observerRefs = useRef([]);

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
          rootMargin: "0px 0px 100% 0px", // focus on the top of the element
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Navigation */}
      <nav
        className="sticky top-0 w-1/2 h-screen p-8
      flex flex-col justify-center"
      >
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <p className="mt-2 text-muted-foreground">Front End Engineer</p>
        </div>

        <div className="space-y-8">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "relative pl-8 text-left text-sm font-medium transition-colors duration-300",
                activeSection === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
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
      </nav>

      {/* Main Content */}
      <main className="w-1/2 overflow-y-auto">
        <div className="py-16 space-y-16 pr-8">
          <section id="about" className="flex items-center">
            <div>
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="mt-4 text-muted-foreground">
                I build accessible, pixel-perfect digital experiences for the
                web.
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

          <section id="projects" className="flex items-center">
            <div>
              <h2 className="text-2xl font-semibold">Projects</h2>
              <p className="mt-4 text-muted-foreground">
                A collection of projects I've worked on.
              </p>
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
