import Link from "next/link";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const metadata = {
  title: "Blog de Negocios y Punto de Venta | Fast-POS",
  description: "Consejos, estrategias y guías para modernizar tu negocio, evitar robos y crecer tus ganancias con Fast-POS."
};

const posts = [
  {
    slug: "/blog/errores-abarrotes",
    categoria: "Negocios",
    categoriaColor: "emerald",
    titulo: "Los 5 Errores que Quiebran una Tienda de Abarrotes Antes del Primer Año",
    descripcion: "México tiene 1.2 millones de tiendas de abarrotes. La mayoría no llega al año. Aquí están los motivos reales con datos del INEGI, sin rodeos.",
    tiempo: "7 min de lectura",
    img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Tienda de abarrotes",
    featured: true,
  },
  {
    slug: "/blog/peligro-nube",
    categoria: "Tecnología",
    categoriaColor: "blue",
    titulo: "Punto de Venta Web vs Local: La Guía Definitiva para No Equivocarte",
    descripcion: "Si se cae tu internet, un sistema web te deja sin cobrar. Entiende por qué el modelo híbrido es el rey en 2025 con esta comparativa directa.",
    tiempo: "6 min de lectura",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    alt: "Software nube vs local",
  },
  {
    slug: "/blog/modernizar-tienda",
    categoria: "Estrategia",
    categoriaColor: "indigo",
    titulo: "Cómo Modernizar tu Tienda para Competir con OXXO en 2025",
    descripcion: "Hay más de 21,000 tiendas OXXO en México. Descubre 6 ventajas reales que solo una tienda de barrio puede explotar para ganarles en lo que importa.",
    tiempo: "8 min de lectura",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    alt: "Competir con grandes cadenas",
  },
  {
    slug: "/blog/corte-de-caja",
    categoria: "Operaciones",
    categoriaColor: "teal",
    titulo: "Cómo Hacer el Corte de Caja Correctamente en tu Tienda (Guía Completa)",
    descripcion: "Una diferencia del 2% diario puede costarte $58,000 pesos al año. Aprende el proceso de corte de caja a ciegas paso a paso y evita fugas de dinero.",
    tiempo: "7 min de lectura",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    alt: "Corte de caja en tienda",
  },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  indigo: "bg-indigo-100 text-indigo-700",
  teal: "bg-teal-100 text-teal-700",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main className="relative min-h-screen pt-24 pb-20 selection:bg-indigo-500/30 overflow-hidden">
      <AnimatedBackground />

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 drop-shadow-sm">
            Blog y Recursos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">para tu Negocio.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Guías prácticas, datos reales y estrategias para que tu tienda crezca, se proteja y compita con ventaja.
          </p>
        </div>

        {/* Artículo Destacado */}
        <Link
          href={featured.slug}
          className="group block mb-16 relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-900 border border-slate-800 hover:-translate-y-2 transition-transform duration-500"
        >
          <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay group-hover:bg-indigo-500/20 transition-colors" />
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10">
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-bold bg-indigo-500 text-white rounded-full">Artículo Destacado</span>
                <span className="px-3 py-1 text-xs font-bold bg-white/10 text-slate-300 rounded-full">{featured.categoria}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-snug group-hover:text-indigo-200 transition-colors">
                {featured.titulo}
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">{featured.descripcion}</p>
              <div className="flex items-center gap-4 text-slate-400 font-medium text-sm">
                <div className="w-9 h-9 bg-slate-700 rounded-full flex items-center justify-center text-white font-black text-sm">FP</div>
                <span>Equipo Fast-POS &bull; {featured.tiempo}</span>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-transparent z-10" />
              <img
                src={featured.img}
                alt={featured.alt}
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </Link>

        {/* Grid de artículos */}
        <div className="grid md:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="bg-white/60 backdrop-blur-2xl rounded-[2rem] border border-white overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src={post.img}
                  alt={post.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className={`text-xs font-bold tracking-widest uppercase mb-3 ${colorMap[post.categoriaColor]?.split(" ")[1] ?? "text-slate-600"}`}>
                  {post.categoria}
                </span>
                <h3 className="text-xl font-black text-slate-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors flex-1">
                  {post.titulo}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{post.descripcion}</p>
                <span className="text-slate-400 text-sm font-medium">{post.tiempo}</span>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </main>
  );
}
