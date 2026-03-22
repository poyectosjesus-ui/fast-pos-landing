"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50">
      {/* Soft Light Mode Ambient Glows \*/}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px] mix-blend-multiply" />
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[40%] bg-indigo-400/10 rounded-full blur-[100px] mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-300/10 rounded-full blur-[120px] mix-blend-multiply" />
      
      {/* Subtle Light Structural Grid */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)'
        }}
      />
    </div>
  );
}
