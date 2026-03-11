"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  MousePointer2, MessageSquare, BarChart3, Zap, 
  Users, Target, ArrowRight, TrendingUp, CheckCircle2,
  Megaphone, Globe2, Smartphone
} from "lucide-react";

// ─── Illustration: Growth Campaign Flow ──────────────────────────────────────
export function GrowthFlowIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stages = [
    { icon: Megaphone, label: "Ad Launch", sub: "Meta & Google", color: "#2563EB", bg: "bg-ai-blue/8" },
    { icon: MousePointer2, label: "Landing Page", sub: "Conversion UX", color: "#6366F1", bg: "bg-electric-indigo/8" },
    { icon: Users, label: "Lead Capture", sub: "AI Form & Chat", color: "#8B5CF6", bg: "bg-vision-violet/8" },
    { icon: Zap, label: "WhatsApp AI", sub: "Auto qualification", color: "#06B6D4", bg: "bg-cyan-glow/8" },
    { icon: TrendingUp, label: "Conversion", sub: "Booked & Sold", color: "#10B981", bg: "bg-emerald-signal/8" },
  ];

  return (
    <div ref={ref} className="relative">
      {/* SVG connecting line */}
      <svg className="absolute top-8 left-0 right-0 h-1 w-full pointer-events-none overflow-visible" style={{ top: 32 }}>
        <motion.line
          x1="10%" y1="0" x2="90%" y2="0"
          stroke="url(#flow-line-grad)"
          strokeWidth="1.5"
          strokeDasharray="8 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="flow-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-5 gap-3 relative z-10">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center group"
            >
              {/* Node */}
              <div
                className={`w-16 h-16 rounded-2xl ${stage.bg} flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300 relative`}
                style={{ boxShadow: `0 0 0 0 ${stage.color}00` }}
              >
                <Icon className="w-7 h-7" style={{ color: stage.color }} />
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{ boxShadow: [`0 0 0 0px ${stage.color}30`, `0 0 0 8px ${stage.color}00`] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
              </div>
              <div className="text-xs font-black text-slate-900 mb-0.5">{stage.label}</div>
              <div className="text-[10px] text-slate-400 font-medium">{stage.sub}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Illustration: WhatsApp Automation Flow ───────────────────────────────────
export function WhatsAppFlowIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const messages = [
    { from: "lead", text: "Bonjour, j'ai vu votre annonce immobilière.", delay: 0 },
    { from: "ai", text: "Bienvenue ! Je suis l'assistant WINBOX. Sur quel type de bien êtes-vous intéressé ?", delay: 0.3 },
    { from: "lead", text: "Un appartement à Casablanca, budget 1,5M MAD.", delay: 0.6 },
    { from: "ai", text: "Parfait. J'ai 3 projets qui correspondent. Puis-je planifier une visite pour vous ?", delay: 0.9 },
    { from: "system", text: "✓ Lead qualifié · CRM mis à jour · Rendez-vous planifié", delay: 1.2 },
  ];

  return (
    <div ref={ref} className="glass-panel rounded-[32px] overflow-hidden">
      {/* WhatsApp header */}
      <div className="flex items-center gap-3 px-5 py-4 bg-emerald-signal/8 border-b border-emerald-signal/10">
        <div className="w-9 h-9 rounded-full bg-emerald-signal/20 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-emerald-signal" />
        </div>
        <div>
          <div className="text-sm font-black text-slate-900">WINBOX AI Agent</div>
          <div className="text-[10px] text-emerald-signal font-bold uppercase tracking-wider">En ligne · Répond en &lt; 2 min</div>
        </div>
        <div className="ml-auto">
          <Smartphone className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      {/* Messages */}
      <div className="p-5 space-y-3 bg-gradient-to-b from-slate-50/30">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: msg.delay + 0.3, duration: 0.4 }}
            className={`flex ${msg.from === "lead" ? "justify-end" : "justify-start"}`}
          >
            {msg.from === "system" ? (
              <div className="mx-auto flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-signal/10 border border-emerald-signal/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-signal" />
                <span className="text-[10px] font-black text-emerald-signal">{msg.text}</span>
              </div>
            ) : (
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-[12px] font-medium leading-relaxed ${
                  msg.from === "lead"
                    ? "bg-slate-200/80 text-slate-800 rounded-tr-sm"
                    : "text-white rounded-tl-sm"
                }`}
                style={msg.from === "ai" ? { background: "linear-gradient(135deg, #10B981, #059669)" } : {}}
              >
                {msg.text}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";

// ─── Illustration: Campaign Intelligence ─────────────────────────────────────
export function CampaignIntelligenceIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full aspect-video rounded-3xl overflow-hidden glass-panel group shadow-xl shadow-ai-blue/10"
    >
      <Image 
        src="/digital-analytics.png"
        alt="Performance Marketing Dashboard Analytics"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal saturate-[0.8] hover:saturate-100 transition-all duration-1000 ease-out group-hover:scale-[1.03]"
      />
      {/* Subtle overlay to blend into the Neo-light theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* AI insight chip floating on top of the image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="absolute bottom-4 left-4 right-4 flex items-center gap-3 p-3 rounded-2xl glass-panel backdrop-blur-xl border border-white/20 shadow-lg"
      >
        <div className="w-8 h-8 rounded-xl bg-white/80 flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100/50">
          <Zap className="w-4 h-4 text-ai-blue" />
        </div>
        <p className="text-[11px] text-slate-800 font-medium pb-0.5">
          <span className="font-black text-slate-900 drop-shadow-sm">AI Insight:</span> Scaling video creatives will optimize CPL by ~18%
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section: Marketing Intelligence ────────────────────────────────────
export function MarketingIntelligenceSection() {
  return (
    <section id="marketing-intelligence" className="py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="vision-chip mb-6 inline-block">How It Works</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-tight mb-8">
            Marketing <span className="text-ai-blue">Intelligence</span><br />
            in Action.
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl">
            Every WINBOX campaign runs on a connected system: targeted ads, conversion architecture, AI qualification, and automated follow-up working as one organism.
          </p>
        </div>

        {/* Top: Flow illustration */}
        <div className="glass-panel rounded-[40px] p-10 mb-10">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">
            Full-Stack Growth Pipeline
          </div>
          <GrowthFlowIllustration />

          <div className="mt-10 pt-8 border-t border-slate-100/60 grid sm:grid-cols-3 gap-6">
            {[
              { stat: "< 2 min", label: "Avg. AI response time" },
              { stat: "94%", label: "Lead qualification accuracy" },
              { stat: "90 days", label: "Avg. time to measurable ROI" },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-slate-900 tracking-tight mb-1">{s.stat}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Two columns */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* WhatsApp flow */}
          <div>
            <div className="mb-5">
              <div className="vision-chip mb-3 inline-block bg-emerald-signal/8 text-emerald-signal border-emerald-signal/15">
                WhatsApp AI Automation
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Every lead answered. Instantly.
              </h3>
              <p className="text-slate-500 font-medium text-sm">
                AI agents qualify, route, and book prospects on WhatsApp — 24 hours a day, in Arabic, French, or English.
              </p>
            </div>
            <WhatsAppFlowIllustration />
          </div>

          {/* Campaign intelligence */}
          <div>
            <div className="mb-5">
              <div className="vision-chip mb-3 inline-block bg-ai-blue/8 text-ai-blue border-ai-blue/15">
                Performance Intelligence
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Data-driven at every step.
              </h3>
              <p className="text-slate-500 font-medium text-sm">
                Every campaign metric is tracked, analyzed, and optimized weekly. AI surfaces insights humans would miss.
              </p>
            </div>
            <CampaignIntelligenceIllustration />

            {/* Agency proof bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-5 space-y-2"
            >
              {[
                "Meta Ads + Google Ads managed weekly",
                "Creative testing: 6–12 variants per campaign",
                "ROAS-first optimization framework",
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-ai-blue flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-600">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
