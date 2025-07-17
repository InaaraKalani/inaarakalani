import { skills } from "@/data/about-me.data";
import { AnimatedSection } from "../ui/animated-section";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { StaggeredList } from "../ui/staggered-list";

export default function AboutSkillsSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <AnimatedSection className="container" animation="fade-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <StaggeredList
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={150}
          >
            {skills.map((category, index) => (
              <Card
                key={index}
                className="border-primary/10 hover:border-primary/20 transition-colors hover-lift h-full"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 hover-rotate">
                      <category.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {category.label}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant={skill.variant}
                        className="text-sm py-1.5 px-2 hover-scale"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredList>
        </div>
      </AnimatedSection>
    </section>
  );
}
