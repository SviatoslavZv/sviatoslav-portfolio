export interface Project {
  id: string;
  slug: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  liveUrl: string;
  githubUrl?: string;
  imageUrl: string;
  featured: boolean;
}