"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * CinematicSection — spring-based entrance: fade + rise
 * Wraps any section for smooth cinematic reveal on scroll
 */
export function CinematicSection({
  children,
  className = "",
  intensity = 1,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 60%"],
  });
  const springProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const y = useTransform(springProgress, [0, 1], [40 * intensity, 0]);
  const opacity = useTransform(springProgress, [0, 0.7], [0, 1]);
  const scale = useTransform(springProgress, [0, 1], [0.98, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * StickyScrollContainer — left column stays sticky, right content scrolls
 */
export function StickyScrollContainer({
  sticky,
  children,
  className = "",
}: {
  sticky: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-16 relative ${className}`}>
      <div className="hidden lg:block">
        <div className="sticky top-32">{sticky}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

/**
 * ParallaxImage — creates depth parallax shift on scroll
 */
export function ParallaxImage({
  children,
  strength = 0.1,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-strength * 100}%`, `${strength * 100}%`]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/**
 * RevealOnScroll — simple fade+rise for any element
 */
export function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
