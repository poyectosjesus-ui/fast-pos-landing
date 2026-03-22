import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";

export default function ArticleThree() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium mb-12 transition-colors">
          <IconArrowLeft className="w-5 h-5" />
          Volver al Blog
        </Link>
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Cómo modernizar el cobro de tu tienda en menos de 24 horas
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 font-medium border-b border-slate-100 pb-8">
            <span>Marzo 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Por Equipo Fast POS</span>
          </div>
        </div>

        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed">
          <p>
            Existe un enorme mito en el mundo del pequeño y mediano comercio en México: "Poner un sistema de código de barras es carísimo y solo las cadenas grandes como Oxxo o Aurrerá pueden pagarlo". <strong>Esto es completamente falso.</strong>
          </p>

          <p>
            Hoy te mostraremos cómo con menos de lo que cuesta el inventario de botanas de una semana, puedes armar tu centro de cobro inteligente y duplicar el control de tu dinero.
          </p>

          <h2>El Equipo Básico: ¿Qué Hardware necesitas realmente?</h2>
          <p>No ocupas tecnología de la NASA. Tu computadora actual puede convertirse en una terminal de alto nivel con 3 simples piezas de hardware sumamente económicas:</p>
          
          <ul className="space-y-4">
            <li><strong>Una Laptop o PC Windows (La que ya tienes):</strong> Cualquier equipo moderno, incluso si tiene 5 o 7 años de viejo, puede correr un sistema de punto de venta bien optimizado.</li>
            <li><strong>Lector de Código de Barras USB:</strong> Lo puedes comprar en Amazon o Steren por entre $250 y $500 pesos. Lo conectas como si fuera un mouse y está listo para escanear de inmediato.</li>
            <li><strong>Impresora Térmica (Tickets):</strong> Olvídate de los cartuchos de tinta. Estas impresoras se calientan para grabar el papel, son mágicas. Un rollo de papel te rinde cientos de tickets y el equipo ronda los $600 pesos.</li>
          </ul>

          <h2>La Pieza Clave: El Software</h2>
          <p>
            Puedes tener el mejor escáner del mundo, pero si tu software es confuso, enredado y no te da los cortes de caja a tiempo, no servirá de nada. Tienes que elegir un Software que esté pensado <strong>desde el cajero hacia arriba</strong>. Que los botones grandes, el buscador de precios y el cierre de turno sucedan con dos clics.
          </p>

          <hr className="my-12 border-slate-100" />

          <h2>El As en la Manga: Fast POS</h2>
          <p>
            Nosotros desarrollamos Fast POS para que cualquier comerciante pueda descargarlo, instalarlo (o dejar que nosotros lo hagamos) e ingresar los productos en menos de un día laborable. Nada de semanas de capacitaciones extensas. 
          </p>

          <div className="bg-slate-50 p-8 rounded-3xl mt-12 border border-slate-200 text-center">
            <h3 className="text-2xl font-bold mb-4 mt-0">Tu Tienda Digitalizada y Profesional</h3>
            <p className="mb-6">Te instalamos y te ayudamos a arrancar hoy mismo. Escoge la Licencia Avanzada y despreocúpate.</p>
            <a 
              href={siteConfig.links.whatsappSalesUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
            >
              Consultar Compatibilidad
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
