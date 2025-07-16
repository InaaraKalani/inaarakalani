import { projects } from "@/data/projects.data";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiGitlab } from "react-icons/fi";
import { AnimatedSection } from "../ui/animated-section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { StaggeredList } from "../ui/staggered-list";

export default function LandingProjectsSection() {
  return (
    <AnimatedSection
      animation="reveal"
      className="w-full py-12 md:py-24 lg:py-32"
      id="projects"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my recent web development projects and applications
            </p>
          </div>
        </div>
        <StaggeredList
          className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12"
          staggerDelay={300}
        >
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden pt-0 border-primary/10 hover:border-primary/20 transition-all hover-lift group animate-card-entrance h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    width="400"
                    height="200"
                    alt={project.title}
                    className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.longDescription}
                  </p>
                  <StaggeredList
                    className="flex flex-wrap gap-2 mb-4"
                    staggerDelay={50}
                  >
                    {project.technologies.slice(0, 4).map((technology) => (
                      <Badge
                        key={technology.name}
                        className={`border-${technology.theme}/20 text-${technology.theme}`}
                      >
                        {technology.name}
                      </Badge>
                    ))}
                  </StaggeredList>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm" asChild variant="ghost">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-primary/20 hover:bg-primary/5 bg-transparent hover-glow"
                    >
                      <Link href={project.githubUrl} target="_blank">
                        <FiGithub className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}

                  {project.gitlabUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-primary/20 hover:bg-primary/5 bg-transparent hover-glow"
                    >
                      <Link href={project.gitlabUrl} target="_blank">
                        <FiGitlab className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
        </StaggeredList>

        <div className="flex justify-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">
              <Code className="h-4 w-4" />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
