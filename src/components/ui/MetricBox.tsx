import { cn } from "./MagneticButton";

interface MetricBoxProps {
  value: string;
  label: string;
  trend?: string;
  className?: string;
}

export function MetricBox({ value, label, trend, className }: MetricBoxProps) {
  return (
    <div className={cn("flex flex-col p-6 rounded-2xl bg-[#0f172a]/80 border border-slate-800 backdrop-blur-md shadow-lg", className)}>
      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-4xl font-bold tracking-tight text-white tabular-nums">{value}</span>
        {trend && <span className="text-sm font-medium text-emerald-400">{trend}</span>}
      </div>
      <span className="text-sm font-medium text-slate-400">{label}</span>
    </div>
  );
}
