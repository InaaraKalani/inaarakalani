import React from "react";
import { AnimatedSection } from "../ui/animated-section";
import { StaggeredList } from "../ui/staggered-list";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Code, GraduationCap } from "lucide-react";
import { Badge } from "../ui/badge";
import { Target } from "lucide-react";

export default function LandingAboutMeSection() {
  return (
    <AnimatedSection
      animation="fade-up"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/30"
    >
      {/* Heading */}
      <div className="container px-4 mx-auto md:px-6">
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

        <StaggeredList
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"
          staggerDelay={200}
        >
          {/* Academic Background */}
          <Card className="border-primary/10 hover:border-primary/20 transition-colors hover-lift animate-card-entrance">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 hover-rotate">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Academic Background</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Bachelor of Science in Computer Science from Tech University
                (2020-2024)
              </p>
              <StaggeredList staggerDelay={100}>
                <li className="flex items-center text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 animate-pulse-glow" />
                  GPA: 3.8/4.0
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 animate-pulse-glow" />
                  Dean&apos;s List: 6 semesters
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 animate-pulse-glow" />
                  Relevant Coursework: Data Structures, Algorithms, Web
                  Development
                </li>
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
              <StaggeredList className="flex flex-wrap gap-2" staggerDelay={50}>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 hover-scale"
                >
                  React
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 hover-scale"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 hover-scale"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-accent/10 text-accent hover:bg-accent/20 hover-scale"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-accent/10 text-accent hover:bg-accent/20 hover-scale"
                >
                  Python
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-muted-foreground/10 hover:bg-muted-foreground/20 hover-scale"
                >
                  PostgreSQL
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-muted-foreground/10 hover:bg-muted-foreground/20 hover-scale"
                >
                  AWS
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-muted-foreground/10 hover:bg-muted-foreground/20 hover-scale"
                >
                  Docker
                </Badge>
              </StaggeredList>
            </CardContent>
          </Card>

          {/* Future Goals */}
          <Card className="border-primary/10 hover:border-primary/20 transition-colors hover-lift animate-card-entrance">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 hover-rotate">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-xl">Future Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <StaggeredList staggerDelay={100}>
                <li className="flex items-center text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2 animate-pulse-glow" />
                  Lead a development team at a tech startup
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2 animate-pulse-glow" />
                  Contribute to open-source projects
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2 animate-pulse-glow" />
                  Master cloud architecture and DevOps
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2 animate-pulse-glow" />
                  Build products that impact millions of users
                </li>
              </StaggeredList>
            </CardContent>
          </Card>
        </StaggeredList>
      </div>
    </AnimatedSection>
  );
}
