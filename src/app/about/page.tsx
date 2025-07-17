import AboutHeroSection from "@/components/about-sections/AboutHeroSection";
import AboutSkillsSection from "@/components/about-sections/AboutSkillsSection";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHeroSection />
      <AboutSkillsSection />
    </main>
  );
}
