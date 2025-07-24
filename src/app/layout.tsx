import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/layout/CTASection";

export const metadata: Metadata = {
  title: "Inaara Kalani | Portfolio",
  description:
    "Explore Inaara Kalani’s portfolio — showcasing 4+ years of web development experience, full-stack projects, creative solutions, and personal values.",
  authors: [{ name: "Inaara Kalani" }],
  keywords: [
    "Inaara Kalani",
    "web developer",
    "full-stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "portfolio",
    "projects",
    "frontend",
    "backend",
    "values",
    "creativity",
  ],
  openGraph: {
    title: "Inaara Kalani | Portfolio",
    description:
      "Explore Inaara Kalani’s portfolio — showcasing 4+ years of web development experience, full-stack projects, creative solutions, and personal values.",
    url: "https://inaarakalani.vercel.app",
    siteName: "Inaara Kalani Portfolio",
    images: [
      {
        url: "/profile/profile-closeup.jpeg",
        width: 1200,
        height: 630,
        alt: "Inaara Kalani Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inaara Kalani | Portfolio",
    description:
      "Explore Inaara Kalani’s portfolio — showcasing 4+ years of web development experience, full-stack projects, creative solutions, and personal values.",
    images: ["/profile/profile-closeup.jpeg"],
    // creator: "@yourTwitterHandle",
  },
  robots: {
    index: true,
    follow: true,
  },
  // alternates: {
  //   canonical: "https://inaarakalani.com",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-background to-muted/20 scrollbar-thin">
            <Header />
            <div className="flex-1">{children}</div>
            <CTASection />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
