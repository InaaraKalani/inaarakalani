import PoetryFeaturedSection from "@/components/poetry-sections/PoetryFeaturedSection";
import PoetryHeroSection from "@/components/poetry-sections/PoetryHeroSection";
import PoetryInstagramSection from "@/components/poetry-sections/PoetryInstagramSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poetry | Inaara Kalani",
  description:
    "Explore original poetry and heartfelt words by Inaara Kalani. Dive into verses on love, loss, hope, and identity—crafted to inspire, heal, and connect with souls across the world.",
  keywords: [
    "Inaara Kalani poetry",
    "original poems",
    "spoken word",
    "love poetry",
    "inspirational poetry",
    "modern poetry",
    "emotional poetry",
    "mental health poems",
    "hope and healing",
  ],
};

export default function PoetryPage() {
  return (
    <main className="flex-1">
      <PoetryHeroSection />
      <PoetryFeaturedSection />
      <PoetryInstagramSection />
    </main>
  );
}
