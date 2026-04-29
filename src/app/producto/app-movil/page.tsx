import Link from "next/link";
import { siteConfig } from "@/config/site";
import { IconDeviceMobile, IconCloudUpload, IconChartPie, IconShieldLock } from "@tabler/icons-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const metadata = {
  title: "App Móvil y Cloud | Fast-POS",
  description: "Revisa tu inventario y ganancias en tiempo real desde tu celular con la sincronización silenciosa de Fast-POS."
};

export default function AppMovilPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-20 selection:bg-indigo-500/30 overflow-hidden">
      {/* Usamos el fondo animado pero ajustando los colores vía CSS globals o dejándolo tal cual */}
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 z-10">
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-indigo-700 text-sm font-bold mb-6 border border-indigo-200/50 shadow-sm">
            <IconCloudUpload size={18} />
            <span>Exclusivo del Plan Cloud Pro</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
            Tu negocio entero, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">en tu bolsillo.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
            Vete de vacaciones con total tranquilidad. Mientras tu cajero sigue cobrando offline, nuestro motor híbrido envía silenciosamente cada ticket a la nube en cuanto detecta internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a href={siteConfig.links.whatsappProLicenseUrl} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-indigo-500 transition-all shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] hover:-translate-y-1">
              Quiero el Plan Cloud
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative flex justify-center group">
          {/* Intense Ambient Glow for Mobile Mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500/40 blur-[120px] w-[400px] h-[400px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="relative w-72 h-[550px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-105 group-hover:shadow-indigo-500/20 z-10">
            {/* iPhone Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-end px-2">
               <div className="w-2 h-2 rounded-full bg-indigo-500/50" />
            </div>
            
            {/* Inner AI Image */}
            <div className="w-full h-full bg-white flex justify-center items-start overflow-hidden relative">
              <img 
                src="/fastpos-shadcn-ui-tall.png" 
                alt="Fast-POS Cloud Dashboard iOS Style" 
                className="absolute top-[-4%] left-[-75%] w-[250%] max-w-[250%] h-auto object-cover object-top z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modern List Features */}
      <section className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">El Superpoder de la Nube Híbrida.</h2>
            <p className="text-slate-600 text-xl font-medium">La paz mental de saber exactamente qué pasa en tu tienda, desde donde sea.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/40 shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <IconChartPie size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Radiografía en Vivo</h3>
              <p className="text-slate-600 leading-relaxed">No esperes al corte Z de la noche. Abre tu app y mira en tiempo real el margen de ganancia y stock crítico.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/40 shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <IconShieldLock size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Blindaje Anti-Desastres</h3>
              <p className="text-slate-600 leading-relaxed">Si tu PC sufre un corto, no pasa nada. Descarga Fast-POS en otra PC, inicia sesión, y todo se restaura desde la nube.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/40 shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <IconDeviceMobile size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Auditoría Remota</h3>
              <p className="text-slate-600 leading-relaxed">Recibe notificaciones si un cajero aplica descuentos indebidos o hace retiros manuales. El control regresó a ti.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
