"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Signal, MousePointer2, Users, Zap, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    id: "01",
    icon: Signal,
    title: "Traffic & Acquisition",
    headline: "We bring the right people to your brand.",
    body: "Precision ad campaigns across Meta, Google, and TikTok targeting high-intent audiences in Morocco and beyond — calibrated for your offer, not generic demographics.",
    proof: "+320% qualified traffic vs. legacy campaigns",
    color: "#2563EB",
    colorClass: "text-ai-blue",
    bg: "bg-ai-blue/8",
    tags: ["Meta Ads", "Google Ads", "Retargeting"],
    visual: "traffic"
  },
  {
    id: "02",
    icon: MousePointer2,
    title: "Conversion Architecture",
    headline: "Your website becomes a conversion system.",
    body: "Premium landing pages and web experiences built with conversion-first UX — lightning-fast, mobile-optimized, and A/B tested. Every element earns its place.",
    proof: "+41% booking conversion on optimized flows",
    color: "#8B5CF6",
    colorClass: "text-vision-violet",
    bg: "bg-vision-violet/8",
    tags: ["CRO", "Landing Pages", "Web Design"],
    visual: "conversion"
  },
  {
    id: "03",
    icon: Zap,
    title: "AI Lead Qualification",
    headline: "AI qualifies every lead in under 2 minutes.",
    body: "WhatsApp AI agents respond instantly to inbound leads, qualify their intent, and route them into your CRM or booking system — 24/7, in French, Arabic, or English.",
    proof: "3× faster response + zero missed leads",
    color: "#06B6D4",
    colorClass: "text-cyan-glow",
    bg: "bg-cyan-glow/8",
    tags: ["WhatsApp AI", "CRM Routing", "Automation"],
    visual: "ai"
  },
  {
    id: "04",
    icon: TrendingUp,
    title: "Growth Intelligence",
    headline: "Every week, the system gets smarter.",
    body: "Weekly optimization loops: creative performance analysis, audience refinement, funnel testing, and ROAS scaling. We don't set and forget — we iterate toward peak efficiency.",
    proof: "-28% cost per acquisition across campaigns",
    color: "#10B981",
    colorClass: "text-emerald-signal",
    bg: "bg-emerald-signal/8",
    tags: ["Analytics", "Optimization", "Scaling"],
    visual: "growth"
  },
];

import Image from "next/image";

// Visual illustration for each step
function StepVisual({ type, color, inView }: { type: string; color: string; inView: boolean }) {
  const visuals = {
    traffic: "/ai-lead-generation.png",
    conversion: "/winbox-agency.png",
    ai: "/automation-workflow.png",
    growth: "/growth-pipeline.png"
  };

  const src = visuals[type as keyof typeof visuals];

  if (!src) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[240px] lg:h-[280px] rounded-2xl overflow-hidden shadow-inner group"
    >
      <Image 
        src={src}
        alt={`WINBOX ${type} visualization`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />
      {/* Premium subtle overlay to blend with the neo-light aesthetic */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" 
        style={{ backgroundColor: color }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
    </motion.div>
  );
}

export function StoryFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 lg:py-40 relative">
      <div className="section-container relative z-10">
        {/* Sticky header */}
        <div className="text-center mb-24">
          <div className="vision-chip mb-6 inline-block">The WINBOX Method</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-tight mb-8">
            How We Build <span className="text-ai-blue">Growth Systems.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            A proven four-phase methodology that transforms your marketing from cost center to growth engine.
          </p>
        </div>

        <div className="relative">
          {/* Vertical progress line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-100 hidden lg:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-ai-blue via-vision-violet to-emerald-signal"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:pl-24">
            {STEPS.map((step, i) => {
              const stepRef = useRef<HTMLDivElement>(null);
              const inView = useInView(stepRef, { once: true, margin: "-100px" });
              const Icon = step.icon;

              return (
                <motion.div
                  ref={stepRef}
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                >
                  {/* Step node on line */}
                  <div
                    className="absolute -left-24 hidden lg:flex w-10 h-10 rounded-full items-center justify-center border-4 border-white shadow-md"
                    style={{ backgroundColor: step.color, top: "50%", transform: "translateY(-50%) translateX(-50%)" }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-2xl ${step.bg} flex items-center justify-center lg:hidden`}>
                        <Icon className={`w-5 h-5 ${step.colorClass}`} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">{step.id} — {step.title}</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight mb-4">
                      {step.headline}
                    </h3>
                    <p className="text-slate-500 font-medium leading-relaxed mb-6">{step.body}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {step.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.15em]"
                          style={{ backgroundColor: `${step.color}12`, color: step.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Proof */}
                    <div className="flex items-center gap-3 glass-panel rounded-2xl px-5 py-3 inline-flex">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                      <span className="text-[11px] font-black text-slate-900">{step.proof}</span>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="glass-panel rounded-[32px] p-8">
                    <StepVisual type={step.visual} color={step.color} inView={inView} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a
            href="#contact"
            data-magnetic
            className="inline-flex items-center gap-3 h-16 px-12 rounded-full bg-slate-900 text-white font-black uppercase tracking-[0.1em] text-sm shadow-2xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:scale-105 transition-all"
          >
            Build My Growth System <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
