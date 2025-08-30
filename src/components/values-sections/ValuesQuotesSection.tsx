"use client";

import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import { AnimatedSection } from "../ui/animated-section";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useRef } from "react";
import { QuotesQueryResult } from "@/sanity/lib/types";

type props = { quotes: QuotesQueryResult };

export default function ValuesQuotesSection({ quotes }: props) {
  const autoplay = useRef(Autoplay({ delay: 10000, stopOnInteraction: false }));

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <AnimatedSection className="container" animation="slide-up">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold leading-normal tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Words That Shaped My Ideals
          </h2>
          <p className="text-muted-foreground sm:text-lg">
            A collection of voices and truths that continue to inspire,
            challenge, and shape the way I see the world.
          </p>
        </div>

        <div className="md:px-12 mt-6">
          <Carousel
            className="w-full max-w-4xl mx-auto"
            plugins={[autoplay.current]}
            opts={{ loop: true }}
            onMouseEnter={() => autoplay.current.stop()}
            onMouseLeave={() => autoplay.current.play()}
          >
            <CarouselContent>
              {quotes.map((quote, index) => (
                <CarouselItem className="flex" key={index}>
                  <Card
                    className={cn(
                      "border-primary/10 hover:border-primary/20 transition-all ease-in-out",
                      "flex-1 flex flex-col items-center justify-center text-center",
                      "min-h-[363px]"
                    )}
                  >
                    <CardContent className="space-y-2 px-4 sm:px-8">
                      {/* Quote Icon */}
                      <div className="flex size-12 items-center justify-center rounded-full border border-primary/20 hover-rotate mx-auto">
                        <Quote className="size-6 text-primary animate-pulse-glow" />
                      </div>

                      {/* Heading */}
                      <CardTitle className="text-xl sm:text-2xl font-semibold text-primary animate-fade-up">
                        {quote.heading}
                      </CardTitle>

                      {/* quote */}
                      <CardDescription
                        className={cn(
                          "text-base sm:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-100 whitespace-pre-line mx-auto",
                          quote.maxwidth
                        )}
                      >
                        <blockquote>“{quote.quote}”</blockquote>
                      </CardDescription>

                      {/* Author */}
                      <p className="text-sm sm:text-lg text-accent/80 animate-fade-up delay-200">
                        — {quote.author}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
            <CarouselDots className="mt-6" slides={quotes.length} />
          </Carousel>
        </div>
      </AnimatedSection>
    </section>
  );
}
