"use client";

import { motion } from "framer-motion";
import { cn } from "./MagneticButton";

interface GalleryProps {
  images: { url: string; alt: string; span?: string }[];
  className?: string;
}

export function Gallery({ images, className }: GalleryProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
      {images.map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative group overflow-hidden rounded-2xl bg-[#0f172a]/90 backdrop-blur-md border border-slate-800 p-2 shadow-xl",
            img.span
          )}
        >
          {/* Internal container to clip the scaling image without breaking the acrylic frame */}
          <div className="relative w-full h-[320px] overflow-hidden rounded-xl bg-[#020617]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img.url} 
              alt={img.alt}
              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
            />
            
            {/* Subtle blue overlay to match the dark industrial aesthetic */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
            
            {/* Inner hardware bezel */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
