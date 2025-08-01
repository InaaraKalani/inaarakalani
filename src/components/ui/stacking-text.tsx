"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StackingTextProps {
  texts: string[];
  linePauseDuration?: number;
  resetDelay?: number;
  typingSpeed?: number;
  maxVisibleLines?: number;
  className?: string;
}

interface TextLine {
  id: number;
  text: string;
  currentText: string;
  isComplete: boolean;
}

export function StackingText({
  texts,
  linePauseDuration = 400,
  resetDelay = 1000,
  typingSpeed = 50,
  maxVisibleLines = 3,
  className,
}: StackingTextProps) {
  const [lines, setLines] = useState<TextLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetting, setResetting] = useState(false);

  const allComplete =
    texts.length > 0 &&
    lines.length === texts.length &&
    lines.every((l) => l.isComplete);

  // Add new lines
  useEffect(() => {
    if (texts.length === 0 || resetting) return;
    if (lines.length === texts.length) return;

    const timer = setTimeout(
      () => {
        setLines((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: texts[currentIndex],
            currentText: "",
            isComplete: false,
          },
        ]);
        setCurrentIndex((i) => (i + 1) % texts.length);
      },
      lines.length === 0 ? 0 : linePauseDuration
    );

    return () => clearTimeout(timer);
  }, [lines, texts, currentIndex, linePauseDuration, resetting]);

  // Typing animation
  useEffect(() => {
    if (!lines.length || resetting) return;

    const lastLine = lines[lines.length - 1];
    if (lastLine.isComplete) return;

    const timer = setTimeout(() => {
      setLines((prev) => {
        const updated = [...prev];
        const line = updated[updated.length - 1];
        const nextChar = line.text[line.currentText.length];

        if (nextChar) {
          line.currentText += nextChar;
        } else {
          line.isComplete = true;
        }

        return updated;
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [lines, typingSpeed, resetting]);

  // Trigger fade-out of all after complete
  useEffect(() => {
    if (!allComplete) return;

    const timer = setTimeout(() => {
      setResetting(true);
    }, resetDelay);

    return () => clearTimeout(timer);
  }, [allComplete, resetDelay]);

  // Reset all after fade
  useEffect(() => {
    if (!resetting) return;

    const timer = setTimeout(() => {
      setLines([]);
      setCurrentIndex(0);
      setResetting(false);
    }, resetDelay / 2);

    return () => clearTimeout(timer);
  }, [resetting, resetDelay]);

  // Shift container upward visually
  const visibleOffset = Math.max(0, lines.length - maxVisibleLines);
  const lineHeightRem = 2.25;

  return (
    <div
      className={cn(`relative overflow-hidden`, className)}
      style={{ minHeight: `${lineHeightRem * maxVisibleLines}rem` }}
    >
      <div
        className={cn(
          "transition-opacity duration-500 ease-in-out transform-gpu",
          resetting && "opacity-0"
        )}
        style={{
          transform: `translateY(-${visibleOffset * lineHeightRem}rem)`,
          transition: "transform 0.6s ease-in-out, opacity 0.5s ease-in-out",
          marginBottom: `-${visibleOffset * lineHeightRem}rem`,
        }}
      >
        {lines.map((line, index) => {
          const isHidden = index < lines.length - maxVisibleLines;
          const isTyping = index === lines.length - 1 && !line.isComplete;

          return (
            <div
              key={line.id}
              className={cn(
                "transition-opacity duration-500",
                isHidden ? "opacity-0" : "opacity-100",
                "h-[2.25rem]"
              )}
            >
              <span className="inline-flex items-center">
                {line.currentText}
                {isTyping && (
                  <span className="ml-1 w-0.5 h-5 bg-current animate-pulse" />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
