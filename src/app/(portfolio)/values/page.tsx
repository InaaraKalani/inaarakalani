import CTASection from "@/components/layout/CTASection";
import ValuesBooksSection from "@/components/values-sections/ValuesBooksSection";
import ValuesHeroSection from "@/components/values-sections/ValuesHeroSection";
import ValuesInspirationSection from "@/components/values-sections/ValuesInspirationSection";
import ValuesQuotesSection from "@/components/values-sections/ValuesQuotesSection";
import { sanityFetch } from "@/sanity/lib/live";
import {
  booksQuery,
  inspirationsQuery,
  philosophyQuery,
  quotesQuery,
} from "@/sanity/queries/values.queries";
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

export default async function ValuesPage() {
  const { data: philosophy } = await sanityFetch({ query: philosophyQuery });
  const { data: quotes } = await sanityFetch({ query: quotesQuery });
  const { data: inspirations } = await sanityFetch({
    query: inspirationsQuery,
  });
  const { data: books } = await sanityFetch({ query: booksQuery });

  return (
    <main className="flex-1">
      <ValuesHeroSection philosophy={philosophy} />
      <ValuesInspirationSection inspirations={inspirations} />
      <ValuesQuotesSection quotes={quotes} />
      <ValuesBooksSection books={books} />
      <CTASection />
    </main>
  );
}
