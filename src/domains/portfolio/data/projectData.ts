import type { ProjectGroup } from "@/domains/portfolio/types/project";

const projectGroups: ProjectGroup[] = [
  {
    id: "a2ui",
    title: "A2UI",
    description:
      "Google's open protocol for agent-generated UI, where I contribute upstream and build what its ecosystem is missing.",
    period: { start: "2026.02", end: "now" },
    cards: [
      {
        id: "spectra",
        title: "Spectra",
        url: "https://github.com/retz8/a2ui-spectra",
        description: "DevTools for agents that draw their own UI.",
      },
      {
        id: "a2uiverse",
        title: "A2UIVerse",
        url: "https://github.com/retz8/a2uiverse",
        description:
          "An app store for UI agents, and one screen to run them all.",
      },
      {
        id: "a2ui-github",
        title: "A2UI GitHub",
        url: "https://github.com/retz8/a2ui-github",
        description: "A browser for generative UI, proven on GitHub.",
      },
      {
        id: "a2ui-protocol",
        title: "a2ui-project/a2ui",
        url: "https://github.com/a2ui-project/a2ui/pulls?q=is%3Apr+author%3Aretz8",
        description:
          "OSS contributing to the protocol itself, from its spec to its core SDKs.",
      },
    ],
  },
  {
    id: "kisa",
    title: "UMich KISA",
    description:
      "Michigan's Korean student association, where I founded its first engineering team and grew it to 10+ contributors.",
    period: { start: "2023.11", end: "now" },
    cards: [
      {
        id: "kisa-design-system",
        title: "KISA Design System",
        url: "https://umichkisa-ds-docs.vercel.app/",
        description:
          "A design system with its own docs and forms, now running the site.",
      },
      {
        id: "jobs-curator",
        title: "Jobs Curator",
        url: "https://umichkisa.com/jobs",
        description:
          "Korean internships for students abroad, curated from Wanted.",
      },
      {
        id: "pocha",
        title: "Pocha",
        // Pocha needs a login, so the card links to its video demo for now.
        url: "https://drive.google.com/file/d/15WApFGmBsCt1NjQtroZ8BB-2WrWL-PeX/view",
        description:
          "Order from your phone, pay with Stripe, watch it hit the kitchen live.",
      },
      {
        id: "umichkisa",
        title: "umichkisa.com",
        url: "https://www.umichkisa.com",
        description:
          "Boards, events and tools for Michigan’s Korean students, in one site.",
      },
    ],
    more: {
      label:
        "More from KISA: Admin suite, design system migration, mobile Pocha",
      url: "https://github.com/KISA-webpage-development-team",
    },
  },
  {
    id: "side",
    title: "Side projects",
    cards: [
      {
        id: "pastiche",
        title: "Pastiche",
        url: "https://github.com/retz8/pastiche",
        description: "Fact, knowledge and wisdom docs that agents build UI from",
      },
    ],
    rows: [
      {
        title: "Daily Work Harness",
        url: "https://github.com/retz8/daily-work-harness",
        description: "My daily dev loop as Claude Code skills",
      },
      {
        title: "Snippet",
        url: "https://www.iris-codes.com/snippet",
        description: "Twice-weekly code-reading newsletter",
      },
      {
        title: "Dylan",
        url: "https://github.com/retz8/Dylan-front",
        description: "RAG chatbot for GitHub repositories",
      },
      {
        title: "Princeton SLF Initiative",
        url: "https://princetonlanternfly.org",
        description: "Website for a local lanternfly campaign",
      },
      {
        title: "Pig Says Oink!",
        url: "https://github.com/retz8/PRISMS-house-events-app",
        description: "Intramural activities app",
      },
      {
        title: "Ecological",
        description: "React Native rewards app with a side-project team",
      },
    ],
  },
];

export { projectGroups };
