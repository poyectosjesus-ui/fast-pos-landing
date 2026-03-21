"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Clock, LineChart, Package, Users, Wallet, AlertCircle } from "lucide-react";

const problems = [
  { icon: Clock, text: "Losing hours closing the register daily.", col: "md:col-span-2" },
  { icon: AlertCircle, text: "Unrecorded cash discrepancies.", col: "md:col-span-1" },
  { icon: Users, text: "Customers tired of waiting in line.", col: "md:col-span-1" },
  { icon: Package, text: "Inventory sync failures.", col: "md:col-span-2" },
];

export function BentoProblem() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white"
        >
          Is this happening to you?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 mt-4 text-lg"
        >
          Slow legacy systems are costing you money and reputation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((prob, i) => (
          <GlassCard 
            key={i}
            className={`group flex items-center gap-6 p-8 transition-colors hover:bg-white/[0.05] ${prob.col}`}
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform duration-500 ease-out">
              <prob.icon className="w-6 h-6 text-red-400" />
            </div>
            <p className="text-xl font-medium text-slate-200">
              {prob.text}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
