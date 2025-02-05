import React from "react";
import { projects } from "@/data/projectsData";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsList() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </ul>
    </div>
  );
}
