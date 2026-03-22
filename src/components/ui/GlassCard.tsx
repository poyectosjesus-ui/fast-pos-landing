"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      // Changed to rounded-2xl for a more structural, desktop hardware feel, replacing the floaty [2rem]
      className={cn(
        "relative p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/50 shadow-sm transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Subtle Light Inner Glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/60 pointer-events-none" />
      
      {/* Optional Top Highlight for premium feel */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50" />
      
      {children}
    </motion.div>
  );
}
