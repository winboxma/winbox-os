"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Radar, Compass, Workflow, Database, BotMessageSquare, ChartSpline } from "lucide-react";

const bentoItems = [
  {
    id: "traffic",
    title: "Omni-Traffic",
    description: "High-intent acquisition targeting via meta-learning algorithms.",
    icon: Radar,
    size: "lg",
    color: "blue"
  },
  {
    id: "creatives",
    title: "AI Creatives",
    description: "Generative assets optimized for retinal engagement.",
    icon: Compass,
    size: "md",
    color: "indigo"
  },
  {
    id: "landing-pages",
    title: "Neuro-Pages",
    description: "Psychologically-mapped architectures for maximum conversion.",
    icon: Workflow,
    size: "md",
    color: "cyan"
  },
  {
    id: "crm",
    title: "Growth CRM",
    description: "Real-time pipeline monitoring and data synchronization.",
    icon: Database,
    size: "sm",
    color: "violet"
  },
  {
    id: "whatsapp-ai",
    title: "WhatsApp AI OS",
    description: "Autonomous lead qualification and 24/7 appointment setting.",
    icon: BotMessageSquare,
    size: "lg",
    color: "emerald"
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Predictive scaling insights.",
    icon: ChartSpline,
    size: "sm",
    color: "slate"
  }
];

function BentoCard({ item, mouseX, mouseY }: { item: typeof bentoItems[0], mouseX: any, mouseY: any }) {
  const Icon = item.icon;
  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.08), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        relative group overflow-hidden rounded-[40px] border border-slate-100 bg-white/50 backdrop-blur-md p-8 transition-all duration-500
        ${item.size === "lg" ? "md:col-span-2 md:row-span-2" : ""}
        ${item.size === "md" ? "md:col-span-2 row-span-1" : ""}
        ${item.size === "sm" ? "col-span-1 row-span-1" : ""}
        hover:border-blue-200 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.1)]
      `}
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
          <Icon className="h-7 w-7 transition-transform group-hover:scale-110" />
        </div>

        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-[-0.03em]">{item.title}</h3>
        <p className="text-slate-500 text-[15px] font-medium leading-relaxed">{item.description}</p>
        
        {item.size === "lg" && (
          <div className="mt-auto pt-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Core Performance</span>
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Optimized</span>
              </div>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-blue-600" 
                initial={{ width: "30%" }}
                whileInView={{ width: "95%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full" />
    </motion.div>
  );
}

export function GrowthOsSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="systems" className="py-32 relative overflow-hidden bg-slate-50/50" onMouseMove={handleMouseMove}>
      <div className="section-container">
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-black uppercase tracking-widest mb-8">
            Growth Operating System
          </div>
          <h2 className="section-title text-4xl lg:text-7xl mb-8 tracking-[-0.04em]">Modular Intelligence Architecture</h2>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto font-medium">
            The interlocking components of the WINBOX OS are engineered to create a self-sustaining growth loop for performance-driven brands.
          </p>
        </div>

        <div className="relative">
          {/* Background Connection Lines */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden lg:block hidden">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
              <motion.path
                d="M300,100 C500,150 700,50 900,100"
                stroke="rgba(37,99,235,0.15)"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3 }}
              />
               <motion.path
                d="M100,300 C400,350 800,250 1100,300"
                stroke="rgba(37,99,235,0.15)"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 4 }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px] relative z-10">
            {bentoItems.map((item) => (
              <BentoCard key={item.id} item={item} mouseX={mouseX} mouseY={mouseY} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

