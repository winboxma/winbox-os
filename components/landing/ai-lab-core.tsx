"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  { id: "creative", label: "Creative Engine", angle: 0, radius: 240, color: "var(--ai-blue)" },
  { id: "conversion", label: "Conversion Engine", angle: 60, radius: 240, color: "var(--vision-indigo)" },
  { id: "growth", label: "Growth Engine", angle: 120, radius: 240, color: "var(--cyan-glow)" },
  { id: "automation", label: "Automation Engine", angle: 180, radius: 240, color: "var(--emerald-signal)" },
  { id: "analytics", label: "Analytics Engine", angle: 240, radius: 240, color: "var(--text-strong)" },
  { id: "expansion", label: "Expansion Engine", angle: 300, radius: 240, color: "var(--ai-blue)" },
];

export function AiLabCore() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center">
      {/* Central glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--ai-blue)_0%,transparent_60%)] opacity-10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 800 800">
        <defs>
          <radialGradient id="lineGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--ai-blue)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--ai-blue)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Orbit Ring */}
        <circle
          cx="400"
          cy="400"
          r="240"
          fill="none"
          stroke="var(--line)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        
        <motion.circle
          cx="400"
          cy="400"
          r="240"
          fill="none"
          stroke="var(--ai-blue)"
          strokeWidth="1.5"
          strokeDasharray="100 1500"
          strokeOpacity="0.3"
          animate={{ strokeDashoffset: [0, -1600] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Connectors */}
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 400 + node.radius * Math.cos(rad);
          const y = 400 + node.radius * Math.sin(rad);
          const isHovered = hoveredNode === node.id;
          const isFaded = hoveredNode && !isHovered;

          return (
            <g key={`line-${node.id}`}>
              <motion.line
                x1="400"
                y1="400"
                x2={x}
                y2={y}
                stroke={isHovered ? node.color : "var(--line-strong)"}
                strokeWidth={isHovered ? 2 : 1}
                strokeOpacity={isFaded ? 0.2 : 0.6}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.circle
                cx={x}
                cy={y}
                r={isHovered ? 4 : 2}
                fill={isHovered ? node.color : "var(--ai-blue)"}
                opacity={isFaded ? 0.2 : 1}
              />
            </g>
          );
        })}
      </svg>

      {/* Orbiting nodes (HTML content) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {nodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = 400 + node.radius * Math.cos(rad);
            const y = 400 + node.radius * Math.sin(rad);

            return (
              <div
                key={node.id}
                className="absolute pointer-events-auto"
                style={{
                  left: `${(x / 800) * 100}%`,
                  top: `${(y / 800) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Counter-rotate to keep text upright */}
                <motion.div
                  className={`glass-panel px-4 py-2 flex items-center gap-2 cursor-pointer transition-all duration-300 ${
                    hoveredNode === node.id
                      ? "scale-110 shadow-lg border-[var(--ai-blue)]"
                      : hoveredNode
                      ? "opacity-40 scale-95"
                      : "hover:scale-105"
                  }`}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: node.color }}
                  />
                  <span className="text-xs font-semibold whitespace-nowrap text-text-strong">
                    {node.label}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Central Core */}
      <motion.div
        className="absolute z-10 glass-panel flex flex-col items-center justify-center p-8 rounded-full aspect-square text-center
                   shadow-[0_0_60px_-15px_rgba(0,102,255,0.2)] border border-[rgba(0,102,255,0.2)]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        onMouseEnter={() => setHoveredNode("core")}
        onMouseLeave={() => setHoveredNode(null)}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--ai-blue)] to-[var(--vision-indigo)] flex items-center justify-center mb-4 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-text-strong tracking-tight">WINBOX</h3>
        <p className="text-xs text-ai-blue font-semibold tracking-widest uppercase mt-1">OS Core</p>
      </motion.div>
    </div>
  );
}
