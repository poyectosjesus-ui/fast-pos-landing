"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassInput } from "@/components/ui/GlassInput";
import { GlowBadge } from "@/components/ui/GlowBadge";
import { GlassModal } from "@/components/ui/GlassModal";
import { AnimatedTextReveal } from "@/components/ui/AnimatedTextReveal";
import { IconMail, IconDeviceDesktop, IconWifiOff, IconBolt } from "@tabler/icons-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { MetricBox } from "@/components/ui/MetricBox";
import { SystemTabs } from "@/components/ui/SystemTabs";
import { PricingCard } from "@/components/ui/PricingCard";
import { Gallery } from "@/components/ui/Gallery";

const stockImages = [
  // User provided URLs (Tailored for Mexican Context)
  { url: "https://images.unsplash.com/photo-1647427017458-f6df91d046eb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0", alt: "Cajero operando sistema retail", span: "md:col-span-2" },
  { url: "https://plus.unsplash.com/premium_photo-1683121952286-9d96ca422239?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0", alt: "Abarrotes y mostrador local" },
  // Retaining neutral hardware interactions to balance the 4-item grid
  { url: "https://images.unsplash.com/photo-1556741533-6e118e5b61e2?auto=format&fit=crop&q=80&w=800", alt: "Pantalla táctil de Punto de Venta" },
  { url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200", alt: "Productos en estantería", span: "md:col-span-2" },
];

export default function UIKitPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Ventas");

  return (
    <div className="relative min-h-screen py-24 selection:bg-blue-500/30 text-white">
      <AnimatedBackground />
      <div className="max-w-5xl mx-auto px-8 space-y-24 relative z-10">
        
        {/* Header */}
        <div>
          <GlowBadge variant="purple" className="mb-6">Fast POS UI Kit</GlowBadge>
          <AnimatedTextReveal text="Industrial Design System" className="text-5xl md:text-7xl mb-4 font-bold tracking-tight" />
          <p className="text-slate-400 text-xl font-medium max-w-2xl">
            A showcase of the stable, structural, high-contrast components built for the Offline POS Platform.
          </p>
        </div>

        {/* Buttons & Tabs */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold border-b border-white/10 pb-4">Controls & Navigation</h3>
          <div className="flex flex-wrap gap-6 items-center">
            <MagneticButton variant="primary">Descargar Instalador</MagneticButton>
            <MagneticButton variant="secondary">Probar Demo</MagneticButton>
            <MagneticButton variant="outline">Ver Funciones</MagneticButton>
          </div>
          <div className="mt-8">
            <SystemTabs 
              tabs={["Ventas", "Inventario", "Reportes", "Cofiguración"]} 
              activeTab={activeTab} 
              onChange={setActiveTab} 
            />
          </div>
        </section>

        {/* Tactical Metrics & Features */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold border-b border-white/10 pb-4">Metrics & Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <MetricBox value="10x" label="Velocidad Transaccional" trend="Top Tier" />
            <MetricBox value="0ms" label="Latencia de Red" trend="100% Offline" />
            <MetricBox value="99.9%" label="Uptime Garantizado" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <FeatureCard 
              icon={<IconWifiOff size={24} />} 
              title="Operación Offline" 
              description="Sigue vendiendo incluso si tu proveedor de internet falla. Todo se sincroniza después." 
            />
            <FeatureCard 
              icon={<IconBolt size={24} />} 
              title="Velocidad de Escritorio" 
              description="Aprovecha todo el poder de procesamiento físico de tu computadora." 
            />
            <FeatureCard 
              icon={<IconDeviceDesktop size={24} />} 
              title="Aceleración de Hardware" 
              description="Soporte nativo para impresoras térmicas, básculas y escáneres por puerto COM." 
            />
          </div>
        </section>

        {/* Cards & Inputs */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold border-b border-white/10 pb-4">Forms & Structural Cards</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="flex flex-col gap-6">
              <h4 className="text-xl font-medium">Acceso Administrativo</h4>
              <GlassInput 
                placeholder="usuario@tuempresa.com" 
                type="email" 
                label="Usuario" 
                icon={<IconMail className="w-5 h-5 text-slate-500 relative top-11 left-3 absolute" />} 
                className="pl-10"
              />
              <GlassInput 
                placeholder="Contraseña" 
                type="password" 
                label="PIN o Contraseña" 
              />
              <MagneticButton variant="primary" className="w-full">Iniciar Sesión</MagneticButton>
            </GlassCard>

            <PricingCard 
              tier="Licencia Vitalicia" 
              price="$4,999" 
              description="Paga una vez, úsalo para siempre. Instalación local en 1 equipo principal." 
              features={[
                "Catálogo de productos ilimitados",
                "Inventario estricto",
                "Tickets personalizables",
                "Soporte por 1 año"
              ]}
              isPopular={true}
            />
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold border-b border-white/10 pb-4">System States</h3>
          <div className="flex gap-4">
            <GlowBadge variant="blue">Sistema Activo</GlowBadge>
            <GlowBadge variant="purple">Imprimiendo</GlowBadge>
            <GlowBadge variant="green">Inventario Actualizado</GlowBadge>
            <GlowBadge variant="glass">Modo Offline</GlowBadge>
          </div>
        </section>

        {/* Real Photography Framework */}
        <section className="space-y-8">
          <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
            <h3 className="text-2xl font-semibold">Real-World Context</h3>
            <p className="text-slate-400 text-sm">Validating the software context organically without AI generation.</p>
          </div>
          <Gallery images={stockImages} />
        </section>

        {/* Modals */}
        <section className="space-y-8 pb-32">
          <h3 className="text-2xl font-semibold border-b border-white/10 pb-4">Immersive Modals</h3>
          <MagneticButton variant="primary" onClick={() => setIsModalOpen(true)}>
            Abrir Interfaz Crítica
          </MagneticButton>

          <GlassModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            title="Corte de Caja"
          >
            <p className="text-slate-400 mb-8">
              ¿Estás seguro de realizar el corte Z? Esta acción totalizará las ventas del turno y reiniciará los contadores en efectivo.
            </p>
            <div className="flex gap-4">
              <MagneticButton variant="secondary" className="flex-1" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </MagneticButton>
              <MagneticButton variant="primary" className="flex-1" onClick={() => setIsModalOpen(false)}>
                Confirmar Corte
              </MagneticButton>
            </div>
          </GlassModal>
        </section>

      </div>
    </div>
  );
}
