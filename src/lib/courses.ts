import { Cloud, Database, Code, BarChart3, Cpu, Layers, Globe, Server, Palette, Workflow, Brain, TableProperties } from "lucide-react";

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Cloud;
  category: "devops" | "fullstack" | "data" | "tools";
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: "training-placement",
    title: "Training & Placement",
    subtitle: "Complete Career Package",
    description: "Comprehensive training program with 100% placement assistance. Get industry-ready skills and land your dream job in IT.",
    icon: Workflow,
    category: "devops",
    featured: true,
  },
  {
    id: "gcp-devops",
    title: "GCP DevOps",
    subtitle: "Job-Oriented Training",
    description: "Master Google Cloud Platform with hands-on DevOps training. Learn CI/CD, Kubernetes, and cloud infrastructure management.",
    icon: Cloud,
    category: "devops",
    featured: true,
  },
  {
    id: "aws-devops",
    title: "AWS DevOps",
    subtitle: "Job-Oriented Training",
    description: "Become an AWS certified DevOps engineer. Learn EC2, S3, Lambda, CodePipeline, and infrastructure automation.",
    icon: Cloud,
    category: "devops",
    featured: true,
  },
  {
    id: "azure-devops",
    title: "Azure DevOps",
    subtitle: "Job-Oriented Training",
    description: "Master Microsoft Azure cloud services and DevOps practices. Learn Azure Pipelines, AKS, and enterprise cloud solutions.",
    icon: Cloud,
    category: "devops",
    featured: true,
  },
  {
    id: "multi-cloud-devops",
    title: "Multi Cloud DevOps",
    subtitle: "Job-Oriented Training",
    description: "Learn to work across AWS, Azure, and GCP. Master multi-cloud architecture and DevOps best practices.",
    icon: Layers,
    category: "devops",
    featured: true,
  },
  {
    id: "data-science",
    title: "Data Science",
    subtitle: "Real-Time Oriented Training",
    description: "Learn Python, Machine Learning, and Data Analytics. Work on real-world projects and build a strong portfolio.",
    icon: BarChart3,
    category: "data",
    featured: true,
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    subtitle: "Real-Time Oriented Training",
    description: "Master Large Language Models, prompt engineering, and AI application development. Build cutting-edge AI solutions.",
    icon: Brain,
    category: "data",
    featured: true,
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack Development",
    subtitle: "Industry-Ready Training",
    description: "Master Java, Spring Boot, React, and databases. Build enterprise-grade full-stack applications.",
    icon: Code,
    category: "fullstack",
  },
  {
    id: "python-fullstack",
    title: "Python Full Stack Development",
    subtitle: "Industry-Ready Training",
    description: "Learn Python, Django, React, and modern web technologies. Create scalable web applications.",
    icon: Code,
    category: "fullstack",
  },
  {
    id: "ui-ux",
    title: "UI/UX Development",
    subtitle: "Design-Focused Training",
    description: "Master user interface and experience design. Learn Figma, prototyping, and frontend development.",
    icon: Palette,
    category: "fullstack",
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    subtitle: "Complete Web Development",
    description: "Comprehensive training in frontend, backend, and database technologies. Become a versatile developer.",
    icon: Globe,
    category: "fullstack",
  },
  {
    id: "oracle-plsql",
    title: "Oracle PL/SQL",
    subtitle: "Hands-on Projects",
    description: "Master Oracle database programming with PL/SQL. Learn stored procedures, triggers, and database optimization.",
    icon: Database,
    category: "tools",
  },
  {
    id: "power-bi",
    title: "Power BI",
    subtitle: "Hands-on Projects",
    description: "Create stunning data visualizations and business intelligence reports. Master DAX and Power Query.",
    icon: TableProperties,
    category: "tools",
  },
];

export const courseCategories = [
  { id: "all", label: "All Courses" },
  { id: "devops", label: "DevOps & Cloud" },
  { id: "fullstack", label: "Full Stack" },
  { id: "data", label: "Data & AI" },
  { id: "tools", label: "Tools & Databases" },
];
