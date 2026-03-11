"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { 
  Plane, ShoppingBag, Stethoscope, Building2, Car, Hotel,
  ArrowRight, CheckCircle2, Zap, TrendingUp
} from "lucide-react";
import { caseStudies } from "@/lib/site";

const iconMap = {
  travel: Plane,
  perfume: ShoppingBag,
  clinic: Stethoscope,
  realestate: Building2,
  automotive: Car,
  hospitality: Hotel,
};

const colorMap = {
  travel: { text: "text-ai-blue", bg: "bg-ai-blue/8", color: "#2563EB", border: "border-ai-blue/20" },
  perfume: { text: "text-vision-violet", bg: "bg-vision-violet/8", color: "#8B5CF6", border: "border-vision-violet/20" },
  clinic: { text: "text-emerald-signal", bg: "bg-emerald-signal/8", color: "#10B981", border: "border-emerald-signal/20" },
  realestate: { text: "text-cyan-glow", bg: "bg-cyan-glow/8", color: "#06B6D4", border: "border-cyan-glow/20" },
  automotive: { text: "text-electric-indigo", bg: "bg-electric-indigo/8", color: "#6366F1", border: "border-electric-indigo/20" },
  hospitality: { text: "text-ai-blue", bg: "bg-ai-blue/8", color: "#2563EB", border: "border-ai-blue/20" },
} as const;

function AnimatedKPI({ target, suffix, prefix, isActive }: { target: number; suffix: string; prefix: string; isActive: boolean }) {
  const spring = useSpring(0, { stiffness: 80, damping: 20 });
  const [display, setDisplay] = useState("0");
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    if (!isActive) return;
    setProcessing(true);
    spring.set(0);
    const timer = setTimeout(() => {
      setProcessing(false);
      spring.set(target);
    }, 800);
    return () => clearTimeout(timer);
  }, [isActive, target, spring]);

  useEffect(() => {
    return spring.on("change", (v) => {
      setDisplay(target % 1 !== 0 ? v.toFixed(1) : String(Math.round(v)));
    });
  }, [spring, target]);

  if (processing) {
    return (
      <div className="flex items-center gap-3 h-20">
        <div className="flex gap-1">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              animate={{ scaleY: [1, 2.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
              className="w-1 h-5 bg-ai-blue/40 rounded-full"
            />
          ))}
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ai-blue/40">Analyzing impact...</span>
      </div>
    );
  }

  return (
    <div className="text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter h-20 flex items-center">
      {prefix}{display}{suffix}
    </div>
  );
}

export function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState<string>(caseStudies[0].id);
  const activeCase = caseStudies.find(c => c.id === activeTab)!;
  const colors = colorMap[activeTab as keyof typeof colorMap] || colorMap.travel;
  const Icon = iconMap[activeTab as keyof typeof iconMap] || Plane;

  return (
    <section id="case-studies" className="py-32 lg:py-40 relative">
      <div className="section-container relative z-10">
        <div className="mb-20">
          <div className="vision-chip mb-6 inline-block">Proof Panels</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-tight mb-8">
            Evidence of <span className="text-ai-blue">Intelligence.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl">
            Real transformations across 6 industries. Measurable systems. Commercial outcomes.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {caseStudies.map(c => {
            const CIcon = iconMap[c.id as keyof typeof iconMap] || Plane;
            const isActive = activeTab === c.id;
            const cColors = colorMap[c.id as keyof typeof colorMap] || colorMap.travel;
            return (
              <button
                key={c.id}
                data-magnetic
                onClick={() => setActiveTab(c.id)}
                className={`
                  flex items-center gap-2.5 px-5 py-3 rounded-full font-black text-sm transition-all duration-400 border
                  ${isActive 
                    ? `bg-white shadow-lg ${cColors.text} ${cColors.border} scale-105` 
                    : "bg-white/50 text-slate-500 border-slate-200/60 hover:bg-white hover:shadow-md"
                  }
                `}
              >
                <CIcon className="w-4 h-4" />
                <span className="hidden sm:inline">{c.sector}</span>
                <span className="sm:hidden">{c.title}</span>
              </button>
            );
          })}
        </div>

        {/* Case Study Card */}
        <div
          className="spatial-card rounded-[56px] p-10 lg:p-16 relative overflow-hidden"
          data-magnetic
        >
          {/* Glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full opacity-15 transition-colors duration-700"
            style={{ backgroundColor: colors.color }}
          />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-16 items-start relative z-10"
            >
              {/* Left */}
              <div>
                {/* Sector badge */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colors.bg}`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-sm">{activeCase.title}</div>
                    <div className={`text-[10px] font-black uppercase tracking-widest ${colors.text}`}>{activeCase.badge}</div>
                  </div>
                </div>

                {/* Big KPI */}
                <AnimatedKPI
                  target={activeCase.kpi.value}
                  suffix={activeCase.kpi.suffix}
                  prefix={activeCase.kpi.prefix}
                  isActive={true}
                />
                <div className={`vision-chip mt-4 ${colors.bg} ${colors.text} border-0`}>
                  {activeCase.kpi.label}
                </div>

                {/* Challenge & Solution */}
                <div className="mt-10 space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3 opacity-50">
                      <div className="w-1 h-1 rounded-full bg-slate-900" />
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">Challenge</h4>
                    </div>
                    <p className="text-slate-500 leading-relaxed font-medium">{activeCase.problem}</p>
                  </div>

                  <div className="border-t border-slate-100/60 pt-8">
                    <div className="flex items-center gap-2 mb-3" style={{ color: colors.color }}>
                      <Zap className="w-3 h-3 fill-current" />
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Growth System Built</h4>
                    </div>
                    <p className="text-slate-900 leading-relaxed font-black text-lg">{activeCase.systemBuilt}</p>
                  </div>
                </div>
              </div>

              {/* Right: Results panel */}
              <div>
                <div className="glass-panel rounded-[40px] p-8 mb-6">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-4 h-4 text-emerald-signal" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-signal">Verified Results</span>
                  </div>
                  <div className="space-y-4">
                    {activeCase.metrics.map((metric, i) => (
                      <motion.div
                        key={metric}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        className="flex items-start gap-4"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-signal mt-0.5 flex-shrink-0" />
                        <span className="font-black text-slate-900 text-lg tracking-tight leading-snug">{metric}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mini data viz */}
                <div className="glass-panel rounded-[28px] p-6 relative overflow-hidden">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">System Performance</div>
                  <div className="flex items-end gap-1.5 h-16 mb-3">
                    {[35, 42, 56, 68, 78, 88, 95, 105, 118, 132].map((v, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: i * 0.06, duration: 0.5 }}
                        style={{
                          height: `${(v / 132) * 100}%`,
                          transformOrigin: "bottom",
                          backgroundColor: colors.color,
                          opacity: 0.2 + (i / 10) * 0.7
                        }}
                        className="flex-1 rounded-sm"
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-bold">Launch</span>
                    <span className="text-[10px] font-black" style={{ color: colors.color }}>↑ Growth Curve</span>
                    <span className="text-[10px] text-slate-400 font-bold">Now</span>
                  </div>

                  {/* Scanning beam */}
                  <motion.div
                    animate={{ left: ["-10%", "110%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-y-0 w-12 opacity-20"
                    style={{ background: `linear-gradient(to right, transparent, ${colors.color}, transparent)` }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-ai-blue hover:gap-4 transition-all"
          >
            Build your growth system <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
