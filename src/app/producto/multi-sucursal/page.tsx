import Link from "next/link";
import { siteConfig } from "@/config/site";
import { IconBuildingStore, IconTruckDelivery, IconUsersGroup, IconGraph } from "@tabler/icons-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const metadata = {
  title: "Sistema Multi-Sucursal | Fast-POS",
  description: "Conecta y administra múltiples sucursales desde un solo panel de control corporativo."
};

export default function MultiSucursalPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-20 selection:bg-teal-500/30 overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-28 max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-sm font-bold mb-8 shadow-xl shadow-slate-900/20">
          <IconBuildingStore size={18} />
          <span>Para Empresas en Expansión (Enterprise)</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1] tracking-tighter mb-8 drop-shadow-sm">
          Múltiples sucursales,<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">un solo cerebro.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
          El momento más crítico para un negocio es cuando abre su segundo local. Fast-POS centraliza inventarios, unifica precios y consolida reportes globales al instante.
        </p>
        <div className="flex justify-center w-full">
          <a href={siteConfig.links.whatsappPremiumLicenseUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-[0_0_30px_rgba(15,23,42,0.3)] hover:shadow-[0_0_50px_rgba(15,23,42,0.5)] hover:-translate-y-1">
            Cotizar Plan Enterprise
          </a>
        </div>
      </section>

      {/* True Bento Grid Layout */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6">
            
            {/* Bento Card 1 - Large Feature (Spans 2 cols) */}
            <div className="md:col-span-2 md:row-span-1 bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-white hover:shadow-2xl transition-all duration-500 overflow-hidden relative group">
              <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-teal-400/20 blur-[80px] rounded-full group-hover:bg-teal-400/30 transition-colors" />
              <div className="relative z-10 flex flex-col justify-center h-full">
                <div className="w-16 h-16 bg-white text-teal-600 rounded-2xl shadow-md flex items-center justify-center mb-6">
                  <IconGraph size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Reportes Consolidados Globales</h3>
                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                  Cruza métricas de rendimiento y toma decisiones de alto nivel. Al cambiar un precio en tu panel maestro, se actualiza automáticamente en las cajas de todas tus ciudades.
                </p>
              </div>
            </div>

            {/* Bento Card 2 - Dark Card */}
            <div className="md:col-span-1 md:row-span-2 bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl text-white flex flex-col justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12">
                <IconTruckDelivery size={200} />
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-black mb-4 leading-tight">Logística y Traspasos</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Mueve mercancía desde tu almacén central hacia tus sucursales dejando un rastro auditable criptográfico. Adiós para siempre a la "mercancía perdida en tránsito".
                </p>
              </div>
            </div>

            {/* Bento Card 3 - Vibrant Card */}
            <div className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-[2.5rem] p-10 shadow-xl text-white flex flex-col justify-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute bottom-0 right-0 p-4 opacity-20 transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform">
                <IconUsersGroup size={120} />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10">Permisos por Gerente</h3>
              <p className="text-teal-50 text-lg relative z-10 leading-relaxed">
                Asigna accesos regionales. Ellos solo verán la información de su propia tienda.
              </p>
            </div>

            {/* Bento Card 4 - Detail Card */}
            <div className="md:col-span-1 md:row-span-1 bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-xl border border-white flex flex-col justify-center hover:-translate-y-2 transition-transform duration-500">
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">¿10 o 50 Tiendas?</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Nuestra arquitectura híbrida asegura que aunque una tienda pier একা Internet, no detiene a las demás.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
