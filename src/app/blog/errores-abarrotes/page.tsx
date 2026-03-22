import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";

export default function ArticleOne() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium mb-12 transition-colors">
          <IconArrowLeft className="w-5 h-5" />
          Volver al Blog
        </Link>
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Los 3 errores mortales que quiebran las tiendas de abarrotes (y cómo evitarlos)
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 font-medium border-b border-slate-100 pb-8">
            <span>Marzo 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Por Equipo Fast POS</span>
          </div>
        </div>

        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed">
          <p>
            En México, abrir una tienda de abarrotes, farmacia o ferretería es el sueño de miles de emprendedores. Sin embargo, más del 50% de estos negocios locales cierran antes de cumplir sus primeros dos años. ¿El motivo real? No es la falta de clientes, es el <strong>descontrol administrativo interno</strong>.
          </p>

          <h2>Error 1: La libreta de "Fiao" y el cobro manual</h2>
          <p>
            Depender de la memoria humana o de una libreta manchada para llevar las cuentas diarias es el camino seguro al "robo hormiga". Cuando tienes empleados o familiares ayudando en la caja y el control de precios está solo en la cabeza del dueño, los márgenes de ganancia desaparecen. Un punto de venta escanea un código de barras en milisegundos, cobrando el precio exacto al centavo y registrando cada movimiento irreversiblemente en el corte del turno.
          </p>

          <h2>Error 2: Comprar a ciegas sin saber qué tienes en bodega</h2>
          <p>
            ¿Alguna vez el proveedor de refrescos te dijo "le dejo 3 cajas más" y aceptaste sin saber que en la bodega ya tenías 5 cajas casi caducando? El dinero congelado en mercancía que no se mueve es dinero muerto. El descontrol de inventario provoca pérdidas irreparables por productos caducados o mermas ignoradas.
          </p>

          <h2>Error 3: Pagar rentas mensuales por "soluciones modernas"</h2>
          <p>
            Muchos comerciantes intentan modernizarse pero caen en la trampa de los contratos. Contratan sistemas gigantes que les obligan a pagar $500 o $1,000 pesos mensuales. Si sumas eso durante 5 años, le regalaste más de $50,000 pesos a una empresa extranjera solo por "prestarte" un software que ni siquiera funciona si Telmex o tu internet se caen.
          </p>

          <hr className="my-12 border-slate-100" />

          <h2>La Solución: Retoma el control hoy mismo</h2>
          <p>
            Un buen Punto de Venta local es como blindar tu negocio. Con <strong>Fast POS</strong>, nuestro sistema 100% instalable, tus cajeros solo escanean y cobran. El sistema te avisa cuando te estás quedando sin producto, y el software <strong>es tuyo para siempre</strong> con un solo pago. Si el internet de la colonia se va, tú sigues vendiendo sin parpadear.
          </p>

          <div className="bg-slate-50 p-8 rounded-3xl mt-12 border border-slate-200 text-center">
            <h3 className="text-2xl font-bold mb-4 mt-0">¿Listo para acabar con el caos?</h3>
            <p className="mb-6">Moderniza tu negocio hoy con licencias de pago único desde $499 MXN.</p>
            <a 
              href={siteConfig.links.whatsappSalesUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
            >
              Solicita Información por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
