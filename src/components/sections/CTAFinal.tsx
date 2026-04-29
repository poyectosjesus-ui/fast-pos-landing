"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function CTAFinal() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-20 z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-10 md:p-16 text-center shadow-2xl border border-slate-800"
      >
        {/* Ambient glow */}
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[80%] h-[200%] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <p className="text-blue-400 text-sm font-black uppercase tracking-widest mb-4">¿Listo para dar el salto?</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Profesionaliza tu negocio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">hoy mismo.</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Platicamos contigo 10 minutos y te configuramos Fast-POS en tu negocio el mismo día. Sin contratos, sin letras chiquitas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.links.whatsappSalesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition-all text-lg"
            >
              📱 Hablar por WhatsApp
            </a>
            <Link
              href="/precios"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-2xl border border-white/20 hover:-translate-y-0.5 transition-all text-lg"
            >
              Ver Planes y Precios
            </Link>
          </div>

          <p className="mt-8 text-slate-500 text-sm font-medium">
            📍 Pachuca, Hidalgo · Atendemos toda la República Mexicana
          </p>
        </div>
      </motion.div>
    </section>
  );
}
