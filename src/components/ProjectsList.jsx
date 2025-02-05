import React from "react";
import { projects } from "@/data/projectsData";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsList() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="pl-4 text-xl font-semibold">Projects</h2>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </div>
  );
}
