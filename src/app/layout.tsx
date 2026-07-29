import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-inter", // keeping the same variable name to avoid changing css everywhere
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramos Analytics",
  description: "Analytics that helps you shape the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
