import { cn } from "./MagneticButton";
import { MagneticButton } from "./MagneticButton";
import { IconCheck } from "@tabler/icons-react";

interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  className?: string;
}

export function PricingCard({ tier, price, description, features, isPopular, buttonText, className }: PricingCardProps) {
  return (
    <div className={cn(
      "relative flex flex-col p-8 rounded-2xl bg-[#0f172a]/90 backdrop-blur-xl border h-full",
      isPopular ? "border-blue-500 shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] md:scale-105 z-10" : "border-slate-800 shadow-xl opacity-90 hover:opacity-100 transition-opacity",
      className
    )}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-500/30">Más Popular</span>
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{tier}</h3>
        <p className="text-sm text-slate-400 mb-6 min-h-[40px] font-medium leading-relaxed">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-white tabular-nums tracking-tighter">{price}</span>
        </div>
      </div>
      
      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
            <IconCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>
      
      <MagneticButton variant={isPopular ? "primary" : "secondary"} className="w-full font-bold uppercase tracking-wide text-sm py-4">
        {buttonText || "Comenzar"}
      </MagneticButton>
    </div>
  );
}
