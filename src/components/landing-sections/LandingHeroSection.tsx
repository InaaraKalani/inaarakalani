import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/ui/morphing-text";
import { ParallaxElement } from "@/components/ui/parallax-element";
import { ParticleSystem } from "@/components/ui/particle-system";
import { StaggeredList } from "@/components/ui/staggered-list";
import { landingHeroTexts, socialLinks } from "@/lib/app.data";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingHeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <ParticleSystem />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
      <div className="container px-4 mx-auto md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <AnimatedSection animation="fade-right" duration={1} delay={200}>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                {/* Badge */}
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                  <MapPin className="h-3 w-3 mr-1 animate-wiggle" />
                  Karachi, Pakistan
                </div>

                {/* Name */}
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-text-glow">
                  Hi, I&apos;m Inaara Kalani
                </h1>

                {/* Designation */}
                <h2 className="text-xl text-primary sm:text-2xl font-semibold">
                  <MorphingText texts={landingHeroTexts} />
                </h2>

                {/* Introduction */}
                <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                  Passionate about creating innovative web solutions that make a
                  difference. I specialize in React, Next.js, and modern web
                  technologies to build exceptional digital experiences.
                </p>
              </div>

              {/* Buttons */}
              <StaggeredList
                className="flex flex-col gap-2 min-[400px]:flex-row"
                staggerDelay={150}
              >
                <Button asChild size="lg" variant="ghost">
                  <Link href="#projects">View My Work</Link>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </StaggeredList>

              {/* Social Links */}
              <StaggeredList className="flex gap-4 pt-4" staggerDelay={100}>
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    className="text-muted-foreground hover:text-primary transition-colors hover-scale"
                  >
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                ))}
              </StaggeredList>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" duration={1} delay={400}>
            <div className="flex items-center justify-center">
              <ParallaxElement speed={0.3}>
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse-glow" />
                  <Image
                    src="/images/placeholder.svg"
                    width="400"
                    height="400"
                    alt="Profile"
                    className="relative aspect-square overflow-hidden rounded-full object-cover border-4 border-background shadow-2xl hover-glow animate-morph"
                  />
                </div>
              </ParallaxElement>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
