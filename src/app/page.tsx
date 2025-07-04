import LandingHeroSection from "@/components/landing-sections/LandingHeroSection";
import LandingAboutMeSection from "@/components/landing-sections/LandingAboutMeSection";

export default function Home() {
  return (
    <main className="flex-1">
      <LandingHeroSection />
      <LandingAboutMeSection />
    </main>
  );
}
