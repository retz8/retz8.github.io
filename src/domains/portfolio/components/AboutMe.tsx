export default function AboutMe() {
  // 강조 문구는 text-foreground로
  return (
    <div className="flex flex-col gap-6 text-muted-foreground">
      {/* 1. 개발자로써 내 철학 및 소개 */}
      <p>
        I'm a developer who values{" "}
        <span className="font-semibold text-foreground">UX and DX</span>, always
        seeking better structures and more efficient dev environments. I believe
        that great technology emerges from collaboration, clear communication,
        and commitment to continuous improvement.
      </p>
      {/* 2. 학교 소개 + 과거 경력 간단 요약 */}
      <p>
        I'm an undergrad student at{" "}
        <span
          className={`font-semibold text-michigan-blue hover:text-michigan-dark-maize hover:cursor-pointer`}
        >
          University of Michigan
        </span>
        , majoring in Computer Science. I'm currently a{" "}
        <span className="font-semibold text-foreground">
          Software Engineer Intern
        </span>{" "}
        at{" "}
        <a
          href="https://www.tesla.com/"
          target="_blank"
          className={`text-tesla-red hover:text-foreground font-semibold`}
        >
          Tesla
        </a>{" "}
        on the Digital Experience team.
      </p>

      {/* 3. Past Experiences */}
      <p>
        In the past, I worked as a{" "}
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
      {/* <p>
        When I'm not coding, I host and cook home-made tasting dinners, curating
        six to seven course meals.
      </p> */}
    </div>
  );
}
