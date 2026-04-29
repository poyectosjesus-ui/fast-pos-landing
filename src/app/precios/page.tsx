import Link from "next/link";

export const metadata = {
  title: "Planes y Precios | Fast-POS",
};

export default function Page() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 px-6 pt-32">
      <div className="max-w-2xl text-center bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">💰</div>
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Precios</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Esta será la vista dedicada exclusivamente a explicar en detalle las diferencias entre el plan Esencial, Cloud Pro y Enterprise.
        </p>
        <Link href="/" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
