import { GraduationCap, Star } from "lucide-react";
import { AnimatedSection } from "../ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { StaggeredList } from "../ui/staggered-list";
import { EducationQueryResult } from "@/sanity/lib/types";

type props = { education: EducationQueryResult };

export default function AboutAcademicsSection({ education }: props) {
  return (
    <section className="w-full py-12 md:py-24">
      <AnimatedSection className="container" animation="fade-up">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Academic Background
            </h2>
            <p className="text-muted-foreground text-lg">
              Educational foundation and academic achievements
            </p>
          </div>

          <StaggeredList className="space-y-6" staggerDelay={200}>
            {education.map((e, i) => (
              <Card
                key={i}
                className="border-primary/10 hover:border-primary/20 transition-colors hover-lift"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0 hover-rotate">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{e.title}</CardTitle>
                      <p className="text-muted-foreground">{e.description}</p>
                    </div>
                  </div>
                </CardHeader>
                {e.achievements && e.achievements.length > 0 && (
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground mb-3">
                        Academic Honors & Recognition:
                      </h4>
                      <StaggeredList
                        className="grid gap-3 sm:grid-cols-2"
                        staggerDelay={100}
                      >
                        {e.achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10"
                          >
                            <Star className="h-4 w-4 text-accent shrink-0" />
                            <span className="text-sm font-medium">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </StaggeredList>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </StaggeredList>
        </div>
      </AnimatedSection>
    </section>
  );
}
