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
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    green: "text-green-400 bg-green-500/10 border-green-500/30",
    glass: "text-slate-300 bg-white/[0.03] border-white/10 backdrop-blur-md",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      viewport={{ once: true }}
      className={cn(
        "relative inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border",
        variants[variant],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        {/* Subtle dot indicator */}
        <span className={cn(
          "w-1.5 h-1.5 rounded-full animate-pulse",
          variant === "blue" ? "bg-blue-400" :
          variant === "purple" ? "bg-purple-400" :
          variant === "green" ? "bg-green-400" : "bg-slate-400"
        )} />
        {children}
      </span>
    </motion.div>
  );
}
