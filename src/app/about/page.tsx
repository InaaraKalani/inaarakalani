import AboutHeroSection from "@/components/about-sections/AboutHeroSection";
import AboutSkillsSection from "@/components/about-sections/AboutSkillsSection";
import AboutExperienceSection from "@/components/about-sections/AboutExperienceSection";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHeroSection />
      <AboutSkillsSection />
      <AboutExperienceSection />
    </main>
  );
}
