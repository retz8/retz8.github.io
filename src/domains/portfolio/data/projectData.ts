import type { Project } from "@/domains/portfolio/types/project";

const projects: Project[] = [
  // ──────────────────────────────────────────────
  // Military service (2026 ~ )
  // ──────────────────────────────────────────────
  {
    id: "a2ui-github",
    title: "A2UI GitHub",
    description:
      "Reimagined GitHub as a generative UI surface where an agent paints the interface from GitHub's own Primer design system over the A2UI + A2A protocol. Shipped a full Primer catalog of 56 components, a live agent wired to the GitHub MCP server, and a canvas-first shell with a replayable timeline.",
    techStack: ["A2UI", "A2A Protocol", "MCP", "Generative UI", "Primer"],
    imageUrl: "/projects/a2ui-github.gif",
    githubUrls: [
      {
        url: "https://github.com/retz8/a2ui-github",
        description: "",
      },
    ],
  },
  {
    id: "daily-work-harness",
    title: "Daily Work Harness",
    description:
      "Claude Code plugin that packages the personal routine I work with almost every day into reusable skills — grilling a spec, delegating it as issues, reviewing the PRs, and running the whole loop autonomously overnight. Built for my own desk first, then installed back into every project that followed as an external dependency.",
    techStack: ["Claude Code Plugin", "Agent Skills", "Harness Engineering", "Autonomous Workflow"],
    imageUrl: "/projects/daily-work-harness.svg",
    githubUrls: [
      {
        url: "https://github.com/retz8/daily-work-harness",
        description: "",
      },
    ],
  },
  {
    id: "pastiche",
    title: "Pastiche",
    description:
      "Claude Code plugin that implements frontend UI faithfully within Design System and Component Library. Open-sourced under MIT with an implementer–reviewer loop and a GitHub Primer reference example.",
    imageUrl: "/projects/pastiche.svg",
    techStack: ["Claude Code Plugin", "Design System", "Harness Engineering", "DESIGN.md"],
    githubUrls: [
      {
        url: "https://github.com/retz8/pastiche",
        description: "",
      },
    ],
  },
  {
    id: "kisa-ds-migration",
    title: "UMich KISA Web DS Migration",
    description:
      "Migrated the entire KISA website onto established Design System through a phased rollout shipped to production. Drove it with an agent-orchestrated harness that broke work into self-contained, reviewable units.",
    imageUrl: "/projects/kisa-ds-migration.png",
    techStack: ["Refactoring", "UI/UX Redesign", "Harness Engineering", "Automated Workflow"],
    githubUrls: [
      {
        url: "https://github.com/KISA-webpage-development-team/KISA-website-client",
        description: "",
      },
    ],
    websiteUrls: [
      {
        url: "https://umichkisa.com",
        description: "",
      },
    ],
  },
  { 
    id: "umichkisa-ds",
    title: "UMich KISA Design System",
    description:
      "Production Design System built from scratch, spanning tokens, components, a form DX layer, and docs. Published to npm, powered by an OKLCH token system on Tailwind v4.",
    imageUrl: "/projects/umichkisa-ds.png",
    techStack: ["Design System", "TypeScript", "Tailwind CSS", "OKLCH"],
    githubUrls: [
      {
        url: "https://github.com/KISA-webpage-development-team/umichkisa-ds",
        description: "",
      },
    ],
    websiteUrls: [
      {
        url: "https://umichkisa-ds-docs.vercel.app/",
        description: "Design System Docs"
      },
      {
        url: "https://www.npmjs.com/package/@umichkisa-ds/web",
        description: "Web(Core) Package",
      },
      {
        url: "https://www.npmjs.com/package/@umichkisa-ds/form",
        description: "Form Package",
      },
    ],
  },
  {
    id: "snippet-newsletter",
    title: "Snippet Newsletter",
    description:
      "Twice-weekly newsletter for practicing how to read code, now that AI writes more of it than we can review. Each issue breaks down a snippet from a trending open-source repo, shipped through an autonomous pipeline built on Claude Code skills and n8n.",
    imageUrl: "/projects/snippet-newsletter.png",
    techStack: ["Agent Skills", "n8n", "Python", "Automation"],
    githubUrls: [
      {
        url: "https://github.com/retz8/iris",
        description: "",
      },
    ],
    websiteUrls: [
      {
        url: "https://www.iris-codes.com/snippet",
        description: "",
      }
    ]
  },

  // ──────────────────────────────────────────────
  // Pre-military (~ 2025)
  // ──────────────────────────────────────────────
  {
    id: "umichkisa-admin",
    title: "KISA Admin",
    description:
      "Admin suite to operate KISA's pop-up events end-to-end, covering live management, historical data dashboards, and a unified navigation hub. Consolidated multiple internal tools into a single back-office surface.",
    imageUrl: "/projects/umichkisa-admin.png",
    techStack: ["Next.js", "TypeScript", "Flask"],
    websiteUrls: [
      {
        url: "http://umichkisa.com/admin",
        description: "",
      },
    ],
    githubUrls: [
      {
        url: "https://github.com/KISA-webpage-development-team/KISA-website-client/tree/main/src/app/admin",
        description: "KISA Admin Page",
      },
    ],
  },
  {
    id: "jobs-curator",
    title: "Jobs Curator",
    description:
      "Job curation platform for international students, built through an API partnership with Wanted, Korea's leading recruiting service. Filtered internships by windows that fit students' summer schedules, with added career tips.",
    imageUrl: "/projects/jobs-curator.png",
    techStack: ["Next.js", "TypeScript", "Wanted API"],
    websiteUrls: [
      {
        url: "https://umichkisa.com/jobs",
        description: "",
      },
    ],
    githubUrls: [
      {
        url: "https://github.com/KISA-webpage-development-team/KISA-website-client/tree/main/src/features/jobs-curator",
        description: "Jobs Curator Feature",
      },
    ],
  },
  {
    id: "kisa-monorepo",
    title: "Cross-Platform Monorepo Microfrontend Migration",
    description:
      "Cross-platform monorepo unifying web (Next.js) and mobile (React Native) development with shared UI code. Built with Turborepo, Module Federation, and Re.pack, with Plop-based DevOps automation.",
    imageUrl: "/projects/kisa-monorepo.svg",
    techStack: ["Turborepo", "Module Federation", "Re.pack", "Plop"],
    githubUrls: [
      {
        url: "https://github.com/KISA-webpage-development-team/KISA-frontend",
        description: "",
      },
    ],
  },

  // ──────────────────────────────────────────────
  // Existing projects
  // ──────────────────────────────────────────────
  {
    id: "pocha",
    title: "Real-time Food Ordering Platform",
    description:
      "Full-stack food ordering platform from scratch, streamlining order processing for pop-up events. Integrated Stripe API for payments and implemented real-time order tracking with WebSockets.",
    imageUrl: "/projects/pocha.png",
    techStack: ["Next.js", "TypeScript", "Flask", "WebSockets", "Stripe API"],
    websiteUrls: [
      {
        url: "https://umichkisa.com/pocha",
        description: "",
      },
    ],
    githubUrls: [
      {
        url: "https://github.com/KISA-webpage-development-team/KISA-frontend/tree/pocha/apps/mobile/pocha",
        description: "",
      },
    ],
  },
  {
    id: "umichkisa",
    title: "UMich KISA Official Website",
    description:
      "Next.js web platform for UMich's Korean student association, featuring a dynamic bulletin board and community engagement tools.",
    imageUrl: "/projects/umichkisa.png",
    techStack: ["Next.js", "Flask", "MySQL", "Vercel", "AWS"],
    websiteUrls: [
      {
        url: "https://umichkisa.com",
        description: "",
      },
    ],
    githubUrls: [
      {
        url: "https://github.com/KISA-webpage-development-team/KISA-website-client",
        description: "",
      },
    ],
  },
  {
    id: "dylan",
    title: "Dylan - Coding Assistant",
    description:
      "LLM-powered chatbot to assist developers with GitHub repository insights. Implemented a RAG architecture using Google's Gemini API and ChromaDB for context-aware responses.",
    imageUrl: "/projects/dylan.png",
    techStack: ["Next.js", "Python", "LLM", "ChromaDB", "Firebase"],
    githubUrls: [
      {
        url: "https://github.com/retz8/Dylan-front",
        description: "Frontend",
      },
      {
        url: "https://github.com/retz8/Dylan-back",
        description: "Backend",
      },
    ],
  },
  {
    id: "princeton-slfi",
    title: "Princeton Spotted Lanternfly Initiative",
    description:
      "Official website for local enviromental campaign to eradicate spotted lanternfly in Princeton, NJ. Built with Next.js, TailwindCSS, and Sanity as a CMS.",
    imageUrl: "/projects/princeton-slfi.png",
    techStack: ["Next.js", "TailwindCSS", "Sanity"],
    githubUrls: [
      {
        url: "https://github.com/retz8/slf-website",
        description: "",
      },
    ],
    websiteUrls: [
      {
        url: "https://princetonlanternfly.org",
        description: "",
      },
    ],
  },
  {
    id: "pig-says-oink",
    title: "Pig Says Oink! - Intramural Activities App",
    description:
      "Full-stack mobile app to automate and streamline intramural activity management, replacing manual record-keeping with a digital system used by 150+ community members.",
    imageUrl: "/projects/pig-says-oink.png",
    techStack: ["React Native", "Node.js", "MongoDB", "Figma"],
    githubUrls: [
      {
        url: "https://github.com/retz8/PRISMS-house-events-app",
        description: "Frontend",
      },
      {
        url: "https://github.com/retz8/PRISMS-house-events-api",
        description: "Backend",
      },
    ],
  },
];

export { projects };