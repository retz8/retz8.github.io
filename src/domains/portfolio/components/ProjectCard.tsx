import { AiFillGithub } from "react-icons/ai";
import { LuExternalLink } from "react-icons/lu";
import { Expand } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import HoverLinkIcon from "@/components/HoverLinkIcon";

import type { Project } from "@/domains/portfolio/types/project";
export default function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  techStack,
  githubUrls,
  websiteUrls,
}: Project) {
  return (
    <Card
      className="group flex flex-col gap-3
     w-full bg-transparent hover:cursor-pointer
    transition-all duration-300 rounded-lg border-none shadow-none"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3">
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                aria-label={`Expand ${title} image`}
                className="group/thumb relative block w-full overflow-hidden rounded cursor-zoom-in"
              >
                <img
                  src={imageUrl}
                  alt={`${id} ${title} image`}
                  className="z-0 w-full aspect-video object-fit transition-transform duration-300 group-hover/thumb:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/thumb:bg-black/30">
                  <Expand className="size-6 text-white opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100" />
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <img
                src={imageUrl}
                alt={`${id} ${title} image`}
                className="w-full max-h-[70vh] object-contain"
              />
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          {/* <Link to={`/projects/${id}`}> */}
          <span className="leading-none font-semibold group-hover:underline">
            {title}
          </span>{" "}
          {/* </Link> */}
          <p className="text-sm text-muted-foreground group-hover:text-foreground">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start md:items-center gap-4">
        {/* links */}
        <div className="w-1/3 flex flex-row gap-2">
          {githubUrls &&
            githubUrls.map(({ url, description }) => (
              <HoverLinkIcon
                key={url}
                url={url}
                description={description}
                icon={
                  <AiFillGithub className="text-xl text-muted-foreground hover:text-foreground" />
                }
              />
            ))}
          {websiteUrls &&
            websiteUrls.map(({ url, description }) => (
              <HoverLinkIcon
                key={url}
                url={url}
                description={description}
                icon={
                  <LuExternalLink className="text-xl text-muted-foreground hover:text-foreground" />
                }
              />
            ))}
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
