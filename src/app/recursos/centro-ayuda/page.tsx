import Link from "next/link";
import { IconSearch, IconBook, IconCpu, IconCloudDownload, IconCreditCard, IconReceipt } from "@tabler/icons-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const metadata = {
  title: "Centro de Ayuda y Soporte | Fast-POS",
  description: "Encuentra manuales, guías de instalación y resuelve tus dudas sobre el sistema Fast-POS."
};

export default function HelpCenterPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-20 selection:bg-blue-500/30 overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative px-6 py-20 max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 drop-shadow-sm">
          ¿Cómo podemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">ayudarte hoy?</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
          Explora nuestra base de conocimientos, manuales de hardware y guías paso a paso para sacarle el máximo provecho a Fast-POS.
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <div className="pl-6 text-slate-400">
              <IconSearch size={24} />
            </div>
            <input 
              type="text" 
              placeholder="Buscar 'Cómo conectar impresora 58mm'..." 
              className="w-full py-5 px-4 text-lg text-slate-700 bg-transparent border-none focus:outline-none placeholder:text-slate-400"
            />
            <button className="bg-blue-600 text-white font-bold px-8 py-5 hover:bg-blue-500 transition-colors">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Link href="#" className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors" />
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <IconCloudDownload size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Instalación y Descargas</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">Guías paso a paso para instalar Fast-POS en tu computadora por primera vez.</p>
            <span className="text-blue-600 text-sm font-bold flex items-center gap-1">Ver 8 artículos &rarr;</span>
          </Link>

          <Link href="#" className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl group-hover:bg-indigo-500/10 transition-colors" />
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <IconBook size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Manual del Usuario</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">Aprende a cobrar, hacer cortes de caja, y dar de alta tus productos.</p>
            <span className="text-indigo-600 text-sm font-bold flex items-center gap-1">Ver 15 artículos &rarr;</span>
          </Link>

          <Link href="#" className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 blur-3xl group-hover:bg-slate-500/10 transition-colors" />
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-6">
              <IconCpu size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">Impresoras y Lectores</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">Solución de problemas para impresoras térmicas, cajones de dinero y básculas.</p>
            <span className="text-slate-700 text-sm font-bold flex items-center gap-1">Ver 12 artículos &rarr;</span>
          </Link>

          <Link href="#" className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 blur-3xl group-hover:bg-teal-500/10 transition-colors" />
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
              <IconCreditCard size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">Planes y Facturación</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">Dudas sobre tu Licencia Vitalicia, actualización a Cloud Pro y métodos de pago.</p>
            <span className="text-teal-600 text-sm font-bold flex items-center gap-1">Ver 5 artículos &rarr;</span>
          </Link>

          <Link href="#" className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group relative overflow-hidden md:col-span-2 lg:col-span-2">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 blur-3xl group-hover:bg-violet-500/10 transition-colors" />
            <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center mb-6">
              <IconReceipt size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">Módulo de Facturación Electrónica (CFDI)</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 max-w-2xl">Cómo emitir facturas, configurar tus sellos digitales (CSD) y generar la factura global del día al SAT desde Fast-POS.</p>
            <span className="text-violet-600 text-sm font-bold flex items-center gap-1">Ver 10 artículos &rarr;</span>
          </Link>

        </div>
      </section>

      {/* Top Articles List */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-black text-slate-900 mb-8">Artículos Populares</h2>
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <Link href="#" className="block p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold text-slate-800">Cómo migrar mis productos desde Excel a Fast-POS</h4>
              <span className="text-slate-400">&rarr;</span>
            </div>
          </Link>
          <Link href="#" className="block p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold text-slate-800">Configuración rápida de Miniprinter 58mm Xprinter</h4>
              <span className="text-slate-400">&rarr;</span>
            </div>
          </Link>
          <Link href="#" className="block p-6 hover:bg-slate-50 transition-colors">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold text-slate-800">¿Por qué mi cajón de dinero no abre automáticamente?</h4>
              <span className="text-slate-400">&rarr;</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
