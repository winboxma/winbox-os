"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const GlobeCanvas = dynamic(
  () => import("./globe-canvas").then((m) => ({ default: m.GlobeCanvas })),
  { ssr: false, loading: () => <GlobeFallback /> }
);

function GlobeFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 h-64 rounded-full border border-ai-blue/20 animate-pulse bg-ai-blue/5 flex items-center justify-center">
        <Globe2 className="w-12 h-12 text-ai-blue/30" />
      </div>
    </div>
  );
}

const regions = [
  { label: "Morocco", sublabel: "HQ Market", color: "#2563EB" },
  { label: "West Africa", sublabel: "Growth Markets", color: "#8B5CF6" },
  { label: "Middle East", sublabel: "International", color: "#06B6D4" },
  { label: "Europe", sublabel: "Global-Ready", color: "#10B981" },
];

export function GlobeSection() {
  return (
    <section id="global" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ai-blue/3 blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="vision-chip mb-6 inline-block">Global Reach</div>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-8">
                Global Growth <span className="text-ai-blue">Reach.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                WINBOX builds intelligent growth systems for brands across Morocco, Africa, and beyond.
                Our digital infrastructure scales globally from day one.
              </p>

              {/* Region badges */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                {regions.map((region, i) => (
                  <motion.div
                    key={region.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                    className="glass-panel rounded-[20px] p-5 relative overflow-hidden group hover:shadow-lg transition-all duration-500"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]"
                      style={{ background: `radial-gradient(circle at 30% 50%, ${region.color}15, transparent 70%)` }}
                    />
                    <div className="relative z-10 flex items-center gap-3">
                      <div
                        className="w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0"
                        style={{ backgroundColor: region.color, boxShadow: `0 0 8px ${region.color}` }}
                      />
                      <div>
                        <div className="font-black text-slate-900 text-sm">{region.label}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: region.color }}>
                          {region.sublabel}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 flex-wrap">
                <div>
                  <div className="text-3xl font-black text-slate-900">10+</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Countries Reached</div>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <div className="text-3xl font-black text-slate-900">International</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">System Standards</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
              {/* Glass container */}
              <div className="absolute inset-0 glass-panel rounded-[48px] overflow-hidden">
                <Suspense fallback={<GlobeFallback />}>
                  <GlobeCanvas />
                </Suspense>
              </div>

              {/* Floating label badges */}
              <div className="absolute top-8 left-8 glass-panel rounded-2xl px-4 py-3 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ai-blue animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Morocco HQ</span>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 glass-panel rounded-2xl px-4 py-3 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-signal animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Africa & Beyond</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
