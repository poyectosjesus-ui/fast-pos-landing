"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { BentoProblem } from "@/components/sections/BentoProblem";
import { SolutionShowcase } from "@/components/sections/SolutionShowcase";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { PricingCards } from "@/components/sections/PricingCards";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-start overflow-hidden bg-[#020617] min-h-screen">
      
      {/* Interactive Global Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.04), transparent 40%)`,
        }}
      />

      {/* Grain texture overlay for premium feel */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* Navigation (Placeholder) */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#020617]/40 backdrop-blur-xl border-b border-white/5">
        <div className="text-2xl font-bold tracking-tight">
          FAST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">POS</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Demo</a>
        </div>
        <button className="text-sm font-medium px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
          Login
        </button>
      </nav>

      {/* Sections */}
      <div className="w-full z-10 flex flex-col gap-20 pb-0">
        <Hero />
        <BentoProblem />
        <SolutionShowcase />
        <BenefitsGrid />
        <HowItWorks />
        <SocialProof />
        <PricingCards />
        <CTAFinal />
        <Footer />
      </div>
    </main>
  );
}
