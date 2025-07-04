import { AnimatedSection } from "../ui/animated-section";
import { StaggeredList } from "../ui/staggered-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar, Trophy } from "lucide-react";

export default function LandingAchievementsSection() {
  return (
    <AnimatedSection
      animation="slide-up"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
              Achievements & Recognition
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Milestones and accomplishments in my development journey
            </p>
          </div>
        </div>
        <StaggeredList
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
          staggerDelay={250}
        >
          <Card className="border-primary/10 hover:border-primary/20 transition-colors hover-lift animate-card-entrance">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 hover-rotate">
                  <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400 animate-wiggle" />
                </div>
                <div>
                  <CardTitle className="text-xl">Hackathon Winner</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    TechCrunch Disrupt 2023
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                First place winner for developing an AI-powered accessibility
                tool that helps visually impaired users navigate websites more
                effectively.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/10 hover:border-primary/20 transition-colors hover-lift animate-card-entrance">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 hover-rotate">
                  <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400 animate-wiggle" />
                </div>
                <div>
                  <CardTitle className="text-xl">
                    Open Source Contributor
                  </CardTitle>
                  <CardDescription>React & Next.js Ecosystem</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Active contributor to popular open-source projects with over 50
                merged PRs and 1000+ GitHub stars across personal repositories.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/10 hover:border-primary/20 transition-colors hover-lift animate-card-entrance">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 hover-rotate">
                  <Trophy className="h-6 w-6 text-green-600 dark:text-green-400 animate-wiggle" />
                </div>
                <div>
                  <CardTitle className="text-xl">AWS Certified</CardTitle>
                  <CardDescription>
                    Solutions Architect Associate
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Certified in AWS cloud architecture and services, demonstrating
                expertise in designing scalable and secure cloud solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/10 hover:border-primary/20 transition-colors hover-lift animate-card-entrance">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 hover-rotate">
                  <Trophy className="h-6 w-6 text-purple-600 dark:text-purple-400 animate-wiggle" />
                </div>
                <div>
                  <CardTitle className="text-xl">Tech Speaker</CardTitle>
                  <CardDescription>Conference Presentations</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Presented at 3 major tech conferences on topics including modern
                React patterns, web performance optimization, and accessibility
                best practices.
              </p>
            </CardContent>
          </Card>
        </StaggeredList>
      </div>
    </AnimatedSection>
  );
}
