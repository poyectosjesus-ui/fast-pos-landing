"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Escanea el Producto",
      desc: "Pasa el código de barras por el scanner. O busca el producto a mano. Sin complicaciones.",
      img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=600"
    },
    {
      num: "2",
      title: "Selecciona Cómo Pagar",
      desc: "Efectivo, tarjeta, transferencia, fiado. El cliente elige. Tú cobras. Automático.",
      img: "https://images.unsplash.com/photo-1556740749887-f25b7a11dfa4?auto=format&fit=crop&q=80&w=600"
    },
    {
      num: "3",
      title: "Listo - Venta Guardada",
      desc: "Recibo impreso o por WhatsApp. Todo quedó registrado. Venta completada. Siguiente cliente.",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600"
    },
  ];

  return (
    <section className="relative w-full border-y border-slate-200 bg-slate-100 overflow-hidden shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
          >
            3 Pasos Súper Simples
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-slate-600"
          >
            Así de simple. Así de rápido. Sin necesidad de capacitación larga.
          </motion.p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 items-stretch justify-between">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[120px] left-[10%] w-[80%] h-px bg-slate-300" />

          {steps.map((step, i) => (
            <GlassCard key={i} className="relative z-10 w-full md:w-1/3 flex flex-col items-center text-center group bg-white shadow-sm border-slate-200 p-0 overflow-hidden">
              <div className="w-full h-48 overflow-hidden relative">
                 <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-slate-900/10" />
              </div>
              <div className="p-8 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-16 h-16 rounded-full bg-blue-100 border-4 border-white shadow-md flex items-center justify-center -mt-16 mb-6 relative group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300"
                >
                  <span className="text-2xl font-black text-blue-600 group-hover:text-white">{step.num}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{step.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
