import { AnimatedSection } from "../ui/animated-section";
import { StaggeredList } from "../ui/staggered-list";
import { ParticleSystem } from "../ui/particle-system";
import { ProjectStatsQueryResult } from "@/sanity/lib/types";

type props = { stats: ProjectStatsQueryResult };

export default function ProjectsHeroSection({ stats }: props) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <ParticleSystem />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
      <AnimatedSection
        className="container relative z-10"
        animation="fade-up"
        duration={1}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* Heading and Description */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold leading-normal tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
              My Projects
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive showcase of my work, from interactive websites to
              full-stack apps and more.
            </p>
          </div>

          {/* Stats */}
          <StaggeredList
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
            staggerDelay={100}
          >
            <div className="text-center p-4 rounded-xl border border-primary/10 hover-lift cursor-pointer">
              <div className="text-2xl font-bold text-primary mb-1">
                {stats.totalProjects}
              </div>
              <div className="text-sm text-muted-foreground">
                Total Projects
              </div>
            </div>
            <div className="text-center p-4 rounded-xl border border-accent/10 hover-lift cursor-pointer">
              <div className="text-2xl font-bold text-accent mb-1">
                {stats.completedProjects}
              </div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center p-4 rounded-xl border border-primary/10 hover-lift cursor-pointer">
              <div className="text-2xl font-bold text-primary mb-1">
                {stats.ongoingProjects}
              </div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
            <div className="text-center p-4 rounded-xl border border-accent/10 hover-lift cursor-pointer">
              <div className="text-2xl font-bold text-accent mb-1">
                {stats.technologies}
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </StaggeredList>
        </div>
      </AnimatedSection>
    </section>
  );
}
