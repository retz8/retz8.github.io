// What the Cook page is, in two lines.
export default function CookIntro() {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="m-0 text-[20px] leading-[30px]">
        I host <b className="font-semibold">tasting dinners</b> for friends in
        my studio kitchen, six to eight courses at a time.
      </p>
      <p className="m-0 text-[16px] leading-[26px] text-[#57534e]">
        <span className="font-medium text-[#1c1917]">Korean</span> and{" "}
        <span className="font-medium text-[#1c1917]">Japanese</span> flavors,
        cooked into{" "}
        <span className="font-medium text-[#1c1917]">French-style</span>{" "}
        Western courses.
      </p>
    </div>
  );
}
