import Link from "next/link";
import { siteConfig } from "@/config/site";
import { IconCheck, IconX, IconCloud, IconBuildingStore, IconDeviceDesktop } from "@tabler/icons-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const metadata = {
  title: "Precios y Planes | Fast-POS",
  description: "Licencias vitalicias y planes Cloud para tu negocio. Elige el punto de venta que mejor se adapte a ti."
};

export default function PreciosPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-20 selection:bg-blue-500/30 overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative px-6 py-20 max-w-5xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 drop-shadow-sm">
          Precios simples, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">sin letras chiquitas.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
          Comienza con un pago único para tu tienda local, o evoluciona a la nube cuando tu negocio lo necesite. Tú tienes el control.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Plan Esencial (Local) */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-xl border border-slate-200 relative hover:-translate-y-2 transition-transform duration-500">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-6">
              <IconDeviceDesktop size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Esencial</h3>
            <p className="text-slate-500 text-sm font-medium mb-6 min-h-[40px]">Perfecto para un solo mostrador. Funciona 100% sin internet.</p>
            <div className="mb-6">
              <span className="text-4xl font-black text-slate-900">$1,499</span>
              <span className="text-slate-500 font-medium"> / Pago único</span>
            </div>
            <a href={siteConfig.links.whatsappSalesUrl} target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 text-center rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors mb-8">
              Comprar Licencia
            </a>
            <ul className="space-y-4 text-sm font-medium text-slate-700">
              <li className="flex gap-3 items-start"><IconCheck size={20} className="text-emerald-500 shrink-0" /> Licencia Vitalicia (Para 1 PC)</li>
              <li className="flex gap-3 items-start"><IconCheck size={20} className="text-emerald-500 shrink-0" /> Productos y tickets ilimitados</li>
              <li className="flex gap-3 items-start"><IconCheck size={20} className="text-emerald-500 shrink-0" /> Control de Inventario Local</li>
              <li className="flex gap-3 items-start"><IconCheck size={20} className="text-emerald-500 shrink-0" /> Compatible con cualquier lector</li>
              <li className="flex gap-3 items-start text-slate-400"><IconX size={20} className="shrink-0" /> Sin respaldo en la nube</li>
              <li className="flex gap-3 items-start text-slate-400"><IconX size={20} className="shrink-0" /> Sin App Móvil</li>
            </ul>
          </div>

          {/* Plan Cloud Pro (SaaS) - Destacado */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl relative transform md:-translate-y-4 hover:-translate-y-6 transition-transform duration-500 overflow-hidden group border border-slate-700">
            <div className="absolute top-0 right-0 p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold uppercase tracking-wider rounded-bl-2xl rounded-tr-[2.5rem]">
              Más Popular
            </div>
            <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] bg-blue-500/20 blur-[100px] pointer-events-none group-hover:bg-blue-500/30 transition-colors" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                <IconCloud size={24} />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Cloud Pro</h3>
              <p className="text-slate-400 text-sm font-medium mb-6 min-h-[40px]">Lo mejor de dos mundos. Cobros offline con respaldo automático en la nube.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">$2,999</span>
                <span className="text-slate-400 font-medium"> / Anual</span>
              </div>
              <a href={siteConfig.links.whatsappProLicenseUrl} target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 text-center rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors mb-8 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Probar Cloud Pro
              </a>
              <ul className="space-y-4 text-sm font-medium text-slate-300">
                <li className="flex gap-3 items-start"><IconCheck size={20} className="text-blue-400 shrink-0" /> <span className="text-white font-bold">Todo lo del Plan Esencial</span></li>
                <li className="flex gap-3 items-start"><IconCheck size={20} className="text-blue-400 shrink-0" /> Motor de Sincronización Híbrida</li>
                <li className="flex gap-3 items-start"><IconCheck size={20} className="text-blue-400 shrink-0" /> Dashboard en App Móvil (iOS/Android)</li>
                <li className="flex gap-3 items-start"><IconCheck size={20} className="text-blue-400 shrink-0" /> Respaldo automático de base de datos</li>
                <li className="flex gap-3 items-start"><IconCheck size={20} className="text-blue-400 shrink-0" /> Actualizaciones de software sin costo</li>
              </ul>
            </div>
          </div>

          {/* Plan Multi-Sucursal */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-xl border border-slate-200 relative hover:-translate-y-2 transition-transform duration-500">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-6">
              <IconBuildingStore size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Enterprise</h3>
            <p className="text-slate-500 text-sm font-medium mb-6 min-h-[40px]">Para negocios en expansión con múltiples puntos de venta físicos.</p>
            <div className="mb-6">
              <span className="text-3xl font-black text-slate-900">A la medida</span>
            </div>
            <a href={siteConfig.links.whatsappSalesUrl} target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 text-center rounded-xl font-bold bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors mb-8 border border-slate-300">
              Contactar Ventas
            </a>
            <ul className="space-y-4 text-sm font-medium text-slate-700">
              <li className="flex gap-3 items-start"><IconCheck size={20} className="text-emerald-500 shrink-0" /> Múltiples Cajas y Almacenes</li>
              <li className="flex gap-3 items-start"><IconCheck size={20} className="text-emerald-500 shrink-0" /> Traspasos entre sucursales</li>
              <li className="flex gap-3 items-start"><IconCheck size={20} className="text-emerald-500 shrink-0" /> Reportes consolidados globales</li>
              <li className="flex gap-3 items-start"><IconCheck size={20} className="text-emerald-500 shrink-0" /> Asesoría y soporte prioritario 24/7</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center text-slate-900 mb-12">Preguntas Frecuentes</h2>
        
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-2">¿Puedo comprar el Plan Esencial y luego subir al Cloud Pro?</h4>
            <p className="text-slate-600 font-medium">Totalmente. Puedes iniciar con el pago único para operar tu caja, y cuando estés listo para monitorear desde tu celular, puedes adquirir la suscripción Cloud. Tus datos locales se subirán a la nube sin perder nada.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-2">¿Qué pasa si mi internet falla teniendo el Plan Cloud Pro?</h4>
            <p className="text-slate-600 font-medium">¡No pasa absolutamente nada en mostrador! Tu cajero seguirá cobrando, imprimiendo tickets y usando el lector láser de manera local. Cuando el internet regrese, Fast-POS sincronizará las ventas silenciosamente en segundo plano.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-2">¿El Plan Esencial de pago único caduca?</h4>
            <p className="text-slate-600 font-medium">No, la licencia es vitalicia para la computadora donde se instale. Jamás dejaremos que tu sistema se bloquee por falta de pagos mensuales.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
