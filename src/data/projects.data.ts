import { AppWindow, Globe, Server, Shield, Zap } from "lucide-react";

enum ProjectTheme {
  primary = "primary",
  accent = "accent",
  neutral = "muted-foreground",
}

export enum ProjectCategory {
  frontend = "Frontend",
  backend = "Backend",
  fullstack = "Fullstack",
}

export enum ProjectStatus {
  completed = "Completed",
  ongoing = "In Progress",
}

export const projectCategories = [
  { name: "Frontend", value: ProjectCategory.frontend, icon: AppWindow },
  { name: "Backend", value: ProjectCategory.backend, icon: Server },
  { name: "Fullstack", value: ProjectCategory.fullstack, icon: Globe },
];

export const projectStatuses = [
  { name: "Completed", value: ProjectStatus.completed, icon: Shield },
  { name: "In Progress", value: ProjectStatus.ongoing, icon: Zap },
];

export const technologies = {
  frontend: {
    TypeScript: {
      name: "TypeScript",
      theme: ProjectTheme.primary,
    },
    JavaScript: {
      name: "JavaScript",
      theme: ProjectTheme.primary,
    },
    NextJS: {
      name: "Next.js",
      theme: ProjectTheme.primary,
    },
    React: {
      name: "React",
      theme: ProjectTheme.primary,
    },
  },
  backend: {
    NodeJS: {
      name: "Node.js",
      theme: ProjectTheme.accent,
    },
    MongoDB: {
      name: "MongoDB",
      theme: ProjectTheme.accent,
    },
    RESTAPIs: {
      name: "REST APIs",
      theme: ProjectTheme.accent,
    },
    Prisma: {
      name: "Prisma",
      theme: ProjectTheme.accent,
    },
    GraphQL: {
      name: "GraphQL",
      theme: ProjectTheme.accent,
    },
    Firebase: {
      name: "Firebase",
      theme: ProjectTheme.accent,
    },
  },
  cms: {
    Contentful: {
      name: "Contentful",
      theme: ProjectTheme.accent,
    },
    Sanity: {
      name: "Sanity",
      theme: ProjectTheme.accent,
    },
  },
  ui: {
    ShadcnUI: {
      name: "Shadcn UI",
      theme: ProjectTheme.neutral,
    },
    ChakraUI: {
      name: "Chakra UI",
      theme: ProjectTheme.neutral,
    },
    MaterialUI: {
      name: "Material UI",
      theme: ProjectTheme.neutral,
    },
    TailwindCSS: {
      name: "Tailwind CSS",
      theme: ProjectTheme.neutral,
    },
    FramerMotion: {
      name: "Framer Motion",
      theme: ProjectTheme.neutral,
    },
    ChartJS: {
      name: "Chart.js",
      theme: ProjectTheme.neutral,
    },
  },
  tools: {
    Swagger: {
      name: "Swagger",
      theme: ProjectTheme.neutral,
    },
    OpenAI: {
      name: "OpenAI",
      theme: ProjectTheme.neutral,
    },
  },
  deployment: {
    Vercel: {
      name: "Vercel",
      theme: ProjectTheme.neutral,
    },
    AWS: {
      name: "AWS",
      theme: ProjectTheme.neutral,
    },
  },
};

export type Technology = {
  name: string;
  theme: ProjectTheme;
};

export type ProjectType = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  gitlabUrl?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured?: boolean;
  year: string;
  team: string;
  technologies: Technology[];
  highlights: string[];
};

