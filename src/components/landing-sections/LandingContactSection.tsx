import { contactSocialLinks, Email, LinkedIn } from "@/lib/app.data";
import Link from "next/link";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { AnimatedSection } from "../ui/animated-section";
import { Button } from "../ui/button";
import { StaggeredList } from "../ui/staggered-list";

export default function LandingContactSection() {
  return (
    <section>
      <AnimatedSection
        animation="fade-up"
        className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold leading-normal tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
                Let&apos;s Work Together
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to bring your ideas to life? I&apos;m always excited to
                work on new projects and collaborate with amazing teams.
              </p>
            </div>
            <StaggeredList
              className="flex flex-col gap-4 min-[400px]:flex-row"
              staggerDelay={150}
            >
              <Button size="lg" asChild>
                <Link href={Email.url}>
                  <FiMail className="h-4 w-4 mr-2" />
                  Send Email
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/20 hover:bg-primary/5 bg-transparent hover-glow"
              >
                <Link href={LinkedIn.url}>
                  <FiLinkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </StaggeredList>
            <StaggeredList
              className="grid gap-6 sm:grid-cols-3 max-w-2xl pt-8"
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
