"use client";

import { favoriteQuotes } from "@/data/values.data";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedSection } from "../ui/animated-section";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function ValuesQuotesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % favoriteQuotes.length);
    }, 8000); // Change every 8 seconds (longer for more content)

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentQuote = favoriteQuotes[currentIndex];

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <AnimatedSection className="container" animation="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-normal tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            The Meaning Behind Words
          </h2>
          <p className="text-muted-foreground text-lg">
            Breaking down the words that shape my beliefs and ideals
          </p>
        </div>

        {/* Carousel Container */}
        <Card className="border-primary/10 hover:border-primary/20 transition-colors hover-lift animate-card-entrance text-center max-w-2xl mx-auto">
          <CardHeader className="space-y-2">
            {/* Quote Icon */}
            <div className="flex size-12 items-center justify-center rounded-full border border-primary/20 hover-rotate mx-auto">
              <Quote className="size-6 text-primary animate-pulse-glow" />
            </div>

            {/* Heading */}
            <CardTitle className="text-2xl font-semibold text-primary animate-fade-up">
              {currentQuote.heading}
            </CardTitle>

            {/* quote */}
            <CardDescription className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-100">
              <blockquote>“{currentQuote.quote}”</blockquote>
            </CardDescription>

            {/* Author */}
            <p className="text-lg text-accent/80 animate-fade-up delay-200">
              — {currentQuote.author}
            </p>
          </CardHeader>
        </Card>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {favoriteQuotes.map((_, index) => (
            <button
              key={index}
              className={cn(
                "size-2 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer",
                index === currentIndex
                  ? "bg-primary/80 shadow-lg scale-125"
                  : "bg-muted-foreground/30 hover:bg-accent/50"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
