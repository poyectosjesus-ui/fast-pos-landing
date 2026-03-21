"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { IconBolt, IconDeviceMobile, IconCircleCheckFilled } from "@tabler/icons-react";

export function SolutionShowcase() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-32">
      <div className="text-center mb-24">
        <motion.div
           initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
           whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-6 inline-block shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(37,99,235,0.15)]">
            The Solution
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 line-clamp-1 pb-2">Fast POS</span>.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A system that automates everything. No complications, no slow setups. Just pure speed and control.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassCard className="group border-t-blue-500/20">
          <IconBolt className="w-10 h-10 text-blue-400 mb-6 group-hover:text-white transition-colors drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
          <h3 className="text-2xl font-semibold text-white mb-3">Lightning Fast</h3>
          <p className="text-slate-400 leading-relaxed">
            Scan and checkout in under 30 seconds. Keep your lines moving and your customers smiling.
          </p>
        </GlassCard>

        <GlassCard className="group relative overflow-hidden border-t-purple-500/20">
          {/* Subtle gradient glow specific to this premium card */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <IconDeviceMobile className="relative z-10 w-10 h-10 text-purple-400 mb-6 group-hover:text-white transition-colors drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]" />
          <h3 className="relative z-10 text-2xl font-semibold text-white mb-3">Mobile First</h3>
          <p className="relative z-10 text-slate-400 leading-relaxed">
            Monitor your live sales and manage inventory from anywhere in the world right from your phone.
          </p>
        </GlassCard>

        <GlassCard className="group border-t-green-500/20">
          <IconCircleCheckFilled className="w-10 h-10 text-green-400 mb-6 group-hover:text-white transition-colors drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
          <h3 className="text-2xl font-semibold text-white mb-3">Error Free</h3>
          <p className="text-slate-400 leading-relaxed">
            Automated register closures and exact tracking. Every penny is accounted for seamlessly.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
