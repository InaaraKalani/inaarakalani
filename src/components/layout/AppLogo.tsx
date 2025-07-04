import { Code } from "lucide-react";
import Link from "next/link";

export default function AppLogo() {
  return (
    <Link href="/" className="flex items-center justify-center hover-scale">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground animate-morph">
        <Code className="h-4 w-4" />
      </div>
      <span className="ml-2 font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
        Portfolio
      </span>
    </Link>
  );
}
