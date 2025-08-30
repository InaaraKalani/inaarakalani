"use client";

import { POETRY_PREVIEW_LENGTH, PoetryType } from "@/data/poetry.data";
import { cn } from "@/lib/utils";
import { PoetryQueryResult } from "@/sanity/lib/types";
import { Calendar, ChevronDown, ChevronUp, Music, PenTool } from "lucide-react";
import { useRef, useState } from "react";
import { AnimatedSection } from "../ui/animated-section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { StaggeredList } from "../ui/staggered-list";

const getPreviewContent = (content: string) => {
  if (content.length <= POETRY_PREVIEW_LENGTH) return content;

  // Find the last complete line within the preview length
  const preview = content.substring(0, POETRY_PREVIEW_LENGTH);
  const lastNewlineIndex = preview.lastIndexOf("\n");

  if (lastNewlineIndex > POETRY_PREVIEW_LENGTH * 0.5) {
    return preview.substring(0, lastNewlineIndex);
  }

  return preview + "...";
};

const PoetryCard = ({ piece }: { piece: PoetryQueryResult[number] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const onCollapse = () => {
    if (ref.current) {
      const yOffset = -50;
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y });
    }
  };

  const needsReadMore = piece.content!.length > POETRY_PREVIEW_LENGTH;

  return (
    <Card
      ref={ref}
      className="relative border-primary/10 hover:border-primary/20 transition-colors hover-lift h-full group overflow-hidden"
    >
      <CardHeader>
        {/* Icon, Title, Year, and Type Badge */}
        <div className="flex items-start justify-between mb-4">
          {/* Icon, Title, and Year */}
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 hover-rotate",
                piece.type === PoetryType.Poetry
                  ? "bg-primary/10"
                  : "bg-accent/10"
              )}
            >
              {piece.type === PoetryType.Poetry ? (
                <PenTool className="h-5 w-5 text-primary group-hover:animate-wiggle" />
              ) : (
                <Music className="h-5 w-5 text-accent group-hover:animate-wiggle" />
              )}
            </div>

            {/* Title and Year */}
            <div>
              <CardTitle className="text-xl mb-1">{piece.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {piece.createdAt}

                {/* Type Badge */}
                <span className="sm:hidden">
                  <span className="mr-2">•</span>
                  {piece.type === PoetryType.Poetry ? "Poetry" : "Song Lyrics"}
                </span>
              </div>
            </div>
          </div>

          {/* Type Badge */}
          <Badge
            className="hidden sm:flex"
            variant={piece.type === PoetryType.Poetry ? "primary" : "accent"}
          >
            {piece.type === PoetryType.Poetry ? "Poetry" : "Song Lyrics"}
          </Badge>
        </div>

        {/* Tags */}
        <StaggeredList className="flex flex-wrap gap-2" staggerDelay={100}>
          {piece.tags?.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant="muted"
              className="text-xs hover-scale"
            >
              {tag}
            </Badge>
          ))}
        </StaggeredList>
      </CardHeader>

      <CardContent>
        <div className="prose prose-sm max-w-none">
          <div
            className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out",
              isExpanded ? "opacity-100" : "opacity-100"
            )}
          >
            {/* Content */}
            <pre
              className={cn(
                "whitespace-pre-wrap font-serif text-sm leading-relaxed text-muted-foreground transition-all duration-500 ease-in-out",
                isExpanded ? "max-h-none" : "max-h-32"
              )}
              style={{
                transform: isExpanded ? "translateY(0)" : "translateY(0)",
                opacity: 1,
              }}
            >
              {isExpanded ? piece.content : getPreviewContent(piece.content!)}
            </pre>

            {/* Fade overlay for collapsed state */}
            {needsReadMore && !isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-16 -z-10 bg-gradient-to-t from-card to-transparent pointer-events-none" />
            )}
          </div>
        </div>
      </CardContent>

      {/* Read More/Less Button */}
      <CardFooter className="justify-center">
        {needsReadMore && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setIsExpanded(!isExpanded);
              if (isExpanded) onCollapse();
            }}
            className="group/btn w-32"
          >
            {isExpanded ? (
              <>
                <span>Read Less</span>
                <ChevronUp className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
              </>
            ) : (
              <>
                <span>Read More</span>
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-y-0.5" />
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default function PoetryFeaturedSection({
  poetry,
}: {
  poetry: PoetryQueryResult;
}) {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <AnimatedSection className="container" animation="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter leading-normal sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Poetry & Song Lyrics
            </h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
              I have been writing poetry ever since I can remember. At some
              point, my words developed a tune of their own, leading me into a
              story, a song. Though I often try to find words today, I am taken
              by surprise when words find me instead; reminding me how it was
              before I learned the rules of any language.
            </p>
          </div>

          <StaggeredList
            className="columns-1 md:columns-2 gap-8 space-y-8"
            staggerDelay={200}
          >
            {poetry.map((piece, index) => (
              <div key={index} className="break-inside-avoid">
                <PoetryCard piece={piece} />
              </div>
            ))}
          </StaggeredList>
        </div>
      </AnimatedSection>
    </section>
  );
}
