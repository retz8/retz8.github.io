import React from "react";

export default function AboutMe() {
  // 강조 문구는 text-foreground로
  return (
    <div className="flex flex-col gap-2 text-muted-foreground">
      {/* 1. 개발자로써 내 철학 및 소개 */}
      <p>개발자로써의 내 철학 및 소개 I am a developer...</p>
      {/* 2. 학교 소개 + 과거 경력 간단 요약 */}
      <p>
        I'm an undergrad student at{" "}
        <span className="text-foreground">University of Michigan</span>,
        majoring in Computer Science...등등
      </p>
      {/* 3. Spare Time: 요리 + 축구 */}
      <p>In my spare time, I like to invite my friends over...등등</p>
    </div>
  );
}
