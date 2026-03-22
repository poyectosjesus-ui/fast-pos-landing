"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { GlowBadge } from "../ui/GlowBadge";
import { IconDeviceDesktop, IconBolt } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      
      {/* Main Content */}
      <div className="z-10 text-center flex flex-col items-center px-5 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-default flex flex-col items-center"
        >
          {/* Main title */}
          <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-tight text-slate-900 drop-shadow-2xl leading-[1.1] mb-6">
            FAST
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              POS
            </span>
          </h1>
          {/* Hover glow behind text */}
          <div className="absolute inset-0 bg-blue-600/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-2xl text-slate-600 font-medium max-w-2xl leading-relaxed mb-6 px-2"
        >
          Tu sistema de ventas más simple y potente. Creado específicamente para agilizar abarrotes y negocios de mostrador.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row gap-6 items-center"
        >
          <MagneticButton 
            variant="primary" 
            onClick={() => window.open(siteConfig.links.whatsappSalesUrl, '_blank')}
            className="flex items-center justify-center text-lg px-10 py-5 font-bold uppercase tracking-wide w-full sm:w-auto z-10 shadow-lg shadow-blue-500/20"
          >
            Agendar Cita Ahora
          </MagneticButton>
        </motion.div>

        {/* Software Interface Mockup Trailer with Image inside */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-5xl relative z-10"
        >
          <div className="absolute -inset-1 bg-gradient-to-t from-blue-300/40 to-transparent blur-[80px] rounded-full pointer-events-none" />
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col ring-1 ring-slate-900/5">
            {/* Native Window Title Bar */}
            <div className="h-10 border-b border-slate-200 bg-slate-50 flex items-center px-4 justify-between select-none">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Punto de Venta / Terminal Ocular</div>
              <div className="w-10"></div>
            </div>
            {/* Body of mock window matching a real POS usage context */}
            <div className="flex-1 w-full bg-slate-100 relative overflow-hidden">
               <img 
                 src="/hero-terminal-alt.png" 
                 alt="Software de caja en acción" 
                 className="absolute inset-0 w-full h-full object-cover opacity-90"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <div className="text-white text-left">
                     <h3 className="text-2xl font-bold mb-2">Cobros en Segundos</h3>
                     <p className="text-slate-200 font-medium">Olvídate de las calculadoras y los errores humanos.</p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
        {/* Security Trailer text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-slate-500 font-medium text-sm"
        >
          No requiere internet para cobrar. 100% Seguro.
        </motion.div>
      </div>
    </section>
  );
}
