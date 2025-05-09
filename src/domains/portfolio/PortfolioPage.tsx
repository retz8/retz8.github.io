// Portfolio page - 'portfolio' domain (/)

import PageLayout from "@/components/PageLayout";

import PortfolioSideBar from "@/domains/portfolio/components/PortfolioSideBar";
import AboutMe from "@/domains/portfolio/components/AboutMe";
import ExperiencesList from "@/domains/portfolio/components/ExperienceList";
import ProjectsList from "@/domains/portfolio/components/ProjectsList";

export default function PortfolioPage() {
  return (
    <PageLayout selectedPage="/" sidebar={<PortfolioSideBar />}>
      <div className="space-y-8 md:space-y-16 md:py-20 text-left">
        <section id="about" className="flex items-center">
          <AboutMe />
        </section>
        <section id="experience">
          <ExperiencesList />
        </section>
        <section id="projects">
          <ProjectsList />
        </section>
      </div>
    </PageLayout>
  );
}
