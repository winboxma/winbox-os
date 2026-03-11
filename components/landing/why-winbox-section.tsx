"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Cpu, Rocket, ShieldAlert, Palette, Users, Globe2 } from "lucide-react";

const POSITIONING = [
  {
    icon: Palette,
    title: "Strategy Before Execution",
    desc: "Every campaign starts with a rigorous audit, market analysis, and positioning framework. We build with intent."
  },
  {
    icon: Cpu,
    title: "AI-Powered Automation",
    desc: "WhatsApp AI agents, CRM workflows, and auto-qualification bots that work 24/7 so you don't have to."
  },
  {
    icon: Rocket,
    title: "Conversion-First Systems",
    desc: "Every landing page, ad, and funnel is engineered around one goal: turning traffic into qualified customers."
  },
  {
    icon: ShieldAlert,
    title: "Premium Brand & Creative",
    desc: "World-class visual identity, premium ad creatives, and brand storytelling that builds real authority."
  },
  {
    icon: Globe2,
    title: "Local Expertise, Global Standards",
    desc: "Deep roots in the Moroccan and African market, applying international digital performance frameworks."
  }
];

export function WhyWinboxSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Positioning */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="vision-chip mb-6 inline-block">The WINBOX Difference</div>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight mb-12">
                Why <span className="text-ai-blue">WINBOX</span><br />
                Labs?
              </h2>
            </motion.div>

            <div className="space-y-8">
              {POSITIONING.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-ai-blue/8 flex items-center justify-center flex-shrink-0 group-hover:bg-ai-blue/15 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-ai-blue" />
                    </div>
                    <div className="pt-1">
                      <div className="font-black text-slate-900 text-base mb-1">{item.title}</div>
                      <div className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <a
                href="#contact"
                data-magnetic
                className="inline-flex items-center gap-3 h-14 px-10 rounded-full bg-ai-blue text-white font-black uppercase tracking-[0.1em] text-sm shadow-2xl shadow-ai-blue/25 hover:shadow-ai-blue/40 hover:scale-105 transition-all"
              >
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right: Growth Funnel Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass-panel rounded-[48px] p-10 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-ai-blue/5 blur-[80px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vision-violet/5 blur-[80px] rounded-full" />

              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 relative z-10">
                Growth Intelligence Funnel
              </div>

              {/* Funnel SVG */}
              <div className="relative z-10 space-y-3">
                {[
                  { label: "Traffic & Ads", metric: "100%", width: "100%", color: "#2563EB", sub: "Multi-channel acquisition" },
                  { label: "Landing Pages", metric: "68%", width: "80%", color: "#6366F1", sub: "Conversion architecture" },
                  { label: "Lead Capture", metric: "42%", width: "62%", color: "#8B5CF6", sub: "Qualification & routing" },
                  { label: "WhatsApp AI", metric: "31%", width: "48%", color: "#06B6D4", sub: "Automated follow-up" },
                  { label: "Closed Clients", metric: "18%", width: "36%", color: "#10B981", sub: "Revenue conversion" },
                ].map((stage, i) => (
                  <motion.div
                    key={stage.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.2 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stage.color }} />
                        <span className="text-xs font-black text-slate-700">{stage.label}</span>
                      </div>
                      <span className="text-xs font-black" style={{ color: stage.color }}>{stage.metric}</span>
                    </div>
                    <div className="h-2 bg-slate-100/80 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: stage.width }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + 0.4, duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: stage.color }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 ml-3.5">{stage.sub}</div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom outcome */}
              <div className="mt-10 pt-8 border-t border-slate-100/60 relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black text-slate-900">4.1× ROAS</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-signal mt-1">
                      Average System ROI
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-signal animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Live Benchmark</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
