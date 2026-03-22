"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "../ui/FeatureCard";
import { IconTrendingUp, IconClock, IconCash, IconWifiOff, IconLock, IconUsers } from "@tabler/icons-react";

const benefits = [
  { icon: <IconTrendingUp className="text-blue-600" />, title: "Vende 40% Más Rápido", description: "Procesa más ventas en menos tiempo. Más clientes felices. Más dinero en tu caja." },
  { icon: <IconClock className="text-blue-600" />, title: "Ahorra 2 Horas Diarias", description: "Sin contar billetes, sin anotar en cuadernos, sin errores. Tiempo para lo que realmente importa." },
  { icon: <IconCash className="text-blue-600" />, title: "Dinero que No Veías", description: "Sabe exactamente cuánto vendiste, cuánto ganaste y qué productos son los que realmente dan dinero." },
  { icon: <IconWifiOff className="text-blue-600" />, title: "Funciona Sin Internet", description: "Sistema instalado 100% local en tu PC. Si se cae el internet de la plaza, tú sigues cobrando sin interrupciones." },
  { icon: <IconLock className="text-blue-600" />, title: "Adiós a Descuadres", description: "Todo queda registrado automáticamente. Adiós a misterios de 'dónde se fue el dinero'. Todo claro." },
  { icon: <IconUsers className="text-blue-600" />, title: "Fiados Sin Sustos", description: "Sabe quién te debe, cuánto debe y desde cuándo. Cobra deudas fácilmente. Sin olvidar nada." },
];

export function BenefitsGrid() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-32 z-10">

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Text and Image Combo */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
              Qué ganas tú con <span className="text-blue-600">FAST POS</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              No es solo software. <strong>Es tiempo y dinero de regreso en tu bolsillo.</strong> Un cajero empoderado es un negocio que florece.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200"
          >
            <img src="/happy-owner.png" alt="Dueño de tienda feliz" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Right Feature Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <FeatureCard {...benefit} className="h-full bg-white border-slate-200 shadow-sm" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
