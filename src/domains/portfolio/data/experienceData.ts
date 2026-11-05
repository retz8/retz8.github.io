import type { Experience } from "@/domains/portfolio/types/experience";

const experiences: Experience[] = [
  {
    id: "rok-army",
    organization: { en: "Republic of Korea Army", ko: "대한민국 육군" },
    role: {
      en: "Telecommunication Network Management Specialist",
      ko: "정보통신망관리장비운용병 · 지상작전사령부",
    },
    period: "2025.10 – 2027.04",
  },
  {
    id: "tesla",
    organization: "Tesla",
    role: { en: "Software Engineer Intern", ko: "소프트웨어 엔지니어 인턴" },
    link: {
      label: "tesla.com/energy-savings",
      url: "https://www.tesla.com/energy-savings",
    },
    period: "2025.05 – 08",
  },
  {
    id: "umtri",
    organization: "UMTRI",
    role: { en: "Research Assistant", ko: "학부 연구원" },
    link: {
      label: {
        en: "3D human and wheelchair simulation",
        ko: "3D 인체·휠체어 시뮬레이션",
      },
      url: "https://biosciweb.umtri.umich.edu/WheelchairTool/",
    },
    period: "2025.01 – 04",
  },
  {
    id: "michigan-daily",
    organization: "The Michigan Daily",
    role: { en: "Web Developer", ko: "웹 개발자" },
    link: {
      label: { en: "photo gallery platform", ko: "사진 갤러리 플랫폼" },
      url: "https://specials.michigandaily.com/2024/photographers-favorites/",
    },
    period: "2024.09 – 12",
  },
  {
    id: "bancof",
    organization: "Bancof",
    role: { en: "Blockchain Developer Intern", ko: "블록체인 개발자 인턴" },
    link: {
      label: "BaaS MVP",
      url: "https://dorahacks.io/build/6106/",
    },
    period: "2022.08 – 09",
  },
];

export { experiences };
