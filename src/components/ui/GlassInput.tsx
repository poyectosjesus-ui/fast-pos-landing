"use client";

import { motion } from "framer-motion";
import { cn } from "./MagneticButton";
import React from "react";

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 relative w-full group">
        {label && (
          <label className="text-sm font-bold text-slate-600 ml-1 group-focus-within:text-blue-600 transition-colors uppercase tracking-widest">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "flex h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 font-medium",
              "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all",
              "shadow-sm",
              icon && "pl-10",
              className
            )}
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
