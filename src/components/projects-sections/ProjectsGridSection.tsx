import {
  ProjectCategory,
  ProjectStatus,
  ProjectType,
} from "@/data/projects.data";
import { Calendar, ExternalLink, Search, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiGitlab } from "react-icons/fi";
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
import { useState } from "react";

type ProjectsGridSectionProps = {
  projects: ProjectType[];
  setSearchTerm: (value: string) => void;
  setSelectedCategory: (value: ProjectCategory | "") => void;
  setSelectedStatus: (value: ProjectStatus | "") => void;
  setShowFeaturedOnly: (value: boolean) => void;
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [showMore, setShowMore] = useState(false);

  const technologies = showMore
    ? project.technologies
    : project.technologies.slice(0, 4);

  return (
    <Card className="h-full overflow-hidden border-primary/10 hover:border-primary/20 transition-all hover-lift group animate-card-entrance pt-0">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Link href={project.liveUrl} target="_blank">
          <Image
            src={project.image || "/images/placeholder.svg"}
            width="500"
            height="300"
            alt={project.title}
            className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-10">
          <Badge
            variant={
              project.status === ProjectStatus.completed ? "purple" : "orange"
            }
          >
            {project.status}
          </Badge>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="blue">
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
            <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
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

      <CardContent className="flex-1">
        {/* Technologies */}
        <StaggeredList className="flex flex-wrap gap-1 mb-4" staggerDelay={100}>
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="primaryOutline"
              className="text-xs hover-scale"
            >
              {tech.name}
            </Badge>
          ))}
          {project.technologies.length > 4 && !showMore && (
            <Badge
              variant="outline"
              className="text-xs"
              onClick={() => setShowMore(true)}
            >
              +{project.technologies.length - 4} more
            </Badge>
          )}
        </StaggeredList>

        {/* Highlights */}
        <div className="mb-4">
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Key Features:
          </p>
          <StaggeredList className="flex flex-wrap gap-1">
            {project.highlights.slice(0, 2).map((highlight, index) => (
              <Badge key={index} variant="accent" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </StaggeredList>
        </div>
      </CardContent>

      {/* Action Buttons */}
      <CardFooter className="gap-2">
        {/* Live Demo Button */}
        <Button variant="ghost" asChild className="flex-1">
          <Link href={project.liveUrl} target="_blank">
            <ExternalLink className="size-4" />
            Live Demo
          </Link>
        </Button>

        {/* Github / GitLab Button */}
        {(project.githubUrl || project.gitlabUrl) && (
          <Button variant="outline" asChild className="flex-1">
            <Link
              href={project.githubUrl || project.gitlabUrl || ""}
              target="_blank"
            >
              {project.githubUrl && <FiGithub className="size-4" />}
              {project.gitlabUrl && <FiGitlab className="size-4" />}
              Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
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
      {/* No Projects Found */}
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

      {/* Projects Grid */}
      <StaggeredList
        className="container grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        staggerDelay={150}
        threshold={0.01}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </StaggeredList>
    </section>
  );
}
