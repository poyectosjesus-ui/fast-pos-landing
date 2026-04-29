import Link from "next/link";
import { siteConfig } from "@/config/site";
import { IconTool, IconCalculator, IconReceipt, IconReportMoney } from "@tabler/icons-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const metadata = {
  title: "Punto de Venta para Ferreterías y Materiales | Fast-POS",
  description: "Controla tornillería, créditos y cotizaciones. Diseñado para inventarios masivos."
};

export default function FerreteriasPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-20 selection:bg-amber-500/30 overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-28 max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-bold mb-8 shadow-sm border border-amber-200/50">
          <span className="text-lg">🔧</span>
          <span>Solución para Ferreterías</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8 drop-shadow-sm max-w-4xl mx-auto">
          Maneja inventarios masivos <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">sin volverte loco.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
          Diseñado para el caos controlado de una ferretería. Maneja miles de piezas, vende cemento por bulto o clavos por kilo, y gestiona créditos a contratistas sin hojas de cálculo rotas.
        </p>
        <div className="flex justify-center w-full">
          <a href={siteConfig.links.whatsappSalesUrl} target="_blank" rel="noopener noreferrer" className="bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-amber-500 transition-all shadow-[0_0_40px_rgba(217,119,6,0.4)] hover:shadow-[0_0_60px_rgba(217,119,6,0.6)] hover:-translate-y-1">
            Instalar en mi Ferretería
          </a>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6">
            
            {/* Bento Card 1 - Large Feature (Spans 2 cols) */}
            <div className="md:col-span-2 md:row-span-1 bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-xl border border-white hover:shadow-2xl transition-all duration-500 overflow-hidden relative group">
              <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-amber-400/20 blur-[80px] rounded-full group-hover:bg-amber-400/30 transition-colors" />
              <div className="relative z-10 flex flex-col justify-center h-full">
                <div className="w-16 h-16 bg-white text-amber-600 rounded-2xl shadow-md flex items-center justify-center mb-6">
                  <IconCalculator size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Múltiples Unidades de Medida</h3>
                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                  Compra un rollo de cable por metro y véndelo por centímetro. O compra cajas de 1000 tornillos y véndelos por unidad. El sistema calcula la conversión y descuenta el inventario exacto.
                </p>
              </div>
            </div>

            {/* Bento Card 2 - Dark Card */}
            <div className="md:col-span-1 md:row-span-2 bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl text-white flex flex-col justify-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12">
                <IconReportMoney size={200} />
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-black mb-4 leading-tight">Créditos y Deudores</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Lleva el control de contratistas, albañiles o talleres a los que les fías material. Establece límites de crédito y registra pagos parciales.
                </p>
              </div>
            </div>

            {/* Bento Card 3 - Vibrant Card */}
            <div className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-orange-500 to-amber-600 rounded-[2.5rem] p-10 shadow-xl text-white flex flex-col justify-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute bottom-0 right-0 p-4 opacity-20 transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform">
                <IconReceipt size={120} />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10">Cotizaciones Rápidas</h3>
              <p className="text-orange-50 text-lg relative z-10 leading-relaxed">
                Genera presupuestos impresos para clientes. Conviértelos en ventas reales con 1 clic.
              </p>
            </div>

            {/* Bento Card 4 - Detail Card */}
            <div className="md:col-span-1 md:row-span-1 bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-xl border border-white flex flex-col justify-center hover:-translate-y-2 transition-transform duration-500">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                <IconTool size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">10,000+ Productos</h3>
              <p className="text-slate-600 leading-relaxed">
                Su motor local no se alenta. Busca cualquier código de producto de plomería al instante.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
