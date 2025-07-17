import AboutHeroSection from "@/components/about-sections/AboutHeroSection";
import AboutSkillsSection from "@/components/about-sections/AboutSkillsSection";
import AboutExperienceSection from "@/components/about-sections/AboutExperienceSection";
import AboutAcademicsSection from "@/components/about-sections/AboutAcademicsSection";
import CTASection from "@/components/layout/CTASection";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHeroSection />
      <AboutSkillsSection />
      <AboutExperienceSection />
      <AboutAcademicsSection />
      <CTASection />
    </main>
  );
}
