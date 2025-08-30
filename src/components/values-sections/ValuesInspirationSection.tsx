"use client";

import { InspirationIcons } from "@/sanity/lib/enums";
import { urlFor } from "@/sanity/lib/image";
import { InspirationsQueryResult } from "@/sanity/lib/types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";
import {
  PiBookOpenTextLight,
  PiBooksLight,
  PiHeartLight,
  PiMicrophoneStageLight,
  PiPenLight,
  PiRocketLight,
} from "react-icons/pi";
import { AnimatedSection } from "../ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type props = {
  inspirations: InspirationsQueryResult;
};

const Icon = ({ icon, className }: { icon: string; className: string }) => {
  switch (icon) {
    case InspirationIcons.satgeMic:
      return <PiMicrophoneStageLight className={className} />;
    case InspirationIcons.pen:
      return <PiPenLight className={className} />;
    case InspirationIcons.books:
      return <PiBooksLight className={className} />;
    case InspirationIcons.rocket:
      return <PiRocketLight className={className} />;
    case InspirationIcons.openBook:
      return <PiBookOpenTextLight className={className} />;
    default:
      return <PiHeartLight className={className} />;
  }
};

export default function ValuesInspirationSection({ inspirations }: props) {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <section className="w-full py-12 md:py-24">
      <AnimatedSection className="container" animation="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Women Who Inspire Me
            </h2>
            <p className="text-muted-foreground sm:text-lg">
              Remarkable women whose stories and achievements motivate my
              journey
            </p>
          </div>
          <div className="md:px-12">
            <Carousel
              plugins={[autoplay.current]}
              opts={{ align: "start", loop: true }}
              onMouseEnter={() => autoplay.current.stop()}
              onMouseLeave={() => autoplay.current.play()}
            >
              <CarouselContent className="-ml-6">
                {inspirations.map((woman, index) => (
                  <CarouselItem
                    className="sm:basis-1/2 lg:basis-1/3 pl-6 pt-12"
                    key={index}
                  >
                    <Card className="mx-3 sm:mx-0 flex flex-col border-primary/10 hover:border-primary/20 transition-colors hover-lift h-full overflow-hidden group pt-0">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <Image
                          src={urlFor(woman.image!).url() || ""}
                          width="500"
                          height="300"
                          alt={woman.name!}
                          className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Name and Title */}
                      <CardHeader className="flex-1 pt">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 hover-rotate shrink-0">
                            <Icon
                              icon={woman.icon || ""}
                              className="h-5 w-5 text-accent group-hover:animate-wiggle"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              {woman.name}
                            </CardTitle>
                            <p className="text-sm text-primary font-medium">
                              {woman.title}
                            </p>
                          </div>
                        </div>
                      </CardHeader>

                      {/* Impact */}
                      <CardContent className="-mt-3">
                        <div className="pt-2 border-t border-border">
                          <p className="text-xs font-medium text-accent">
                            Impact: {woman.impact}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
