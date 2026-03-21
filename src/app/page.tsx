"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <main className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#020617]">
      {/* Background Animated Blobs using custom CSS classes */}
      <div className="absolute top-1/4 -left-12 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-1/4 -right-12 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

      {/* Interactive Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      {/* Grain texture overlay for premium feel */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Main Content */}
      <div className="z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1], // Custom extremely smooth ease-out
          }}
          className="relative group cursor-default"
        >
          {/* Main text - The "Hola" */}
          <h1 className="text-8xl md:text-[14rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 drop-shadow-lg select-none">
            Hola<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">.</span>
          </h1>
          
          {/* Hover glow effect strictly behind the text */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-fuchsia-500/20 to-blue-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
        </motion.div>
        
        {/* Subtle decorative line below */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          className="h-[1px] w-24 md:w-48 mx-auto mt-6 bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-40"
        />
        
        {/* Subtle glowing orb under the line */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
          className="w-16 h-[2px] mt-0 bg-white blur-[4px]"
        />
      </div>
    </main>
  );
}
