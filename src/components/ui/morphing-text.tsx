"use client";

import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface MorphingTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  erasingSpeed?: number;
  pauseDuration?: number;
}

export function MorphingText({
  texts,
  className = "",
  typingSpeed = 100,
  erasingSpeed = 50,
  pauseDuration = 1500,
}: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible || texts.length === 0) return;

    const currentFullText = texts[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      // Typing phase
      if (currentText.length < currentFullText.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause before erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      // Erasing phase
      if (currentText.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, erasingSpeed);
      } else {
        // Finished erasing, move to next text
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [
    currentText,
    currentIndex,
    isTyping,
    texts,
    typingSpeed,
    erasingSpeed,
    pauseDuration,
    isVisible,
  ]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // Slightly different from typical 500ms for more natural feel

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span ref={ref} className={`${className} inline-flex items-center`}>
      <span className="min-h-[1em]">{currentText}</span>
      <span
        className={`ml-0.5 w-0.5 bg-current transition-opacity duration-100 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
        style={{ height: "1em" }}
      />
    </span>
  );
}
