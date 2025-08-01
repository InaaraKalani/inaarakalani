import { PenTool } from "lucide-react";
import { AnimatedSection } from "../ui/animated-section";
import { ParticleSystem } from "../ui/particle-system";
import { StackingText } from "../ui/stacking-text";
import { poetryHeroTexts } from "@/data/poetry.data";

const PenToolIcon = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse-glow" />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 animate-morph">
        <PenTool className="h-10 w-10 text-primary animate-wiggle" />
      </div>
    </div>
  );
};

export default function PoetryHeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 min-h-[calc(100vh-72px)] flex items-center justify-center relative overflow-hidden">
      <ParticleSystem />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
      <AnimatedSection
        className="container relative z-10"
        animation="fade-up"
        duration={1}
      >
        <div className="flex flex-col items-center justify-center space-y-2 text-center mb-10">
          <PenToolIcon />
          <h1 className="text-3xl font-bold leading-normal tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
            Poetry & Words
          </h1>
          <StackingText
            typingSpeed={90}
            resetDelay={2000}
            texts={poetryHeroTexts}
            className="text-xl md:text-2xl text-muted-foreground"
          />
        </div>
      </AnimatedSection>
    </section>
  );
}
