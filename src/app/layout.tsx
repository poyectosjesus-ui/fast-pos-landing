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
import { Navbar } from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://novecientoszero.com"),
  title: "Fast POS | Punto de Venta Local Sin Rentas Mensuales",
  description: "Sistema de Punto de Venta rápido, seguro y 100% instalable en Pachuca. Olvídate de las rentas mensuales y de depender del internet para cobrar en tu negocio.",
  openGraph: {
    title: "Fast POS | Tu Punto de Venta Ideal",
    description: "La alternativa definitiva para abarrotes: Cero Rentas y Funciona sin Internet. Administra cajeros, inventarios y sucursales.",
    url: "https://novecientoszero.com",
    siteName: "Fast POS México",
    images: [
      {
        url: "/fastpos.png",
        width: 1200,
        height: 630,
        alt: "Sistema Fast POS",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast POS | Punto de Venta Local Sin Rentas Mensuales",
    description: "Sistema 100% instalable. Olvídate de las rentas mensuales.",
    images: ["/fastpos.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="scroll-smooth"
    >
      <body className="bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-500/30 text-shadow-sm font-sans mx-auto overflow-x-hidden antialiased">
        <CursorTrailer />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
