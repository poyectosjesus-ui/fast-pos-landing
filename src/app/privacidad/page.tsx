import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-slate-200">
        
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-10 transition-colors">
          <IconArrowLeft className="w-5 h-5" />
          Volver a la página principal
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">Aviso de Privacidad</h1>

        <div className="prose prose-slate prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600">
          <p className="text-slate-600 font-medium">Última actualización: Marzo 2026</p>

          <h2 className="text-xl text-slate-900 mt-8 mb-4">1. Identidad y Domicilio del Responsable</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Fast POS (en adelante "El Responsable"), con domicilio en Pachuca de Soto, Hidalgo, México, es el responsable del tratamiento y uso de sus datos personales, del uso que se le dé a los mismos y de su protección, en estricto apego con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en adelante "La Ley").
          </p>

          <h2 className="text-xl text-slate-900 mt-8 mb-4">2. Datos Personales Recabados</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, El Responsable tratará datos personales de identificación, contacto y facturación. Se le informa que no recabamos datos personales sensibles, de acuerdo con la clasificación de La Ley.
          </p>

          <h2 className="text-xl text-slate-900 mt-8 mb-4">3. Finalidad del Tratamiento de Datos</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Sus datos personales serán utilizados para las siguientes finalidades principales, necesarias para el servicio que solicita:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>Proveer el software Punto de Venta (Fast POS) y las licencias correspondientes.</li>
            <li>Brindar atención al cliente, soporte técnico remoto y actualizaciones de sistema.</li>
            <li>Facturación y cobranza por los productos adquiridos.</li>
            <li>Dar cumplimiento a obligaciones contraídas con nuestros clientes.</li>
          </ul>

          <h2 className="text-xl text-slate-900 mt-8 mb-4">4. Transferencia de Datos</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            El Responsable le informa que sus datos personales no serán vendidos, transferidos ni compartidos con terceros sin su consentimiento previo, salvo las excepciones previstas en el artículo 37 de La Ley.
          </p>

          <h2 className="text-xl text-slate-900 mt-8 mb-4">5. Derechos ARCO</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada o sea inexacta (Rectificación); que la eliminemos de nuestros registros cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
          </p>

          <h2 className="text-xl text-slate-900 mt-8 mb-4">6. Cambios al Aviso de Privacidad</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales, de nuestras propias necesidades por los productos o servicios que ofrecemos, o por cambios en nuestro modelo de negocio.
          </p>
        </div>
      </div>
    </div>
  );
}
