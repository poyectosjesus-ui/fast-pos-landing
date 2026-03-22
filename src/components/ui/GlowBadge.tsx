"use client";

import { motion } from "framer-motion";
import { cn } from "./MagneticButton";

interface GlowBadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "purple" | "green" | "glass";
  className?: string;
}

export function GlowBadge({ children, variant = "blue", className }: GlowBadgeProps) {
  const variants = {
    blue: "text-blue-700 bg-blue-100/50 border-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.1)]",
    purple: "text-purple-700 bg-purple-100/50 border-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.1)]",
    green: "text-emerald-700 bg-emerald-100/50 border-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
    glass: "text-slate-700 bg-white/50 border-slate-200 backdrop-blur-md shadow-sm",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300",
        variants[variant],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        <span className={cn(
          "w-1.5 h-1.5 rounded-full animate-pulse",
          variant === "blue" ? "bg-blue-400" :
          variant === "purple" ? "bg-purple-400" :
          variant === "green" ? "bg-green-400" : "bg-slate-400"
        )} />
        {children}
      </span>
    </div>
  );
}
