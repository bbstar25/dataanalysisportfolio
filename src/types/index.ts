
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tools: string[];
  icon: "excel" | "sql" | "python" | "powerbi";
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  image?: string;
}

