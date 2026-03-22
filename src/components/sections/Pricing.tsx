"use client";

import { motion } from "framer-motion";
import { PricingCard } from "../ui/PricingCard";
import { siteConfig } from "@/config/site";

export function Pricing() {
  const tiers = [
    {
      title: "Licencia Base",
      price: "$1,999",
      period: "pago único",
      features: [
        "Software Instalable",
        "Cajas e Inventario Ilimitado",
        "Ayuda con instalación inicial",
        "Sin rentas ni mensualidades"
      ],
      checkoutUrl: siteConfig.links.whatsappBaseLicenseUrl
    },
    {
      title: "Licencia Pro + Actualizaciones",
      price: "$2,999",
      period: "pago único",
      isPopular: true,
      buttonText: "Comprar Ahora",
      features: [
        "Todo lo de Licencia Base",
        "1 Año de Actualizaciones Gratuitas",
        "Soporte Remoto Prioritario",
        "Asesoría para conectar Hardware"
      ],
      checkoutUrl: siteConfig.links.whatsappProLicenseUrl
    }
  ];

  return (
    <section className="relative w-full border-y border-slate-200 bg-slate-50 overflow-hidden py-32 mt-20">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
                  onAction={() => window.open(tier.checkoutUrl, '_blank')}
                />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
