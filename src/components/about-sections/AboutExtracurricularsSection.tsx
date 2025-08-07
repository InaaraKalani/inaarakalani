import { AnimatedSection } from "../ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { StaggeredList } from "../ui/staggered-list";
import { Badge } from "../ui/badge";
import { ExtracurricularsQueryResult } from "@/sanity/lib/types";

type props = { extracurriculars: ExtracurricularsQueryResult };

export default function AboutExtracurricularsSection({
  extracurriculars,
}: props) {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <AnimatedSection className="container" animation="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold leading-normal tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Beyond Code
            </h2>
            <p className="text-muted-foreground text-lg">
              Extracurricular activities and interests that shape who I am
            </p>
          </div>

          <StaggeredList
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
            staggerDelay={200}
          >
            {extracurriculars.map((activity, index) => (
              <Card
                key={index}
                className="border-primary/10 hover:border-primary/20 transition-colors hover-lift h-full"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{activity.icon}</div>
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>

                  <StaggeredList
                    staggerDelay={100}
                    className="flex flex-wrap gap-2"
                  >
                    {activity.highlights?.map((highlight, highlightIndex) => (
                      <Badge
                        key={highlightIndex}
                        variant="muted"
                        className="text-xs hover-scale"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </StaggeredList>
                </CardContent>
              </Card>
            ))}
          </StaggeredList>
        </div>
      </AnimatedSection>
    </section>
  );
}
