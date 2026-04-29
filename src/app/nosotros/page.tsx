import Link from "next/link";
import { siteConfig } from "@/config/site";
import { IconRocket, IconHeart, IconShieldCheck, IconBolt } from "@tabler/icons-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const metadata = {
  title: "Nosotros | Fast-POS — El Aliado Tecnológico del Comerciante Mexicano",
  description: "Conoce la historia detrás de Fast-POS. Un equipo mexicano que construyó el sistema de punto de venta que ellos mismos hubieran querido tener desde el primer día.",
};

export default function NosotrosPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-20 selection:bg-blue-500/30 overflow-hidden">
      <AnimatedBackground />

      {/* Hero */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8 shadow-sm border border-blue-200/50">
          <span>🇲🇽</span>
          <span>Hecho en México, para México</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8 drop-shadow-sm">
          Somos el Aliado <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tecnológico del Comerciante.</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
          No construimos software por construirlo. Fast-POS nació de una frustración real: ver cómo los mejores negocios de barrio cierran porque no tienen las herramientas que las grandes cadenas sí tienen. Eso lo estamos cambiando.
        </p>
      </section>

      {/* La historia */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-16 shadow-xl border border-white">
          <h2 className="text-3xl font-black text-slate-900 mb-8">La Historia Detrás de Fast-POS</h2>
          <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
            <p>
              Todo empezó con una pregunta incómoda: <strong>¿Por qué el OXXO de la esquina sabe exactamente cuántas Coca-Colas vendió este miércoles entre las 7 y las 10 de la mañana, y el tendero de enfrente no sabe ni cuánto ganó ayer?</strong>
            </p>
            <p>
              La respuesta no tiene que ver con esfuerzo ni con inteligencia. Tiene que ver con herramientas. Las grandes cadenas invierten millones en tecnología que sus sistemas locales procesan en tiempo real. El tendero independiente, mientras tanto, suma tickets a mano los domingos o usa una hoja de cálculo que se corrompe.
            </p>
            <p>
              Fast-POS nació para cerrar esa brecha. Para que el dueño de una tienda de abarrotes en Pachuca, la farmacia familiar en Monterrey o la ferretería de tres generaciones en CDMX tenga exactamente la misma inteligencia tecnológica que las grandes corporaciones, sin necesitar su presupuesto ni su departamento de IT.
            </p>
            <p>
              Lo construimos en México, pensando en los problemas específicos de México: internet que se cae, proveedores que llegan sin avisar, empleados que no siempre son honestos y dueños que no pueden estar en el mostrador las 16 horas del día. Para esas realidades diseñamos cada función.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Lo que Nos Mueve Cada Día</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white/60 backdrop-blur-2xl rounded-[2rem] p-8 shadow-xl border border-white hover:-translate-y-2 transition-transform duration-500 group text-center">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <IconBolt size={28} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-3">Velocidad Real</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Un cajero que espera que el sistema responda pierde clientes. Fast-POS opera localmente, sin lag, sin esperar servidores.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-2xl rounded-[2rem] p-8 shadow-xl border border-white hover:-translate-y-2 transition-transform duration-500 group text-center">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <IconShieldCheck size={28} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-3">Control sin Excusas</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Corte de caja a ciegas, permisos por usuario, historial de movimientos. El dueño siempre sabe qué pasa en su negocio.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-2xl rounded-[2rem] p-8 shadow-xl border border-white hover:-translate-y-2 transition-transform duration-500 group text-center">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <IconHeart size={28} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-3">Humanos Primero</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Hablamos el idioma del comerciante, no del programador. El soporte es real, rápido y sin bots que te hacen perder tiempo.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-2xl rounded-[2rem] p-8 shadow-xl border border-white hover:-translate-y-2 transition-transform duration-500 group text-center">
            <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <IconRocket size={28} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-3">Crecemos Juntos</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Empiezas con una caja local. Cuando tu negocio crece, Fast-POS ya tiene el plan para múltiples sucursales que te espera.
            </p>
          </div>

        </div>
      </section>

      {/* Nuestra promesa */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-[-30%] right-[-10%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-6">Nuestra Promesa</h2>
            <blockquote className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 leading-snug mb-10 italic">
              "Con Fast-POS recuperas el control de tu negocio, tu dinero y tu tiempo libre — sin depender de internet y sin dolores de cabeza técnicos."
            </blockquote>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Esa no es solo una frase de marketing. Es el criterio con el que evaluamos cada función que desarrollamos. Si no te da control, si no te ahorra tiempo o si requiere que seas técnico para usarla, no entra al producto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.links.whatsappSalesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-center shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                Hablar con el Equipo
              </a>
              <Link
                href="/precios"
                className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors text-center border border-white/20"
              >
                Ver Planes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Datos rápidos */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { numero: "1,200+", label: "Negocios usando Fast-POS" },
            { numero: "4", label: "Industrias atendidas" },
            { numero: "100%", label: "Funciona sin internet" },
            { numero: "24/7", label: "Soporte por WhatsApp" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 text-center border border-white shadow-sm">
              <div className="text-3xl font-black text-slate-900 mb-2">{stat.numero}</div>
              <div className="text-sm text-slate-600 font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
