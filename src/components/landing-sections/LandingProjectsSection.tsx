import { AnimatedSection } from "../ui/animated-section";
import { StaggeredList } from "../ui/staggered-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    detailDescription:
      "Built with Next.js, Stripe API, and PostgreSQL. Features include user authentication, product management, shopping cart, and order processing.",
    link: "https://ecommerce-platform.com",
    github: "https://github.com/ecommerce-platform",
    technologies: [
      { name: "Next.js", theme: "primary" },
      { name: "TypeScript", theme: "primary" },
      { name: "Stripe", theme: "accent" },
      { name: "PostgreSQL", theme: "" },
    ],
    image: "/images/placeholder.svg",
  },
];

export default function LandingProjectsSection() {
  return (
    <AnimatedSection
      animation="reveal"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
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
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
          staggerDelay={300}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden pt-0 border-primary/10 hover:border-primary/20 transition-all hover-lift group animate-card-entrance"
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
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.detailDescription}
                </p>
                <StaggeredList
                  className="flex flex-wrap gap-2 mb-4"
                  staggerDelay={50}
                >
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology.name}
                      variant="outline"
                      className={`border-${technology.theme}/20 text-${technology.theme} hover-scale`}
                    >
                      {technology.name}
                    </Badge>
                  ))}
                </StaggeredList>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    asChild
                    className="bg-primary hover:bg-primary/90 hover-glow animate-magnetic-hover"
                  >
                    <Link href={project.link}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-primary/20 hover:bg-primary/5 bg-transparent hover-glow animate-magnetic-hover"
                  >
                    <Link href={project.github}>
                      <FiGithub className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredList>
      </div>
    </AnimatedSection>
  );
}
