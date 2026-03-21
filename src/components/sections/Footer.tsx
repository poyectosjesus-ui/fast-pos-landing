"use client";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#01030b] pt-16 pb-8 px-8 z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div className="max-w-xs">
          <div className="text-2xl font-bold tracking-tight mb-4">
            FAST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">POS</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The modern point-of-sale system that accelerates your business, prevents losses, and gives you total control.
          </p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Product</h4>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Integration</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-slate-500">
        <p>© 2026 Fast POS. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <p>WhatsApp: +1 234 567 8900</p>
          <p>hello@fastpos.mx</p>
        </div>
      </div>
    </footer>
  );
}
