import type { Experience } from "@/domains/portfolio/types/experience";

const experiencesListData: Experience[] = [
  {
    id: "tesla-software-engineer-intern",
    title: "Software Engineer Intern",
    company: "Tesla",
    companyTailwindColor: "text-tesla-red",
    companyLink: "https://www.tesla.com",
    location: "Fremont, CA",
    description: "Digital Experience team",
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
    location: "Ann Arbor, MI",
    description: (
      <>
        Devised an interactive{" "}
        <a
          href="https://humanshape.org/WheelchairTool/"
          target="_blank"
          className="hover:underline group-hover:underline"
        >
          3D simulation tool
        </a>{" "}
        for human and wheelchair models using Three.js, JSCAD, and WebGL.
        Contributed to setting new digital standards for mobility and
        accessibility in the U.S. transportation industry.
      </>
    ),
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
    location: "Ann Arbor, MI",
    description: (
      <>
        Developed a{" "}
        <a
          href="https://specials.michigandaily.com/2024/photographers-favorites/"
          target="_blank"
          className="hover:underline group-hover:underline"
        >
          gallery platform
        </a>{" "}
        to archive annual photo highlights, leading a small team. Built with
        React.js, TypeScript, and Vite, while establishing Git Flow and
        configuring GitHub Actions to streamline collaboration.
      </>
    ),
    startDate: "Sep 2024",
    endDate: "Dec 2024",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "ecological-front-end-developer",
    title: "Front-End Developer",
    company: "Ecological (Startup)",
    location: "Remote, US",
    description: (
      <>
        Worked on an US-based startup building reward-based mobile app that
        promote eco-friendly daily purchases. Developed user authentication and
        dashboard features using React Native, integrating GraphQL, AWS Amplify,
        AWS Cognito. Implemented internal UI component library based on Ant
        Design.
      </>
    ),
    startDate: "Jan 2024",
    endDate: "Sep 2024",
    techStack: ["React", "React Native", "GraphQL", "AWS"],
  },
  {
    id: "bancof-blockchain-developer",
    title: "Blockchain Developer Intern",
    company: "Bancof (Startup)",
    location: "Seoul, Korea",
    description:
      "Designed and implemented Smart Contracts with Solidity security enhancements for a White-Label Banking as a Service (BaaS) platform, leading to a successful MVP launch.",
    startDate: "Aug 2022",
    endDate: "Sep 2022",
    techStack: ["Solidity", "Hardhat", "Web3"],
  },
];

export { experiencesListData };
