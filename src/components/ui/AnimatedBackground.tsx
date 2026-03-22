"use client";

import { motion } from "framer-motion";

// OPCIÓN 1: Financial Grid + Tactile Noise (Guardada por si se requiere volver a ella)
export function AnimatedBackgroundV1() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50">
      
      {/* 1. Tactile Noise (SVG Filter) for Matte Paper Feel */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Soft Ambient Overlays to give life to the white */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-300/15 rounded-full blur-[120px] mix-blend-multiply" />
      <div className="absolute top-[30%] right-[-10%] w-[40%] h-[50%] bg-indigo-300/10 rounded-full blur-[120px] mix-blend-multiply" />

      {/* 3. High-Precision Graph Paper Grid (Fine Lines) */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.5]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, #000 40%, transparent 100%)'
        }}
      />
      
      {/* 4. Thicker Graph Paper Subdivision Lines (Metric Markers) */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.8]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '128px 128px',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, #000 40%, transparent 100%)'
        }}
      />
    </div>
  );
}

// OPCIÓN 2: Aurora Mesh Viva (Guardada)
export function AnimatedBackgroundV2() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50">
      
      {/* Mantenemos un levísimo ruido para que la textura siga siendo premium */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Orbe 1: Azul Eléctrico (Esquina Superior Izquierda) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500/40 rounded-full blur-[140px] mix-blend-multiply" 
      />
      
      {/* Orbe 2: Violeta Vibrante (Centro Derecha) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -60, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[10%] right-[-20%] w-[50%] h-[70%] bg-violet-500/35 rounded-full blur-[140px] mix-blend-multiply" 
      />

      {/* Orbe 3: Cian/Teal Saturado (Centro Abajo) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 40, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[-20%] left-[20%] w-[70%] h-[50%] bg-teal-400/40 rounded-full blur-[140px] mix-blend-multiply" 
      />
    </div>
  );
}

// OPCIÓN 3: Geometría Asimétrica y Cristales Cortados + Refracción de Color (Guardada)
export function AnimatedBackgroundV3() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50">
      
      {/* Base Texturizada (Opcional, muy sutil) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- LUCES DE FONDO (Para teñir el cristal esmerilado desde abajo) --- */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[0%] w-[50%] h-[60%] bg-blue-500/30 rounded-full blur-[130px] mix-blend-multiply" 
      />
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[0%] w-[60%] h-[50%] bg-teal-400/30 rounded-full blur-[130px] mix-blend-multiply" 
      />

      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[30%] left-[20%] w-[40%] h-[50%] bg-violet-500/25 rounded-full blur-[130px] mix-blend-multiply" 
      />
      {/* ------------------------------------------------------------------- */}

      {/* Massive Angled Glass Panel 1 (Derecha) */}
      <motion.div 
        initial={{ opacity: 0, x: 100, rotate: -15 }}
        animate={{ opacity: 1, x: 0, rotate: -12 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[-20%] right-[-10%] w-[60%] h-[150%] bg-white/40 border-l border-white shadow-[0_0_60px_rgba(0,0,0,0.05)] backdrop-blur-3xl origin-top-right z-10" 
      />
      
      {/* Massive Angled Glass Panel 2 (Abajo Izquierda) */}
      <motion.div 
        initial={{ opacity: 0, y: 100, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: -5 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[40%] bg-white/50 border-t border-white shadow-[0_-20px_50px_rgba(0,0,0,0.04)] backdrop-blur-2xl origin-bottom-left z-10" 
      />
      
      {/* Rayos/Acentos de luz diagonal vibrantes */}
      <div className="absolute top-[25%] left-[-20%] w-[150%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform rotate-12 z-20" />
      <div className="absolute top-[65%] right-[-20%] w-[150%] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent transform -rotate-3 z-20" />
      <div className="absolute top-[10%] left-[20%] w-[1px] h-[150%] bg-gradient-to-b from-transparent via-teal-400/40 to-transparent transform rotate-12 z-20" />
      
    </div>
  );
}

// OPCIÓN 4: Ambient Neumorphism & Apple Pure Matte (Guardada)
export function AnimatedBackgroundV4() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#f8fafc]">
      
      {/* Ruido mate hiper-sutil para anclar en la realidad física (Estilo Apple Titanium/Matte) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 
        Sombras Ambientales Extremadamente Suaves y Expandidas. 
        En lugar de orbes definidos, son "radiaciones" de color desde los bordes de la pantalla 
        que tiñen el lienzo blanco vacío de forma imperceptible pero dando una profundidad gigantesca.
      */}
      
      {/* Resplandor Superior Principal (Azure) */}
      <motion.div 
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-25%] left-[5%] w-[90%] h-[50%] bg-blue-400/30 rounded-[100%] blur-[160px] mix-blend-multiply" 
      />
      
      {/* Resplandor Base Secundario (Índigo suave) */}
      <motion.div 
        animate={{ opacity: [0.10, 0.20, 0.10], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-30%] right-[0%] w-[100%] h-[60%] bg-indigo-300/30 rounded-[100%] blur-[180px] mix-blend-multiply" 
      />
      
      {/* Resplandor Refractorio Lateral (Teal minúsculo) */}
      <motion.div 
        animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] left-[-20%] w-[50%] h-[40%] bg-teal-400/20 rounded-[100%] blur-[150px] mix-blend-multiply" 
      />
      
    </div>
  );
}

// PERFECCIÓN HÍBRIDA: Aurora Viva Vibrante + Cristales Geométricos Asimétricos (Activa)
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50">
      
      {/* Base Texturizada Premium */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- LA AURORA (CAPA PROFUNDA) --- */}
      {/* Azul Eléctrico */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500/40 rounded-full blur-[140px] mix-blend-multiply z-0" 
      />
      
      {/* Violeta Vibrante */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, -60, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[10%] right-[-20%] w-[50%] h-[70%] bg-violet-500/35 rounded-full blur-[140px] mix-blend-multiply z-0" 
      />

      {/* Cian/Teal Saturado */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[-20%] left-[20%] w-[70%] h-[50%] bg-teal-400/40 rounded-full blur-[140px] mix-blend-multiply z-0" 
      />


      {/* --- LA GEOMETRÍA (CAPA EXTERIOR) --- */}
      {/* Panel 1 */}
      <motion.div 
        initial={{ opacity: 0, x: 100, rotate: -15 }}
        animate={{ opacity: 1, x: 0, rotate: -12 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[-20%] right-[-10%] w-[60%] h-[150%] bg-white/30 border-l border-white shadow-[0_0_60px_rgba(30,58,138,0.05)] backdrop-blur-3xl origin-top-right z-10" 
      />
      
      {/* Panel 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 100, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: -5 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[40%] bg-white/40 border-t border-white shadow-[0_-20px_50px_rgba(30,58,138,0.04)] backdrop-blur-2xl origin-bottom-left z-10" 
      />
      
      {/* Acentos Láser Diagonales */}
      <div className="absolute top-[25%] left-[-20%] w-[150%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform rotate-12 z-20" />
      <div className="absolute top-[65%] right-[-20%] w-[150%] h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent transform -rotate-3 z-20" />
      <div className="absolute top-[10%] left-[20%] w-[1px] h-[150%] bg-gradient-to-b from-transparent via-teal-400/40 to-transparent transform rotate-12 z-20" />
      
    </div>
  );
}
