import type { Dinner } from "@/domains/cook/types/menu";
import { useLocale } from "@/lib/locale";

// One dinner under its date: each course's photo beside its names and
// description. On phones the text drops below the photo.
export default function DinnerSection({ id, date, courses }: Dinner) {
  const locale = useLocale();
  const other = locale === "ko" ? "en" : "ko";

  return (
    <section id={id} className="flex flex-col gap-3">
      <h2 className="m-0 text-[20px] font-semibold tracking-[-0.01em]">
        {date}
      </h2>
      <div className="flex flex-col">
        {courses.map((course) => {
          // The page's own language first, the other beneath it.
          const name = locale === "ko" ? course.korName : course.engName;
          const otherName = locale === "ko" ? course.engName : course.korName;
          return (
            <div
              key={course.id}
              className="grid grid-cols-[minmax(0,1fr)] items-start gap-3 py-4 sm:grid-cols-[210px_minmax(0,1fr)] sm:gap-6"
            >
              <img
                src={`/foods/${id}/${course.id}.webp`}
                alt={name}
                loading="lazy"
                className="block aspect-[4/3] w-full object-cover sm:aspect-square"
              />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[16px] font-medium text-[#1c1917]">
                  {name}
                </span>
                <span lang={other} className="text-[14px] text-[#78716c]">
                  {otherName}
                </span>
                <p className="m-0 mt-2 text-[15px] leading-[23px] text-[#57534e]">
                  {course.description[locale]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
