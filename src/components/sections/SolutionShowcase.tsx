"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { IconBolt, IconDeviceMobile, IconShieldCheck } from "@tabler/icons-react";

export function SolutionShowcase() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-32">
      <div className="text-center mb-20">
        <motion.div
           initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
           whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-6 inline-block shadow-inner">
            La Solución
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Presentamos FAST POS
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Un sistema de ventas que automáticamente hace TODO lo que NO quieres hacer manualmente.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassCard className="group relative border-t-blue-500/20">
          <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
            <IconBolt className="w-12 h-12 text-blue-400" stroke={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Súper Rápido</h3>
          <p className="text-slate-400 leading-relaxed font-medium">
            Escanea producto, cobra y listo. En 30 segundos. Tus clientes entran, compran y se van felices.
          </p>
        </GlassCard>

        <GlassCard className="group relative border-t-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
            <IconDeviceMobile className="w-12 h-12 text-purple-400" stroke={1.5} />
          </div>
          <h3 className="relative text-2xl font-bold text-white mb-3 tracking-tight">En Tu Móvil</h3>
          <p className="relative text-slate-400 leading-relaxed font-medium">
            Ves cómo va tu negocio en tiempo real. Desde tu casa, la calle, donde sea. Todo en la palma de tu mano.
          </p>
        </GlassCard>

        <GlassCard className="group relative border-t-green-500/20">
          <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
            <IconShieldCheck className="w-12 h-12 text-green-400" stroke={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Sin Errores</h3>
          <p className="text-slate-400 leading-relaxed font-medium">
            Cierre automático. Todo queda registrado. Nunca vuelves a perder dinero sin saber a dónde fue.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
