import { Briefcase, CheckCircle } from "lucide-react";
import { AnimatedSection } from "../ui/animated-section";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { StaggeredList } from "../ui/staggered-list";
import { ExperiencesQueryResult } from "@/sanity/lib/types";

type props = { experiences: ExperiencesQueryResult };

export default function AboutExperienceSection({ experiences }: props) {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <AnimatedSection className="container" animation="fade-up">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Work Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              My professional journey and key accomplishments
            </p>
          </div>

          <StaggeredList className="space-y-6" staggerDelay={200}>
            {experiences.map((experience, index) => (
              <Card
                key={index}
                className="border-primary/10 hover:border-primary/20 transition-colors hover-lift"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 hover-rotate shrink-0">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">
                        {experience.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span className="font-medium">
                          {experience.company}
                        </span>
                        <span className="hidden sm:block">•</span>
                        <span className="text-sm">{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground mb-3">
                      Key Achievements:
                    </h4>
                    <StaggeredList className="space-y-2" staggerDelay={100}>
                      {experience.achievements?.map(
                        (achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {achievement}
                            </span>
                          </div>
                        )
                      )}
                    </StaggeredList>
                  </div>
                </CardContent>
                {experience.history && (
                  <CardFooter className="flex-col items-start -mt-4">
                    <StaggeredList staggerDelay={200}>
                      {experience.history.map((history, historyIndex) => (
                        <div key={historyIndex} className="flex flex-col">
                          {/* Dots */}
                          <StaggeredList
                            className="flex flex-col gap-1 size-12 items-center justify-center"
                            staggerDelay={200}
                          >
                            <div className="size-1 bg-muted-foreground/50 rounded-full" />
                            <div className="size-1 bg-muted-foreground/75 rounded-full" />
                            <div className="size-1 bg-muted-foreground/50 rounded-full" />
                          </StaggeredList>

                          {/* History */}
                          <div className="flex items-center gap-4">
                            <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 opacity-60 hover-rotate shrink-0">
                              <Briefcase className="size-6 text-accent" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="mb-1">
                                {history.title}
                              </CardTitle>
                              <div className="flex text-sm flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                                <span className="font-medium">
                                  {history.company}
                                </span>
                                <span className="hidden sm:block">•</span>
                                <span className="text-sm">
                                  {history.period}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </StaggeredList>
                  </CardFooter>
                )}
              </Card>
            ))}
          </StaggeredList>
        </div>
      </AnimatedSection>
    </section>
  );
}
