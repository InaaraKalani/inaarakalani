"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { type ReactNode, Children } from "react";

interface StaggeredListProps {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
}

export function StaggeredList({
  children,
  className = "",
  itemClassName = "",
  staggerDelay = 100,
}: StaggeredListProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-30px",
  });

  const childrenArray = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ${itemClassName} ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
