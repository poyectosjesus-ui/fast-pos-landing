"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { IconDeviceDesktop, IconServer, IconBolt } from "@tabler/icons-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: IconDeviceDesktop,
      title: "Instala Localmente",
      desc: "Descarga el ejecutable y en 2 minutos tendrás el sistema base operando en tu disco duro. Cero dolores de cabeza.",
    },
    {
      num: "02",
      icon: IconServer,
      title: "Conecta tu Hardware",
      desc: "Reconocimiento nativo súper veloz de tu cajón de dinero, báscula y escáner de código de barras.",
    },
    {
      num: "03",
      icon: IconBolt,
      title: "Vende Sin Límites",
      desc: "Fluidez absoluta. Sin retrasos por mal internet ni pantallas de carga. Tu negocio a velocidad luz.",
    },
  ];

  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white"
        >
          Operativo en 3 Pasos
        </motion.h2>
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
              className="w-16 h-16 rounded-xl bg-[#0b0f19] border border-slate-700 flex items-center justify-center mb-6 relative group-hover:border-blue-500/50 shadow-inner transition-colors"
            >
              <span className="absolute -top-3 -right-3 text-2xl font-black text-slate-800 select-none">{step.num}</span>
              <step.icon className="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition-colors" />
            </motion.div>
            <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
