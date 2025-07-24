import ProjectsFilterGridSection from "@/components/projects-sections/ProjectsFilterGridSection";
import ProjectsHeroSection from "@/components/projects-sections/ProjectsHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Inaara Kalani",
  description:
    "A showcase of Inaara Kalani’s web development projects — from interactive websites to full-stack applications built with modern technologies.",
  keywords: [
    "Inaara Kalani projects",
    "portfolio projects",
    "web apps",
    "Next.js",
    "React",
    "full-stack development",
  ],
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <ProjectsHeroSection />
      <ProjectsFilterGridSection />
    </main>
  );
}
