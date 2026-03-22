"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "../ui/FeatureCard";
import { IconClockOff, IconEyeOff, IconHourglassEmpty, IconPackageOff, IconCashOff, IconFileOff } from "@tabler/icons-react";

const problems = [
  { icon: <IconClockOff className="text-slate-400" stroke={1.5} />, title: "Cierres Lentos", desc: "Pierdes 2 horas cerrando caja al final del día.", col: "md:col-span-1" },
  { icon: <IconEyeOff className="text-slate-400" stroke={1.5} />, title: "Ceguera Financiera", desc: "Nunca sabes exactamente cuánto ganaste realmente.", col: "md:col-span-1" },
  { icon: <IconHourglassEmpty className="text-slate-400" stroke={1.5} />, title: "Filas Eternas", desc: "Tus clientes se desesperan esperando mucho en la fila.", col: "md:col-span-1" },
  { icon: <IconPackageOff className="text-slate-400" stroke={1.5} />, title: "Inventario Cero", desc: "No controlas bien tu mercancía y aparecen faltantes.", col: "md:col-span-1" },
  { icon: <IconCashOff className="text-slate-400" stroke={1.5} />, title: "Dinero Perdido", desc: "El dinero no te cuadra y no sabes por qué.", col: "md:col-span-1" },
  { icon: <IconFileOff className="text-slate-400" stroke={1.5} />, title: "Deudas Olvidadas", desc: "Olvidas cuánto crédito le diste a tus clientes.", col: "md:col-span-1" },
];

export function BentoProblem() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          ¿Te Pasa Esto en Tu Negocio?
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-medium text-lg"
        >
          <span>✓</span>
          Lo bueno: Existe una solución. Y es más fácil de lo que crees.
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((prob, i) => (
          <FeatureCard 
            key={i}
            icon={prob.icon}
            title={prob.title}
            description={prob.desc}
            className={prob.col}
          />
        ))}
      </div>
    </section>
  );
}
