import { cn } from "./MagneticButton";
import { IconTrendingUp } from "@tabler/icons-react";

interface MetricBoxProps {
  value: string;
  label: string;
  trend?: string;
  className?: string;
}

export function MetricBox({ value, label, trend, className }: MetricBoxProps) {
  return (
    <div className={cn("flex flex-col p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-md", className)}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl font-black tracking-tight text-slate-900 tabular-nums">{value}</span>
        {trend && (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
            <IconTrendingUp size={14} stroke={3} />
            <span>{trend}</span>
          </div>
        )}
      </div>
      <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
  );
}
