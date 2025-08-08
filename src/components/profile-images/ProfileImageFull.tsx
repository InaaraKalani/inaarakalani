"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

type props = { light: string; dark: string };

export default function ProfileImageFull({ light, dark }: props) {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "dark" ? dark : light}
      width="350"
      height="400"
      alt="About Me"
      className="relative aspect-[3/3.6] overflow-hidden rounded-2xl object-cover object-bottom border-4 border-border hover:border-primary/20 transition-all shadow-2xl hover-glow animate-morph"
    />
  );
}
