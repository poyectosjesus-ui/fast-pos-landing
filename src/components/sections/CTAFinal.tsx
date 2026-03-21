"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

export function CTAFinal() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-32 mt-12 mb-20 overflow-hidden rounded-[3rem] border border-white/10">
      {/* Intense animated gradient mesh background inside the CTA */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#020617] to-purple-900/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen animate-blob pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8"
        >
          Ready to scale?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-slate-400 max-w-2xl mb-12"
        >
          Stop losing money due to slow operations. Join thousands of merchants who upgraded their registers to Fast POS today.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           viewport={{ once: true }}
           className="relative group inline-block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <MagneticButton className="px-12 py-5 text-lg">
            Schedule a Free Demo
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
