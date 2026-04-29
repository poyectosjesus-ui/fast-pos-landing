"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-5 md:px-8 py-4 flex justify-between items-center bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm transition-all">
      <Link href="/" className="text-xl md:text-2xl font-black tracking-tight text-slate-900 z-50">
        FAST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">POS</span>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-600">
        <div className="relative group">
          <button className="hover:text-blue-600 py-2">Producto</button>
          <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all flex flex-col overflow-hidden">
            <Link href="/producto/punto-de-venta" className="px-4 py-3 hover:bg-slate-50 transition-colors">💻 Caja Offline Local</Link>
            <Link href="/producto/app-movil" className="px-4 py-3 hover:bg-slate-50 transition-colors">📱 App Móvil (Cloud)</Link>
            <Link href="/producto/multi-sucursal" className="px-4 py-3 hover:bg-slate-50 transition-colors">🏢 Multi-Sucursal</Link>
          </div>
        </div>
        
        <div className="relative group">
          <button className="hover:text-blue-600 py-2">Soluciones</button>
          <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all flex flex-col overflow-hidden">
            <Link href="/soluciones/abarrotes" className="px-4 py-3 hover:bg-slate-50 transition-colors">🛒 Abarrotes y Minisúper</Link>
            <Link href="/soluciones/farmacias" className="px-4 py-3 hover:bg-slate-50 transition-colors">⚕️ Farmacias</Link>
            <Link href="/soluciones/boutiques" className="px-4 py-3 hover:bg-slate-50 transition-colors">👗 Boutiques y Ropa</Link>
            <Link href="/soluciones/ferreterias" className="px-4 py-3 hover:bg-slate-50 transition-colors">🔧 Ferreterías</Link>
          </div>
        </div>

        <Link href="/precios" className="hover:text-blue-600 py-2">Precios</Link>
        
        <div className="relative group">
          <button className="hover:text-blue-600 py-2">Recursos</button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all flex flex-col overflow-hidden">
            <Link href="/recursos/centro-ayuda" className="px-4 py-3 hover:bg-slate-50 transition-colors">📖 Centro de Ayuda</Link>
            <Link href="/recursos/blog" className="px-4 py-3 hover:bg-slate-50 transition-colors">✍️ Blog de Negocios</Link>
          </div>
        </div>

        <Link href="/nosotros" className="hover:text-blue-600 py-2">Compañía</Link>

        <a 
          href={siteConfig.links.whatsappSalesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-sm font-bold px-6 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 active:scale-95 transition-all shadow-md shadow-blue-500/20"
        >
          Contactar Ventas
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden flex items-center gap-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2 relative z-[60]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Fullscreen Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-[45] overflow-y-auto pb-20">
          <div className="flex flex-col px-6 pt-6 gap-6">
            
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Producto</div>
              <div className="flex flex-col gap-3">
                <Link href="/producto/punto-de-venta" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800">Caja Offline Local</Link>
                <Link href="/producto/app-movil" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800">App Móvil (Cloud)</Link>
                <Link href="/producto/multi-sucursal" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800">Multi-Sucursal</Link>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Soluciones</div>
              <div className="flex flex-col gap-3">
                <Link href="/soluciones/abarrotes" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800">Abarrotes</Link>
                <Link href="/soluciones/farmacias" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800">Farmacias</Link>
                <Link href="/soluciones/boutiques" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800">Boutiques</Link>
                <Link href="/soluciones/ferreterias" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800">Ferreterías</Link>
              </div>
            </div>

            <div className="h-px w-full bg-slate-100" />

            <Link href="/precios" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-800">Precios</Link>
            <Link href="/recursos/blog" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-800">Recursos y Blog</Link>
            <Link href="/nosotros" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-800">Sobre Nosotros</Link>

            <a 
              href={siteConfig.links.whatsappSalesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-lg font-bold px-6 py-4 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all"
            >
              Agendar Demostración
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
