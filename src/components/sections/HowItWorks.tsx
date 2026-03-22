"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Escanea el Producto",
      desc: "Pasa el código de barras por el scanner. O busca el producto a mano. Sin complicaciones.",
    },
    {
      num: "2",
      title: "Selecciona Cómo Pagar",
      desc: "Efectivo, tarjeta, transferencia, fiado. El cliente elige. Tú cobras. Automático.",
    },
    {
      num: "3",
      title: "Listo - Venta Guardada",
      desc: "Recibo impreso o por WhatsApp. Todo quedó registrado. Venta completada. Siguiente cliente.",
    },
  ];

  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          3 Pasos Súper Simples
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl font-medium text-slate-400"
        >
          Así de simple. Así de rápido. Sin necesidad de capacitación larga.
        </motion.p>
      </div>

      <div className="relative flex flex-col md:flex-row gap-8 items-stretch justify-between">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-[60px] left-[10%] w-[80%] h-[1px] bg-slate-800" />

        {steps.map((step, i) => (
          <GlassCard key={i} className="relative z-10 w-full md:w-1/3 flex flex-col items-center text-center group bg-[#0f172a]/95">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center mb-6 relative group-hover:bg-blue-600/20 transition-colors"
            >
              <span className="text-2xl font-black text-blue-400">{step.num}</span>
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">{step.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
