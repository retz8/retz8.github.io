import type { Locale } from "@/lib/locale";

// Where the site is served. Canonical links, the sitemap and the Open Graph
// tags are written against it.
export const SITE_URL = "https://retz8.github.io";

// The profiles the header links to and the structured data points at.
export const PROFILES = {
  github: "https://github.com/retz8",
  linkedin: "https://www.linkedin.com/in/jioh-in",
  email: "jiohin@umich.edu",
};

// A page the build writes to disk: its path, its language, and what the
// document head says about it. The head copy is written per language, like
// the page copy, not translated.
export interface Page {
  path: string;
  locale: Locale;
  title: string;
  description: string;
  // Sibling page in the other language, when there is one. Pages with a
  // sibling get hreflang links; pages without one (the 404) are not indexed.
  alternate?: string;
}

export const pages: Page[] = [
  {
    path: "/",
    locale: "en",
    title: "Jioh In",
    description:
      "Jioh In (retz8) is a software engineer studying computer science at the University of Michigan, previously a software engineer intern at Tesla, building what's behind the interface: generative UI, design systems and developer tooling.",
    alternate: "/ko",
  },
  {
    path: "/ko",
    locale: "ko",
    title: "인지오",
    description:
      "University of Michigan에서 컴퓨터 과학을 공부하는 소프트웨어 엔지니어 인지오(Jioh In, retz8)입니다. Tesla에서 인턴으로 일했고, UI가 만들어지는 방식을 만듭니다: Generative UI, Design System, Developer Tooling.",
    alternate: "/",
  },
  {
    path: "/cook",
    locale: "en",
    title: "Cook · Jioh In",
    description:
      "Tasting dinners Jioh In hosts for friends in a studio kitchen, six to eight courses at a time: Korean and Japanese flavors cooked into French-style Western courses, with the menu and a photo of every course.",
    alternate: "/ko/cook",
  },
  {
    path: "/ko/cook",
    locale: "ko",
    title: "Cook · 인지오",
    description:
      "인지오가 작은 스튜디오 주방에서 친구들을 불러 여는 테이스팅 디너. 한식과 일식의 맛을 프렌치 코스의 형식에 담아 한 번에 여섯에서 여덟 코스를 냅니다. 디너마다 메뉴와 코스 사진을 남깁니다.",
    alternate: "/cook",
  },
  {
    path: "/404",
    locale: "en",
    title: "Page not found · Jioh In",
    description: "There is no page at this address.",
  },
];
