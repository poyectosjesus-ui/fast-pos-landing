"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "../ui/FeatureCard";
import { IconClockOff, IconEyeOff, IconHourglassEmpty, IconPackageOff, IconCashOff, IconFileOff } from "@tabler/icons-react";

const problems = [
  { icon: <IconClockOff className="text-slate-500" stroke={1.5} />, title: "Cierres Lentos", desc: "Pierdes 2 horas cerrando caja al final del día.", col: "md:col-span-1" },
  { icon: <IconEyeOff className="text-slate-500" stroke={1.5} />, title: "Ceguera Financiera", desc: "Nunca sabes exactamente cuánto ganaste realmente.", col: "md:col-span-1" },
  { icon: <IconHourglassEmpty className="text-slate-500" stroke={1.5} />, title: "Filas Eternas", desc: "Tus clientes se desesperan esperando mucho en la fila.", col: "md:col-span-1" },
  { icon: <IconPackageOff className="text-slate-500" stroke={1.5} />, title: "Inventario Cero", desc: "No controlas bien tu mercancía y aparecen faltantes.", col: "md:col-span-1" },
  { icon: <IconCashOff className="text-slate-500" stroke={1.5} />, title: "Dinero Perdido", desc: "El dinero no te cuadra y no sabes por qué.", col: "md:col-span-1" },
  { icon: <IconFileOff className="text-slate-500" stroke={1.5} />, title: "Deudas Olvidadas", desc: "Olvidas cuánto crédito le diste a tus clientes.", col: "md:col-span-1" },
];

export function BentoProblem() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24 z-10">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
        >
          Si no tienes sistema, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">te garantizamos que te pasa esto:</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {problems.slice(0, 3).map((problem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`h-full ${problem.col}`}
          >
            <FeatureCard
              icon={problem.icon}
              title={problem.title}
              description={problem.desc}
              className="h-full border-slate-200 bg-white"
            />
          </motion.div>
        ))}

        {/* Embedded Photographic Bento Tile for authentic context */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="md:col-span-3 h-full rounded-2xl overflow-hidden relative shadow-sm border border-slate-200 min-h-[400px] md:min-h-[500px]"
        >
          <img src="/chaos-counter.png" alt="Caos en el mostrador" className="absolute inset-0 w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-900/10 p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Caos Cotidiano</h3>
            <p className="text-slate-200 font-medium">Billetes sueltos, libretas perdidas y estrés al atender. Es hora de modernizar el mostrador.</p>
          </div>
        </motion.div>

        {problems.slice(3, 6).map((problem, i) => (
          <motion.div
            key={i + 3}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (i + 3) * 0.1, duration: 0.5 }}
            className={`h-full ${problem.col}`}
          >
            <FeatureCard
              icon={problem.icon}
              title={problem.title}
              description={problem.desc}
              className="h-full border-slate-200 bg-white"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
