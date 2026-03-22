"use client";

import { motion } from "framer-motion";
import { cn } from "./MagneticButton";

interface AnimatedTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedTextReveal({ text, className, delay = 0 }: AnimatedTextRevealProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("flex flex-wrap text-4xl font-bold tracking-tight text-slate-900", className)}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-3">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
