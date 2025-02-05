import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { Card, CardBody, CardHeader } from "@heroui/card";
// import { Image } from "@heroui/image";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({
  title,
  description,
  imageUrl,
  slug,
  techStack,
  githubUrl,
  isMobile = false,
}) {
  return (
    <Link href={`/projects/${slug}`} className="block group">
      <Card
        isBlurred
        // className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        className="bg-pink-200 w-full"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <img
                src="/retz8.github.io/projects/umickisa.png"
                alt="UMich KISA"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col gap-0">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-zinc-800 text-zinc-400 hover:bg-zinc-800"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
