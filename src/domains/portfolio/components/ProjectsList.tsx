import { projects } from "@/domains/portfolio/data/projectData";
import ProjectCard from "@/domains/portfolio/components/ProjectCard";
import Divider from "@/components/ui/divider";

export default function ProjectsList() {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold">Projects</h2>
      <Divider className="mt-2" />
      <ul className="flex flex-col gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </div>
  );
}
