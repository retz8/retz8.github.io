// Portfolio page - 'portfolio' domain (/)

import SiteLayout from "@/components/SiteLayout";
import Intro from "@/domains/portfolio/components/Intro";
import ExperienceList from "@/domains/portfolio/components/ExperienceList";
import ProjectGroups from "@/domains/portfolio/components/ProjectGroups";

export default function PortfolioPage() {
  return (
    <SiteLayout intro={<Intro />}>
      <section id="experience">
        <ExperienceList />
      </section>
      <section id="projects">
        <ProjectGroups />
      </section>
    </SiteLayout>
  );
}
