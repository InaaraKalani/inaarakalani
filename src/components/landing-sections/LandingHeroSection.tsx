"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/ui/morphing-text";
import { ParallaxElement } from "@/components/ui/parallax-element";
import { ParticleSystem } from "@/components/ui/particle-system";
import { StaggeredList } from "@/components/ui/staggered-list";
import { urlFor } from "@/sanity/lib/image";
import { IntroductionQueryResult } from "@/sanity/lib/types";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import ProfileImageHalf from "../profile-images/ProfileImageHalf";

export default function LandingHeroSection({
  introduction,
}: {
  introduction: IntroductionQueryResult;
}) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const heroSocialLinks = [
    {
      label: "GitHub",
      name: introduction?.github?.name,
      url: introduction?.github?.url || "",
      icon: FiGithub,
    },
    {
      label: "LinkedIn",
      name: introduction?.linkedin?.name,
      url: introduction?.linkedin?.url || "",
      icon: FiLinkedin,
    },
    {
      label: "Email",
      name: introduction?.email,
      url: `mailto:${introduction?.email}`,
      icon: FiMail,
    },
    {
      label: "Instagram",
      name: introduction?.instagram?.name,
      url: introduction?.instagram?.url || "",
      icon: FiInstagram,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <ParticleSystem />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
      <div className="container relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Content */}
          <AnimatedSection animation="fade-right" duration={1} delay={200}>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                {/* Badge */}
                <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm">
                  <MapPin className="h-3 w-3 mr-1 animate-wiggle" />
                  {introduction?.location}
                </div>

                {/* Name */}
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-text-glow">
                  {introduction?.heading}
                </h1>

                {/* Designation */}
                <h2 className="text-xl text-primary sm:text-2xl font-semibold">
                  <MorphingText texts={introduction?.roles || []} />
                </h2>

                {/* Introduction */}
                <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                  {introduction?.description}
                </p>
              </div>

              {/* Buttons */}
              <StaggeredList
                className="flex gap-2 flex-wrap"
                staggerDelay={150}
              >
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={() => scrollTo("about")}
                >
                  About Me
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollTo("projects")}
                >
                  View My Work
                </Button>
              </StaggeredList>

              {/* Social Links */}
              <StaggeredList className="flex gap-4 pt-4" staggerDelay={100}>
                {heroSocialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    className="text-muted-foreground hover:text-primary transition-colors hover-scale"
                  >
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.label}</span>
                  </Link>
                ))}
              </StaggeredList>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection animation="fade-left" duration={1} delay={400}>
            <div className="flex items-center justify-center">
              <ParallaxElement speed={0.3}>
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse-glow" />
                  {introduction && (
                    <ProfileImageHalf
                      dark={urlFor(introduction.imageDark!).url()}
                      light={urlFor(introduction.imageLight!).url()}
                    />
                  )}
                </div>
              </ParallaxElement>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
