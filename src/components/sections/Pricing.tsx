"use client";

import { motion } from "framer-motion";
import { PricingCard } from "../ui/PricingCard";
import { siteConfig } from "@/config/site";

export function Pricing() {
  const tiers = [
    {
      title: "Licencia Básica",
      price: "$499",
      period: "pago único",
      features: [
        "Software 100% Auto-instalable",
        "Límite: 1 Caja y 1 Usuario Admin",
        "Inventario Base y Manejo de Deudas",
        "Sin rentas mensuales (Sin Soporte)"
      ],
      checkoutUrl: siteConfig.links.whatsappBaseLicenseUrl
    },
    {
      title: "Licencia Avanzada",
      price: "$1,299",
      period: "pago único",
      isPopular: true,
      buttonText: "Comprar Avanzada",
      features: [
        "Múltiples Cajas y Cajeros Ilimitados",
        "Control total de sucursales",
        "Software 100% Auto-instalable",
        "Sin rentas mensuales (Sin Soporte)"
      ],
      checkoutUrl: siteConfig.links.whatsappPremiumLicenseUrl
    },
    {
      title: "Licencia Pro",
      price: "$2,999",
      period: "pago único",
      features: [
        "Todo lo de Licencia Avanzada, MÁS:",
        "Nosotros lo instalamos y configuramos",
        "Soporte Técnico Remoto Todo el Año",
        "1 Año de Actualizaciones Gratuitas"
      ],
      checkoutUrl: siteConfig.links.whatsappProLicenseUrl
    }
  ];

  return (
    <section className="relative w-full border-y border-slate-200 bg-slate-50/50 overflow-hidden py-32 mt-20">
      {/* Intense Ambient Glows for True Glassmorphism */}
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-blue-500/40 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[700px] h-[700px] bg-indigo-500/30 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[130px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
          >
            Inversión Única. Cero Rentas.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-slate-600 max-w-2xl mx-auto"
          >
             Instala el software en tu computadora, úsalo de por vida y despídete de las mensualidades forzosas comerciales.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 xl:gap-10 items-start">
          {tiers.map((tier, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 + 0.2 }}
               className={tier.isPopular ? "md:-mt-8 relative z-10" : ""}
             >
                <PricingCard 
                  {...tier} 
                  actionUrl={tier.checkoutUrl}
                />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
