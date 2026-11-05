import { useLocale } from "@/lib/locale";

const strong = "font-semibold";
const michigan = "font-semibold text-[#1d3b91]";
const tesla = "font-semibold text-[#e31937]";
const keyword = "font-medium text-[#1c1917]";

// Who I am, in two lines. The Korean lines are written for Korean readers,
// not translated, so each language is its own markup.
export default function Intro() {
  const locale = useLocale();

  if (locale === "ko") {
    return (
      <div className="flex flex-col gap-2.5">
        <p className="m-0 text-[20px] leading-[30px]">
          <b className={strong}>인지오</b>입니다.{" "}
          <b className={michigan}>University of Michigan</b>에서 컴퓨터 과학을
          공부하고, <b className={tesla}>Tesla</b>에서 인턴으로 일했습니다.
        </p>
        <p className="m-0 text-[16px] leading-[26px] text-[#57534e]">
          UI가 만들어지는 방식을 만듭니다. 주로{" "}
          <span className={keyword}>Generative UI</span>,{" "}
          <span className={keyword}>Design System</span>,{" "}
          <span className={keyword}>Developer Tooling</span>을 다룹니다.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      <p className="m-0 text-[20px] leading-[30px]">
        I'm <b className={strong}>Jioh In</b>, a software engineer studying CS
        at the <b className={michigan}>University of Michigan</b>. Previously
        interned at <b className={tesla}>Tesla</b>.
      </p>
      <p className="m-0 text-[16px] leading-[26px] text-[#57534e]">
        I build what's behind the interface:{" "}
        <span className={keyword}>generative UI</span>,{" "}
        <span className={keyword}>design systems</span> and{" "}
        <span className={keyword}>developer tooling</span>.
      </p>
    </div>
  );
}
