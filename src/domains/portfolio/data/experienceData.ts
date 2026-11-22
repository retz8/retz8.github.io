import type { EarlierWork, Experience } from "@/domains/portfolio/types/experience";

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
];

// Earlier work, named in one line under the rows.
const earlier: EarlierWork[] = [
  {
    name: "The Michigan Daily",
    url: "https://specials.michigandaily.com/2024/photographers-favorites/",
  },
  { name: "Ecological" },
  { name: "Bancof", url: "https://dorahacks.io/build/6106/" },
];

export { experiences, earlier };
