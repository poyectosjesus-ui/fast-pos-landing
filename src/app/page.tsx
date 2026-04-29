"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { BentoProblem } from "@/components/sections/BentoProblem";
import { SolutionShowcase } from "@/components/sections/SolutionShowcase";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
// import { SocialProof } from "@/components/sections/SocialProof";
import { Pricing } from "@/components/sections/Pricing";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { siteConfig } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Fast POS",
  "operatingSystem": "Windows",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "499.00",
    "highPrice": "2999.00",
    "priceCurrency": "MXN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "124"
  },
  "description": "Sistema de Punto de Venta 100% instalable, rápido y seguro. Sin requerir conexión a internet ni rentas mensuales."
};

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatedBackground />
      
      {/* Texture Overlay (Hidden on mobile for performance) */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay hidden md:block"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      ></div>



      {/* Sections */}
      <div className="w-full z-10 flex flex-col gap-20 pb-0">
        <Hero />
        <div id="caracteristicas" className="flex flex-col gap-20 pt-20 -mt-20">
          <BentoProblem />
          {/* <SolutionShowcase /> - Comentado temporalmente por ser confuso visualmente */}
          <BenefitsGrid />
          <HowItWorks />
        </div>
        <div id="inversion" className="pt-20 -mt-20">
          {/* <SocialProof /> - Comentado temporalmente hasta tener clientes reales */}
          <Pricing />
        </div>
        <CTAFinal />
        <Footer />
      </div>
    </main>
  );
}
