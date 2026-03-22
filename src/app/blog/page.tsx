import Link from "next/link";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

const posts = [
  {
    title: "Los 3 errores mortales que quiebran las tiendas de abarrotes (y cómo evitarlos)",
    slug: "errores-abarrotes",
    excerpt: "Descubre por qué las fugas de dinero por cobro manual y falta de inventario son el enemigo número uno del pequeño comercio en México.",
    date: "Marzo 2026",
    readTime: "3 min"
  },
  {
    title: "¿Por qué los puntos de venta en la nube están arruinando a tu negocio?",
    slug: "peligro-nube",
    excerpt: "Conoce el peligro oculto de depender de una conexión a internet para poder cobrar, y cómo las altas rentas mensuales consumen tus ganancias.",
    date: "Marzo 2026",
    readTime: "4 min"
  },
  {
    title: "Cómo modernizar el cobro de tu tienda en menos de 24 horas",
    slug: "modernizar-tienda",
    excerpt: "Guía paso a paso para comerciantes. Qué equipo necesitas realmente (computadora, lector, impresora) y por qué es más barato de lo que crees.",
    date: "Marzo 2026",
    readTime: "2 min"
  }
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-12 transition-colors">
          <IconArrowLeft className="w-5 h-5" />
          Regresar a Fast POS
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Recursos para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Comerciantes</span>
        </h1>
        <p className="text-lg text-slate-600 mb-16 max-w-2xl">
          Estrategias, consejos y guías prácticas para llevar la administración de tu tienda o negocio al siguiente nivel sin depender de altos costos.
        </p>

        <div className="grid gap-8">
          {posts.map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group block bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>Lectura de {post.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                Leer artículo completo <IconArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
