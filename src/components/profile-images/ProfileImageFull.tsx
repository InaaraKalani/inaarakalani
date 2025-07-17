"use client";

// import { useTheme } from "next-themes";
import Image from "next/image";

export default function ProfileImageFull() {
  // const { theme } = useTheme();
  return (
    <Image
      src={
        "/images/placeholder.svg"
        // theme === "dark"
        //   ? "/profile/profile-full-dark.jpeg"
        //   : "/profile/profile-full.jpeg"
      }
      width="400"
      height="400"
      alt="About Me"
      className="relative aspect-square overflow-hidden rounded-2xl object-cover border-4 border-border hover:border-primary/20 transition-all shadow-2xl hover-glow animate-morph"
    />
  );
}
