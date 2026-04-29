"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-slate-200 bg-slate-50 pt-16 pb-10 px-6 z-10">
      <div className="max-w-6xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-black tracking-tight mb-3 text-slate-900">
              FAST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">POS</span>
            </div>
            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-4">
              El Aliado Tecnológico del Comerciante Mexicano. Offline-First, Cloud-Ready.
            </p>
            <a href={siteConfig.links.whatsappSalesUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition-colors">
              📱 Contactar por WhatsApp
            </a>
          </div>

          {/* Producto */}
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Producto</p>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><Link href="/producto/punto-de-venta" className="hover:text-blue-600 transition-colors">💻 Caja Local (Offline)</Link></li>
              <li><Link href="/producto/app-movil" className="hover:text-blue-600 transition-colors">📱 App Móvil Cloud</Link></li>
              <li><Link href="/producto/multi-sucursal" className="hover:text-blue-600 transition-colors">🏢 Multi-Sucursal</Link></li>
              <li><Link href="/precios" className="hover:text-blue-600 transition-colors">🏷️ Precios y Planes</Link></li>
            </ul>
          </div>

          {/* Soluciones */}
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Soluciones</p>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><Link href="/soluciones/abarrotes" className="hover:text-emerald-600 transition-colors">🛒 Abarrotes</Link></li>
              <li><Link href="/soluciones/farmacias" className="hover:text-cyan-600 transition-colors">⚕️ Farmacias</Link></li>
              <li><Link href="/soluciones/boutiques" className="hover:text-rose-600 transition-colors">👗 Boutiques</Link></li>
              <li><Link href="/soluciones/ferreterias" className="hover:text-amber-600 transition-colors">🔧 Ferreterías</Link></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Recursos</p>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><Link href="/recursos/blog" className="hover:text-blue-600 transition-colors">✍️ Blog de Negocios</Link></li>
              <li><Link href="/recursos/centro-ayuda" className="hover:text-blue-600 transition-colors">📖 Centro de Ayuda</Link></li>
              <li><Link href="/nosotros" className="hover:text-blue-600 transition-colors">🏢 Nosotros</Link></li>
              <li><Link href="/privacidad" className="hover:text-blue-600 transition-colors">🔒 Aviso de Privacidad</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200 text-sm text-slate-400 font-medium">
          <p>© 2025 Fast-POS · Todos los derechos reservados</p>
          <p>📍 Pachuca de Soto, Hidalgo, México</p>
        </div>

      </div>
    </footer>
  );
}
