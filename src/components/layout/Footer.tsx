import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center border-t border-border bg-muted/30">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Inaara Kalani. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
