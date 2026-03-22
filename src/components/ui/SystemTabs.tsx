"use client";
import { cn } from "./MagneticButton";
import { motion } from "framer-motion";

interface SystemTabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  className?: string;
}

export function SystemTabs({ tabs, activeTab, onChange, className }: SystemTabsProps) {
  return (
    <div className={cn("inline-flex p-1.5 rounded-xl bg-slate-100/80 border border-slate-200 shadow-inner", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            "relative px-6 py-2.5 text-sm font-bold rounded-lg transition-colors z-10",
            activeTab === tab ? "text-blue-700" : "text-slate-500 hover:text-slate-800"
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white rounded-lg border border-slate-200 shadow-sm"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
          <span className="relative z-20">{tab}</span>
        </button>
      ))}
    </div>
  );
}
