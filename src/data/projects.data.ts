import { BadgeVariant } from "@/components/ui/badge";
import { AppWindow, Globe, Server, Shield, Zap } from "lucide-react";

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
  web: {
    NextJS: {
      name: "Next.js",
      variant: BadgeVariant.primary,
    },
    React: {
      name: "React",
      variant: BadgeVariant.primary,
    },
    Angular: {
      name: "Angular",
      variant: BadgeVariant.primary,
    },
    JQuery: {
      name: "JQuery",
      variant: BadgeVariant.primary,
    },
    TypeScript: {
      name: "TypeScript",
      variant: BadgeVariant.primary,
    },
    JavaScript: {
      name: "JavaScript",
      variant: BadgeVariant.primary,
    },
    HTML: {
      name: "HTML",
      variant: BadgeVariant.primary,
    },
    PUG: {
      name: "PUG",
      variant: BadgeVariant.primary,
    },
    CSS: {
      name: "CSS",
      variant: BadgeVariant.primary,
    },
    SCSS: {
      name: "SCSS",
      variant: BadgeVariant.primary,
    },
    PostCSS: {
      name: "PostCSS",
      variant: BadgeVariant.primary,
    },
  },
  programming: {
    NodeJS: {
      name: "Node.js",
      variant: BadgeVariant.accent,
    },
    Java: {
      name: "Java",
      variant: BadgeVariant.accent,
    },
    CSharp: {
      name: "C#",
      variant: BadgeVariant.accent,
    },
    C: {
      name: "C",
      variant: BadgeVariant.accent,
    },
  },
  backend: {
    MongoDB: {
      name: "MongoDB",
      variant: BadgeVariant.accent,
    },
    RESTAPIs: {
      name: "REST APIs",
      variant: BadgeVariant.accent,
    },
    Prisma: {
      name: "Prisma",
      variant: BadgeVariant.accent,
    },
    GraphQL: {
      name: "GraphQL",
      variant: BadgeVariant.accent,
    },
    Firebase: {
      name: "Firebase",
      variant: BadgeVariant.accent,
    },
    Supabase: {
      name: "Supabase",
      variant: BadgeVariant.accent,
    },
    PostgreSQL: {
      name: "PostgreSQL",
      variant: BadgeVariant.accent,
    },
    AWS_S3_Bucket: {
      name: "AWS S3 Bucket",
      variant: BadgeVariant.accent,
    },
  },
  ui: {
    ShadcnUI: {
      name: "Shadcn UI",
      variant: BadgeVariant.neutral,
    },
    ChakraUI: {
      name: "Chakra UI",
      variant: BadgeVariant.neutral,
    },
    MaterialUI: {
      name: "Material UI",
      variant: BadgeVariant.neutral,
    },
    TailwindCSS: {
      name: "Tailwind CSS",
      variant: BadgeVariant.neutral,
    },
    FramerMotion: {
      name: "Framer Motion",
      variant: BadgeVariant.neutral,
    },
    ChartJS: {
      name: "Chart.js",
      variant: BadgeVariant.neutral,
    },
  },
  cms: {
    Contentful: {
      name: "Contentful",
      variant: BadgeVariant.accent,
    },
    Sanity: {
      name: "Sanity",
      variant: BadgeVariant.accent,
    },
  },
  tools: {
    Swagger: {
      name: "Swagger",
      variant: BadgeVariant.neutral,
    },
    OpenAI: {
      name: "OpenAI",
      variant: BadgeVariant.neutral,
    },
    Stripe: {
      name: "Stripe",
      variant: BadgeVariant.neutral,
    },
    PayPal: {
      name: "PayPal",
      variant: BadgeVariant.neutral,
    },
  },
  uiTranslations: {
    Figma: {
      name: "Figma",
      variant: BadgeVariant.neutral,
    },
    AdobeXD: {
      name: "Adobe XD",
      variant: BadgeVariant.neutral,
    },
  },
  deployment: {
    Vercel: {
      name: "Vercel",
      variant: BadgeVariant.neutral,
    },
    AWS: {
      name: "AWS",
      variant: BadgeVariant.neutral,
    },
  },
};

