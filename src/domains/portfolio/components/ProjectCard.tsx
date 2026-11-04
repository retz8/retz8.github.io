import type { ProjectCard as ProjectCardData } from "@/domains/portfolio/types/project";
import { thumbs } from "@/domains/portfolio/components/thumbs";

// A diagram over the project's title and one line. The title's link
// stretches over the whole card, so the diagram is clickable too.
export default function ProjectCard({ id, title, url, description }: ProjectCardData) {
  const Thumb = thumbs[id];
  return (
    <article className="group relative flex flex-col gap-3">
      {Thumb && <Thumb />}
      <div className="flex flex-row flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="w-fit text-[16px] font-medium text-[#1c1917] underline underline-offset-4 after:absolute after:inset-0 after:z-10"
        >
          {title}&nbsp;↗
        </a>
        <div className="text-[16px] leading-6 text-[#57534e]">{description}</div>
      </div>
    </article>
  );
}
