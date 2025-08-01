import { philosophy } from "@/data/values.data";
import ProfileImageFull from "../profile-images/ProfileImageFull";
import { AnimatedSection } from "../ui/animated-section";
import { ParallaxElement } from "../ui/parallax-element";
import { ParticleSystem } from "../ui/particle-system";

export default function ValuesHeroSection() {
  return (
    <section className="w-full pt-12 md:pt-20 md:pb-24 lg:pb-28 relative overflow-hidden">
      <ParticleSystem />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Content */}
          <AnimatedSection
            animation="fade-right"
            className="basis-2/3 space-y-2"
            duration={1}
            delay={200}
          >
            {/* Name */}
            <h1 className="text-3xl font-bold leading-normal tracking-tighter sm:text-5xl xl:text-6xl/tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
              My Values
            </h1>

            <h2 className="text-xl text-primary sm:text-2xl font-semibold">
              Philosophy & Core Beliefs
            </h2>

            {/* Introduction */}
            <p className="text-muted-foreground md:text-lg leading-relaxed whitespace-pre-line">
              {philosophy}
            </p>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection
            animation="fade-left"
            className="flex items-center justify-center basis-1/3"
            duration={1}
            delay={400}
          >
            <ParallaxElement speed={0.3}>
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse-glow" />
                <ProfileImageFull />
              </div>
            </ParallaxElement>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
