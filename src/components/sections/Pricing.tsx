"use client";

import { motion } from "framer-motion";
import { PricingCard } from "../ui/PricingCard";

export function Pricing() {
  const tiers = [
    {
      title: "Empezar",
      price: "$499",
      period: "/mes",
      features: [
        "1 Caja Registradora",
        "Inventario Básico",
        "Reportes Diarios",
        "Soporte por Correo"
      ],
    },
    {
      title: "Crecer",
      price: "$899",
      period: "/mes",
      isPopular: true,
      buttonText: "Prueba Gratis 14 Días",
      features: [
        "Cajas Ilimitadas",
        "App Móvil para Dueño",
        "Alertas de Inventario Mínimo",
        "Corte de Caja Ciego",
        "Soporte Prioritario WhatsApp"
      ],
    },
    {
      title: "Empresas",
      price: "$1,499",
      period: "/mes",
      features: [
        "Sucursales Múltiples",
        "Facturación Electrónica",
        "Perfiles de Empleados",
        "Reportes Contables Avanzados",
        "Soporte 24/7"
      ],
    }
  ];

  return (
    <section className="relative w-full border-y border-slate-200 bg-slate-50 overflow-hidden py-32">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6"
          >
            Inversión Mensual
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-slate-600 max-w-2xl mx-auto"
          >
             Pagas con las primeras 3 ventas extra que harás este mes al agilizar tu fila.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 + 0.2 }}
               className={tier.isPopular ? "md:-mt-8 relative z-10" : ""}
             >
                <PricingCard {...tier} />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
