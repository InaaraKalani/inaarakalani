import ValuesHeroSection from "@/components/values-sections/ValuesHeroSection";
import ValuesInspirationSection from "@/components/values-sections/ValuesInspirationSection";
import ValuesQuotesSection from "@/components/values-sections/ValuesQuotesSection";

export default function ValuesPage() {
  return (
    <main className="flex-1">
      <ValuesHeroSection />
      <ValuesInspirationSection />
      <ValuesQuotesSection />
    </main>
  );
}