export type Technology = {
  name: string;
  variant: BadgeVariant;
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
    image: "/projects/settlement-consultant.png",
    liveUrl: "https://settlement-consultant.vercel.app",
    githubUrl: "https://github.com/ShakirYasin/settlement-consultant",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.ongoing,
    featured: false,
    year: "2025",
    team: "Solo Project",
    technologies: [
      technologies.web.NextJS,
      technologies.web.TypeScript,
      technologies.programming.NodeJS,
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
      technologies.web.NextJS,
      technologies.web.TypeScript,
      technologies.programming.NodeJS,
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
      technologies.web.NextJS,
      technologies.web.TypeScript,
      technologies.cms.Sanity,
      technologies.ui.ShadcnUI,
    ],
    highlights: ["CMS Integration", "Product Management"],
  },
  // LCM
  {
    title: "LCM",
    description:
      "A marketing website and an admin panel for a cryptocurrency investment company.",
    longDescription:
      "Built with Next.js and TypeScript, LCM includes a sleek marketing website for a crypto investment firm and a secure admin panel to manage users, investment plans, and platform updates. It offers a clean user experience with intuitive controls for investor and plan management.",
    image: "/projects/lcm.png",
    liveUrl: "https://lcm-one.vercel.app",
    githubUrl: "https://github.com/InaaraKalani/lcm",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.completed,
    featured: false,
    year: "2025",
    team: "2 Developers",
    technologies: [
      technologies.web.NextJS,
      technologies.web.TypeScript,
      technologies.programming.NodeJS,
      technologies.backend.MongoDB,
      technologies.backend.GraphQL,
      technologies.web.TypeScript,
      technologies.ui.ShadcnUI,
    ],
    highlights: ["Admin Panel for Investors", "Crypto Plan Management"],
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
      technologies.web.NextJS,
      technologies.web.TypeScript,
      technologies.programming.NodeJS,
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
      technologies.web.NextJS,
      technologies.web.TypeScript,
      technologies.programming.NodeJS,
      technologies.backend.GraphQL,
      technologies.backend.MongoDB,
      technologies.ui.ChakraUI,
    ],
    highlights: ["Social Media Platform", "Full Customization"],
  },
  // Champion League Baseball
  {
    title: "Champion League Baseball",
    description:
      "A web app for baseball coaches to manage teams, schedule matches, and track results throughout the season.",
    longDescription:
      "Champion League Baseball is a web application built with Next.js, Node.js, and GraphQL, enabling team coaches to register teams, schedule matches, and manage game data. Coaches can view available time slots via an interactive calendar, send match requests, track results, and monitor seasonal leaderboards.",
    image: "/projects/cbl.png",
    liveUrl: "https://cbl-web.vercel.app",
    githubUrl: "https://github.com/usama-hashone-hub/cbl-web",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.completed,
    featured: false,
    year: "2024",
    team: "3 Developers",
    technologies: [
      technologies.web.NextJS,
      technologies.web.TypeScript,
      technologies.programming.NodeJS,
      technologies.backend.MongoDB,
      technologies.backend.GraphQL,
      technologies.ui.ShadcnUI,
    ],
    highlights: [
      "Interactive Calendar Scheduling",
      "Match Results & Leaderboard",
    ],
  },
  // 360 Image Splitter
  {
    title: "360 Image Splitter",
    description:
      "An image processing tool to split car images into five predefined sections for analysis or download.",
    longDescription:
      "Image-Split is a lightweight image processing tool built with Node.js. It lets users upload car images, automatically splits them into five defined sections, and enables easy download of the output files.",
    image: "/projects/image-extractor.png",
    liveUrl: "https://image-uploader-psi-sandy.vercel.app",
    githubUrl: "https://github.com/InaaraKalani/image-split",
    category: ProjectCategory.backend,
    status: ProjectStatus.completed,
    featured: false,
    year: "2024",
    team: "Solo Project",
    technologies: [
      technologies.web.NextJS,
      technologies.programming.NodeJS,
      technologies.backend.RESTAPIs,
      technologies.backend.AWS_S3_Bucket,
    ],
    highlights: ["Car Image Splitting", "Automated Image Segmentation"],
  },
  // Talky Walky
  {
    title: "Talky Walky",
    description:
      "An educational chatbot app designed to help users improve English skills through conversation and voice playback.",
    longDescription:
      "Talky Walky is a chatbot app built with Angular and Material UI, designed to make English learning accessible for undereducated users. It supports both text-to-speech and speech-to-text for voice-based interaction, along with language translation features and mini-games to make learning engaging and inclusive.",
    image: "/projects/talky-walky.png",
    liveUrl: "https://www-h2-devx.talky-walky.ch",
    githubUrl: "https://github.com/mbachmann/chat-app-frontend",
    category: ProjectCategory.frontend,
    status: ProjectStatus.completed,
    featured: false,
    year: "2024",
    team: "Solo Project",
    technologies: [
      technologies.web.Angular,
      technologies.web.TypeScript,
      technologies.ui.MaterialUI,
    ],
    highlights: ["Voice Interaction", "Multilingual Support"],
  },
  // Dog Lovers
  {
    title: "Dog Lovers",
    description: "An e-commerce platform for selling preplanned dog meals.",
    longDescription:
      "Developed with Next.js, MongoDB, Prisma, Chakra UI, and Framer Motion, the app delivers a smooth and animated shopping experience for curated canine meal plans.",
    image: "/projects/dog-lovers.png",
    liveUrl: "https://dog-lovers-next.vercel.app",
    githubUrl: "https://github.com/muneebhashone/dog-lovers-next",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.completed,
    featured: false,
    year: "2023",
    team: "Solo Project",
    technologies: [
      technologies.web.NextJS,
      technologies.web.TypeScript,
      technologies.programming.NodeJS,
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
      technologies.web.NextJS,
      technologies.web.TypeScript,
      technologies.programming.NodeJS,
      technologies.backend.MongoDB,
      technologies.backend.Prisma,
      technologies.ui.ChakraUI,
      technologies.cms.Contentful,
    ],
    highlights: ["Service Booking System", "CMS Integration"],
  },
  // SnappyDate
  {
    title: "SnappyDate",
    description:
      "A dating app where users can connect, chat, plan dates, and send gifts—all in one place.",
    longDescription:
      "SnappyDate is a full-stack dating application built with Next.js, Node.js, and MongoDB. It allows users to find matches, chat in real time, schedule dates, book restaurants, and purchase thoughtful gifts for their connections—streamlining the dating experience from first message to final surprise.",
    image: "/projects/snappydate.png",
    liveUrl: "",
    githubUrl: "https://github.com/muneebhashone/snappy-date-next",
    category: ProjectCategory.fullstack,
    status: ProjectStatus.completed,
    featured: false,
    year: "2023",
    team: "2 Developers",
    technologies: [
      technologies.web.NextJS,
      technologies.web.JavaScript,
      technologies.programming.NodeJS,
      technologies.backend.MongoDB,
      technologies.backend.RESTAPIs,
      technologies.ui.ChakraUI,
    ],
    highlights: ["Date Booking & Gifting", "Real-Time Chat"],
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
      technologies.web.NextJS,
      technologies.web.TypeScript,
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
      technologies.web.React,
      technologies.web.JavaScript,
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
