"use client";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#01030b] pt-16 pb-12 px-8 z-10 text-center md:text-left">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-2xl font-bold tracking-tight mb-2">
            FAST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">POS</span> 2.0
          </div>
          <p className="text-slate-400 font-medium">
            Tu Sistema de Ventas Todo en Uno
          </p>
        </div>

        <div className="flex flex-col gap-3 flex-1 md:items-end text-slate-300 font-medium">
          <a href="https://wa.me/527710000000" className="hover:text-green-400 transition-colors">📱 WhatsApp: +52 771 XXXX XXXX</a>
          <a href="mailto:info@fastpos.mx" className="hover:text-blue-400 transition-colors">📧 Email: info@fastpos.mx</a>
          <a href="https://www.fastpos.mx" className="hover:text-blue-400 transition-colors">🌐 Web: www.fastpos.mx</a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center pt-8 border-t border-white/10 text-sm text-slate-500 font-medium gap-2">
        <p>📍 Pachuca de Soto, Hidalgo | México</p>
        <p>© 2024 FAST POS - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
