// Work Experience data type

export type Experience = {
  id: string;
  title: string;
  company: string;
  companyLink?: string;
  companyTailwindColor?: string;
  description: string;
  startDate: string;
  endDate: string;
  techStack: string[];
};
