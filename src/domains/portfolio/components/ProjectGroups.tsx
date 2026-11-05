import { projectGroups } from "@/domains/portfolio/data/projectData";
import ProjectCard from "@/domains/portfolio/components/ProjectCard";
import { localize, useLocale } from "@/lib/locale";

export default function ProjectGroups() {
  const locale = useLocale();

  return (
    <div className="mt-8 flex flex-col gap-24">
      {projectGroups.map((group) => (
        <div
          key={group.id}
          className={group.rows ? "flex flex-col gap-4" : "flex flex-col gap-7"}
        >
          <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1.5">
            <h2 className="m-0 text-[20px] font-semibold tracking-[-0.01em]">
              {localize(group.title, locale)}
            </h2>
            {group.description && (
              <span className="order-3 basis-full text-[16px] leading-6 text-[#57534e]">
                {group.description[locale]}
              </span>
            )}
            {group.period && (
              <span className="ml-auto font-geist-mono text-[12px] text-[#78716c]">
                {group.period.start} –{" "}
                <b className="font-normal text-[#1c1917]">
                  {group.period.end ?? (locale === "ko" ? "현재" : "now")}
                </b>
              </span>
            )}
          </div>
          <div className="flex min-w-0 flex-col gap-5">
            <div className="grid grid-cols-[minmax(0,1fr)] gap-8">
              {group.cards.map((card) => (
                <ProjectCard key={card.id} {...card} />
              ))}
            </div>
            {group.more && (
              <a
                href={group.more.url}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-10 items-center self-start text-[14px] text-[#44403c] underline underline-offset-4"
              >
                {group.more.label[locale]}&nbsp;→
              </a>
            )}
            {group.rows && (
              <div className="flex flex-col">
                {group.rows.map((row) => (
                  <div
                    key={row.title}
                    className="grid grid-cols-[210px_minmax(0,1fr)] items-baseline gap-4 py-[9px] max-sm:grid-cols-[minmax(0,1fr)] max-sm:gap-0.5"
                  >
                    {row.url ? (
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit text-[16px] font-medium text-[#1c1917] underline underline-offset-4"
                      >
                        {row.title}&nbsp;↗
                      </a>
                    ) : (
                      <span className="w-fit text-[16px] font-medium text-[#1c1917]">
                        {row.title}
                      </span>
                    )}
                    <span className="text-[16px] leading-6 text-[#57534e]">
                      {row.description[locale]}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
