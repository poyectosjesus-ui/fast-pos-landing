import Link from "next/link";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const metadata = {
  title: "Cómo Hacer el Corte de Caja Correctamente en tu Negocio | Fast-POS Blog",
  description: "Guía paso a paso para hacer el corte de caja en tu tienda de manera correcta. Aprende qué es la caja ciega, cómo detectar diferencias y evitar fraudes de cajeros.",
};

export default function CorteDeCajaPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-20 selection:bg-teal-500/30 overflow-hidden">
      <AnimatedBackground />

      <article className="relative z-10 max-w-3xl mx-auto px-6 py-16">

        {/* Breadcrumb + Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/recursos/blog" className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">← Blog</Link>
            <span className="text-slate-300">/</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full">Operaciones</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-6">
            Cómo Hacer el Corte de Caja Correctamente en tu Tienda (Guía Completa)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
            El corte de caja es el proceso más importante del día en cualquier negocio con ventas en efectivo. Hacerlo mal puede costarte miles de pesos al mes sin que te des cuenta. Aquí te explicamos cómo hacerlo bien desde el primer día.
          </p>
          <div className="flex items-center gap-4 pt-8 border-t border-slate-200">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-black text-lg">FP</div>
            <div>
              <p className="font-bold text-slate-900">Equipo Fast-POS</p>
              <p className="text-sm text-slate-500">Abril 2025 · 7 minutos de lectura</p>
            </div>
          </div>
        </div>

        <div className="space-y-14 text-slate-700 leading-relaxed text-lg">

          {/* Qué es un corte de caja */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Qué es el Corte de Caja?</h2>
            <p className="mb-4">
              El corte de caja es el proceso de reconciliar el <strong>dinero físico que hay en tu caja registradora</strong> contra el <strong>total de ventas que registró tu sistema</strong> durante un turno o un día. Si los dos números coinciden, todo está perfecto. Si hay diferencia, algo pasó: un error, un billete perdido o, en el peor caso, un fraude.
            </p>
            <p>
              Parece simple. Pero la mayoría de los tenderos lo hacen mal, de forma incompleta, o simplemente no lo hacen. El resultado: fugas de dinero que se acumulan silenciosamente durante semanas y meses.
            </p>
          </section>

          {/* Por qué es tan importante */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué es el Proceso más Crítico del Día?</h2>
            <p className="mb-4">
              Imagina una tienda con ventas diarias de $8,000 pesos. Si hay una diferencia de solo el 2% por día (ya sea por errores o robo hormiga), estamos hablando de <strong>$160 pesos diarios</strong>. Parece poco, pero al mes son $4,800 pesos. Al año, casi $58,000 pesos que simplemente desaparecen.
            </p>
            <p>
              El corte de caja diario bien ejecutado es la única herramienta que detecta esas diferencias antes de que crezcan. Es tu radar financiero.
            </p>
          </section>

          {/* Tipos de corte */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6">Los 2 Tipos de Corte de Caja</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-3">🔓 Corte Abierto (No Recomendado)</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  El cajero ve el total del sistema <em>antes</em> de contar el dinero físico. Resultado: inconscientemente (o conscientemente) acomoda el conteo para que coincida. Las diferencias nunca se detectan.
                </p>
              </div>
              <div className="bg-teal-600 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-lg font-black text-white mb-3">🔒 Corte Ciego (El Correcto)</h3>
                <p className="text-base text-teal-50 leading-relaxed">
                  El cajero cuenta el dinero físico <strong>sin ver el total del sistema</strong>. Solo después de entregar el conteo se compara contra el sistema. Es la única forma honesta y efectiva.
                </p>
              </div>
            </div>
          </section>

          {/* Paso a paso */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Hacer el Corte de Caja Paso a Paso</h2>
            <div className="space-y-4">

              <div className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center font-black text-lg shrink-0">1</div>
                <div>
                  <h3 className="font-black text-slate-900 mb-2">Define el Fondo Fijo de Caja</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Antes de abrir el turno, tu caja debe iniciar siempre con la misma cantidad de dinero (por ejemplo $500 pesos en cambio). Este es tu "fondo fijo". Nunca debe cambiar. Si hoy la caja inicia con $700, ya hay un problema que investigar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center font-black text-lg shrink-0">2</div>
                <div>
                  <h3 className="font-black text-slate-900 mb-2">Registra TODO en el Sistema Durante el Turno</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Cada venta, cada cancelación, cada retiro de efectivo (para pagar al proveedor, por ejemplo) debe quedar registrado en el punto de venta. Si un retiro de $300 pesos no queda registrado, el corte al final nunca va a cuadrar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center font-black text-lg shrink-0">3</div>
                <div>
                  <h3 className="font-black text-slate-900 mb-2">Al Cerrar: Cuenta el Físico sin Ver el Sistema</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Aquí entra el corte ciego. El cajero saca el dinero de la caja y lo cuenta billete por billete, moneda por moneda. Anota el total en un papel o en la pantalla del sistema, <strong>sin haber visto antes el total de ventas</strong>. Este conteo es el número real.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center font-black text-lg shrink-0">4</div>
                <div>
                  <h3 className="font-black text-slate-900 mb-2">Compara Contra el Sistema y Analiza la Diferencia</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    El sistema te muestra: Ventas del turno + Fondo inicial − Retiros = Dinero esperado en caja. Compara ese número con el físico contado. Si coinciden: perfecto. Si hay diferencia (positiva o negativa), hay que encontrar la causa antes de cerrar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center font-black text-lg shrink-0">5</div>
                <div>
                  <h3 className="font-black text-slate-900 mb-2">Deja el Fondo Fijo y Separa el Resto</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Una vez cuadrado, separa el fondo fijo ($500 en nuestro ejemplo) para el siguiente turno. El resto es la ganancia del día, que va a la caja fuerte o al banco. Nunca mezcles este dinero con el gasto personal.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Errores comunes */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6">Los 4 Errores que Arruinan el Corte de Caja</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-red-500 font-black shrink-0 text-xl">✗</span>
                <p><strong>Hacer el corte sin registro de retiros.</strong> Si sacas dinero durante el día para comprar una caja de refresco y no lo registras, el corte nunca va a cuadrar y no sabrás por qué.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-red-500 font-black shrink-0 text-xl">✗</span>
                <p><strong>Permitir cancelaciones sin contraseña de supervisor.</strong> Si cualquier cajero puede cancelar ventas libremente, tienes una puerta abierta para el fraude. Las cancelaciones deben requerir autorización del dueño o encargado.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-red-500 font-black shrink-0 text-xl">✗</span>
                <p><strong>Hacer el corte solo una vez a la semana.</strong> Entre más tiempo pase entre cortes, más difícil es detectar de dónde vino la diferencia. Lo ideal es un corte por turno, o al menos uno diario.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-red-500 font-black shrink-0 text-xl">✗</span>
                <p><strong>No guardar el historial de cortes.</strong> Si tienes diferencias recurrentes en el turno de la misma persona, el patrón es una evidencia directa. Sin historial, esa evidencia desaparece.</p>
              </div>
            </div>
          </section>

          {/* Cómo lo facilita Fast-POS */}
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Cómo Fast-POS Automatiza Todo Este Proceso</h2>
            <p className="mb-4">
              Con Fast-POS, el corte de caja no es un proceso manual que depende de la honestidad del cajero. El sistema lo controla todo:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-black shrink-0 mt-1">→</span>
                <span><strong>Apertura de turno con fondo registrado:</strong> El cajero declara cuánto dinero hay en la caja al inicio. El sistema lo guarda.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-black shrink-0 mt-1">→</span>
                <span><strong>Retiros con motivo y contraseña:</strong> Cada salida de efectivo queda registrada con quién la autorizó y por qué.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-black shrink-0 mt-1">→</span>
                <span><strong>Corte ciego integrado:</strong> El cajero ingresa el conteo físico en el sistema sin ver el total esperado. El sistema calcula la diferencia automáticamente.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-black shrink-0 mt-1">→</span>
                <span><strong>Historial de cortes consultable:</strong> Puedes ver desde tu celular todos los cortes de los últimos meses, filtrar por cajero y detectar patrones de diferencias.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-black shrink-0 mt-1">→</span>
                <span><strong>Cancelaciones con contraseña de admin:</strong> Ningún cajero puede cancelar una venta sin tu contraseña. Punto.</span>
              </li>
            </ul>
          </section>

          {/* CTA Final */}
          <section className="bg-slate-900 rounded-[2rem] p-10 text-white">
            <h2 className="text-2xl font-black text-white mb-4">Controla tu Caja, Controla tu Negocio</h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              Fast-POS fue diseñado desde el primer día para que el dueño tenga control total, incluso cuando no está en el mostrador. El módulo de corte de caja a ciegas está incluido desde el plan más básico, sin costo adicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/producto/punto-de-venta" className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-center">
                Ver Fast-POS en Acción →
              </Link>
              <Link href="/precios" className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors text-center border border-white/20">
                Ver Planes y Precios →
              </Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
