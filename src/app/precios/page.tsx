"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  IconCheck, IconX, IconMinus,
  IconDeviceDesktop, IconCloud, IconBuildingStore, IconInfinity
} from "@tabler/icons-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

// ─── DATOS ────────────────────────────────────────────────────────────────────
const plans = [
  {
    id: "esencial",
    icon: IconDeviceDesktop,
    name: "Esencial",
    tagline: "Para comenzar sin riesgos",
    price: { unico: "$1,499", mensual: null, anual: null },
    billing: "Pago único · Licencia Vitalicia",
    color: "slate",
    cta: "Comprar Ahora",
    ctaHref: siteConfig.links.whatsappSalesUrl,
    ctaStyle: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
    popular: false,
    description: "Una sola computadora, funciona sin internet, sin pagos mensuales nunca.",
  },
  {
    id: "pro",
    icon: IconCloud,
    name: "Cloud Pro",
    tagline: "El más elegido por nuestros clientes",
    price: { unico: null, mensual: "$399", anual: "$3,499" },
    billing: "mes · o $3,499 / año (ahorra $1,289)",
    color: "blue",
    cta: "Empezar Cloud Pro",
    ctaHref: siteConfig.links.whatsappProLicenseUrl,
    ctaStyle: "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.4)]",
    popular: true,
    description: "Todo el poder local + App Móvil, respaldo en la nube y soporte prioritario.",
  },
  {
    id: "enterprise",
    icon: IconBuildingStore,
    name: "Multi-Sucursal",
    tagline: "Para negocios en expansión",
    price: { unico: null, mensual: null, anual: null },
    billing: "Cotización personalizada",
    color: "emerald",
    cta: "Solicitar Cotización",
    ctaHref: siteConfig.links.whatsappSalesUrl,
    ctaStyle: "border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100",
    popular: false,
    description: "Control centralizado para 2 o más sucursales, usuarios ilimitados.",
  },
];

// Feature matrix
type FeatureValue = boolean | string;

const featureGroups: { group: string; features: { label: string; esencial: FeatureValue; pro: FeatureValue; enterprise: FeatureValue; tooltip?: string }[] }[] = [
  {
    group: "Caja y Ventas",
    features: [
      { label: "Punto de Venta Local (offline)", esencial: true, pro: true, enterprise: true },
      { label: "Tickets ilimitados", esencial: true, pro: true, enterprise: true },
      { label: "Lector láser y escáner de código", esencial: true, pro: true, enterprise: true },
      { label: "Impresoras 58mm y 80mm", esencial: true, pro: true, enterprise: true },
      { label: "Descuentos y promociones", esencial: true, pro: true, enterprise: true },
      { label: "Múltiples formas de pago (efectivo, tarjeta)", esencial: true, pro: true, enterprise: true },
      { label: "Ventas a granel (kilo/gramo/metro)", esencial: true, pro: true, enterprise: true },
    ],
  },
  {
    group: "Inventario",
    features: [
      { label: "Productos y categorías ilimitados", esencial: true, pro: true, enterprise: true },
      { label: "Alertas de stock mínimo", esencial: true, pro: true, enterprise: true },
      { label: "Control de entradas y salidas", esencial: true, pro: true, enterprise: true },
      { label: "Múltiples almacenes", esencial: false, pro: false, enterprise: true },
      { label: "Traspasos entre sucursales", esencial: false, pro: false, enterprise: true },
    ],
  },
  {
    group: "Control y Seguridad",
    features: [
      { label: "Corte de caja a ciegas", esencial: true, pro: true, enterprise: true },
      { label: "Retiros con contraseña de admin", esencial: true, pro: true, enterprise: true },
      { label: "Usuarios y permisos por rol", esencial: "2 usuarios", pro: "5 usuarios", enterprise: "Ilimitados" },
      { label: "Historial de movimientos de caja", esencial: true, pro: true, enterprise: true },
      { label: "Cancelaciones con autorización", esencial: true, pro: true, enterprise: true },
    ],
  },
  {
    group: "Nube y Movilidad",
    features: [
      { label: "App Móvil (iOS y Android)", esencial: false, pro: true, enterprise: true },
      { label: "Dashboard en tiempo real desde celular", esencial: false, pro: true, enterprise: true },
      { label: "Respaldo automático en la nube", esencial: false, pro: true, enterprise: true },
      { label: "Recuperación en nueva PC (en < 5 min)", esencial: false, pro: true, enterprise: true },
      { label: "Reportes consolidados multi-sucursal", esencial: false, pro: false, enterprise: true },
    ],
  },
  {
    group: "Reportes",
    features: [
      { label: "Reporte de ventas diario/semanal/mensual", esencial: true, pro: true, enterprise: true },
      { label: "Top de productos más vendidos", esencial: true, pro: true, enterprise: true },
      { label: "Reporte de cortes de caja", esencial: true, pro: true, enterprise: true },
      { label: "Análisis por sucursal", esencial: false, pro: false, enterprise: true },
      { label: "Exportar a Excel/CSV", esencial: true, pro: true, enterprise: true },
    ],
  },
  {
    group: "Soporte",
    features: [
      { label: "Instalación asistida por el equipo", esencial: true, pro: true, enterprise: true },
      { label: "Soporte por WhatsApp", esencial: "Horario comercial", pro: "Prioritario 24/7", enterprise: "Dedicado 24/7" },
      { label: "Actualizaciones de software", esencial: "Primera versión", pro: "Incluidas siempre", enterprise: "Incluidas siempre" },
      { label: "Capacitación del equipo de cajeros", esencial: false, pro: true, enterprise: true },
    ],
  },
];

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) return <IconCheck size={20} className="text-emerald-500 mx-auto" />;
  if (value === false) return <IconX size={20} className="text-slate-300 mx-auto" />;
  return <span className="text-slate-700 text-sm font-semibold text-center block">{value}</span>;
}

