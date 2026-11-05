import { useLocale } from "@/lib/locale";

const keyword = "font-medium text-[#1c1917]";

// What the Cook page is, in two lines. The Korean lines are written for
// Korean readers, not translated, so each language is its own markup.
export default function CookIntro() {
  const locale = useLocale();

  if (locale === "ko") {
    return (
      <div className="flex flex-col gap-2.5">
        <p className="m-0 text-[20px] leading-[30px]">
          작은 스튜디오 주방에서 친구들을 불러{" "}
          <b className="font-semibold">테이스팅 디너</b>를 엽니다. 한 번에
          여섯에서 여덟 코스를 냅니다.
        </p>
        <p className="m-0 text-[16px] leading-[26px] text-[#57534e]">
          <span className={keyword}>한식</span>과{" "}
          <span className={keyword}>일식</span>의 맛을{" "}
          <span className={keyword}>프렌치</span> 코스의 형식에 담습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      <p className="m-0 text-[20px] leading-[30px]">
        I host <b className="font-semibold">tasting dinners</b> for friends in
        my studio kitchen, six to eight courses at a time.
      </p>
      <p className="m-0 text-[16px] leading-[26px] text-[#57534e]">
        <span className={keyword}>Korean</span> and{" "}
        <span className={keyword}>Japanese</span> flavors, cooked into{" "}
        <span className={keyword}>French-style</span> Western courses.
      </p>
    </div>
  );
}
