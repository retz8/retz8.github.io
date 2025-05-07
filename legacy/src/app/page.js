import AboutMe from "@/components/AboutMe";
import ProjectsList from "@/components/ProjectsList";
import ExperiencesList from "@/components/ExperiencesList";

export default function Page() {
  return (
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
  );
}
