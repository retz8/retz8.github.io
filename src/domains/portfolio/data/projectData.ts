import type { Project } from "@/domains/portfolio/types/project";

const projects: Project[] = [
  {
    id: "pocha",
    title: "Real-time Food Ordering Platform",
    description:
      "Built a full-stack food ordering platform from scratch, streamlining order processing for pop-up events. Integrated Stripe API for payments and implemented real-time order tracking with WebSockets.",
    imageUrl: "/projects/pocha.png",
    techStack: ["Next.js", "TypeScript", "Flask", "WebSockets", "Stripe API"],
    websiteUrl: "https://umichkisa.com/pocha",
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
      "Developed and deployed a Next.js web platform for UMich's Korean student association, featuring a dynamic bulletin board and community engagement tools.",
    imageUrl: "/projects/umichkisa.png",
    techStack: ["Next.js", "Flask", "MySQL", "Vercel", "AWS"],
    websiteUrl: "https://umichkisa.com",
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
      "Designed and built an LLM-powered chatbot to assist developers with GitHub repository insights. Implemented a RAG architecture using Google's Gemini API and ChromaDB for context-aware responses.",
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
    websiteUrl: "https://princetonlanternfly.org",
  },
  {
    id: "pig-says-oink",
    title: "Pig Says Oink! - Intramural Activities App",
    description:
      "Developed a full-stack mobile app to automate and streamline intramural activity management, replacing manual record-keeping with a digital system used by 150+ community members.",
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
