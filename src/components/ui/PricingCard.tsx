import { cn } from "./MagneticButton";
import { IconCheck } from "@tabler/icons-react";
import { MagneticButton } from "./MagneticButton";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  actionUrl?: string;
}

export function PricingCard({ title, price, period, features, isPopular, buttonText, actionUrl }: PricingCardProps) {
  return (
    <div className={cn(
      "relative p-6 md:p-8 xl:p-10 rounded-3xl flex flex-col h-full overflow-hidden transition-all duration-500",
      isPopular 
        ? "bg-slate-900/60 backdrop-blur-[40px] border border-slate-700/50 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] ring-1 ring-white/10 hover:bg-slate-900/70 md:-translate-y-2 lg:-translate-y-4" 
        : "bg-white/30 backdrop-blur-[40px] border border-white/60 shadow-xl shadow-slate-200/50 hover:bg-white/50 hover:shadow-2xl hover:border-white/80"
    )}>
      
      {isPopular ? (
        <div className="mb-6 flex flex-col sm:flex-row xl:flex-row items-start sm:items-center gap-3">
          <h3 className="text-xl font-bold text-blue-400 tracking-tight">{title}</h3>
          <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
            Recomendado
          </span>
        </div>
      ) : (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-500 tracking-tight">{title}</h3>
        </div>
      )}

      <div className="mb-8 relative">
        <div className="flex flex-col xl:flex-row xl:items-baseline gap-1">
          <span className={cn(
            "text-5xl lg:text-5xl xl:text-6xl font-black tracking-tighter",
            isPopular ? "text-white" : "text-slate-900"
          )}>{price}</span>
          {period && <span className={cn(
            "font-medium text-sm md:text-base",
            isPopular ? "text-slate-400" : "text-slate-500"
          )}>{period}</span>}
        </div>
      </div>

      <div className={cn(
        "w-full h-px mb-8",
        isPopular ? "bg-slate-800" : "bg-slate-100"
      )} />

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <IconCheck className={cn(
              "w-5 h-5 shrink-0 mt-0.5",
              isPopular ? "text-blue-400" : "text-blue-600"
            )} stroke={2.5} />
            <span className={cn(
              "font-medium leading-relaxed",
              isPopular ? "text-slate-300" : "text-slate-700"
            )}>{feature}</span>
          </li>
        ))}
      </ul>

      <a href={actionUrl} target="_blank" rel="noopener noreferrer" className="block w-full mt-auto">
        <MagneticButton 
          variant={isPopular ? "primary" : "secondary"} 
          className="w-full text-center justify-center font-bold text-base md:text-lg py-3.5 md:py-4 shadow-sm relative z-10 block rounded-2xl"
        >
          {buttonText || "Comprar Ahora"}
        </MagneticButton>
      </a>
      
      {/* Background Glow for Popular Card */}
      {isPopular && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none -mt-32 -mr-32" />
      )}
    </div>
  );
}
