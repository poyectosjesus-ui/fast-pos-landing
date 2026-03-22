import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";

export default function ArticleTwo() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium mb-12 transition-colors">
          <IconArrowLeft className="w-5 h-5" />
          Volver al Blog
        </Link>
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            ¿Por qué los puntos de venta en la nube están arruinando a tu negocio?
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 font-medium border-b border-slate-100 pb-8">
            <span>Marzo 2026</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Por Equipo Fast POS</span>
          </div>
        </div>

        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed">
          <p>
            Te lo venden como la gran solución tecnológica: "Maneja tu negocio desde cualquier computadora en el mundo". Lo que no te dicen es la letra chiquita: si se va la luz, si falla el proveedor de internet, o si hay intermitencia en tu colonia, <strong>tú no puedes cobrarle a tus clientes</strong>.
          </p>

          <h2>El Peligro de Depender de Internet</h2>
          <p>
            Imagina que es viernes por la tarde, hay una fila de 5 personas esperando pagar sus productos y de repente tu compañía de internet tiene una falla masiva en la zona. El sistema "en la nube" se queda cargando, no puedes abrir tu caja registradora ni registrar el pago con tarjeta. Frustración, clientes yéndose sin comprar y cálculos a mano en el peor momento. Ese es el verdadero costo de un sistema que no es autónomo.
          </p>

          <h2>La Trampa de las Rentas Eternas</h2>
          <p>
            Las empresas multinacionales de software prefieren cobrarte "poco" pero eternamente. Una renta de $500 o $1,000 pesos mensuales parece manejable al principio, pero multiplica eso por 3 años: son más de $36,000 pesos mexicanos que pudiste haber invertido en vitrinas, más inventario o en tu propia ganancia pura. Eres cautivo de su servidor.
          </p>

          <hr className="my-12 border-slate-100" />

          <h2>El Poder de lo Local: 100% Instalable</h2>
          <p>
            En México y en ciudades como Pachuca, las redes no siempre son de fibra óptica de la más alta disponibilidad. Por eso es una regla dorada tener tu <strong>Punto de Venta anclado directamente al Disco Duro de tu Computadora</strong>.
          </p>

          <p>
            La tecnología de <strong>Fast POS</strong> te garantiza absoluta soberanía:
          </p>
          <ul>
            <li>No requiere conexión a Internet (salvo cuando decides respaldar tu base de datos o hacer una actualización).</li>
            <li>La base de datos vive cifrada y segura en TU máquina, no en un servidor al otro lado del mundo que podrían hackear.</li>
            <li>Pagas una sola vez. No nos debes rentas ni comisiones fantasma.</li>
          </ul>

          <div className="bg-slate-50 p-8 rounded-3xl mt-12 border border-slate-200 text-center">
            <h3 className="text-2xl font-bold mb-4 mt-0">Recupera la propiedad de tu negocio</h3>
            <p className="mb-6">Moderniza tu tienda con nuestra Licencia Base de uso vitalicio (Pago Único).</p>
            <a 
              href={siteConfig.links.whatsappSalesUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
            >
              Envíanos un Mensaje
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
