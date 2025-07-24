import AboutAcademicsSection from "@/components/about-sections/AboutAcademicsSection";
import AboutExperienceSection from "@/components/about-sections/AboutExperienceSection";
import AboutExtracurricularsSection from "@/components/about-sections/AboutExtracurricularsSection";
import AboutHeroSection from "@/components/about-sections/AboutHeroSection";
import AboutSkillsSection from "@/components/about-sections/AboutSkillsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Inaara Kalani",
  description:
    "Learn more about Inaara Kalani — my technical skills, work experience, academic achievements, and the journey that shaped my career and creativity",
  keywords: [
    "Inaara Kalani",
    "about Inaara Kalani",
    "web developer",
    "skills",
    "experience",
    "academic background",
    "portfolio",
  ],
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHeroSection />
      <AboutSkillsSection />
      <AboutExperienceSection />
      <AboutAcademicsSection />
      <AboutExtracurricularsSection />
    </main>
  );
}
