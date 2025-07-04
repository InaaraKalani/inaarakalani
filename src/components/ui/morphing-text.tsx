"use client";

import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface MorphingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function MorphingText({
  texts,
  className = "",
  interval = 3000,
}: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval, isVisible]);

  return (
    <span
      ref={ref}
      className={`${className} transition-all duration-300 ${
        isAnimating
          ? "opacity-0 scale-95 blur-sm"
          : "opacity-100 scale-100 blur-0"
      }`}
    >
      {texts[currentIndex]}
    </span>
  );
}
