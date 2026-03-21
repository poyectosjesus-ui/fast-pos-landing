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
        "relative overflow-hidden rounded-2xl bg-[#0f172a]/90 backdrop-blur-xl p-8",
        "border border-slate-800 shadow-xl",
        className
      )}
      {...props}
    >
      {/* Subtle top inner highlight to simulate 3D acrylic edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      {children}
    </motion.div>
  );
}
