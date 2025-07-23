import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { ParticleSystem } from "../ui/particle-system";
import { ThemeToggle } from "../ui/theme-toggle";
import AppLogo from "./AppLogo";
import { heroSocialLinks, navLinks } from "@/lib/app.data";
import { StaggeredList } from "../ui/staggered-list";
import Link from "next/link";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="size-[1.2rem]" />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        data-vaul-drawer-direction="right"
        className="bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60 shadow-sm"
      >
        <ParticleSystem />

        <DrawerHeader className="flex-row items-center justify-between border-b border-border bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60 h-16 py-0">
          <div onClick={() => setIsOpen(false)}>
            <AppLogo />

            <DrawerTitle className="sr-only">Navigation</DrawerTitle>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-[1.2rem]" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        {/* Navigation */}
        <nav className="px-4 py-6">
          <StaggeredList className="flex flex-col gap-2" staggerDelay={100}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                className="w-full justify-start py-5"
                asChild
              >
                <Link
                  href={link.url}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              </Button>
            ))}
          </StaggeredList>
        </nav>

        {/* Social Links */}
        <DrawerFooter className="border-t border-border">
          <StaggeredList
            className="flex gap-4 justify-center"
            staggerDelay={100}
          >
            {heroSocialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className="text-muted-foreground hover:text-primary transition-colors hover-scale"
              >
                <link.icon className="size-5" />
                <span className="sr-only">{link.label}</span>
              </Link>
            ))}
          </StaggeredList>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
