"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export function MagneticCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useSpring(0, { stiffness: 800, damping: 40 });
  const mouseY = useSpring(0, { stiffness: 800, damping: 40 });

  const ringX = useSpring(0, { stiffness: 200, damping: 30 });
  const ringY = useSpring(0, { stiffness: 200, damping: 30 });

  const dotScale = useSpring(1, { stiffness: 500, damping: 30 });
  const ringScale = useSpring(1, { stiffness: 400, damping: 30 });

  useEffect(() => {
    // Only show on non-touch devices
    if ("ontouchstart" in window) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        ringX.set(e.clientX);
        ringY.set(e.clientY);
        setIsVisible(true);
      });
    };

    const handleMouseEnterMagnetic = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const pullStrength = 0.3;
      const dx = (e.clientX - centerX) * pullStrength;
      const dy = (e.clientY - centerY) * pullStrength;
      mouseX.set(centerX + dx);
      mouseY.set(centerY + dy);
      setIsHovering(true);
      dotScale.set(1.8);
      ringScale.set(2.5);
    };

    const handleMouseLeaveMagnetic = () => {
      setIsHovering(false);
      dotScale.set(1);
      ringScale.set(1);
    };

    const handleMouseMoveMagnetic = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const pullStrength = 0.35;
      const dx = (e.clientX - centerX) * pullStrength;
      const dy = (e.clientY - centerY) * pullStrength;
      mouseX.set(centerX + dx);
      mouseY.set(centerY + dy);
    };

    const setupMagneticElements = () => {
      const magneticEls = document.querySelectorAll("[data-magnetic]");
      magneticEls.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.addEventListener("mouseenter", handleMouseEnterMagnetic as EventListener);
        htmlEl.addEventListener("mouseleave", handleMouseLeaveMagnetic);
        htmlEl.addEventListener("mousemove", handleMouseMoveMagnetic as EventListener);
      });
      return () => {
        magneticEls.forEach((el) => {
          const htmlEl = el as HTMLElement;
          htmlEl.removeEventListener("mouseenter", handleMouseEnterMagnetic as EventListener);
          htmlEl.removeEventListener("mouseleave", handleMouseLeaveMagnetic);
          htmlEl.removeEventListener("mousemove", handleMouseMoveMagnetic as EventListener);
        });
      };
    };

    document.addEventListener("mousemove", handleMouseMove);
    const cleanup = setupMagneticElements();

    // Re-wire on DOM changes (new elements)
    const observer = new MutationObserver(() => {
      cleanup();
      setupMagneticElements();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", handleMouseMove);
      cleanup();
      observer.disconnect();
    };
  }, [mouseX, mouseY, ringX, ringY, dotScale, ringScale]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-multiply"
        style={{
          x: useTransform(mouseX, v => v - 6),
          y: useTransform(mouseY, v => v - 6),
          scale: dotScale,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="w-3 h-3 rounded-full bg-ai-blue"
          style={{
            boxShadow: isHovering
              ? "0 0 20px rgba(37,99,235,0.8), 0 0 40px rgba(37,99,235,0.4)"
              : "0 0 8px rgba(37,99,235,0.5)"
          }}
        />
      </motion.div>

      {/* Cursor ring */}
      <motion.div
        ref={cursorRingRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: useTransform(ringX, v => v - 20),
          y: useTransform(ringY, v => v - 20),
          scale: ringScale,
          opacity: isVisible ? 0.6 : 0,
        }}
      >
        <div
          className="w-10 h-10 rounded-full border border-ai-blue/40"
          style={{
            backdropFilter: "blur(1px)",
            transition: "border-color 0.3s",
            borderColor: isHovering ? "rgba(37,99,235,0.7)" : "rgba(37,99,235,0.3)",
          }}
        />
      </motion.div>
    </>
  );
}
