import ValuesHeroSection from "@/components/values-sections/ValuesHeroSection";
import ValuesInspirationSection from "@/components/values-sections/ValuesInspirationSection";
import ValuesQuotesSection from "@/components/values-sections/ValuesQuotesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Values | Inaara Kalani",
  description:
    "Discover the values, inspirations, and philosophies that shape Inaara Kalani — from empathy and equality to creativity and personal growth.",
  keywords: [
    "Inaara Kalani values",
    "philosophy",
    "inspirations",
    "equality",
    "empathy",
    "personal growth",
  ],
};

export default function ValuesPage() {
  return (
    <main className="flex-1">
      <ValuesHeroSection />
      <ValuesInspirationSection />
      <ValuesQuotesSection />
    </main>
  );
}
