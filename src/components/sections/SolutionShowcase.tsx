"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Gallery } from "../ui/Gallery";
import { IconBolt, IconDeviceMobile, IconShieldCheck } from "@tabler/icons-react";

export function SolutionShowcase() {
  const localStockImages = [
    { url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200", alt: "Mercado local y abarrotes", span: "md:col-span-2" },
    { url: "https://images.unsplash.com/photo-1556740749887-f25b7a11dfa4?auto=format&fit=crop&q=80&w=800", alt: "Terminal de cobro con tarjeta" },
    { url: "https://images.unsplash.com/photo-1556741533-6e118e5b61e2?auto=format&fit=crop&q=80&w=800", alt: "Pantalla táctil de Punto de Venta" },
    { url: "https://images.unsplash.com/photo-1647427017458-f6df91d046eb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0", alt: "Operación de retail", span: "md:col-span-2" },
  ];

  return (
    <section className="relative w-full border-y border-slate-200 bg-slate-50 overflow-hidden">
      {/* Subtle geometric light beam */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent transform rotate-45" />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <div className="text-center mb-20">
          <motion.div
             initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
             whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-bold tracking-wide uppercase mb-6 inline-block shadow-sm">
              La Solución
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
              Presentamos FAST POS
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Un sistema de ventas que automáticamente hace TODO lo que NO quieres hacer manualmente.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {/* Card 1 */}
          <GlassCard className="group relative shadow-sm border-slate-200 bg-white overflow-hidden p-0">
            <div className="h-40 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"/>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 rounded-xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                <IconBolt className="w-8 h-8 text-blue-600" stroke={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Súper Rápido</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Escanea producto, cobra y listo. En 30 segundos. Tus clientes entran, compran y se van felices.
              </p>
            </div>
          </GlassCard>

          {/* Card 2 */}
          <GlassCard className="group relative shadow-sm border-slate-200 bg-white overflow-hidden p-0">
            <div className="h-40 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1556740749887-f25b7a11dfa4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"/>
            </div>
            <div className="p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-xl bg-indigo-50 border border-indigo-100 flex flex-col items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300 relative">
                <IconDeviceMobile className="w-8 h-8 text-indigo-600" stroke={2} />
              </div>
              <h3 className="relative text-2xl font-bold text-slate-900 mb-3 tracking-tight">En Tu Móvil</h3>
              <p className="relative text-slate-600 leading-relaxed font-medium">
                Ves cómo va tu negocio en tiempo real. Desde tu casa, la calle, donde sea. Todo en la palma de tu mano.
              </p>
            </div>
          </GlassCard>

          {/* Card 3 */}
          <GlassCard className="group relative shadow-sm border-slate-200 bg-white overflow-hidden p-0">
            <div className="h-40 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1556741533-6e118e5b61e2?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"/>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 rounded-xl bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                <IconShieldCheck className="w-8 h-8 text-emerald-600" stroke={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Sin Errores</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Cierre automático. Todo queda registrado. Nunca vuelves a perder dinero sin saber a dónde fue.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Real Context Gallery */}
        <div className="mt-16 text-center">
          <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 tracking-tight"
          >
            Visualiza el Control Absoluto en tu Vitrina
          </motion.h3>
          <Gallery images={localStockImages} />
        </div>
      </div>
    </section>
  );
}
