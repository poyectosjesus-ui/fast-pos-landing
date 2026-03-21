"use client";
import { motion } from "framer-motion";
import { cn } from "./MagneticButton";

interface SystemTabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  className?: string;
}

export function SystemTabs({ tabs, activeTab, onChange, className }: SystemTabsProps) {
  return (
    <div className={cn("inline-flex p-1.5 rounded-xl bg-[#0b0f19] border border-slate-800 shadow-inner", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            "relative px-6 py-2.5 text-sm font-medium transition-colors rounded-lg",
            activeTab === tab ? "text-white" : "text-slate-400 hover:text-slate-200"
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTabIndicator"
              className="absolute inset-0 bg-[#1e293b] rounded-lg border border-slate-700 shadow-sm"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
