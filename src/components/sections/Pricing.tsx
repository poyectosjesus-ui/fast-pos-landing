"use client";

import { motion } from "framer-motion";
import { PricingCard } from "../ui/PricingCard";
import { siteConfig } from "@/config/site";

export function Pricing() {
  const tiers = [
    {
      title: "Plan Esencial",
      price: "$1,500",
      period: "pago único",
      features: [
        "Licencia Vitalicia (1 Caja)",
        "Sin mensualidades ni rentas",
        "Inventario y Punto de Venta Offline",
        "Base de datos 100% local (SQLite)"
      ],
      checkoutUrl: siteConfig.links.whatsappBaseLicenseUrl
    },
    {
      title: "Plan Cloud Pro",
      price: "$499",
      period: "al mes",
      isPopular: true,
      buttonText: "Probar Cloud Pro",
      features: [
        "Todo lo del Plan Esencial, MÁS:",
        "App Móvil: Tu negocio en tu bolsillo",
        "Respaldos automáticos en la nube",
        "Soporte prioritario y actualizaciones"
      ],
      checkoutUrl: siteConfig.links.whatsappProLicenseUrl
    },
    {
      title: "Multi-Sucursal",
      price: "$1,299",
      period: "al mes",
      features: [
        "Para negocios en crecimiento",
        "Sincroniza inventario entre tiendas",
        "Panel web centralizado para el dueño",
        "Cajeros y sucursales ilimitadas"
      ],
      checkoutUrl: siteConfig.links.whatsappPremiumLicenseUrl
    }
  ];

  return (
    <section className="relative w-full border-y border-slate-200 bg-slate-50/50 overflow-hidden py-32 mt-20">
      {/* Intense Ambient Glows for True Glassmorphism (Hidden on mobile) */}
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-blue-500/40 blur-[140px] rounded-full pointer-events-none hidden md:block" />
      <div className="absolute bottom-[10%] right-[10%] w-[700px] h-[700px] bg-indigo-500/30 blur-[150px] rounded-full pointer-events-none hidden md:block" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[130px] rounded-full pointer-events-none hidden md:block" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
          >
            Paga solo una vez, o vuela a la nube.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-slate-600 max-w-2xl mx-auto"
          >
             Elige el plan perfecto para ti. Compra tu caja registradora de por vida, o adquiere el superpoder de controlar todo desde tu celular.
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
