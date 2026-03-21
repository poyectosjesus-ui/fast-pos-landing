"use client";

import { motion } from "framer-motion";
import { PricingCard } from "../ui/PricingCard";

export function Pricing() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-32 mb-16">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Inversión Definitiva
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl font-medium"
        >
          Un solo pago. Licencia de por vida. <strong className="text-blue-400">Sin sorpresas ni rentas mensuales.</strong>
        </motion.p>
      </div>
      <div className="flex justify-center relative">
        {/* Subtle background highlight for the pricing card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          className="w-full max-w-md relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <PricingCard 
            tier="Licencia Vitalicia" 
            price="$4,999" 
            description="Software nativo completo para un equipo principal con base de datos local sólida." 
            features={[
              "Catálogo de productos ilimitados",
              "Control estricto de inventarios",
              "Soporte de lector y báscula local",
              "Cortes de caja y reportes X/Z",
              "Actualizaciones de seguridad gratuitas",
              "Soporte técnico por 1 año"
            ]}
            isPopular={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
