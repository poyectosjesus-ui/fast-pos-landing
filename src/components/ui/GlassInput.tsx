"use client";

import { motion } from "framer-motion";
import { cn } from "./MagneticButton";
import { InputHTMLAttributes, forwardRef } from "react";

export interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, label, error, type, icon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full group">
        {label && (
          <label className="text-sm font-medium text-slate-300 ml-1 group-focus-within:text-blue-400 transition-colors">
            {label}
          </label>
        )}
        <div className="relative">
          {icon}
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-xl border bg-black/40 px-4 py-2 text-sm text-white placeholder:text-slate-400 font-medium",
              "border-white/10 focus:border-blue-500/70 focus:bg-black/60",
              "transition-all duration-200 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_0_15px_rgba(37,99,235,0.3)]",
              error && "border-red-500/70 focus:border-red-500/70 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_0_15px_rgba(239,68,68,0.3)]",
              className
            )}
            ref={ref}
            {...props}
          />
          {/* Top edge highlight for 3D realism */}
          <div className="pointer-events-none absolute inset-x-2 top-[1px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
          {/* Subtle bottom glow on focus */}
          <div className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
        </div>
        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} 
            className="text-xs text-red-400 ml-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

GlassInput.displayName = "GlassInput";
