// Portfolio page - 'portfolio' domain (/)

import SiteLayout from "@/components/SiteLayout";
import Intro from "@/domains/portfolio/components/Intro";
import ExperienceList from "@/domains/portfolio/components/ExperienceList";
import ProjectGroups from "@/domains/portfolio/components/ProjectGroups";

export default function PortfolioPage() {
  return (
    <SiteLayout intro={<Intro />}>
      {/* The page's content as one block between the header and the footer
          (64px either side, from SiteLayout), its sections 96px apart. */}
      <div className="flex flex-col gap-24">
        <section id="experience">
          <ExperienceList />
        </section>
        <section id="projects">
          <ProjectGroups />
        </section>
      </div>
    </SiteLayout>
  );
}
