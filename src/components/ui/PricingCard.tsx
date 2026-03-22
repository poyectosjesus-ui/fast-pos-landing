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
  onAction?: () => void;
}

export function PricingCard({ title, price, period, features, isPopular, buttonText, onAction }: PricingCardProps) {
  return (
    <div className={cn(
      "relative p-8 rounded-2xl flex flex-col h-full overflow-hidden transition-all duration-300",
      isPopular 
        ? "bg-white border-2 border-blue-500 shadow-xl shadow-blue-500/10" 
        : "bg-white/80 border border-slate-200 shadow-sm"
    )}>
      
      {isPopular && (
        <div className="absolute top-0 right-0 left-0 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest text-center py-2">
          Más Vendido
        </div>
      )}

      <div className={cn("mb-8", isPopular ? "mt-4" : "")}>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black text-slate-900 tracking-tight">{price}</span>
          {period && <span className="text-slate-500 font-medium">{period}</span>}
        </div>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <IconCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" stroke={2.5} />
            <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <MagneticButton 
        variant={isPopular ? "primary" : "secondary"} 
        onClick={onAction}
        className="w-full text-center justify-center font-bold text-lg py-4 shadow-sm"
      >
        {buttonText || "Agendar Cita"}
      </MagneticButton>
    </div>
  );
}
