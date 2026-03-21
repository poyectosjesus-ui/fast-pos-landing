"use client";

import { motion } from "framer-motion";

export function SocialProof() {
  const stats = [
    { label: "Active Businesses", value: "5,000+" },
    { label: "Uptime guarantee", value: "99.9%" },
    { label: "Discrepancies", value: "0" },
  ];

  return (
    <section className="relative w-full border-y border-white/5 bg-white/[0.01] py-24 my-12 overflow-hidden">
      {/* Background glow for this specific section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-center">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
              {stat.value}
            </div>
            <div className="text-lg font-medium tracking-wide text-green-400/80 uppercase">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
