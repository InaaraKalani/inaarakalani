import AboutAcademicsSection from "@/components/about-sections/AboutAcademicsSection";
import AboutExperienceSection from "@/components/about-sections/AboutExperienceSection";
import AboutExtracurricularsSection from "@/components/about-sections/AboutExtracurricularsSection";
import AboutHeroSection from "@/components/about-sections/AboutHeroSection";
import AboutSkillsSection from "@/components/about-sections/AboutSkillsSection";

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
