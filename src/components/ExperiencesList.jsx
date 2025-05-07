import React from "react";
import { experiences } from "@/data/experiencesData";
import ExperienceCard from "./ExperienceCard";

export default function ExperiencesList() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="pl-4 text-xl font-semibold">Experience</h2>
      <ul className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </ul>
    </div>
  );
}
