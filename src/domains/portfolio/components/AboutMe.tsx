export default function AboutMe() {
  // 강조 문구는 text-foreground로
  return (
    <div className="flex flex-col gap-6 text-muted-foreground">
      {/* 1. 개발자로써 내 철학 및 소개 */}
      <p>
        I'm a developer who values{" "}
        <span className="font-semibold text-foreground">UX and DX</span>, always
        striving to create seamless experiences and intuitive development
        environments. I double down on clean architecture, readable code, and
        scalable systems. I believe that great technology is built through clear
        communication, attention to detail, and a commitment to constant
        refinement.
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
        In the past, I've worked as a developer across diverse environments,
        from a research institute to early-stage startups in both the US and
        Korea. I also led a 7-member development team, building and operating
        live applications for the Korean student community.
      </p>

      {/* 3. Spare Time: 요리 + 축구 */}
      {/* <p>
        When I'm not coding, I host and cook home-made tasting dinners, curating
        six to seven course meals.
      </p> */}
    </div>
  );
}
