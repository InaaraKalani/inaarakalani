import {
  academicBackground,
  FutureGoals,
  TechnicalSkills,
} from "@/data/about-me.data";
import { Code, GraduationCap, Target } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "../ui/animated-section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { StaggeredList } from "../ui/staggered-list";

export default function LandingAboutMeSection() {
  return (
    <section>
      <AnimatedSection
        animation="fade-up"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/30"
      >
        <div className="container md:px-6">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
                About Me
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My journey in web development and what drives me forward
              </p>
            </div>
          </div>

          {/* Academic Background, Technical Skills, Future Goals */}
          <StaggeredList
            className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"
            staggerDelay={200}
          >
            {/* Academic Background */}
            <Card className="lg:h-[292px] border-primary/10 hover:border-primary/20 transition-colors hover-lift animate-card-entrance">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 hover-rotate">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Academic Background</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {academicBackground[0].description}
                </p>
                <StaggeredList staggerDelay={100}>
                  {academicBackground[0].achievements?.map((e, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 animate-pulse-glow" />
                      {e}
                    </li>
                  ))}
                </StaggeredList>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="border-primary/10 hover:border-primary/20 transition-colors hover-lift animate-card-entrance">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 hover-rotate">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <StaggeredList
                  className="flex flex-wrap gap-2"
                  staggerDelay={50}
                >
                  {TechnicalSkills.map(({ skill, variant }) => (
                    <Badge key={skill} variant={variant}>
                      {skill}
                    </Badge>
                  ))}
                </StaggeredList>
              </CardContent>
            </Card>

            {/* Future Goals */}
            <Card className="lg:h-[292px] border-primary/10 hover:border-primary/20 transition-colors hover-lift animate-card-entrance">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 hover-rotate">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Future Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <StaggeredList staggerDelay={100}>
                  {FutureGoals.map((e, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <div className="shrink-0 h-1.5 w-1.5 mt-2 rounded-full bg-accent mr-2 animate-pulse-glow" />
                      {e}
                    </li>
                  ))}
                </StaggeredList>
              </CardContent>
            </Card>
          </StaggeredList>

          <div className="flex justify-center">
            <Button size="lg" variant="outline" className="hover-lift" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
