
import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Sales Performance Analysis",
    category: "Business Analytics",
    description:
      "Analyze sales transactions to understand revenue performance, identify top-performing products, and discover sales trends.",
    tools: ["Excel", "Power BI", "Data Cleaning"],
    icon: "powerbi",
    githubUrl: "https://github.com/YOUR_USERNAME",
    featured: true,
    image: "/images/sales-analysis.png",
  },
  {
    id: 2,
    title: "Customer Behaviour Analysis",
    category: "Customer Analytics",
    description:
      "Explore customer data to understand purchasing patterns, customer preferences, and behaviour across different segments.",
    tools: ["Python", "Pandas", "Matplotlib"],
    icon: "python",
    githubUrl: "https://github.com/YOUR_USERNAME",
    featured: true,
    image: "/images/customer-analysis.png",
  },
  {
    id: 3,
    title: "Business Revenue Analysis",
    category: "SQL Analytics",
    description:
      "Use SQL queries to examine business transactions, calculate revenue metrics, and identify important business trends.",
    tools: ["SQL", "PostgreSQL", "Data Analysis"],
    icon: "sql",
    githubUrl: "https://github.com/YOUR_USERNAME",
    featured: true,
    image: "/images/sql-analysis.png",
  },
  {
    id: 4,
    title: "E-commerce Data Analysis",
    category: "Data Exploration",
    description:
      "Explore e-commerce datasets to investigate product performance, order trends, and customer purchasing patterns.",
    tools: ["Python", "Excel", "Power BI"],
    icon: "excel",
    githubUrl: "https://github.com/YOUR_USERNAME",
    featured: false,
    image: "/images/ecommerce-analysis.png",
  },
];




