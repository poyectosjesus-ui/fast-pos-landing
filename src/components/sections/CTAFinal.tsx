"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { siteConfig } from "@/config/site";

export function CTAFinal() {
  return (
    <section className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full max-w-5xl mx-auto px-6 py-20 md:py-32 mt-12 mb-20 overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-200/60 bg-white/60 backdrop-blur-3xl">
      {/* Subtle blue ambient light inside the CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-multiply animate-blob pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 md:mb-8 drop-shadow-sm"
        >
          ¿Listo para Vender Más?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl text-slate-600 max-w-2xl font-medium mb-12"
        >
          Tu negocio merece crecer. Sin complicaciones. Sin errores. Sin estrés.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative group inline-flex flex-col items-center"
        >
          <a href={siteConfig.links.whatsappSalesUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
            <MagneticButton
              variant="primary"
              className="px-8 py-4 md:px-12 md:py-5 text-lg md:text-xl font-bold tracking-wide uppercase shadow-xl z-10 w-full"
            >
              Comprar Licencia Base
            </MagneticButton>
          </a>
          
          <p className="mt-8 text-sm text-slate-500 font-medium z-10">
            O escríbeme directamente a WhatsApp: <br />
            <a href={siteConfig.links.whatsappSalesUrl} target="_blank" rel="noreferrer" className="text-slate-800 hover:text-blue-600 font-bold transition-colors">
              📱 +{siteConfig.contact.whatsappNumber}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
