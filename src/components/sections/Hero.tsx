"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { GlowBadge } from "../ui/GlowBadge";
import { IconDeviceDesktop, IconBolt } from "@tabler/icons-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      
      {/* Main Content */}
      <div className="z-10 text-center flex flex-col items-center px-4 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-default flex flex-col items-center"
        >
          <GlowBadge variant="blue" className="mb-10">Fast POS v2.0 • 100% Offline</GlowBadge>

          {/* Main title */}
          <h1 className="text-5xl sm:text-7xl md:text-[6rem] font-black tracking-tight text-white drop-shadow-2xl leading-[1.1] mb-8">
            El Punto de Venta <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Inmune a Caídas
            </span>
          </h1>
          {/* Hover glow behind text */}
          <div className="absolute inset-0 bg-blue-600/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium tracking-wide leading-relaxed"
        >
          Software de escritorio ultrarrápido para abarrotes y retail. Adiós a las rentas mensuales y la dependencia de internet. <strong className="text-slate-200 font-semibold">Instala, conecta tu hardware y cobra en milisegundos.</strong>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
        >
          <MagneticButton variant="primary" className="flex items-center gap-2 text-lg px-8 py-4">
            <IconDeviceDesktop className="w-6 h-6" />
            Descargar Instalador
          </MagneticButton>
          <MagneticButton variant="secondary" className="flex items-center gap-2 text-lg px-8 py-4">
            <IconBolt className="w-6 h-6 text-blue-400" />
            Explorar Funciones
          </MagneticButton>
        </motion.div>

        {/* Software Interface Mockup Trailer */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 w-full relative"
        >
          {/* Hardware Frame */}
          <div className="rounded-t-2xl border border-slate-800 bg-[#0f172a]/90 backdrop-blur-xl p-4 shadow-[0_-20px_80px_rgba(37,99,235,0.15)] mx-auto max-w-5xl">
            {/* Mac-style Window Controls Base */}
            <div className="flex gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-slate-700/80" />
              <div className="w-3 h-3 rounded-full bg-slate-700/80" />
              <div className="w-3 h-3 rounded-full bg-slate-700/80" />
            </div>
            {/* Screen Content Wrapper */}
            <div className="h-[40vh] min-h-[400px] rounded-xl bg-[#020617] border border-slate-800 flex items-center justify-center relative overflow-hidden">
               {/* Grid Texture inside the screen */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]"></div>
               <span className="text-slate-600 font-mono text-sm tracking-widest uppercase z-10 bg-[#020617] px-4 py-2 border border-slate-800 rounded-lg">Interfaz Táctica de Ventas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
