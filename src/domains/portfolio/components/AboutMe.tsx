export default function AboutMe() {
  // 강조 문구는 text-foreground로
  return (
    <div className="pl-4 flex flex-col gap-6 text-muted-foreground">
      {/* 1. 개발자로써 내 철학 및 소개 */}
      <p>
        I'm a developer who values{" "}
        <span className="font-semibold text-foreground">UX and DX</span>, always
        seeking better structures and more efficient dev environments. I believe
        that great technology emerges from collaboration, clear communication,
        and commitment to continuous improvement.
        {/* I believe that great code is built
        on solid architecture, and that streamlined development processes
        ultimately lead to superior services for users. */}
      </p>
      {/* 2. 학교 소개 + 과거 경력 간단 요약 */}
      <p>
        I'm an undergrad student at{" "}
        <span className="font-semibold text-foreground hover:text-michigan-maize">
          University of Michigan
        </span>
        , majoring in Computer Science. I'm a currently{" "}
        <span className="font-semibold text-foreground">
          Software Engineer Intern
        </span>{" "}
        at{" "}
        <a
          href="https://www.tesla.com/"
          target="_blank"
          className="text-foreground hover:text-[#CC0000] font-semibold"
        >
          Tesla
        </a>{" "}
        on the Digital Experience team.
      </p>

      {/* 3. Past Experiences */}
      <p>
        In the Past, I worked as a{" "}
        <span className="font-semibold text-foreground">
          Research Assistant
        </span>{" "}
        at{" "}
        <a
          href="https://umtri.umich.edu"
          target="_blank"
          className="text-foreground hover:text-michigan-maize font-semibold"
        >
          UMTRI
        </a>
        , where I contributed to projects in transportation research. I also
        served as Lead Software Engineer for a 7-member team, building apps for
        Korean student community.
      </p>

      {/* 3. Spare Time: 요리 + 축구 */}
      <p>
        When I'm not coding, I host and cook home-made tasting dinners, curating
        six to seven course meals.
      </p>
    </div>
  );
}
