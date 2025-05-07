import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export default function ExperienceCard({
  title,
  company,
  description,
  startDate,
  endDate,
  techStack,
}) {
  return (
    <Card
      className="flex flex-col gap-4
     p-4 group w-full bg-transparent
    transition-all duration-300 rounded-lg border-none
     hover:border-gray-500 hover:bg-gray-500/20"
    >
      <div className="space-y-1">
        <h3 className=" text-zinc-100">
          {title} • {company}
        </h3>
        <p className="text-sm text-zinc-400">
          {startDate} - {endDate}
        </p>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-normal">
            {tech}
          </Badge>
        ))}
      </ul>
    </Card>
  );
}
