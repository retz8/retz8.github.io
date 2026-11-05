import { experiences } from "@/domains/portfolio/data/experienceData";
import { localize, useLocale } from "@/lib/locale";

export default function ExperienceList() {
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-baseline justify-between">
        <h2 className="m-0 text-[20px] font-semibold tracking-[-0.01em]">
          {locale === "ko" ? "경력" : "Experience"}
        </h2>
        {/* served as a static file from public/resume.pdf; there is no
            Korean resume yet, so the Korean page says it is in English */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-[14px] text-[#44403c] underline underline-offset-4"
        >
          {locale === "ko" ? "영문 이력서 ↗" : "Full resume ↗"}
        </a>
      </div>
      <div className="flex flex-col">
        {experiences.map(({ id, organization, role, link, period }) => (
          <div
            key={id}
            // Three columns on wide screens; on phones the role drops below
            // the organization and its dates.
            className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1 border-t border-[#e7e5e4] py-[11px] last:border-b sm:grid-cols-[210px_minmax(0,1fr)_auto]"
          >
            <span className="flex items-center gap-2 text-[16px] font-semibold">
              {localize(organization, locale)}
            </span>
            <span className="col-span-2 row-start-2 text-[14px] text-[#44403c] sm:col-span-1 sm:row-start-auto">
              {localize(role, locale)}
              {link && (
                <>
                  {" · "}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#44403c] underline underline-offset-[3px]"
                  >
                    {localize(link.label, locale)}&nbsp;↗
                  </a>
                </>
              )}
            </span>
            <span className="col-start-2 row-start-1 font-geist-mono text-[12px] text-[#78716c] sm:col-start-auto sm:row-start-auto">
              {period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
