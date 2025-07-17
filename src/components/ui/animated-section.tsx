"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { ComponentProps, ReactNode } from "react";

interface AnimatedSectionProps extends ComponentProps<"div"> {
  children: ReactNode;
  className?: string;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "scale"
    | "flip"
    | "slide-up"
    | "reveal";
  delay?: number;
  duration?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  ...props
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const getAnimationClass = () => {
    const baseClass = isVisible ? "animate-in" : "animate-out";
    return `${baseClass} ${animation} duration-${Math.round(
      duration * 1000
    )} delay-${delay}`;
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}s`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
