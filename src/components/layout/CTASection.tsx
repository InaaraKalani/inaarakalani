import { AnimatedSection } from "../ui/animated-section";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <AnimatedSection
      animation="fade-up"
      className="w-full py-12 md:py-24 bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold leading-normal tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Interested in Working Together?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              I&apos;m always excited to take on new challenges and collaborate
              on innovative projects.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 hover-lift"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary/20 hover:bg-primary/5 bg-transparent"
            >
              <Link href="/about">View About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