export const projects: ProjectType[] = [
  // SettlementConsultant.ai
  {
    title: "SettlementConsultant.ai",
    description:
      "A financial platform for managing settlements, installment sales, and fee deferrals.",
    longDescription:
      "Built with Next.js, Node.js, REST APIs, and Swagger documentation, this platform helps sellers, claimants, and attorneys efficiently calculate and manage structured settlements, installment sales, and deferred fees—all in one streamlined interface.",
    image: "",
    liveUrl: "",
    githubUrl: "https://github.com/ShakirYasin/settlement-consultant",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.ongoing,
    featured: false,
    year: "2025",
    team: "Solo Project",
    technologies: [
      technologies.frontend.NextJS,
      technologies.frontend.TypeScript,
      technologies.backend.NodeJS,
      technologies.backend.MongoDB,
      technologies.backend.RESTAPIs,
      technologies.ui.ShadcnUI,
      technologies.tools.Swagger,
    ],
    highlights: ["Role-Based Access Control", "Multi-User Workflow"],
  },
  // Talent Pitch Memory Bank
  {
    title: "Talent Pitch Memory Bank",
    description:
      "An AI-powered tool to process Google Drive files and answer natural language queries.",
    longDescription:
      "Built with Next.js, Node.js, and OpenAI, the app answers user queries by searching Google Sheets, Docs, and Drive—no manual browsing needed.",
    image: "/projects/talent-pitch-memory-bank.png",
    liveUrl: "https://talent-pitch-memory-bank-frontend.vercel.app",
    githubUrl:
      "https://github.com/InaaraKalani/talent-pitch-memory-bank-frontend",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.completed,
    featured: true,
    year: "2025",
    team: "2 Developers",
    technologies: [
      technologies.tools.OpenAI,
      technologies.frontend.NextJS,
      technologies.frontend.TypeScript,
      technologies.backend.NodeJS,
      technologies.backend.MongoDB,
      technologies.ui.ShadcnUI,
      technologies.ui.TailwindCSS,
    ],
    highlights: ["AI Chat Interface", "Google Drive Integration"],
  },
  // Gates and Doors Inc.
  {
    title: "Gates and Doors Inc.",
    description:
      "An e-commerce website for a local gates and doors manufacturer.",
    longDescription:
      "Built with Next.js App Router and powered by Sanity CMS, the platform allows the company to efficiently manage and showcase their product catalog and service offerings online.",
    image: "/projects/gates-and-doors-inc.png",
    liveUrl: "https://gdi-six.vercel.app",
    githubUrl: "https://github.com/InaaraKalani/gdi",
    category: ProjectCategory.frontend,
    status: ProjectStatus.completed,
    featured: true,
    year: "2025",
    team: "Solo Project",
    technologies: [
      technologies.frontend.NextJS,
      technologies.frontend.TypeScript,
      technologies.cms.Sanity,
      technologies.ui.ShadcnUI,
    ],
    highlights: ["CMS Integration", "Product Management"],
  },
  // IDarea
  {
    title: "IDarea",
    description: "A secure document and identity management platform.",
    longDescription:
      "Built to support private users, organizations, and verified authorities, the platform enables secure document sharing, wallet management, analytics, and employee oversight—streamlining identity and access workflows across multiple stakeholder types.",
    image: "/projects/idarea.png",
    liveUrl: "https://idarea-lyart.vercel.app",
    githubUrl: "https://github.com/InaaraKalani/idarea",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.completed,
    featured: true,
    year: "2025",
    team: "2 Developers",
    technologies: [
      technologies.frontend.NextJS,
      technologies.frontend.TypeScript,
      technologies.backend.NodeJS,
      technologies.backend.MongoDB,
      technologies.ui.ShadcnUI,
      technologies.ui.ChartJS,
    ],
    highlights: ["Wallet Management", "Data Visualization"],
  },
  // Vollyme
  {
    title: "Vollyme",
    description:
      "A social media platform empowering creators with tools to connect, share, and earn.",
    longDescription:
      "Built with Next.js Page Router, Node.js, GraphQL, and Chakra UI, Vollyme offers a dynamic feed, chats, groups, follower management, and creator monetization tools.",
    image: "/projects/vollyme.png",
    liveUrl: "https://vollyme.com",
    githubUrl: "https://github.com/InaaraKalani/slayr-web",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.completed,
    featured: true,
    year: "2024",
    team: "2 Developers",
    technologies: [
      technologies.frontend.NextJS,
      technologies.frontend.TypeScript,
      technologies.backend.NodeJS,
      technologies.backend.GraphQL,
      technologies.backend.MongoDB,
      technologies.ui.ChakraUI,
    ],
    highlights: ["Social Media Platform", "Full Customization"],
  },
  // Dog Lovers
  {
    title: "Dog Lovers",
    description: "An e-commerce platform for selling preplanned dog meals.",
    longDescription:
      "Developed with Next.js, MongoDB, Prisma, Chakra UI, and Framer Motion, the app delivers a smooth and animated shopping experience for curated canine meal plans.",
    image: "/projects/dog-lovers.png",
    liveUrl: "https://dog-lovers.vercel.app",
    githubUrl: "https://github.com/InaaraKalani/dog-lovers",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.completed,
    featured: false,
    year: "2023",
    team: "Solo Project",
    technologies: [
      technologies.frontend.NextJS,
      technologies.frontend.TypeScript,
      technologies.backend.NodeJS,
      technologies.backend.MongoDB,
      technologies.ui.ChakraUI,
      technologies.ui.FramerMotion,
    ],
    highlights: ["Advanced Animations", "Payment Integration"],
  },
  // IVDrips
  {
    title: "IVDrips",
    description:
      "An e-commerce platform for IV drips, health services, and lab tests.",
    longDescription:
      "Built with Next.js, MongoDB, Prisma, and Chakra UI, and powered by Contentful CMS, the platform enables seamless browsing and booking of wellness products and services.",
    image: "/projects/ivdrips.png",
    liveUrl: "https://ivdrips-rust.vercel.app/",
    githubUrl: "https://github.com/muneebhashone/ivdrips",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.completed,
    year: "2023",
    team: "Solo Project",
    technologies: [
      technologies.frontend.NextJS,
      technologies.frontend.TypeScript,
      technologies.backend.NodeJS,
      technologies.backend.MongoDB,
      technologies.backend.Prisma,
      technologies.ui.ChakraUI,
      technologies.cms.Contentful,
    ],
    highlights: ["Service Booking System", "CMS Integration"],
  },
  // Inspiria
  {
    title: "Inspiria",
    description:
      "A travel booking platform for flights, hotels, and transport.",
    longDescription:
      "Built with Next.js App Router, Material UI, and REST APIs, Inspiria lets users plan, book, and customize complete vacation experiences in one place.",
    image: "/projects/inspiria.png",
    liveUrl: "https://insperia-nextjs.vercel.app",
    githubUrl: "https://github.com/muneebhashone/insperia-nextjs",
    category: ProjectCategory.frontend,
    status: ProjectStatus.completed,
    year: "2023",
    team: "2 Developers",
    technologies: [
      technologies.frontend.NextJS,
      technologies.frontend.TypeScript,
      technologies.backend.RESTAPIs,
      technologies.ui.MaterialUI,
    ],
    highlights: ["Vacation Planning", "REST API Integration"],
  },
  // QriosityNet
  {
    title: "QriosityNet",
    description: "Gamified LinkedIn for Students",
    longDescription:
      "My first professional project, QriosityNet is a social media web app built with React.js, Material UI, and Firebase, combining networking features with job posting and application capabilities.",
    image: "/projects/qriositynet.png",
    liveUrl: "https://qriositynet.com",
    gitlabUrl: "https://gitlab.com/qriositynet/qriositynet",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.completed,
    year: "2022",
    team: "Solo Project",
    technologies: [
      technologies.frontend.React,
      technologies.frontend.JavaScript,
      technologies.backend.Firebase,
      technologies.ui.MaterialUI,
    ],
    highlights: ["Job Board & Applications", "Firebase Integration"],
  },
];

export const projectStats = {
  total: projects.length,
  completed: projects.filter(
    (project) => project.status === ProjectStatus.completed
  ).length,
  inProgress: projects.filter(
    (project) => project.status === ProjectStatus.ongoing
  ).length,
  technologies: Object.values(technologies).flatMap((tech) =>
    Object.values(tech)
  ).length,
};
