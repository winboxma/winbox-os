"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function NervousSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.documentElement.scrollHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll();
  
  // Smooth the scroll progress for the drawing effect
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden" 
      style={{ height: pageHeight }}
    >
      <svg
        className="absolute left-1/2 -translate-x-1/2 w-full h-full"
        viewBox={`0 0 100 ${pageHeight}`}
        preserveAspectRatio="none"
      >
        <motion.path
          d={`M 50 0 L 50 ${pageHeight}`}
          stroke="rgba(99, 102, 241, 0.15)"
          strokeWidth="1"
          fill="none"
          style={{ pathLength }}
        />
        
        {/* Glowing Head of the path */}
        <motion.circle
          cx="50"
          cy="0"
          r="2"
          fill="#6366f1"
          style={{ 
            translateY: useTransform(pathLength, [0, 1], [0, pageHeight]),
            opacity: useTransform(pathLength, [0, 0.01, 0.99, 1], [0, 1, 1, 0])
          }}
          className="shadow-[0_0_10px_#6366f1]"
        />
      </svg>
    </div>
  );
}

export function PulseBorder({ children, id }: { children: React.ReactNode, id: string }) {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Pulse once and stop or reset? User requested trigger "When the drawn line intersects"
          // We'll use a timeout to reset it so it can trigger again or just leave it pulsed.
          setTimeout(() => setIntersecting(false), 2000);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      <motion.div
        animate={isIntersecting ? {
          boxShadow: [
            "0 0 0 0px rgba(99, 102, 241, 0)",
            "0 0 0 4px rgba(99, 102, 241, 0.2)",
            "0 0 0 0px rgba(99, 102, 241, 0)"
          ],
          borderColor: ["rgba(226, 232, 240, 1)", "rgba(99, 102, 241, 0.5)", "rgba(226, 232, 240, 1)"]
        } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 rounded-[2.5rem] border border-transparent pointer-events-none z-10"
      />
      {children}
    </div>
  );
}
