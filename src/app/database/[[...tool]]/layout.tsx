import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Database | Inaara Kalani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
