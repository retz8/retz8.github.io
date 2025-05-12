import { useState, useEffect, useRef } from "react";

import { menuDateList } from "@/domains/cook/data/menuData";
import NameCard from "@/components/NameCard";

import { cn } from "@/lib/utils";

export default function CookSideBar() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const observerRefs = useRef<IntersectionObserver[]>([]);

  const menuDateSections = menuDateList.map((menuDate) => ({
    id: menuDate.id,
    label: menuDate.date,
  }));

  const sections = [{ id: "about", label: "ABOUT" }, ...menuDateSections];

  // observer for the active section
  useEffect(() => {
    observerRefs.current.forEach((observer) => observer.disconnect());
    observerRefs.current = [];

    console.log("sections:", sections);

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
    <div className="flex flex-col h-full gap-10">
      <NameCard
        header="Jioh In"
        subHeader="Food Archive"
        description="Curating tasting menus with daily ingredients"
      />

      <nav className="hidden md:flex flex-col space-y-6">
        {sections.map(({ id, label }) => (
          <button
            key={`cook-sidebar-${id}`}
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
  );
}
