import Link from "next/link";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const metadata = {
  title: "5 Errores que Quiebran una Tienda de Abarrotes en el Primer Año | Fast-POS Blog",
  description: "Más de 1.2 millones de tiendas de abarrotes existen en México según el INEGI. La mayoría no llegan al año. Aquí están los motivos reales y cómo evitarlos.",
};

export default function ErroresAbarrotesBlogPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-20 selection:bg-emerald-500/30 overflow-hidden">
      <AnimatedBackground />

      <article className="relative z-10 max-w-3xl mx-auto px-6 py-16">

        {/* Breadcrumb + Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/recursos/blog" className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">← Blog</Link>
            <span className="text-slate-300">/</span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Negocios</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-6">
            Los 5 Errores que Quiebran una Tienda de Abarrotes Antes del Primer Año
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
            México tiene más de <strong>1.2 millones de tiendas de abarrotes</strong> según el INEGI. Un porcentaje alarmante no llega a los 12 meses. Aquí están los motivos reales, sin rodeos.
          </p>
          <div className="flex items-center gap-4 pt-8 border-t border-slate-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-black text-lg">FP</div>
            <div>
              <p className="font-bold text-slate-900">Equipo Fast-POS</p>
              <p className="text-sm text-slate-500">Enero 2025 · 7 minutos de lectura</p>
            </div>
          </div>
        </div>

        {/* Dato clave */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-6 mb-12">
          <p className="text-amber-900 font-semibold leading-relaxed">
            <strong>Dato INEGI:</strong> En México existen más de 7 millones de establecimientos comerciales (Censos Económicos 2024). El comercio al por menor de abarrotes es el sector más saturado y competido del país. La ventaja no la tiene quien trabaja más duro, sino quien tiene mejor información.
          </p>
        </div>

        <div className="space-y-14 text-slate-700 leading-relaxed text-lg">

          {/* Error 1 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-start gap-3">
              <span className="shrink-0 w-9 h-9 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-black">1</span>
              Mezclar el Dinero del Negocio con el Gasto Familiar
            </h2>
            <p className="mb-4">El error número uno y el más silencioso. El dueño toma dinero de la caja para el súper, la gasolina, la colegiatura... Al final del mes, el negocio "no dio dinero" aunque vendió bien. La realidad es que el dinero sí estuvo, pero se fue sin registro ni control.</p>
            <p className="mb-4">Este no es un problema de honestidad, es un problema de <strong>falta de herramientas de separación financiera</strong>. Sin un sistema que registre cada peso que entra y sale, es imposible saber dónde termina el negocio y dónde empiezas tú.</p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <p className="text-emerald-900 font-semibold">✅ <strong>Solución:</strong> Asígnate un sueldo fijo que salga de la caja registrada. Un sistema de punto de venta con módulo de corte de caja te dice exactamente cuánto generó el negocio hoy, independientemente de lo que ya retiraste.</p>
            </div>
          </section>

          {/* Error 2 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-start gap-3">
              <span className="shrink-0 w-9 h-9 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-black">2</span>
              Inventario Invisible: No Saber Qué Tienes
            </h2>
            <p className="mb-4">Sin control de inventario, tres problemas ocurren simultáneamente: te quedas sin producto estelar y el cliente se va al OXXO de la esquina, tienes producto que no rota y ese capital está dormido, y el robo pasa desapercibido porque no tienes con qué comparar.</p>
            <p className="mb-4">Los especialistas en comercio minorista señalan la <strong>falta de control de inventarios</strong> como una de las principales causas de descapitalización en tiendas de barrio durante el primer año de operación.</p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <p className="text-emerald-900 font-semibold">✅ <strong>Solución:</strong> Un POS con inventario en tiempo real sabe cuántas piezas tienes ahora mismo. Cuando quedan pocas unidades de un producto clave, te manda una alerta. Fin del desabasto y del capital dormido.</p>
            </div>
          </section>

          {/* Error 3 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-start gap-3">
              <span className="shrink-0 w-9 h-9 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-black">3</span>
              El Robo Hormiga No Detectado
            </h2>
            <p className="mb-4">Según estudios globales del sector retail (ASIS International), el robo interno por empleados representa entre el <strong>18% y 30% del total de pérdidas</strong> de una tienda. Cada evento es pequeño e invisible: una botella aquí, un billete de más en el cambio allá. Pero sumado al mes, puede equivaler a días enteros de ganancias evaporadas.</p>
            <p className="mb-4">Las modalidades más documentadas incluyen cancelaciones ficticias (el cajero "devuelve" un producto y se queda el dinero), el cobro menos a familiares y amigos, y simplemente no registrar la venta cuando el cliente paga en efectivo.</p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <p className="text-emerald-900 font-semibold">✅ <strong>Solución:</strong> Implementa el <strong>corte de caja a ciegas</strong>. El empleado cuenta el dinero físico SIN ver lo que dice el sistema. Si hay diferencia, tiene que dar una explicación. Esta presión reduce el fraude drásticamente desde el primer día.</p>
            </div>
          </section>

          {/* Error 4 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-start gap-3">
              <span className="shrink-0 w-9 h-9 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-black">4</span>
              Depender de Internet para Poder Cobrar
            </h2>
            <p className="mb-4">Si tu sistema de caja es 100% web, el día que se cae el servicio en tu colonia, tu negocio deja de operar. No puedes consultar precios, no puedes procesar ventas, no puedes imprimir tickets. En zonas populares y semiurbanas de México, la calidad del internet sigue siendo inconsistente.</p>
            <p className="mb-4">Atar tu operación a la estabilidad del cable de fibra óptica de tu proveedor es un riesgo operativo inaceptable para un negocio que vive del flujo diario.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <p className="text-blue-900 font-semibold">✅ <strong>Solución:</strong> Los sistemas híbridos modernos como Fast-POS operan 100% sin internet (la base de datos vive en tu PC local) y sincronizan automáticamente con la nube cuando la conexión regresa. Nunca pierdes una venta.</p>
            </div>
          </section>

          {/* Error 5 */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-start gap-3">
              <span className="shrink-0 w-9 h-9 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-black">5</span>
              No Saber Qué Productos Te Dan Dinero y Cuáles Te lo Quitan
            </h2>
            <p className="mb-4">Un tendero intuitivo sabe que "las botanas rotan bien". Pero ¿cuánto margen exacto te deja una Sabritas frente a una bolsa de otra marca? ¿Qué proveedor de lácteos te da mejor margen neto? Sin datos, estas decisiones se toman a corazonada.</p>
            <p className="mb-4">Puedes tener tu vitrina más valiosa dedicada a un producto con 5% de margen, cuando hay otro que te dejaría 22% y que no surtiste "porque nunca lo habías intentado". Esto, multiplicado por meses, destruye rentabilidad silenciosamente.</p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <p className="text-emerald-900 font-semibold">✅ <strong>Solución:</strong> Un reporte de Productos Más Rentables te muestra en segundos dónde está el dinero real. Tomas decisiones de inventario y acomodo de tienda con datos, no con intuición.</p>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-slate-900 rounded-[2rem] p-10 text-white">
            <h2 className="text-2xl font-black text-white mb-4">La Conclusión</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Ninguno de estos errores es problema de esfuerzo o de mala suerte. Son problemas de herramientas. El OXXO no gana porque tiene mejor producto que tú; gana porque tiene un sistema que le da información exacta de cada venta, en cada sucursal, en tiempo real.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Fast-POS existe para cerrar esa brecha: darle al tendero independiente las mismas ventajas tecnológicas de las grandes cadenas, sin rentas mensuales ni dependencia de internet.
            </p>
            <Link href="/soluciones/abarrotes" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-colors">
              Ver Fast-POS para Abarrotes →
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
}
