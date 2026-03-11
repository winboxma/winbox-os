"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, useScroll, useSpring } from "framer-motion";
import { TrendingUp, TrendingDown, Zap, ArrowUpRight, CheckCircle2, BarChart3, MousePointer2, MessageSquare } from "lucide-react";

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({
  from = 0, to, duration = 2.2, prefix = "", suffix = ""
}: { from?: number; to: number; duration?: number; prefix?: string; suffix?: string }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) =>
    to % 1 !== 0 ? `${prefix}${v.toFixed(1)}${suffix}` : `${prefix}${Math.round(v)}${suffix}`
  );
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) return animate(count, to, { duration, ease: "easeOut" }).stop;
  }, [inView, count, to, duration]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// ─── Spark Line ───────────────────────────────────────────────────────────────
function SparkLine({ data, color, height = 40 }: { data: number[]; color: string; height?: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const max = Math.max(...data);
  const min = Math.min(...data);
  const w = 120, h = height;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / (max - min)) * h}`).join(" ");
  return (
    <svg ref={ref} viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height }}>
      <defs>
        <linearGradient id={`sg-${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}

// ─── The Central Campaign Dashboard ──────────────────────────────────────────
function CampaignDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const roasData = [1.2, 1.8, 2.1, 2.6, 2.9, 3.4, 3.8, 4.1, 4.3, 4.1];
  const leadsData = [18, 24, 31, 42, 51, 63, 78, 94, 112, 131];
  const costData  = [120, 115, 108, 101, 94, 89, 82, 76, 71, 68];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative glass-panel rounded-[48px] overflow-hidden"
    >
      {/* Header bar — like a real dashboard */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100/60 bg-white/40">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-amber-400/60" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">
            WINBOX Growth Dashboard · Live
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-signal animate-pulse" />
          <span className="text-[10px] font-bold text-emerald-signal uppercase tracking-widest">Active</span>
        </div>
      </div>

      <div className="p-8 space-y-6">
        {/* Top row: Big KPIs */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "ROAS", val: 4.1, suffix: "×", prefix: "", color: "#2563EB", data: roasData, up: true },
            { label: "Leads / mo", val: 131, suffix: "", prefix: "+", color: "#10B981", data: leadsData, up: true },
            { label: "Cost / Lead", val: 68, suffix: " MAD", prefix: "", color: "#8B5CF6", data: costData, up: false },
          ].map((kpi) => (
            <div key={kpi.label} className="glass-panel rounded-[24px] p-5 relative overflow-hidden">
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-1">{kpi.label}</div>
              <div className="text-3xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter from={0} to={kpi.val} prefix={kpi.prefix} suffix={kpi.suffix} duration={2} />
              </div>
              <div className="mt-3">
                <SparkLine data={kpi.data} color={kpi.color} height={32} />
              </div>
              <div
                className="absolute top-4 right-4 text-[10px] font-black flex items-center gap-0.5"
                style={{ color: kpi.color }}
              >
                {kpi.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              </div>
            </div>
          ))}
        </div>

        {/* Middle: Campaign funnel illustration */}
        <div className="glass-panel rounded-[28px] p-6">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-5">Conversion Funnel · This Month</div>
          <div className="space-y-3">
            {[
              { label: "Impressions", val: "124,800", pct: 100, color: "#2563EB" },
              { label: "Clicks → Landing", val: "8,736", pct: 70, color: "#6366F1" },
              { label: "Lead Forms Filled", val: "2,186", pct: 50, color: "#8B5CF6" },
              { label: "Qualified by AI", val: "874", pct: 35, color: "#06B6D4" },
              { label: "Booked / Converted", val: "262", pct: 22, color: "#10B981" },
            ].map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-4">
                <div className="w-28 flex-shrink-0 text-[11px] font-semibold text-slate-500">{stage.label}</div>
                <div className="flex-1 h-2 bg-slate-100/80 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${stage.pct}%` } : {}}
                    transition={{ delay: i * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: stage.color }}
                  />
                </div>
                <div className="w-20 text-right text-[11px] font-black text-slate-700">{stage.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: WhatsApp AI + Channel split */}
        <div className="grid grid-cols-2 gap-4">
          {/* WhatsApp AI widget */}
          <div className="glass-panel rounded-[24px] p-5">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4 text-emerald-signal" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">WhatsApp AI Agent</span>
            </div>
            <div className="space-y-2">
              {[
                { msg: "Nouveau lead qualifié · Real Estate", time: "2min", col: "#10B981" },
                { msg: "Booking confirmed · Clinic", time: "5min", col: "#2563EB" },
                { msg: "Follow-up sent · Travel", time: "8min", col: "#8B5CF6" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.2 + 0.8 }}
                  className="flex items-center justify-between gap-2 py-1.5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.col }} />
                    <span className="text-[11px] text-slate-600 font-medium">{item.msg}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 flex-shrink-0">{item.time}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Channel performance */}
          <div className="glass-panel rounded-[24px] p-5">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4 text-ai-blue" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Channels</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "Meta Ads", pct: 42, color: "#2563EB" },
                { label: "Google", pct: 28, color: "#6366F1" },
                { label: "WhatsApp", pct: 19, color: "#10B981" },
                { label: "Organic", pct: 11, color: "#06B6D4" },
              ].map((ch, i) => (
                <div key={ch.label} className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-500 w-16">{ch.label}</span>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${ch.pct}%` } : {}}
                      transition={{ delay: i * 0.1 + 1, duration: 0.8 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: ch.color }}
                    />
                  </div>
                  <span className="text-[11px] font-black" style={{ color: ch.color }}>{ch.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Evidence Section ─────────────────────────────────────────────────────
export function EvidenceSection() {
  const proofStats = [
    {
      metric: "+320%", label: "Qualified Lead Growth", caption: "Travel, Real Estate & Clinic campaigns",
      color: "#2563EB", icon: TrendingUp, result: "3× more inbound pipeline within 90 days",
      checks: ["AI-driven targeting", "WhatsApp qualification", "CRM auto-routing"]
    },
    {
      metric: "-28%", label: "Cost per Acquisition", caption: "Through creative testing & funnel optimization",
      color: "#10B981", icon: TrendingDown, result: "Consistent ROAS improvement every sprint",
      checks: ["Multi-variant creative tests", "Conversion-first landing pages", "Retargeting sequences"]
    },
    {
      metric: "3×", label: "Faster Lead Response", caption: "WhatsApp AI qualifying 24/7 automatically",
      color: "#8B5CF6", icon: Zap, result: "Zero missed inquiries, auto-booked in CRM",
      checks: ["Instant AI response", "Smart qualification flow", "Auto-appointment booking"]
    },
  ];

  return (
    <section id="evidence" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ai-blue/10 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-ai-blue/3 blur-[100px] rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-vision-violet/3 blur-[100px] rounded-full -translate-y-1/2" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="vision-chip mb-6 inline-block">Client ROI Engine</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-tight mb-8">
            Evidence of <span className="text-ai-blue">Intelligence.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Real campaigns. Real numbers. Every system we build is measured — and optimized until it outperforms.
          </p>
        </div>

        {/* LEFT: Proof Stats + RIGHT: Live Dashboard */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start mb-16">
          {/* Left: 3 proof stats */}
          <div className="space-y-6">
            {proofStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel rounded-[32px] p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[32px]"
                    style={{ background: `radial-gradient(circle at 0% 50%, ${stat.color}08, transparent 70%)` }}
                  />
                  <div className="relative z-10 flex items-start gap-6">
                    {/* Metric */}
                    <div className="flex-shrink-0">
                      <div className="text-5xl font-black text-slate-900 tracking-tighter leading-none" style={{ color: stat.color }}>
                        {stat.metric}
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 mt-1.5">{stat.label}</div>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-16 bg-slate-200/60 flex-shrink-0 mt-1" />

                    {/* Details */}
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-medium mb-3">{stat.caption}</p>
                      <div className="space-y-1.5">
                        {stat.checks.map(c => (
                          <div key={c} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: stat.color }} />
                            <span className="text-[11px] font-semibold text-slate-700">{c}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100/60">
                        <div className="flex items-center gap-1.5">
                          <Icon className="w-3 h-3" style={{ color: stat.color }} />
                          <span className="text-[10px] font-black text-slate-900">{stat.result}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom summary line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-panel rounded-[24px] p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-signal animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-signal">All Systems Active</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["Real Estate", "Clinics", "Travel", "Automotive", "Hotels"].map(s => (
                  <span key={s} className="text-[9px] font-black uppercase tracking-wider text-slate-400">{s}</span>
                ))}
              </div>
              <a href="#case-studies" className="flex items-center gap-1 text-[10px] font-black text-ai-blue uppercase tracking-wider hover:gap-2 transition-all">
                All cases <ArrowUpRight className="w-3 h-3" />
              </a>
            </motion.div>
          </div>

          {/* Right: Campaign Dashboard */}
          <CampaignDashboard />
        </div>
      </div>
    </section>
  );
}
