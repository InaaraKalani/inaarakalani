import { AnimatedSection } from "../ui/animated-section";
import { StaggeredList } from "../ui/staggered-list";
import { Button } from "../ui/button";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function LandingContactSection() {
  return (
    <AnimatedSection
      animation="fade-up"
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
              Let&apos;s Work Together
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to bring your ideas to life? I&apos;m always excited to work
              on new projects and collaborate with amazing teams.
            </p>
          </div>
          <StaggeredList
            className="flex flex-col gap-4 min-[400px]:flex-row"
            staggerDelay={150}
          >
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 hover-lift animate-magnetic-hover"
            >
              <Link href="mailto:inaara@example.com">
                <FiMail className="h-4 w-4 mr-2" />
                Send Email
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary/20 hover:bg-primary/5 bg-transparent hover-glow animate-magnetic-hover"
            >
              <Link href="#">
                <FiLinkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </Link>
            </Button>
          </StaggeredList>
          <StaggeredList
            className="grid gap-6 sm:grid-cols-3 max-w-2xl pt-8"
            staggerDelay={100}
          >
            <div className="text-center p-4 rounded-lg border border-primary/10 hover-lift animate-card-entrance">
              <FiMail className="h-6 w-6 mx-auto mb-2 text-primary animate-wiggle" />
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">
                inaara@example.com
              </p>
            </div>
            <div className="text-center p-4 rounded-lg border border-primary/10 hover-lift animate-card-entrance">
              <FiGithub className="h-6 w-6 mx-auto mb-2 text-primary animate-wiggle" />
              <p className="text-sm font-medium">GitHub</p>
              <p className="text-sm text-muted-foreground">@inaara-kalani</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-primary/10 hover-lift animate-card-entrance">
              <FiLinkedin className="h-6 w-6 mx-auto mb-2 text-primary animate-wiggle" />
              <p className="text-sm font-medium">LinkedIn</p>
              <p className="text-sm text-muted-foreground">/in/inaara-kalani</p>
            </div>
          </StaggeredList>
        </div>
      </div>
    </AnimatedSection>
  );
}
