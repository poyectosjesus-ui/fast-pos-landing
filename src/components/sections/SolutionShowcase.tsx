"use client";

import { motion } from "framer-motion";
import { Gallery } from "../ui/Gallery";

export function SolutionShowcase() {
  const localStockImages = [
    { url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200", alt: "Mercado local y abarrotes", span: "md:col-span-2" },
    { url: "https://images.unsplash.com/photo-1556740749887-f25b7a11dfa4?auto=format&fit=crop&q=80&w=800", alt: "Terminal de cobro con tarjeta" },
    { url: "https://images.unsplash.com/photo-1556741533-6e118e5b61e2?auto=format&fit=crop&q=80&w=800", alt: "Pantalla táctil de Punto de Venta" },
    { url: "https://images.unsplash.com/photo-1647427017458-f6df91d046eb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0", alt: "Operación de retail", span: "md:col-span-2" },
  ];

  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
           whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-6 inline-block shadow-inner">
            Contexto Real
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Diseñado para la realidad del <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 line-clamp-1 pb-2">Mostrador</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Entendemos el caos del comercio local. Fast POS está construido para sobrevivir al flujo constante de clientes sin un solo parpadeo.
          </p>
        </motion.div>
      </div>

      <Gallery images={localStockImages} />
    </section>
  );
}
