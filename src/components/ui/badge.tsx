import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const variant = {
  primary: "bg-primary/10 text-primary [a&]:hover:bg-transparent",
  accent: "bg-accent/10 text-accent [a&]:hover:bg-transparent",
  secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-transparent",
  destructive:
    "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline:
    "border text-foreground border-border [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
  ghost: "bg-transparent text-foreground [a&]:hover:bg-transparent",
  blue: "border bg-light-blue/80 text-blue border-blue/40 backdrop-blur-sm",
  purple:
    "border bg-light-purple/80 text-purple border-purple/40 backdrop-blur-sm",
  orange:
    "border bg-light-orange/80 text-orange border-orange/40 backdrop-blur-sm",
};

const badgeVariants = cva(
  "hover-scale cursor-pointer inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: { variant },
    defaultVariants: {
      variant: "outline",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
