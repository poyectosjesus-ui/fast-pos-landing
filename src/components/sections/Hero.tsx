"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { IconBolt, IconWifiOff, IconDeviceMobile, IconShieldCheck } from "@tabler/icons-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      <div className="z-10 text-center flex flex-col items-center px-5 w-full max-w-6xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8 shadow-sm border border-blue-200/60"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Offline-First · Funciona sin internet
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-tight text-slate-900 drop-shadow-2xl leading-[1.1] mb-6"
        >
          FAST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">POS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium max-w-2xl leading-relaxed mb-10 px-2"
        >
          El punto de venta que nunca te deja tirado. Cobra velozmente sin internet y monitorea tu negocio desde el celular.
        </motion.p>

        {/* Pill stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: IconBolt, label: "Cobros en < 3 seg" },
            { icon: IconWifiOff, label: "Sin internet" },
            { icon: IconDeviceMobile, label: "App Móvil Cloud" },
            { icon: IconShieldCheck, label: "Corte de caja a ciegas" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
              <Icon size={15} className="text-blue-600" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={siteConfig.links.whatsappSalesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all text-lg"
          >
            📱 Hablar por WhatsApp
          </a>
          <Link
            href="/precios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold px-10 py-4 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-0.5 transition-all text-lg"
          >
            Ver Planes y Precios →
          </Link>
        </motion.div>

        {/* App Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-5xl relative z-10"
        >
          <div className="absolute -inset-1 bg-gradient-to-t from-blue-300/30 to-transparent blur-[80px] rounded-full pointer-events-none" />
          <div className="relative w-full aspect-[16/16] md:aspect-[21/12] rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col ring-1 ring-slate-900/5">
            {/* Title bar */}
            <div className="h-10 border-b border-slate-200 bg-slate-50 flex items-center px-4 justify-between select-none shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Fast-POS · Terminal</div>
              <div className="w-10" />
            </div>
            <div className="flex-1 w-full bg-slate-100 relative overflow-hidden">
              <img src="/fastpos.png" alt="Software Fast-POS en acción" className="absolute inset-0 w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end p-8">
                <div className="text-white text-left">
                  <h3 className="text-2xl font-bold mb-1">Cobros en Segundos</h3>
                  <p className="text-slate-200 font-medium">Sin internet. Sin retrasos. Sin estrés.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
