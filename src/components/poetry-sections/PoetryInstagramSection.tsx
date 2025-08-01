import { AnimatedSection } from "../ui/animated-section";

export default function PoetryInstagramSection() {
  return (
    <section>
      <AnimatedSection
        animation="reveal"
        className="w-full py-12 md:py-24 lg:py-32"
        id="projects"
      >
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold leading-normal tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
                Instagram
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A showcase of my recent poetry and words
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
