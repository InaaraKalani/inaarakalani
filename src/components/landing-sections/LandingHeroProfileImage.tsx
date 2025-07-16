"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function LandingHeroProfileImage() {
  const { theme } = useTheme();
  return (
    <Image
      src={
        theme === "dark"
          ? "/profile/profile-closeup-dark.jpeg"
          : "/profile/profile-closeup.jpeg"
      }
      width="400"
      height="400"
      alt="Profile"
      className="relative aspect-square overflow-hidden rounded-full object-cover border-4 border-border hover:border-background transition-all shadow-2xl hover-glow animate-morph"
    />
  );
}
