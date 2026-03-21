"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

const benefits = [
  { num: "40%", label: "Faster checkouts" },
  { num: "2h", label: "Saved daily on closing" },
  { num: "100%", label: "Inventory accuracy" },
  { num: "$0", label: "Unaccounted losses" },
  { num: "24/7", label: "Cloud mobile access" },
  { num: "∞", label: "Happy customers" },
];

export function BenefitsGrid() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white"
        >
          What you gain
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit, i) => (
          <GlassCard 
            key={i}
            className="flex flex-col items-center justify-center p-12 text-center group"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-4 group-hover:scale-110 transition-transform duration-500"
            >
              {benefit.num}
            </motion.div>
            <p className="text-slate-400 font-medium text-lg">
              {benefit.label}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
