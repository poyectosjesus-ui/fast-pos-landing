"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { IconBarcode, IconCreditCard, IconReceipt } from "@tabler/icons-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: IconBarcode,
      title: "Scan Items",
      desc: "Instantly recognize barcodes using your camera or scanner.",
    },
    {
      num: "02",
      icon: IconCreditCard,
      title: "Select Payment",
      desc: "Process cards, cash, or credit effortlessly.",
    },
    {
      num: "03",
      icon: IconReceipt,
      title: "Done",
      desc: "Receipt generated. Sales recorded automatically.",
    },
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white"
        >
          3 Steps to Magic
        </motion.h2>
      </div>

      <div className="relative flex flex-col md:flex-row gap-8 md:gap-4 items-start justify-between">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-[100px] left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        {steps.map((step, i) => (
          <GlassCard key={i} className="relative z-10 w-full md:w-1/3 flex flex-col items-center text-center group">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-8 relative shadow-[0_0_30px_rgba(37,99,235,0.2)] group-hover:border-blue-500/50 transition-colors"
            >
              <span className="absolute -top-4 -right-4 text-4xl font-black text-white/5 select-none">{step.num}</span>
              <step.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
            <p className="text-slate-400 leading-relaxed">{step.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
