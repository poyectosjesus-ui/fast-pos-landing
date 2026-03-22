"use client";

import { motion } from "framer-motion";
import { PricingCard } from "../ui/PricingCard";

export function Pricing() {
  const plans = [
    {
      tier: "Para Empezar",
      price: "$2,500 /mes",
      description: "Perfecto si tienes un negocio pequeño",
      buttonText: "Comenzar",
      features: [
        "Una caja",
        "1 usuario conectado",
        "Lo más importante incluido",
        "Implementación rápida",
      ]
    },
    {
      tier: "Para Crecer",
      price: "$5,500 /mes",
      description: "Para negocios que venden bien y crecen rápido.",
      isPopular: true,
      buttonText: "Agendar Cita",
      features: [
        "Varias cajas (2 a 3)",
        "5 usuarios logueados",
        "Reportes avanzados",
        "Control total de inventario",
      ]
    },
    {
      tier: "Para Empresas",
      price: "Personalizado",
      description: "Para negocios serios con varias sucursales.",
      buttonText: "Agendar Cita",
      features: [
        "Múltiples sucursales sincronizadas",
        "Usuarios y cajas ilimitadas",
        "Integraciones especiales (ERP/Web)",
        "Capacitación presencial incluida",
      ]
    }
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24 mb-12">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Elige Tu Plan
        </motion.h2>
      </div>
      
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-64 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative z-10 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 80 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
