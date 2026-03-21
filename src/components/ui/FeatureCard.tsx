"use client";
import { ReactNode } from "react";
import { cn } from "./MagneticButton";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative flex flex-col gap-4 p-6 rounded-2xl bg-[#0b0f19] border border-slate-800",
        "shadow-lg hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] hover:border-slate-700 transition-all duration-300",
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
