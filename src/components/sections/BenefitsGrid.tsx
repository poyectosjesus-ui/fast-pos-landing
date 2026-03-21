"use client";

import { motion } from "framer-motion";
import { MetricBox } from "../ui/MetricBox";

const benefits = [
  { num: "10x", label: "Velocidad de Escaneo", trend: "Optimizado" },
  { num: "0ms", label: "Latencia de Red", trend: "100% Offline" },
  { num: "100%", label: "Precisión de Inventario" },
  { num: "$0", label: "Fugas de Efectivo" },
  { num: "1", label: "Solo Pago", trend: "Sin Rentas" },
  { num: "24/7", label: "Operación Continua" },
];

export function BenefitsGrid() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Rendimiento Brutal
        </motion.h2>
        <p className="text-slate-400 text-lg md:text-xl font-medium">
          Métricas diseñadas para aplastar a los sistemas legacy en la nube.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <MetricBox 
              value={benefit.num} 
              label={benefit.label} 
              trend={benefit.trend} 
              className="h-full justify-center"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
