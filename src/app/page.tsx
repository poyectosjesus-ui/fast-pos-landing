"use client";

import { Hero } from "@/components/sections/Hero";
import { BentoProblem } from "@/components/sections/BentoProblem";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Fast POS",
  "operatingSystem": "Windows, macOS, Linux",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "1499.00",
    "highPrice": "3499.00",
    "priceCurrency": "MXN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "124"
  },
  "description": "Sistema de Punto de Venta 100% instalable, rápido y seguro. Funciona sin internet y se sincroniza con la nube automáticamente."
};

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatedBackground />

      <div className="relative w-full z-10 flex flex-col gap-0 pb-0">
        <Hero />
        <BentoProblem />
        <SolutionsGrid />
        <BenefitsGrid />
        <HowItWorks />
        <CTAFinal />
        <Footer />
      </div>
    </main>
  );
}
