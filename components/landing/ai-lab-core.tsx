"use client";

import { motion } from "framer-motion";
import { Network, Database, Layers, Radio, Workflow, BarChart3, ArrowUpRight } from "lucide-react";

const nodes = [
  { id: "traffic", label: "Traffic Intelligence", icon: Radio, color: "text-ai-blue", bg: "bg-ai-blue/10", x: "10%", y: "20%" },
  { id: "creative", label: "Creative Intelligence", icon: Database, color: "text-vision-violet", bg: "bg-vision-violet/10", x: "85%", y: "15%" },
  { id: "conversion", label: "Conversion Interfaces", icon: Layers, color: "text-cyan-glow", bg: "bg-cyan-glow/10", x: "50%", y: "50%" },
  { id: "routing", label: "Lead Routing", icon: Network, color: "text-ai-blue", bg: "bg-ai-blue/10", x: "15%", y: "80%" },
  { id: "agents", label: "WhatsApp AI Agents", icon: Workflow, color: "text-emerald-signal", bg: "bg-emerald-signal/10", x: "80%", y: "75%" },
  { id: "analytics", label: "Analytics & Optimization", icon: BarChart3, color: "text-ai-blue", bg: "bg-ai-blue/10", x: "50%", y: "10%" },
];

export function AiLabCore() {
  return (
    <section id="systems" className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-24">
          <div className="vision-chip mb-6 inline-block">System Architecture</div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 mb-8">
            Inside <span className="text-ai-blue">WINBOX AI LAB.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium">
            A spatial growth operating system connecting visibility, conversion, automation, and business intelligence into one adaptive ecosystem.
          </p>
        </div>

        <div className="relative h-[600px] lg:h-[800px] bg-white/20 backdrop-blur-md rounded-[48px] border border-white/40 shadow-2xl overflow-hidden">
          {/* Background Grid/Lines */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern id="grid-lab" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-ai-blue" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-lab)" />
            </svg>
          </div>

          {/* Connectors (Simulated) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <motion.path 
              d="M 100 200 Q 250 100 500 400" 
              stroke="url(#grad-line)" 
              strokeWidth="2" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <defs>
              <linearGradient id="grad-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Interactive Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ left: node.x, top: node.y }}
              className="absolute group cursor-pointer"
            >
              <div className="relative">
                <div className={`p-4 rounded-3xl ${node.bg} backdrop-blur-xl border border-white/50 shadow-xl transition-all group-hover:scale-110 group-hover:border-ai-blue/30`}>
                  <node.icon className={`w-8 h-8 ${node.color}`} />
                </div>
                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all">
                  <div className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-2xl flex items-center gap-2">
                    {node.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
                {/* Connection Pings */}
                <div className={`absolute -inset-1 rounded-3xl ${node.bg} animate-ping opacity-20`} />
              </div>
            </motion.div>
          ))}

          {/* Core Indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full bg-ai-blue/5 border border-ai-blue/10 animate-pulse flex items-center justify-center">
              <div className="text-[10px] font-black text-ai-blue uppercase tracking-[0.4em]">Core Interface</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
