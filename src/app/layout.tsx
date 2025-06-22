import type { Metadata } from "next";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Shanieulle - Cos Club ID",
  description:
    "The best time to be awake is when the world sleeps, for in those quiet moments, dreams are built and possibilities come alive.",
  other: {
    "facebook-domain-verification": "tpclrzg64mz2vpbmwz6720urwfoq6y",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <SmoothCursor />
        {children}
      </body>
    </html>
  );
}
