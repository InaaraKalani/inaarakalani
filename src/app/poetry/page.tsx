import PoetryHeroSection from "@/components/poetry-sections/PoetryHeroSection";
import PoetryInstagramSection from "@/components/poetry-sections/PoetryInstagramSection";

export default function PoetryPage() {
  return (
    <main className="flex-1">
      <PoetryHeroSection />
      <PoetryInstagramSection />
    </main>
  );
}
