"use client";

import type * as React from "react";
import { Attribute, ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: Attribute | Attribute[];
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return children;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
