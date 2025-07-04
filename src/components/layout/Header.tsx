import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredList } from "@/components/ui/staggered-list";
import { Code } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60">
      <AnimatedSection animation="fade-down" duration={0.6}>
        <div className="container flex h-16 items-center px-4 lg:px-6">
          <Link
            href="/"
            className="flex items-center justify-center hover-scale animate-magnetic-hover"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground animate-morph">
              <Code className="h-4 w-4" />
            </div>
            <span className="ml-2 font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
              Portfolio
            </span>
          </Link>
          <nav className="ml-auto flex items-center gap-4 sm:gap-6">
            <StaggeredList
              className="flex items-center gap-4 sm:gap-6"
              staggerDelay={100}
            >
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-glow"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-glow"
              >
                Projects
              </Link>
              <Link
                href="#achievements"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-glow"
              >
                Achievements
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-glow"
              >
                Contact
              </Link>
              <ThemeToggle />
            </StaggeredList>
          </nav>
        </div>
      </AnimatedSection>
    </header>
  );
}
