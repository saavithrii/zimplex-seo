 import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-inter", // keeping the same variable name to avoid changing css everywhere
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zimplex SEO — Rank Higher. Grow Faster.",
  description: "SEO that helps you dominate search and shape the future of your brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
