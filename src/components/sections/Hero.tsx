"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden">
      {/* Enhanced Animated Blobs */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/4 w-[700px] h-[700px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000" />

      {/* Main Content */}
      <div className="z-10 text-center flex flex-col items-center px-4 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-default"
        >
          {/* Main title */}
          <h1 className="text-7xl sm:text-8xl md:text-[11rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 drop-shadow-2xl select-none leading-none">
            Hola<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">.</span>
          </h1>
          {/* Hover glow behind text */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-blue-500/0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-xl md:text-2xl text-slate-300 max-w-2xl font-light tracking-wide"
        >
          The dynamic, lightning-fast POS solution for modern businesses. Escanea, cobra y controla en segundos.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
        >
          <MagneticButton variant="primary">
            Get Started For Free
          </MagneticButton>
          <MagneticButton variant="secondary">
            Request a Demo
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
