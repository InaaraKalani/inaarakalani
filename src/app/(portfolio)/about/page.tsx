import AboutAcademicsSection from "@/components/about-sections/AboutAcademicsSection";
import AboutExperienceSection from "@/components/about-sections/AboutExperienceSection";
import AboutExtracurricularsSection from "@/components/about-sections/AboutExtracurricularsSection";
import AboutHeroSection from "@/components/about-sections/AboutHeroSection";
import AboutSkillsSection from "@/components/about-sections/AboutSkillsSection";
import CTASection from "@/components/layout/CTASection";
import { sanityFetch } from "@/sanity/lib/live";
import {
  educationQuery,
  experiencesQuery,
  extracurricularsQuery,
  skillsQuery,
} from "@/sanity/queries/about.queries";
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

export default async function AboutPage() {
  const { data: skills } = await sanityFetch({ query: skillsQuery });
  const { data: experiences } = await sanityFetch({ query: experiencesQuery });
  const { data: education } = await sanityFetch({ query: educationQuery });
  const { data: extracurriculars } = await sanityFetch({
    query: extracurricularsQuery,
  });

  return (
    <main className="flex-1">
      <AboutHeroSection />
      <AboutSkillsSection skills={skills} />
      <AboutExperienceSection experiences={experiences} />
      <AboutAcademicsSection education={education} />
      <AboutExtracurricularsSection extracurriculars={extracurriculars} />
      <CTASection />
    </main>
  );
}
