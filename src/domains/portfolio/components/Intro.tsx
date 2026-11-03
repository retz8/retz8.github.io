// Who I am, in two lines.
export default function Intro() {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="m-0 text-[20px] leading-[30px]">
        I'm <b className="font-semibold">Jioh In</b>, a software engineer
        studying CS at the{" "}
        <b className="font-semibold text-[#1d3b91]">University of Michigan</b>.
        Previously interned at{" "}
        <b className="font-semibold text-[#e31937]">Tesla</b>.
      </p>
      <p className="m-0 text-[16px] leading-[26px] text-[#57534e]">
        I build what's behind the interface:{" "}
        <span className="font-medium text-[#1c1917]">generative UI</span>,{" "}
        <span className="font-medium text-[#1c1917]">design systems</span> and{" "}
        <span className="font-medium text-[#1c1917]">developer tooling</span>.
      </p>
    </div>
  );
}
