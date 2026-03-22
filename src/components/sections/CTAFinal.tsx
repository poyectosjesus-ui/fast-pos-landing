"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

export function CTAFinal() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-32 mt-12 mb-20 overflow-hidden rounded-[3rem] shadow-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900">
      {/* Intense animated gradient mesh background inside the CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 blur-[100px] rounded-full mix-blend-overlay animate-blob pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 drop-shadow-md"
        >
          ¿Listo para Vender Más?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-blue-100 max-w-2xl font-medium mb-12 drop-shadow-sm"
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
          <div className="absolute -inset-2 bg-white rounded-full blur-md opacity-20 group-hover:opacity-40 transition duration-500" />
          <MagneticButton variant="secondary" className="bg-white text-blue-700 hover:bg-slate-50 px-12 py-5 text-xl font-bold tracking-wide uppercase shadow-2xl z-10">
            AGENDAR CITA AHORA
          </MagneticButton>
          
          <p className="mt-8 text-sm text-blue-200 font-medium z-10">
            O escríbeme directamente: <br/>
            <a href="https://wa.me/527710000000" className="text-white hover:text-green-300 font-bold transition-colors">📱 WhatsApp: +52 771 XXXX XXXX</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
