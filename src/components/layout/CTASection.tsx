import { contactSocialLinks } from "@/lib/app.data";
import Link from "next/link";
import { AnimatedSection } from "../ui/animated-section";
import { StaggeredList } from "../ui/staggered-list";
import { ParticleSystem } from "../ui/particle-system";

export default function CTASection() {
  return (
    <section>
      <AnimatedSection
        animation="fade-up"
        className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
      >
        <ParticleSystem />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold leading-normal tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
                Let&apos;s Get In Touch
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;m always open to exciting projects, collaborations, or
                just meaningful conversations.
              </p>
            </div>

            <StaggeredList
              className="grid gap-6 sm:grid-cols-3 max-w-2xl pt-4"
              staggerDelay={100}
            >
              {contactSocialLinks.map((e) => (
                <Link href={e.url} key={e.label} className="w-full">
                  <div className="text-center p-4 rounded-lg border border-primary/10 hover-lift animate-card-entrance">
                    <e.icon className="h-6 w-6 mx-auto mb-2 text-primary animate-wiggle" />
                    <p className="text-sm font-medium">{e.label}</p>
                    <p className="text-sm text-muted-foreground">{e.name}</p>
                  </div>
                </Link>
              ))}
            </StaggeredList>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
