"use client";

import { motion } from "framer-motion";

const particles = [
  { x: "12%", y: "16%", size: 5, color: "rgba(37,99,235,0.34)", duration: 9, delay: 0.2 },
  { x: "24%", y: "52%", size: 4, color: "rgba(99,102,241,0.26)", duration: 8, delay: 0.6 },
  { x: "44%", y: "28%", size: 6, color: "rgba(6,182,212,0.26)", duration: 10, delay: 1.3 },
  { x: "58%", y: "76%", size: 4, color: "rgba(16,185,129,0.26)", duration: 7, delay: 0.8 },
  { x: "72%", y: "20%", size: 5, color: "rgba(37,99,235,0.24)", duration: 8.5, delay: 1.6 },
  { x: "84%", y: "58%", size: 6, color: "rgba(99,102,241,0.28)", duration: 11, delay: 0.4 }
];

export function AnimatedParticles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: "0 0 16px rgba(99,102,241,0.25)"
          }}
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: [0.22, 0.7, 0.22], y: [0, -12, 0] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
