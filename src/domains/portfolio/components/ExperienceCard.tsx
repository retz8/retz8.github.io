import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  techStack: string[];
}
export default function ExperienceCard({
  title,
  company,
  description,
  startDate,
  endDate,
  techStack,
}: ExperienceCardProps) {
  return (
    <Card
      className="flex flex-col gap-4
     p-4 group w-full bg-transparent
    transition-all duration-300 rounded-lg border-none
     hover:border-gray-500 hover:bg-gray-500/20"
    >
      <div className="space-y-1">
        <h3 className=" text-foreground font-semibold">
          {title} • {company}
        </h3>
        <p className="text-sm text-muted-foreground">
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
