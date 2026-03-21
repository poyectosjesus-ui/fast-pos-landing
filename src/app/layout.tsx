import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { CursorTrailer } from "@/components/ui/CursorTrailer";

export const metadata: Metadata = {
  title: "Fast POS | The intelligent operating system for your business",
  description: "A system that automates everything. No complications, no slow setups. Just pure speed and control with Deep Glassmorphism Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className="bg-[#020617] text-white min-h-screen selection:bg-indigo-500/30">
        <CursorTrailer />
        {children}
      </body>
    </html>
  );
}
