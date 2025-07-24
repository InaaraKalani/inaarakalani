"use client";

import { favoriteQuotes } from "@/data/values.data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedSection } from "../ui/animated-section";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export default function ValuesQuotesSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isHovering) return; // Don't auto-play when hovering

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % favoriteQuotes.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovering]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentQuote = favoriteQuotes[currentIndex];

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <AnimatedSection className="container" animation="slide-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-normal tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Words That Shaped My Ideals
          </h2>
          <p className="text-muted-foreground text-lg">
            A collection of voices and truths that continue to inspire,
            challenge, and shape the way I see the world.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          {/* Previous Button */}
          <Button
            className="text-muted-foreground hidden sm:flex"
            variant="ghost"
            size="icon"
            onClick={() =>
              goToSlide(
                currentIndex === 0
                  ? favoriteQuotes.length - 1
                  : currentIndex - 1
              )
            }
          >
            <ChevronLeft className="size-6" />
          </Button>

          {/* Carousel Container */}
          <Card
            key={currentIndex}
            className={cn(
              "border-primary/10 hover:border-primary/20 transition-all ease-in-out hover-lift",
              "flex flex-col items-center justify-center text-center",
              "w-full max-w-4xl min-h-[363px]",
              "animate-in reveal duration-500"
            )}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CardContent className="space-y-2 px-8">
              {/* Quote Icon */}
              <div className="flex size-12 items-center justify-center rounded-full border border-primary/20 hover-rotate mx-auto">
                <Quote className="size-6 text-primary animate-pulse-glow" />
              </div>

              {/* Heading */}
              <CardTitle className="text-xl sm:text-2xl font-semibold text-primary animate-fade-up">
                {currentQuote.heading}
              </CardTitle>

              {/* quote */}
              <CardDescription
                className={cn(
                  "text-base sm:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-100 whitespace-pre-line mx-auto",
                  currentQuote.maxWidth
                )}
              >
                <blockquote>“{currentQuote.quote}”</blockquote>
              </CardDescription>

              {/* Author */}
              <p className="text-sm sm:text-lg text-accent/80 animate-fade-up delay-200">
                — {currentQuote.author}
              </p>
            </CardContent>
          </Card>

          {/* Next Button */}
          <Button
            className="text-muted-foreground hidden sm:flex"
            variant="ghost"
            size="icon"
            onClick={() =>
              goToSlide(
                currentIndex === favoriteQuotes.length - 1
                  ? 0
                  : currentIndex + 1
              )
            }
          >
            <ChevronRight className="size-6" />
          </Button>
        </div>

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
