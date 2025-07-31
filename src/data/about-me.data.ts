import { BadgeVariant } from "@/components/ui/badge";
import { AppWindow, Database, PencilRuler } from "lucide-react";

export const TechnicalSkills = [
  // Frontend
  { skill: "Next.js", variant: BadgeVariant.primary },
  { skill: "React.js", variant: BadgeVariant.primary },
  { skill: "TypeScript", variant: BadgeVariant.primary },
  { skill: "Javascript", variant: BadgeVariant.primary },

  // Backend
  { skill: "Node.js", variant: BadgeVariant.accent },
  { skill: "MongoDB", variant: BadgeVariant.accent },
  { skill: "GraphQL", variant: BadgeVariant.accent },
  { skill: "Prisma", variant: BadgeVariant.accent },
  { skill: "Firebase", variant: BadgeVariant.accent },
  { skill: "REST API", variant: BadgeVariant.accent },

  // UI Frameworks
  { skill: "Shadcn UI", variant: BadgeVariant.muted },
  { skill: "Chakra UI", variant: BadgeVariant.muted },
  { skill: "Framer Motion", variant: BadgeVariant.muted },

  // DevOps & Tools
  { skill: "Docker", variant: BadgeVariant.ghost },
  { skill: "AWS", variant: BadgeVariant.ghost },
  { skill: "Github", variant: BadgeVariant.ghost },
  { skill: "Vercel", variant: BadgeVariant.ghost },
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

export const workExperience = [
  {
    title: "Software Engineer",
    company: "Hashone Global",
    period: "November 2022 - Present",
    description:
      "Leading end-to-end development of web applications using React, Next.js, and Node.js. Specialized in creating scalable solutions for startups and established businesses.",
    achievements: [
      "Built 15+ production applications serving thousands of users",
      "Mentored junior developers and interns",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Led technical architecture decisions for complex projects",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "QriosityNet",
    period: "August 2021 - November 2022",
    description:
      "Started my professional journey during university, working on real-world projects and building foundational skills.",
    achievements: [
      "Developed QriosityNet - a gamified LinkedIn for students",
      "Gained experience with React, Firebase, and Material UI",
      "Learned project management and client communication",
      "Built responsive, user-friendly interfaces",
    ],
    history: [
      {
        title: "Junior Developer",
        company: "QriosityNet",
        period: "April 2021 - August 2021",
      },
      {
        title: "Intern",
        company: "QriosityNet",
        period: "April 2020 - April 2021",
      },
    ],
  },
];

export const academicBackground = [
  {
    title: "Computer Science Degree",
    description:
      "Bachelor of Science in Computer Science from SZABIST (2017-2021)",
    institution: "SZABIST",
    period: "2017-2021",
    achievements: [
      "GPA: 3.74/4.0 - Top of the batch",
      "Valedictorian & Gold Medalist",
      "Chancellor's Honor Roll",
      "Merit scholarship: 6 semesters",
    ],
  },
  {
    title: "Intermediate",
    description:
      "Computer Science from Habib Girls Higher Secondary School (2015-2017)",
    institution: "Habib Girls Higher Secondary School",
    period: "2015-2017",
  },
  {
    title: "Matriculation",
    description: "General Science from Aga Khan School, Garden (2015-2015)",
    institution: "Aga Khan School, Garden",
    period: "2013-2015",
  },
];

export const extracurricularActivities = [
  {
    title: "Music & Creative Writing",
    icon: "🎵",
    description:
      "Writing poetry and songs has been a lifelong passion—something I've done since childhood. I studied piano and music theory for 7 months and share my work on Instagram to express and inspire. I also love listening to music from different genres and cultures.",
    highlights: [
      "Poetry & Songwriting",
      "Piano & Music Theory",
      "Music Appreciation",
    ],
  },

  {
    title: "Gaming & Global Connections",
    icon: "🎮",
    description:
      "Gaming sparked my love for connecting with people from different backgrounds. I’ve built strong, lasting friendships with people I met online during COVID, and I actively explore Discord servers and real-life communities built on shared interests.",
    highlights: [
      "Cross-cultural Communication",
      "Online & Offline Communities",
      "Strategic Thinking",
    ],
  },
  {
    title: "Book Reading & Imagination",
    icon: "📚",
    description:
      "I’m an avid fiction reader, especially drawn to fantasy worlds that spark imagination and empathy. Books have shaped my thinking and continue to inspire my creativity and worldview.",
    highlights: [
      "Fiction & Fantasy",
      "Imaginative Thinking",
      "Lifelong Curiosity",
    ],
  },
  {
    title: "Love for Animals",
    icon: "🐾",
    description:
      "Animals have always held a special place in my heart. Living with my cat Sherlock has deepened my empathy—teaching me how to feel and connect beyond words. I dream of helping animals, protecting them, and simply seeing them happy and safe.",
    highlights: ["Deep Empathy", "Animal Welfare", "Nonverbal Connection"],
  },
];
