import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

import type { Experience } from "@/domains/portfolio/types/experience";

const renderJobTitleText = (
  title: string,
  company: string,
  companyLink: string | undefined,
  companyTailwindColor: string | undefined
) => {
  if (companyLink) {
    return (
      <span className={`flex items-center gap-1 text-foreground font-semibold`}>
        {title} •{" "}
        <a
          href={companyLink}
          target="_blank"
          className={`${companyTailwindColor} flex items-center`}
        >
          {company}
        </a>
        <ArrowUpRight className={`w-4 h-4 ${companyTailwindColor}`} />
      </span>
    );
  } else {
    return (
      <span className="flex items-center">
        <span className="text-foreground font-semibold">
          {title} • <span className={`${companyTailwindColor}`}>{company}</span>
        </span>
      </span>
    );
  }
};

export default function ExperienceCard({
  title,
  company,
  companyLink,
  companyTailwindColor,
  location,
  description,
  startDate,
  endDate,
  techStack,
}: Experience) {
  return (
    <Card
      className="group flex flex-col gap-3
     w-full bg-transparent hover:cursor-pointer
    transition-all duration-300 rounded-lg border-none shadow-none"
    >
      <div className="space-y-1">
        <h3
          className="text-foreground font-semibold 
        flex items-center gap-1"
        >
          {renderJobTitleText(
            title,
            company,
            companyLink,
            companyTailwindColor
          )}
        </h3>
        <p className="text-sm text-muted-foreground flex flex-row items-center gap-2 group-hover:text-foreground">
          <span>
            {startDate} - {endDate}
          </span>
          <span>|</span>
          <span>{location}</span>
        </p>
      </div>
      {/* <div
        className="text-sm text-muted-foreground group-hover:text-foreground"
        dangerouslySetInnerHTML={{ __html: description }}
      /> */}
      <p className="text-sm text-muted-foreground group-hover:text-foreground">
        {description}
      </p>
      <ul className="flex flex-wrap gap-2 mt-1">
        {techStack.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-normal">
            {tech}
          </Badge>
        ))}
      </ul>
    </Card>
  );
}
