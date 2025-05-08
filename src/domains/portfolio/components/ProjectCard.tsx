import { AiFillGithub } from "react-icons/ai";
import { LuExternalLink } from "react-icons/lu";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import type { Project } from "@/domains/portfolio/types/project";
import { Link } from "react-router-dom";

export default function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  techStack,
  githubUrls,
  websiteUrl,
}: Project) {
  return (
    <Card
      className="group flex flex-col gap-3
     w-full bg-transparent hover:cursor-pointer
    transition-all duration-300 rounded-lg border-none shadow-none"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3">
          <img
            src={imageUrl}
            alt={title}
            className="z-0 w-full aspect-video object-fit"
          />
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <Link to={`/projects/${id}`}>
            <span className="leading-none font-semibold">{title}</span>{" "}
          </Link>

          <p className="text-sm text-muted-foreground group-hover:text-foreground">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start md:items-center gap-4">
        {/* links */}
        <div className="w-1/3 flex flex-row gap-2">
          {githubUrls &&
            githubUrls.map((url) => (
              <a
                key={url}
                href={url}
                target="_blank"
                className="hover:text-muted-foreground"
              >
                <AiFillGithub className="text-xl text-muted-foreground hover:text-foreground" />
              </a>
            ))}
          {websiteUrl && (
            <a href={websiteUrl} target="_blank">
              <LuExternalLink className="text-xl text-muted-foreground hover:text-foreground" />
            </a>
          )}
        </div>
        {/* Tech Stack */}
        <ul className="flex-1 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </ul>
      </div>
    </Card>
  );
}
