// home page (a.k.a. portfolio page)

import AboutMe from "@/domains/portfolio/components/AboutMe";
import ExperiencesList from "@/domains/portfolio/components/ExperiencesList";

export default function PortfolioPage() {
  return (
    <div className="space-y-16 py-5 md:py-20 text-left">
      <section id="about" className="flex items-center">
        <AboutMe />
      </section>
      {/* <section id="projects">
        <ProjectsList />
      </section> */}
      <section id="experience">
        <ExperiencesList />
      </section>
    </div>
  );
}
