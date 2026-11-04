import type { Experience } from "@/domains/portfolio/types/experience";

const experiences: Experience[] = [
  {
    id: "rok-army",
    organization: "Republic of Korea Army",
    role: "Telecommunication Network Management Specialist",
    period: "2025.10 – 2027.04",
  },
  {
    id: "tesla",
    organization: "Tesla",
    role: "Software Engineer Intern",
    link: {
      label: "tesla.com/energy-savings",
      url: "https://www.tesla.com/energy-savings",
    },
    period: "2025.05 – 08",
  },
  {
    id: "umtri",
    organization: "UMTRI",
    role: "Research Assistant",
    link: {
      label: "3D human and wheelchair simulation",
      url: "https://biosciweb.umtri.umich.edu/WheelchairTool/",
    },
    period: "2025.01 – 04",
  },
  {
    id: "michigan-daily",
    organization: "The Michigan Daily",
    role: "Web Developer",
    link: {
      label: "photo gallery platform",
      url: "https://specials.michigandaily.com/2024/photographers-favorites/",
    },
    period: "2024.09 – 12",
  },
  {
    id: "bancof",
    organization: "Bancof",
    role: "Blockchain Developer Intern",
    link: {
      label: "BaaS MVP",
      url: "https://dorahacks.io/build/6106/",
    },
    period: "2022.08 – 09",
  },
];

export { experiences };
