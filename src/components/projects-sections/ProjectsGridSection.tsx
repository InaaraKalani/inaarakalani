import { AnimatedSection } from "../ui/animated-section";
import { StaggeredList } from "../ui/staggered-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Search, Star, Users, Calendar } from "lucide-react";
import Image from "next/image";
import {
  ProjectCategory,
  ProjectStatus,
  ProjectType,
} from "@/data/projects.data";
import Link from "next/link";
import { FiGithub, FiGitlab } from "react-icons/fi";

type ProjectsGridSectionProps = {
  projects: ProjectType[];
  setSearchTerm: (value: string) => void;
  setSelectedCategory: (value: ProjectCategory | "") => void;
  setSelectedStatus: (value: ProjectStatus | "") => void;
  setShowFeaturedOnly: (value: boolean) => void;
};

export default function ProjectsGridSection({
  projects,
  setSearchTerm,
  setSelectedCategory,
  setSelectedStatus,
  setShowFeaturedOnly,
}: ProjectsGridSectionProps) {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Showing {projects.length} of {projects.length} projects
            </p>
          </div>

          <StaggeredList
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={150}
          >
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden border-primary/10 hover:border-primary/20 transition-all hover-lift group animate-card-entrance pt-0"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/images/placeholder.svg"}
                    width="500"
                    height="300"
                    alt={project.title}
                    className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <Badge
                      variant={
                        project.status === ProjectStatus.completed
                          ? "green"
                          : "yellow"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Title and Description */}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm mb-3">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {project.team}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary hover-scale"
                      >
                        {tech.name}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Highlights */}
                  {/* <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground mb-2">
                      Key Features:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.slice(0, 2).map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="secondary"
                          className="text-xs bg-accent/10 text-accent"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div> */}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {/* Live Demo Button */}
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90 hover-glow"
                    >
                      <Link href={project.liveUrl}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    {/* Github Button */}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1 border-primary/20 hover:bg-primary/5 bg-transparent hover-glow"
                      >
                        <Link href={project.githubUrl}>
                          <FiGithub className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {/* GitLab Button */}
                    {project.gitlabUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1 border-primary/20 hover:bg-primary/5 bg-transparent hover-glow"
                      >
                        <Link href={project.gitlabUrl}>
                          <FiGitlab className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredList>

          {projects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No projects found</p>
                <p className="text-sm">
                  Try adjusting your search or filter criteria
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                  setSelectedStatus("");
                  setShowFeaturedOnly(false);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
