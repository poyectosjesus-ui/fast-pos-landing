"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 bg-[#020617] -z-50" />;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#020617]">
      {/* Absolute dark base to ensure stability */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* Structural Grid representing precision and engineering */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_80%,transparent_100%)]"></div>
      
      {/* 
        Single, extremely subtle, immense deep-blue ambient light to prevent absolute darkness 
        while remaining strictly professional. No moving party orbs.
      */}
      <div className="absolute top-[-20%] left-[10%] w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] rounded-full bg-blue-900/10 blur-[150px] mix-blend-screen" />
    </div>
  );
}
