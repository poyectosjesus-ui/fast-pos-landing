import Link from "next/link";
import { siteConfig } from "@/config/site";
import { IconBolt, IconWifiOff, IconKeyboard, IconDatabase, IconCheck, IconBrandWindows, IconBrandApple, IconBrandUbuntu } from "@tabler/icons-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const metadata = {
  title: "Punto de Venta Offline | Fast-POS",
  description: "El punto de venta más rápido. Cobra sin depender de internet, usa atajos de teclado y mantén tus datos seguros localmente."
};

export default function PosPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-20 selection:bg-blue-500/30 overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-blue-700 text-sm font-bold mb-6 border border-blue-200/50 shadow-sm">
            <IconWifiOff size={18} />
            <span>100% Offline-First</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
            La caja registradora que <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">nunca te deja tirado.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
            A diferencia de los sistemas web que se congelan cuando falla el internet, Fast-POS se instala en tu computadora. Cobra a la velocidad de la luz y ten la certeza de que tu negocio no se detiene por culpa de la red.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a href={siteConfig.links.whatsappBaseLicenseUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-blue-500 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1">
              Solicitar Demostración
            </a>
            <Link href="/precios" className="bg-white/60 backdrop-blur-md text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-center hover:bg-white/90 hover:shadow-lg transition-all hover:-translate-y-1">
              Ver Planes
            </Link>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative group">
          {/* Intense Glow Behind Mockup */}
          <div className="absolute -inset-4 bg-blue-500/30 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
          
          <div className="relative bg-slate-900/90 backdrop-blur-2xl rounded-2xl p-2 shadow-2xl border border-slate-700 transform transition-transform duration-700 hover:scale-[1.02]">
            {/* Native Window Controls */}
            <div className="flex items-center gap-2 px-4 pb-3 pt-2 border-b border-slate-800/50">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <div className="ml-4 text-xs font-semibold text-slate-500 tracking-widest uppercase">Punto de Venta Local</div>
            </div>
            <img src="/fastpos.png" alt="Interfaz de Fast-POS" className="w-full rounded-b-xl opacity-90 mix-blend-screen" />
          </div>
        </div>
      </section>

      {/* Glassmorphism Bento Grid */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">El estándar "Desktop" es superior.</h2>
            <p className="text-slate-600 text-xl font-medium">Recupera el control absoluto de tu información y velocidad.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Glass */}
            <div className="bg-white/60 backdrop-blur-2xl p-8 rounded-[2rem] shadow-xl border border-white hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <IconBolt size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Velocidad Extrema</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Al no tener que cargar datos desde la nube, cada escaneo se procesa en milisegundos. Elimina las filas en horas pico.</p>
            </div>
            {/* Card 2 - Glass */}
            <div className="bg-white/60 backdrop-blur-2xl p-8 rounded-[2rem] shadow-xl border border-white hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                <IconKeyboard size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Cero Mouse</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Diseñado para verdaderos cajeros. Cobra, aplica descuentos y busca productos volando usando únicamente atajos de teclado.</p>
            </div>
            {/* Card 3 - Glass */}
            <div className="bg-white/60 backdrop-blur-2xl p-8 rounded-[2rem] shadow-xl border border-white hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-900/30 group-hover:scale-110 transition-transform">
                <IconDatabase size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Tu Dinero, Tus Datos</h3>
              <p className="text-slate-600 text-lg leading-relaxed">La base de datos SQLite vive encriptada en tu computadora. Nadie puede espiar tus ganancias ni hackear tu negocio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative z-10 py-24 px-6 text-center max-w-4xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-3xl mix-blend-screen" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10">Convierte tu PC vieja en una máquina de hacer dinero.</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">Fast-POS está tan optimizado que funciona perfecto incluso en computadoras con pocos recursos. Dale nueva vida a tu mostrador.</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 relative z-10">
            <div className="flex items-center gap-3 text-white font-medium bg-white/10 px-5 py-3 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors">
              <IconBrandWindows className="text-blue-400" size={20} /> Windows
            </div>
            <div className="flex items-center gap-3 text-white font-medium bg-white/10 px-5 py-3 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors">
              <IconBrandApple className="text-slate-200" size={20} /> macOS (Intel & M Series)
            </div>
            <div className="flex items-center gap-3 text-white font-medium bg-white/10 px-5 py-3 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors">
              <IconBrandUbuntu className="text-orange-400" size={20} /> Linux / Ubuntu
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-2 mt-6 relative z-10 text-slate-400 text-sm font-medium">
            <IconCheck className="text-emerald-400" size={16} />
            Compatible universalmente con lectores láser y mini-impresoras (58mm/80mm).
          </div>
        </div>
      </section>
    </main>
  );
}
