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

import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <AnimatedBackground />
      
      {/* Texture Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      ></div>

      {/* Navigation (Placeholder) */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#020617]/40 backdrop-blur-xl border-b border-white/5">
        <div className="text-2xl font-bold tracking-tight">
          FAST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">POS</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="/ui-kit" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">UI Kit ✨</a>
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
