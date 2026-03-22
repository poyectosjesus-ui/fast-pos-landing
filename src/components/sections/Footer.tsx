"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-slate-200 bg-slate-50 pt-16 pb-12 px-8 z-10 text-center md:text-left">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-2xl font-black tracking-tight mb-2 text-slate-900">
            FAST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">POS</span> 2.0
          </div>
          <p className="text-slate-600 font-medium">
            Tu Sistema de Ventas Todo en Uno
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 flex-1 md:items-end text-slate-600 font-medium">
          <a href={siteConfig.links.whatsappSalesUrl} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">📱 WhatsApp: +{siteConfig.contact.whatsappNumber}</a>
          <a href="https://novecientoszero.com" className="hover:text-blue-600 transition-colors">🌐 Web: www.novecientoszero.com</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center pt-8 border-t border-slate-200 text-sm text-slate-500 font-medium gap-3">
        <div className="flex items-center gap-6">
          <Link href="/blog" className="text-slate-500 hover:text-blue-600 transition-colors underline underline-offset-4">
            Blog & Recursos
          </Link>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <Link href="/privacidad" className="text-slate-500 hover:text-blue-600 transition-colors underline underline-offset-4">
            Aviso de Privacidad
          </Link>
        </div>
        <p className="mt-2">📍 Pachuca de Soto, Hidalgo | México</p>
        <p>© 2024 FAST POS - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
