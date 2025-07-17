import { BadgeVariant } from "@/components/ui/badge";
import { AppWindow, Database, PencilRuler } from "lucide-react";

export const academicBackground =
  "Bachelor of Science in Computer Science from SZABIST (2017-2021)";

export const academicAchievements = [
  "GPA: 3.74/4.0 - Top of the batch",
  "Valedictorian & Gold Medalist",
  "Chancellor's Honor Roll",
  "Merit scholarship: 6 semesters",
];

export const TechnicalSkills = [
  // Frontend
  { skill: "Next.js", theme: "primary" },
  { skill: "React.js", theme: "primary" },
  { skill: "TypeScript", theme: "primary" },
  { skill: "Javascript", theme: "primary" },

  // Backend
  { skill: "Node.js", theme: "accent" },
  { skill: "MongoDB", theme: "accent" },
  { skill: "GraphQL", theme: "accent" },
  { skill: "Prisma", theme: "accent" },
  { skill: "Firebase", theme: "accent" },
  { skill: "REST API", theme: "accent" },

  // UI Frameworks
  { skill: "Shadcn UI", theme: "secondary" },
  { skill: "Chakra UI", theme: "secondary" },
  { skill: "Framer Motion", theme: "secondary" },

  // DevOps & Tools
  { skill: "Docker", theme: "ghost" },
  { skill: "AWS", theme: "ghost" },
  { skill: "Github", theme: "ghost" },
  { skill: "Vercel", theme: "ghost" },
];

export const FutureGoals = [
  "Master's in Artificial Intelligence",
  "Experience nature & connect with open-minded people",
  "Create original music",
  "Work for women empowerment, environment & wildlife protection",
];

export const stats = [
  { label: "Years Experience", value: "4+", theme: "primary" },
  { label: "Projects Built", value: "15+", theme: "accent" },
  { label: "University GPA", value: "3.74", theme: "primary" },
  { label: "IELTS Band", value: "7.5", theme: "accent" },
];

export const skills = [
  {
    label: "Frontend",
    description: "Web Development tools",
    icon: AppWindow,
    skills: [
      { name: "Next.js", variant: BadgeVariant.primary },
      { name: "React.js", variant: BadgeVariant.primary },
      { name: "TypeScript", variant: BadgeVariant.primary },
      { name: "Javascript", variant: BadgeVariant.accent },
      { name: "Framer Motion", variant: BadgeVariant.accent },
      { name: "Shadcn UI", variant: BadgeVariant.accent },
      { name: "Chakra UI", variant: BadgeVariant.ghost },
      { name: "Tailwind CSS", variant: BadgeVariant.ghost },
    ],
  },
  {
    label: "Backend",
    description: "Database & Technologies",
    icon: Database,
    skills: [
      { name: "Node.js", variant: BadgeVariant.primary },
      { name: "MongoDB", variant: BadgeVariant.primary },
      { name: "REST API", variant: BadgeVariant.primary },
      { name: "GraphQL", variant: BadgeVariant.primary },
      { name: "Prisma", variant: BadgeVariant.accent },
      { name: "Firebase", variant: BadgeVariant.accent },
      { name: "Supabase", variant: BadgeVariant.accent },
      { name: "Java", variant: BadgeVariant.ghost },
      { name: "PostgreSQL", variant: BadgeVariant.ghost },
    ],
  },
  {
    label: "Other Tools",
    description: "",
    icon: PencilRuler,
    skills: [
      { name: "Figma", variant: BadgeVariant.primary },
      { name: "Adobe XD", variant: BadgeVariant.primary },
      { name: "Vercel", variant: BadgeVariant.primary },
      { name: "AWS", variant: BadgeVariant.primary },
      { name: "OpenAI", variant: BadgeVariant.accent },
      { name: "Swagger", variant: BadgeVariant.accent },
      { name: "Stripe", variant: BadgeVariant.accent },
      { name: "Cursor", variant: BadgeVariant.ghost },
      { name: "Github", variant: BadgeVariant.ghost },
      { name: "Sanity", variant: BadgeVariant.ghost },
      { name: "Contentful", variant: BadgeVariant.ghost },
    ],
  },
];