export default function PreciosPage() {
  const [billing, setBilling] = useState<"mensual" | "anual">("anual");

  return (
    <main className="relative min-h-screen pt-24 pb-20 selection:bg-blue-500/30 overflow-hidden">
      <AnimatedBackground />

      {/* Hero */}
      <section className="relative px-6 py-16 max-w-5xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 drop-shadow-sm">
          Precios simples, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">sin letras chiquitas.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
          Empieza con un pago único y sin mensualidades. Cuando tu negocio lo pida, sube al Cloud sin perder nada.
        </p>

        {/* Toggle mensual/anual */}
        <div className="inline-flex items-center gap-4 bg-white/80 border border-slate-200 rounded-2xl p-2 shadow-sm">
          <button
            onClick={() => setBilling("mensual")}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${billing === "mensual" ? "bg-slate-900 text-white shadow" : "text-slate-500 hover:text-slate-900"}`}
          >
            Mensual
          </button>
          <button
            onClick={() => setBilling("anual")}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${billing === "anual" ? "bg-slate-900 text-white shadow" : "text-slate-500 hover:text-slate-900"}`}
          >
            Anual <span className="text-emerald-500 font-black">-27%</span>
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-3 gap-8 items-end">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const showPrice = plan.id === "pro"
              ? (billing === "anual" ? plan.price.anual : plan.price.mensual)
              : plan.price.unico;

            return (
              <div
                key={plan.id}
                className={`relative rounded-[2.5rem] p-8 border transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "bg-slate-900 border-slate-700 shadow-2xl md:-translate-y-5"
                    : "bg-white/60 backdrop-blur-2xl border-slate-200 shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-xs font-black uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg">
                    ★ Más Popular
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.popular ? "bg-blue-500/20 text-blue-400" : "bg-slate-100 text-slate-600"}`}>
                  <Icon size={24} />
                </div>

                <h3 className={`text-2xl font-black mb-1 ${plan.popular ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                <p className={`text-sm font-medium mb-6 min-h-[36px] ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>{plan.tagline}</p>

                <div className="mb-2">
                  {showPrice ? (
                    <>
                      <span className={`text-4xl font-black ${plan.popular ? "text-white" : "text-slate-900"}`}>{showPrice}</span>
                      {plan.id === "pro" && billing === "mensual" && (
                        <span className={`text-sm font-medium ml-1 ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>/mes</span>
                      )}
                      {plan.id !== "pro" && (
                        <span className={`text-sm font-medium ml-1 ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>pago único</span>
                      )}
                    </>
                  ) : (
                    <span className={`text-3xl font-black ${plan.popular ? "text-white" : "text-slate-900"}`}>A la medida</span>
                  )}
                </div>
                <p className={`text-xs font-semibold mb-8 ${plan.popular ? "text-blue-400" : "text-slate-400"}`}>{plan.billing}</p>

                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3.5 px-6 text-center rounded-2xl font-bold transition-all mb-8 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>

                <p className={`text-sm leading-relaxed ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-black text-slate-900 text-center mb-12">
          Comparativa Completa de Planes
        </h2>
        <div className="bg-white/70 backdrop-blur-2xl rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden">
          {/* Header tabla */}
          <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50/80">
            <div className="p-5 col-span-1" />
            {plans.map((p) => (
              <div key={p.id} className={`p-5 text-center font-black text-sm ${p.popular ? "text-blue-700 bg-blue-50/60" : "text-slate-700"}`}>
                {p.name}
                {p.popular && <span className="block text-[10px] text-blue-500 font-bold uppercase tracking-widest mt-0.5">Popular</span>}
              </div>
            ))}
          </div>

          {/* Feature groups */}
          {featureGroups.map((group) => (
            <div key={group.group}>
              <div className="bg-slate-100/70 px-5 py-3 border-b border-slate-200">
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{group.group}</span>
              </div>
              {group.features.map((feat, i) => (
                <div
                  key={feat.label}
                  className={`grid grid-cols-4 border-b border-slate-100 items-center ${i % 2 === 0 ? "" : "bg-slate-50/40"}`}
                >
                  <div className="p-4 col-span-1 text-sm font-medium text-slate-700">{feat.label}</div>
                  <div className={`p-4 text-center ${plans[0].popular ? "" : ""}`}><FeatureCell value={feat.esencial} /></div>
                  <div className="p-4 text-center bg-blue-50/30"><FeatureCell value={feat.pro} /></div>
                  <div className="p-4 text-center"><FeatureCell value={feat.enterprise} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-black text-center text-slate-900 mb-10">Preguntas Frecuentes</h2>
        <div className="space-y-5">
          {[
            {
              q: "¿Puedo empezar con el Plan Esencial y luego subir al Cloud Pro?",
              a: "Sí. Tu base de datos local se sincroniza a la nube cuando activas Cloud Pro, sin perder una sola venta ni producto. El upgrade es instantáneo.",
            },
            {
              q: "¿Qué pasa si se cae el internet teniendo Cloud Pro?",
              a: "Absolutamente nada en el mostrador. Tu cajero sigue cobrando, escaneando y emitiendo tickets de forma local. Cuando el internet regresa, Fast-POS sincroniza todo en silencio.",
            },
            {
              q: "¿La licencia del Plan Esencial caduca algún día?",
              a: "Nunca. Es vitalicia para la computadora donde la instales. Sin renovaciones, sin sorpresas.",
            },
            {
              q: "¿Cuántos usuarios puedo tener en cada plan?",
              a: "Esencial incluye 2 usuarios (ideal para dueño + cajero). Cloud Pro incluye 5 usuarios. Multi-Sucursal incluye usuarios ilimitados.",
            },
            {
              q: "¿Cómo funciona el soporte?",
              a: "Por WhatsApp. Sin bots, sin tickets de espera. Esencial tiene soporte en horario comercial. Cloud Pro y Multi-Sucursal tienen soporte prioritario y capacitación del equipo de cajeros.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">{q}</h4>
              <p className="text-slate-600 font-medium leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="bg-slate-900 rounded-[2.5rem] p-12 shadow-2xl">
          <IconInfinity size={48} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-white mb-4">¿Tienes dudas sobre cuál plan elegir?</h2>
          <p className="text-slate-300 mb-8 text-lg leading-relaxed">
            Platicamos contigo 10 minutos y te decimos exactamente qué plan necesitas según tu tipo de negocio, número de cajeros y si manejas una o varias sucursales.
          </p>
          <a
            href={siteConfig.links.whatsappSalesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1 text-lg"
          >
            Agendar Consulta Gratuita →
          </a>
        </div>
      </section>

    </main>
  );
}
