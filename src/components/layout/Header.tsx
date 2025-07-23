"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredList } from "@/components/ui/staggered-list";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navLinks } from "@/lib/app.data";
import Link from "next/link";
import { useState } from "react";
import AppLogo from "./AppLogo";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60">
      <AnimatedSection
        className={cn("container flex items-center h-16")}
        animation="fade-down"
        duration={0.6}
      >
        <AppLogo
          className={cn(
            "transition-opacity duration-300",
            isSidebarOpen && "opacity-0"
          )}
        />

        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <StaggeredList
            className="flex items-center gap-4 sm:gap-6"
            staggerDelay={100}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-text-glow"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            </div>
          </StaggeredList>
        </nav>
      </AnimatedSection>
    </header>
  );
}
