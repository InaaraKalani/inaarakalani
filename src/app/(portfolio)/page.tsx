import LandingHeroSection from "@/components/landing-sections/LandingHeroSection";
import LandingAboutMeSection from "@/components/landing-sections/LandingAboutMeSection";
import LandingProjectsSection from "@/components/landing-sections/LandingProjectsSection";
import LandingAchievementsSection from "@/components/landing-sections/LandingAchievementsSection";
import CTASection from "@/components/layout/CTASection";

export default function Home() {
  return (
    <main className="flex-1">
      <LandingHeroSection />
      <LandingAboutMeSection />
      <LandingProjectsSection />
      <LandingAchievementsSection />
      <CTASection />
    </main>
  );
}
