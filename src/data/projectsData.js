const projects = [
  {
    id: "pocha",
    title: "Real-time Food Ordering Platform",
    description:
      "Built a full-stack food ordering platform from scratch, streamlining order processing for pop-up events. Integrated Stripe API for payments and implemented real-time order tracking with WebSockets.",
    imageUrl: "/projects/pocha.png",
    techStack: ["Next.js", "TypeScript", "Flask", "WebSockets", "Stripe API"],
    websiteUrl: "https://umichkisa.com/pocha",
  },
  {
    id: "umichkisa",
    title: "UMich KISA Official Website",
    description:
      "Developed and deployed a Next.js web platform for UMich's Korean student association, featuring a dynamic bulletin board and community engagement tools.",
    imageUrl: "/projects/umichkisa.png",
    techStack: ["Next.js", "Flask", "MySQL", "Vercel", "AWS"],
    websiteUrl: "https://umichkisa.com",
  },
  {
    id: "dylan",
    title: "Dylan - Coding Assistant",
    description:
      "Designed and built an LLM-powered chatbot to assist developers with GitHub repository insights. Implemented a RAG architecture using Google's Gemini API and ChromaDB for context-aware responses.",
    imageUrl: "/projects/dylan.png",
    techStack: ["Next.js", "Python", "LLM", "ChromaDB", "Firebase"],
    githubUrls: [
      "https://github.com/retz8/Dylan-front",
      "https://github.com/retz8/Dylan-back",
    ],
  },
  {
    id: "princeton-slfi",
    title: "Princeton Spotted Lanternfly Initiative",
    description:
      "A React Native app for tracking daily habits. Features include customizable habit tracking, progress visualization, reminders, and cloud sync. Built with a focus on user experience and offline functionality.",
    imageUrl: "/projects/princeton-slfi.png",
    techStack: ["Next.js", "TailwindCSS", "Sanity"],
    githubUrls: ["https://github.com/retz8/slf-website"],
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
      "https://github.com/retz8/PRISMS-house-events-app",
      "https://github.com/retz8/PRISMS-house-events-api",
    ],
  },
];

export { projects };
