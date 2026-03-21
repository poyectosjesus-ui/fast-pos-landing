"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "../ui/FeatureCard";
import { IconWifiOff, IconClockHour4, IconChartLine, IconAlertCircle } from "@tabler/icons-react";

const problems = [
  { icon: <IconWifiOff />, title: "Dependencia de Internet", desc: "Si falla tu proveedor o se va la luz, tu negocio entero se paraliza y no puedes cobrar.", col: "md:col-span-2" },
  { icon: <IconClockHour4 />, title: "Cortes de Caja Lentos", desc: "Pierdes horas de sueño cuadrando números inexactos en la madrugada.", col: "md:col-span-1" },
  { icon: <IconAlertCircle />, title: "Hardware Incompatible", desc: "Tu báscula digital o impresora térmica USB no es reconocida por sistemas web.", col: "md:col-span-1" },
  { icon: <IconChartLine />, title: "Fuga de Inventario", desc: "Vendes a ciegas sin saber qué te falta o qué productos están mermando tu utilidad diaria.", col: "md:col-span-2" },
];

export function BentoProblem() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          ¿Tu sistema actual frena tus ventas?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl font-medium"
        >
          El internet inestable y el software de la nube están costándote dinero y clientes.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
