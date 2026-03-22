"use client";

import { motion } from "framer-motion";

export function SocialProof() {
  const stats = [
    { label: "Negocios activos venden con nosotros", value: "5000+" },
    { label: "Disponibilidad garantizada", value: "99.9%" },
    { label: "Descuadres reportados", value: "0" },
  ];

  return (
    <section className="relative w-full border-y border-blue-100 bg-blue-50/50 py-24 my-12 overflow-hidden shadow-sm">
      {/* Background glow for this specific section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-16">
          Por Qué Confiar en <span className="text-blue-600">FAST POS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
               <div className="text-5xl md:text-7xl font-black tracking-tighter text-blue-600 mb-4 drop-shadow-sm">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-slate-600 max-w-[200px] leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          Restaurantes, tiendas, farmacias, mercadillos y pequeños negocios de Pachuca y zona ya venden sin errores con FAST POS. ¿Por qué no tú?
        </motion.p>
      </div>
    </section>
  );
}
