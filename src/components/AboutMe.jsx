import React from "react";

export default function AboutMe() {
  // 강조 문구는 text-foreground로
  return (
    <div className="flex flex-col gap-6 text-muted-foreground">
      {/* 1. 개발자로써 내 철학 및 소개 */}
      <p>
        I'm a developer who values{" "}
        <span className="text-foreground">UX and DX</span>, always seeking
        better structures and more efficient dev environments. I believe that
        great technology emerges from collaboration, clear communication, and
        commitment to continuous improvement.
        {/* I believe that great code is built
        on solid architecture, and that streamlined development processes
        ultimately lead to superior services for users. */}
      </p>
      {/* 2. 학교 소개 + 과거 경력 간단 요약 */}
      <p>
        I'm an undergrad student at{" "}
        <span className="text-foreground hover:text-michigan-maize">
          University of Michigan
        </span>
        , majoring in Computer Science. Currently, I am working as a Research
        Assistant at{" "}
        <a
          href="https://umtri.umich.edu"
          target="_blank"
          className="text-foreground hover:text-michigan-maize"
        >
          UMTRI
        </a>
        . At the same time, I'm a Lead Software Engineer at{" "}
        {/* [TODO]: change instagram link to website's credit page */}
        <a
          href="https://www.instagram.com/kisa_michigan/"
          target="_blank"
          className="text-foreground hover:text-michigan-maize"
        >
          KISA
        </a>
        , building apps for Korean students.
      </p>
      {/* 3. Spare Time: 요리 + 축구 */}
      <p>
        When I'm not coding, I host and cook home-made tasting dinners, curating
        six to seven course meals.
      </p>
    </div>
  );
}
