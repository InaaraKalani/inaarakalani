import { personalIdeology } from "@/data/philosophy.data";
import ProfileImageHalf from "../profile-images/ProfileImageHalf";
import { AnimatedSection } from "../ui/animated-section";
import { ParallaxElement } from "../ui/parallax-element";
import { ParticleSystem } from "../ui/particle-system";

export default function PhilosophyHeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <ParticleSystem />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
      <div className="container relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          {/* Content */}
          <AnimatedSection animation="fade-right" duration={1} delay={200}>
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold leading-normal tracking-tighter sm:text-5xl xl:text-6xl/tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
                  My Philosophy
                </h1>

                <h2 className="text-xl text-primary sm:text-2xl font-semibold">
                  Values & Core Beliefs
                </h2>

                <p className="max-w-[840px] text-muted-foreground md:text-lg leading-relaxed whitespace-pre-line">
                  {personalIdeology}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection animation="fade-left" duration={1} delay={400}>
            <div className="flex items-center justify-center">
              <ParallaxElement speed={0.3}>
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 animate-pulse-glow" />
                  <ProfileImageHalf />
                </div>
              </ParallaxElement>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
