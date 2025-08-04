import Link from "next/link";
import { AnimatedSection } from "../ui/animated-section";
import { Button } from "../ui/button";
import { ParticleSystem } from "../ui/particle-system";
import { FiInstagram } from "react-icons/fi";
import { Instagram } from "@/lib/app.data";

export default function PoetryInstagramSection() {
  return (
    <section className="w-full py-12 md:py-24 relative overflow-hidden">
      <ParticleSystem />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />

      <AnimatedSection animation="fade-up" className="container relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
          {/* Instagram Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse-glow" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 animate-morph">
              <FiInstagram className="h-10 w-10 text-primary animate-wiggle" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-normal tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
              Read More on Instagram
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed">
                Writing has been flowing through me since I was very
                young—it&apos;s an inborn talent that I&apos;ve nurtured and
                cherished throughout my life.
              </p>

              <p className="text-muted-foreground md:text-lg/relaxed leading-relaxed">
                Beyond poetry, I also write song lyrics and dream of creating
                finished songs one day. My Instagram is where I share my latest
                pieces, thoughts, and the creative journey as it unfolds.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="pt-4">
            <Button size="lg" className="hover-lift group" asChild>
              <Link
                href={Instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram className="h-5 w-5 mr-2 group-hover:animate-wiggle" />
                Follow My Poetry Journey
              </Link>
            </Button>
          </div>

          {/* Additional Context */}
          <div className="pt-6 border-t border-border/50 w-full max-w-2xl">
            <p className="text-sm text-muted-foreground/80 leading-relaxed">
              Join me on Instagram where I share raw emotions, midnight
              thoughts, and the stories behind each piece. Every poem is a
              glimpse into moments that shaped me—from my highest highs to my
              deepest reflections.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
