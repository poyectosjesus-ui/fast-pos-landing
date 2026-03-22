"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "../ui/FeatureCard";
import { IconTrendingUp, IconClock, IconCash, IconDeviceMobile, IconLock, IconUsers } from "@tabler/icons-react";

const benefits = [
  { icon: <IconTrendingUp className="text-blue-400" />, title: "Vende 40% Más Rápido", desc: "Procesa más ventas en menos tiempo. Más clientes felices. Más dinero en tu caja." },
  { icon: <IconClock className="text-blue-400" />, title: "Ahorra 2 Horas Diarias", desc: "Sin contar billetes, sin anotar en cuadernos, sin errores. Tiempo para lo que realmente importa." },
  { icon: <IconCash className="text-blue-400" />, title: "Dinero que No Veías", desc: "Sabe exactamente cuánto vendiste, cuánto ganaste y qué productos son los que realmente dan dinero." },
  { icon: <IconDeviceMobile className="text-blue-400" />, title: "Control Total en Tu Móvil", desc: "Estés donde estés, ves tu caja en tiempo real. Tu negocio siempre en tu bolsillo. Control total." },
  { icon: <IconLock className="text-blue-400" />, title: "Adiós a Descuadres", desc: "Todo queda registrado automáticamente. Adiós a misterios de 'dónde se fue el dinero'. Todo claro." },
  { icon: <IconUsers className="text-blue-400" />, title: "Fiados Sin Sustos", desc: "Sabe quién te debe, cuánto debe y desde cuándo. Cobra deudas fácilmente. Sin olvidar nada." },
];

export function BenefitsGrid() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Qué Ganas Tú Con FAST POS
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => (
          <FeatureCard 
            key={i}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.desc}
          />
        ))}
      </div>
    </section>
  );
}
