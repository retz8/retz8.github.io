// Work Experience data type

export type Experience = {
  id: string;
  title: string;
  company: string;
  companyLink?: string;
  companyTailwindColor?: string;
  location: string;
  description: string | React.ReactNode;
  startDate: string;
  endDate: string;
  techStack: string[];
};
