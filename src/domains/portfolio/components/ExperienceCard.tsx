import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

import type { Experience } from "@/domains/portfolio/types/experience";

const renderCompanyText = (
  company: string,
  companyLink: string | undefined,
  companyTailwindColor: string | undefined
) => {
  if (companyLink) {
    return (
      <a
        href={companyLink}
        className={`flex items-center gap-1 ${companyTailwindColor}`}
      >
        <span>{company}</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    );
  } else {
    return <span className={`${companyTailwindColor}`}>{company}</span>;
  }
};

export default function ExperienceCard({
  title,
  company,
  companyLink,
  companyTailwindColor,
  description,
  startDate,
  endDate,
  techStack,
}: Experience) {
  return (
    <Card
      className="group flex flex-col gap-3
     p-4 w-full bg-transparent hover:cursor-pointer
    transition-all duration-300 rounded-lg border-none shadow-none"
    >
      <div className="space-y-1">
        <div
          className="text-foreground font-semibold 
        flex items-center gap-1 w-full"
        >
          <h3>{title} • </h3>
          {renderCompanyText(company, companyLink, companyTailwindColor)}
        </div>
        <p className="text-sm text-muted-foreground">
          {startDate} - {endDate}
        </p>
      </div>
      <p
        className="text-sm text-muted-foreground 
      group-hover:text-foreground group-hover:font-semibold"
      >
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
