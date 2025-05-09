export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  websiteUrl?: string;
  githubUrls?: {
    url: string;
    description: string;
  }[];
};
