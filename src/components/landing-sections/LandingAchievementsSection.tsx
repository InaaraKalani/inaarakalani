import { AnimatedSection } from "../ui/animated-section";
import { StaggeredList } from "../ui/staggered-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Trophy } from "lucide-react";
import { AchievementsQueryResult } from "@/sanity/lib/types";
import { cn } from "@/lib/utils";

type props = { achievements: AchievementsQueryResult };

export default function LandingAchievementsSection({ achievements }: props) {
  return (
    <section>
      <AnimatedSection
        animation="slide-up"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/30"
      >
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold leading-normal tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
                Achievements & Recognition
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Milestones and accomplishments in my development journey
              </p>
            </div>
          </div>
          <StaggeredList
            itemClassName="h-full"
            className="mx-auto grid grid-cols-1 max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
            staggerDelay={250}
          >
            {achievements?.map((achievement, index) => (
              <Card
                key={index}
                className="h-full border-primary/10 hover:border-primary/20 transition-colors hover-lift animate-card-entrance"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex size-12 items-center justify-center rounded-lg hover-rotate",
                        {
                          "bg-yellow-500/10": index === 0,
                          "bg-blue-500/10": index === 1,
                          "bg-green-500/10": index === 2,
                          "bg-purple-500/10": index === 3,
                        }
                      )}
                    >
                      <Trophy
                        className={cn("size-6 animate-wiggle", {
                          "text-yellow-600 dark:text-yellow-400": index === 0,
                          "text-blue-600 dark:text-blue-400": index === 1,
                          "text-green-600 dark:text-green-400": index === 2,
                          "text-purple-600 dark:text-purple-400": index === 3,
                        })}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {achievement.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        {achievement.highlight}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </StaggeredList>
        </div>
      </AnimatedSection>
    </section>
  );
}
