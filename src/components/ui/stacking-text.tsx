"use client";

import { useEffect, useRef, useState } from "react";
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
  const lineRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const [lines, setLines] = useState<TextLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetting, setResetting] = useState(false);
  const [hiddenHeight, setHiddenHeight] = useState(0);

  const allComplete =
    texts.length > 0 &&
    lines.length === texts.length &&
    lines.every((l) => l.isComplete);

  // Add new lines
  useEffect(() => {
    if (texts.length === 0 || resetting || lines.length === texts.length)
      return;

    const timer = setTimeout(
      () => {
        const newLine: TextLine = {
          id: Date.now(),
          text: texts[currentIndex],
          currentText: "",
          isComplete: false,
        };
        setLines((prev) => [...prev, newLine]);
        setCurrentIndex((i) => (i + 1) % texts.length);
      },
      lines.length === 0 ? 0 : linePauseDuration
    );

    return () => clearTimeout(timer);
  }, [texts, lines, currentIndex, resetting, linePauseDuration]);

  // Measure height of hidden lines
  useEffect(() => {
    const visibleStart = Math.max(0, lines.length - maxVisibleLines);
    let total = 0;

    for (let i = 0; i < visibleStart; i++) {
      const el = lineRefs.current.get(lines[i].id);
      if (el) total += el.offsetHeight;
    }

    setHiddenHeight(total);
  }, [lines, maxVisibleLines]);

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

  // Trigger fade-out after all complete
  useEffect(() => {
    if (!allComplete) return;

    const timer = setTimeout(() => setResetting(true), resetDelay);
    return () => clearTimeout(timer);
  }, [allComplete, resetDelay]);

  // Reset after fade-out
  useEffect(() => {
    if (!resetting) return;

    const timer = setTimeout(() => {
      setLines([]);
      setCurrentIndex(0);
      setResetting(false);
    }, resetDelay / 2);

    return () => clearTimeout(timer);
  }, [resetting, resetDelay]);
  const lineHeightRem = 2.25;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ minHeight: `${lineHeightRem * maxVisibleLines * 2}rem` }}
    >
      <div
        className={cn(
          "transition-opacity transform-gpu duration-500 ease-in-out",
          resetting && "opacity-0"
        )}
        style={{
          transform: `translateY(-${hiddenHeight}px)`,
          marginBottom: `-${hiddenHeight}px`,
          transition: "transform 0.6s ease-in-out, opacity 0.5s ease-in-out",
        }}
      >
        {lines.map((line, index) => {
          const isHidden = index < lines.length - maxVisibleLines;
          const isTyping = index === lines.length - 1 && !line.isComplete;

          return (
            <div
              key={line.id}
              ref={(el) => {
                if (el) lineRefs.current.set(line.id, el);
                else lineRefs.current.delete(line.id); // Clean up on unmount
              }}
              className={cn(
                "transition-opacity duration-500",
                isHidden ? "opacity-0" : "opacity-100"
              )}
            >
              <span className="inline break-words">
                {line.currentText}
                {isTyping && (
                  <span className="animate-pulse select-none">|</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
