import type { Experience } from "@/domains/portfolio/types/experience";

const experiencesListData: Experience[] = [
  {
    id: "tesla-software-engineer-intern",
    title: "Software Engineer Intern",
    company: "Tesla",
    companyTailwindColor: "text-tesla-red",
    companyLink: "https://www.tesla.com",
    description: "Incoming Summer 2025, Digital Experience team",
    startDate: "May 2025",
    endDate: "Present",
    techStack: ["React", "React Native"],
  },
  {
    id: "umtri-research-assistant",
    title: "Research Assistant",
    company: "UMTRI",
    companyTailwindColor: "text-michigan-blue",
    companyLink: "https://www.umtri.umich.edu/",
    description:
      "Devise visualization of interactive human and wheelchair 3D models on a web environment using Three.js, JSCAD, and WebGL to establish standards for wheelchair seating in U.S. transportation industries.",
    startDate: "Jan 2025",
    endDate: "April 2025",
    techStack: ["Three.js", "JSCAD", "WebGL", "PCA", "Linear Regression"],
  },
  {
    id: "michigandaily-web-developer",
    title: "Web Developer",
    company: "The Michigan Daily",
    companyTailwindColor: "text-michigan-blue",
    companyLink: "https://www.michigandaily.com/",
    description:
      "Spearheaded the implementation of a full-stack gallery website using React and TypeScript, integrating Google Sheets API for seamless data management and retrieval from photographers.",
    startDate: "Sep 2024",
    endDate: "Dec 2024",
    techStack: [
      "React",
      "TypeScript",
      "Google Sheets API",
      "SCSS",
      "Framer Motion",
    ],
  },
  {
    id: "ecological-front-end-developer",
    title: "Front-End Developer",
    company: "Ecological (Startup)",
    description:
      "Engineered React and React Native applications for web, iOS, and Android, enabling consumers to make eco-friendly choices in daily purchases while implementing an Atomic Design-based UI Component Library.",
    startDate: "Jan 2024",
    endDate: "Sep 2024",
    techStack: [
      "React",
      "React Native",
      "Ant Design",
      "GraphQL",
      "AWS Cognito",
      "AWS Amplify",
    ],
  },
  {
    id: "bancof-blockchain-developer",
    title: "Blockchain Developer Intern",
    company: "Bancof (Startup)",
    description:
      "Designed and implemented Smart Contracts with Solidity security enhancements for a White-Label Banking as a Service (BaaS) platform, leading to a successful MVP launch.",
    startDate: "Aug 2022",
    endDate: "Sep 2022",
    techStack: ["Solidity", "Hardhat", "Ethereum", "Blockchain Security"],
  },
];

export { experiencesListData };
