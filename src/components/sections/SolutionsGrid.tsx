"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const solutions = [
  { emoji: "🛒", label: "Abarrotes y Minisúper", color: "emerald", href: "/soluciones/abarrotes", desc: "Velocidad en cada cobro y control de inventario masivo." },
  { emoji: "⚕️", label: "Farmacias", color: "cyan", href: "/soluciones/farmacias", desc: "Lotes, caducidades y búsqueda por sustancia activa." },
  { emoji: "👗", label: "Boutiques y Ropa", color: "rose", href: "/soluciones/boutiques", desc: "Variantes de talla/color y cálculo de comisiones." },
  { emoji: "🔧", label: "Ferreterías", color: "amber", href: "/soluciones/ferreterias", desc: "Unidades complejas, crédito a contratistas y cotizaciones." },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", glow: "group-hover:shadow-emerald-200/60" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200", glow: "group-hover:shadow-cyan-200/60" },
  rose: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200", glow: "group-hover:shadow-rose-200/60" },
  amber: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", glow: "group-hover:shadow-amber-200/60" },
};

export function SolutionsGrid() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24 z-10">
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3"
        >
          Soluciones por Industria
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight"
        >
          Diseñado para tu tipo de negocio.
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {solutions.map((s, i) => {
          const c = colorClasses[s.color];
          return (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={s.href}
                className={`group flex flex-col p-6 rounded-[1.75rem] border bg-white/70 backdrop-blur-xl shadow-md hover:shadow-xl ${c.glow} hover:-translate-y-1.5 transition-all duration-300 h-full ${c.border}`}
              >
                <span className="text-4xl mb-4">{s.emoji}</span>
                <h3 className={`text-lg font-black mb-2 ${c.text}`}>{s.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{s.desc}</p>
                <span className={`mt-4 text-xs font-bold ${c.text} flex items-center gap-1`}>Ver solución →</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
