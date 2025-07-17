import { stats } from "@/data/about-me.data";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "../ui/animated-section";
import { StaggeredList } from "../ui/staggered-list";

export default function AboutHeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
      <AnimatedSection
        className="container relative z-10"
        animation="fade-up"
        duration={1}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* Heading and Description */}
          <div>
            <h1 className="text-3xl font-bold leading-normal tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
              About Me
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              An overview of my background, skills, and experiences so far.
            </p>
          </div>

          {/* Stats */}
          <StaggeredList
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
            staggerDelay={100}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={cn(
                  "text-center p-4 rounded-xl border hover-lift",
                  `border-${stat.theme}/10`
                )}
              >
                <div
                  className={cn(
                    `text-2xl font-bold mb-1`,
                    `text-${stat.theme}`
                  )}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>
      </AnimatedSection>
    </section>
  );
}
