import LandingHeroSection from "@/components/landing-sections/LandingHeroSection";
import LandingAboutMeSection from "@/components/landing-sections/LandingAboutMeSection";
import LandingProjectsSection from "@/components/landing-sections/LandingProjectsSection";
import LandingAchievementsSection from "@/components/landing-sections/LandingAchievementsSection";
import CTASection from "@/components/layout/CTASection";
import { sanityFetch } from "@/sanity/lib/live";
import {
  aboutQuery,
  achievementsQuery,
  introductionQuery,
} from "@/sanity/queries/landing.queries";
import { featuredProjectsQuery } from "@/sanity/queries/projects.queries";

export default async function Home() {
  const { data: introduction } = await sanityFetch({
    query: introductionQuery,
  });
  const { data: about } = await sanityFetch({
    query: aboutQuery,
  });
  const { data: projects } = await sanityFetch({
    query: featuredProjectsQuery,
  });
  const { data: achievements } = await sanityFetch({
    query: achievementsQuery,
  });

  return (
    <main className="flex-1">
      <LandingHeroSection introduction={introduction} />
      <LandingAboutMeSection about={about} />
      <LandingProjectsSection projects={projects} />
      <LandingAchievementsSection achievements={achievements} />
      <CTASection />
    </main>
  );
}
