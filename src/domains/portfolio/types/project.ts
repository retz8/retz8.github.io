export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  websiteUrls?: {
    url: string;
    description: string;
  }[];
  githubUrls?: {
    url: string;
    description: string;
  }[];
};
