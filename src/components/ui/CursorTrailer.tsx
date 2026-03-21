"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorTrailer() {
  const [mounted, setMounted] = useState(false);
  
  // Single, highly stable and damped tracking light. No comet tails.
  const cursorX = useSpring(0, { damping: 40, stiffness: 150, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 40, stiffness: 150, mass: 0.5 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 200);
      cursorY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div 
      style={{ x: cursorX, y: cursorY }} 
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen -z-40" 
    />
  );
}
