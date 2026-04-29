import Link from "next/link";

export const metadata = {
  title: "Punto de Venta para Boutiques | Fast-POS",
};

export default function Page() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 px-6 pt-32">
      <div className="max-w-2xl text-center bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
        <div className="text-5xl mb-6">👗</div>
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Solución: Boutiques y Ropa</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Diseñado para manejar tallas, colores y comisiones de vendedores. Mantén el inventario de tu boutique impecable y atractivo.
        </p>
        <Link href="/" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
