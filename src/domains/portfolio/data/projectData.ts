import type { ProjectGroup } from "@/domains/portfolio/types/project";

// The Korean lines are written for Korean readers, not translated: drafted
// on the design canvas's Korean board and reviewed there line by line.
const projectGroups: ProjectGroup[] = [
  {
    id: "a2ui",
    title: "A2UI",
    description: {
      en: "Google's open protocol for agent-generated UI, where I contribute upstream and build what its ecosystem is missing.",
      ko: "에이전트가 UI를 그리게 하는 Google의 오픈 프로토콜. 프로토콜에 기여하고, 그 생태계에 아직 없는 것을 만듭니다.",
    },
    period: { start: "2026.02" },
    cards: [
      {
        id: "spectra",
        title: "Spectra",
        url: "https://github.com/retz8/a2ui-spectra",
        description: {
          en: "DevTools for agents that draw their own UI.",
          ko: "에이전트가 UI를 그리는 과정을 들여다보는 개발 도구",
        },
      },
      {
        id: "a2uiverse",
        title: "A2UIVerse",
        url: "https://github.com/retz8/a2uiverse",
        description: {
          en: "A runtime that composes many agents' UIs into one screen, with a store for its apps.",
          ko: "여러 에이전트의 UI를 한 화면으로 엮는 런타임, 그리고 그 앱들의 스토어",
        },
      },
      {
        id: "a2ui-github",
        title: "A2UI GitHub",
        url: "https://github.com/retz8/a2ui-github",
        description: {
          en: "A browser for generative UI, proven on GitHub.",
          ko: "GitHub로 먼저 증명한, Generative UI를 위한 브라우저",
        },
      },
      {
        id: "a2ui-protocol",
        title: "a2ui-project/a2ui",
        url: "https://github.com/a2ui-project/a2ui/pulls?q=is%3Apr+author%3Aretz8",
        description: {
          en: "OSS contributing to the protocol itself, from its spec to its core SDKs.",
          ko: "스펙부터 코어 SDK까지, 오픈소스 기여",
        },
      },
    ],
  },
  {
    id: "kisa",
    title: "UMich KISA",
    description: {
      en: "Michigan's Korean student association, where I founded its first engineering team and grew it to 10+ contributors.",
      ko: "개발팀이 없던 한인 학생회에 팀을 만들었습니다. 지금은 10명 넘게 함께 만듭니다.",
    },
    period: { start: "2023.11" },
    cards: [
      {
        id: "kisa-design-system",
        title: "KISA Design System",
        url: "https://umichkisa-ds-docs.vercel.app/",
        description: {
          en: "A design system with its own docs and forms, now running the site.",
          ko: "토큰부터 컴포넌트까지, 지금 학생회 사이트가 쓰는 Design System",
        },
      },
      {
        id: "jobs-curator",
        title: "Jobs Curator",
        url: "https://umichkisa.com/jobs",
        description: {
          en: "Korean internships for students abroad, curated from Wanted.",
          ko: "유학생도 지원할 수 있는 한국 인턴십만 원티드에서 골라 모은 채용 게시판",
        },
      },
      {
        id: "pocha",
        title: "Pocha",
        // Pocha needs a login, so the card links to its video demo for now.
        url: "https://drive.google.com/file/d/15WApFGmBsCt1NjQtroZ8BB-2WrWL-PeX/view",
        description: {
          en: "Order from your phone, pay with Stripe, watch it hit the kitchen live.",
          ko: "휴대폰으로 주문하고 Stripe로 결제하면, 주방 화면에 바로 뜨는 일일 포차 주문 시스템",
        },
      },
      {
        id: "umichkisa",
        title: "umichkisa.com",
        url: "https://www.umichkisa.com",
        description: {
          en: "Boards, events and tools for Michigan’s Korean students, in one site.",
          ko: "게시판과 행사, 도구까지 담은 한인 학생회 공식 홈페이지",
        },
      },
    ],
    more: {
      label: {
        en: "More from KISA: Admin suite, design system migration, mobile Pocha",
        ko: "KISA의 다른 작업: 어드민, Design System 마이그레이션, 모바일 Pocha",
      },
      url: "https://github.com/KISA-webpage-development-team",
    },
  },
  {
    id: "side",
    title: { en: "Side projects", ko: "사이드 프로젝트" },
    cards: [
      {
        id: "pastiche",
        title: "Pastiche",
        url: "https://github.com/retz8/pastiche",
        description: {
          en: "An agent skill that draws UI in your own components",
          ko: "컴포넌트 라이브러리까지 지키며 UI를 그리는 에이전트 스킬",
        },
      },
    ],
    rows: [
      {
        title: "Daily Work Harness",
        url: "https://github.com/retz8/daily-work-harness",
        description: {
          en: "My daily dev loop as Claude Code skills",
          ko: "매일 쓰는 개발 루틴을 담은 Claude Code Plugin",
        },
      },
      {
        title: "Snippet",
        url: "https://www.iris-codes.com/snippet",
        description: {
          en: "Twice-weekly code-reading newsletter",
          ko: "오픈소스 코드 한 토막을 골라 읽어 주는 뉴스레터",
        },
      },
      {
        title: "Dylan",
        url: "https://github.com/retz8/Dylan-front",
        description: {
          en: "RAG chatbot for GitHub repositories",
          ko: "GitHub 저장소에 대해 묻고 답하는 RAG 챗봇",
        },
      },
      {
        title: "Princeton SLF Initiative",
        url: "https://princetonlanternfly.org",
        description: {
          en: "Website for a local lanternfly campaign",
          ko: "동네 꽃매미 방제 캠페인 웹사이트",
        },
      },
      {
        title: "Pig Says Oink!",
        url: "https://github.com/retz8/PRISMS-house-events-app",
        description: {
          en: "Intramural activities app",
          ko: "교내 행사 일정과 결과를 기록하고 보여주는 앱",
        },
      },
      {
        title: "Ecological",
        description: {
          en: "React Native rewards app with a side-project team",
          ko: "다회용 컵을 쓰면 리워드가 쌓이는, 탄소 줄이기 앱",
        },
      },
    ],
  },
];

export { projectGroups };
