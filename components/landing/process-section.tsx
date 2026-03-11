"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Calendar, Cpu, Layers, MessageSquare, Rocket, Sparkles } from "lucide-react";

const timeline = [
  {
    title: "Discovery Protocol",
    description: "Deep-dive analysis of your current growth infrastructure and commercial DNA.",
    icon: Cpu,
    days: "Day 01-02"
  },
  {
    title: "OS Architecture",
    description: "Engineering your custom WINBOX AI LAB modules and conversion-first logic.",
    icon: Layers,
    days: "Day 03-05"
  },
  {
    title: "Autonomous Flow",
    description: "Integrating AI qualified nurturing and multi-channel traffic bidding engines.",
    icon: Sparkles,
    days: "Day 06-10"
  },
  {
    title: "System Launch",
    description: "Full mission-control deployment and real-time performance calibration.",
    icon: Rocket,
    days: "Day 11-14"
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-32 lg:py-40 relative">
      <div className="section-container relative z-10">
        <div className="mb-24">
          <div className="vision-chip mb-6 inline-block">Deployment Velocity</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-tight mb-8">
            Iterative <span className="text-ai-blue">Protocol.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl">
            A structured deployment timeline engineered for maximum velocity with zero quality compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 spatial-card flex flex-col items-start"
              >
                <div className="mb-10 w-16 h-16 rounded-[24px] bg-white border border-slate-100 flex items-center justify-center text-ai-blue group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm shadow-ai-blue/5">
                  <Icon className="w-8 h-8" />
                </div>
                
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-ai-blue/50 mb-3">{step.days}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight leading-none">{step.title}</h3>
                <p className="text-slate-500 font-medium text-base leading-relaxed mb-8 flex-grow">{step.description}</p>
                
                <div className="pt-6 border-t border-slate-100/50 w-full flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Step 0{i+1}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-ai-blue transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 p-10 glass-panel border-white/60 bg-white/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-ai-blue flex items-center justify-center shadow-xl shadow-ai-blue/20">
              <BadgeCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900 tracking-tight leading-none mb-2">Rapid Deployment Protocol</h4>
              <p className="text-slate-500 font-medium">Most systems fully operational in under 14 days.</p>
            </div>
          </div>
          <button className="px-10 py-5 rounded-full bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] hover:bg-ai-blue transition-all shadow-xl shadow-slate-200 active:scale-95">
            View Full Roadmap
          </button>
        </div>
      </div>
    </section>
  );
}
