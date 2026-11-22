import { earlier, experiences } from "@/domains/portfolio/data/experienceData";
import { localize, useLocale } from "@/lib/locale";

export default function ExperienceList() {
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        {/* the same size as the community groups' headings */}
        <h2 className="m-0 text-[20px] font-semibold tracking-[-0.01em]">
          Experience
        </h2>
        {/* served as a static file from public/resume.pdf; there is no
            Korean resume yet, so the Korean page says it is in English */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-[14px] text-[#44403c] underline-offset-4 hover:underline"
        >
          {locale === "ko" ? "영문 이력서 ↗" : "Full resume ↗"}
        </a>
      </div>
      <div className="flex flex-col border-b border-[#e7e5e4]">
        {experiences.map(({ id, organization, role, link, period }) => (
          <div
            key={id}
            // Three columns on wide screens; on phones the organization,
            // role and dates stack in one column.
            className="grid grid-cols-[180px_minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1 border-t border-[#e7e5e4] py-2 max-sm:grid-cols-[minmax(0,1fr)] max-sm:gap-0.5"
          >
            <span className="flex items-center gap-2 text-[14px] font-medium">
              {localize(organization, locale)}
            </span>
            <span className="text-[14px] text-[#44403c]">
              {localize(role, locale)}
              {link && (
                <>
                  {" · "}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#44403c] underline-offset-[3px] hover:underline"
                  >
                    {localize(link.label, locale)}&nbsp;↗
                  </a>
                </>
              )}
            </span>
            <span className="font-geist-mono text-[12px] text-[#78716c]">
              {period}
            </span>
          </div>
        ))}
      </div>
      <p className="m-0 text-[14px] leading-[22px] text-[#78716c]">
        Earlier:{" "}
        {earlier.map(({ name, url }, index) => (
          <span key={name}>
            {index > 0 && ", "}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-inherit underline-offset-[3px] hover:underline"
              >
                {name}&nbsp;↗
              </a>
            ) : (
              name
            )}
          </span>
        ))}
      </p>
    </div>
  );
}
