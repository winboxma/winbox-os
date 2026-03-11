"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BarChart3, Cpu, Target, MessageSquare, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

function SpatialCard({ 
  children, 
  className,
  delay = 0 
}: { 
  children: React.ReactNode, 
  className?: string,
  delay?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: [0, -12, 0],
        scale: 1
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: {
          duration: 5 + delay * 0.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: delay * 0.3
        }
      }}
      className={`glass-panel p-6 rounded-[28px] border-white/50 shadow-xl relative group ${className}`}
    >
      <div className="absolute inset-0 rounded-[28px] bg-white/5 group-hover:bg-white/12 transition-colors duration-300" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function HeroSection() {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 1000], [0, 160]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[110vh] flex items-center overflow-hidden pt-40 pb-20">
      <div className="section-container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <div className="vision-chip mb-8 inline-block">
            WINBOX AI LAB // OPEN ACCESS
          </div>

          <h1 className="text-7xl lg:text-[110px] font-black tracking-[-0.04em] leading-[0.9] text-slate-900 mb-8">
            Build Smarter.<br />
            Grow <span className="text-ai-blue">Faster.</span><br />
            Dominate.
          </h1>

          <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium">
            WINBOX designs intelligent growth systems combining branding, premium web, performance ads, 
            AI automation, and lead infrastructure for ambitious businesses.
          </p>

          {/* Micro badge strip */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Meta Ads", "Google Performance", "WhatsApp AI", "Web Design", "Lead Systems"].map(badge => (
              <span key={badge} className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.15em] bg-white/60 border border-slate-200/60 text-slate-500">
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-5">
            <Button 
              asChild 
              size="lg" 
              className="h-16 rounded-full bg-ai-blue px-12 text-base font-black uppercase tracking-[0.1em] text-white shadow-2xl shadow-ai-blue/30 transition-all hover:bg-ai-blue hover:scale-[1.05] border-none"
              data-magnetic
            >
              <Link href="#contact" className="flex items-center gap-2">
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              size="lg" 
              className="h-16 rounded-full px-12 text-base font-bold text-slate-600 glass-panel hover:bg-white/40 transition-all"
              data-magnetic
            >
              <Link href="#systems">Explore AI Lab</Link>
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <div className="h-1 w-12 bg-ai-blue/20 rounded-full" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              AI-powered growth systems for brands in Morocco & beyond
            </p>
          </div>
        </motion.div>

        {/* Right Content - Spatial Environment */}
        <div className="lg:col-span-6 relative h-[720px]">
          <motion.div style={{ y: yOffset, opacity }} className="relative h-full w-full">
            {/* Premium Background Visual */}
            <div className="absolute inset-8 rounded-[40px] overflow-hidden shadow-2xl bg-white/5 border border-white/50 hidden md:block z-0">
              <Image 
                src="/hero-marketing.png" 
                alt="Marketing Intelligence Dashboard" 
                fill 
                className="object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/80 via-transparent to-white/20" />
            </div>

            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-[500px] h-[500px] border border-ai-blue rounded-full absolute"
                style={{ borderStyle: "dashed" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-[360px] h-[360px] border border-vision-violet/50 rounded-full absolute"
              />
            </div>

            {/* Card 1: Revenue Alpha */}
            <SpatialCard className="absolute top-0 right-4 w-72" delay={0}>
              <div className="flex items-center justify-between mb-5">
                <div className="p-2 rounded-xl bg-ai-blue/10 text-ai-blue">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Revenue Alpha</div>
              </div>
              <div className="text-4xl font-black text-slate-900">+420%</div>
              <div className="text-[10px] font-bold text-slate-400 mt-1 mb-4">Lead Growth · Travel Sector</div>
              <div className="flex items-center gap-2">
                <div className="h-1 flex-1 bg-ai-blue/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "88%" }}
                    transition={{ duration: 2.5, delay: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-ai-blue to-electric-indigo"
                  />
                </div>
                <span className="text-[10px] font-black text-emerald-signal">LIVE</span>
              </div>
            </SpatialCard>

            {/* Card 2: WhatsApp AI */}
            <SpatialCard className="absolute top-[28%] left-0 w-80" delay={0.3}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-emerald-signal/10 text-emerald-signal">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">WhatsApp AI Agent</div>
              </div>
              <div className="space-y-3">
                <div className="glass-panel p-3 rounded-2xl bg-white/30">
                  <div className="text-[10px] text-slate-400 mb-1 font-bold">Incoming Lead · Real Estate</div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-signal/20 flex-shrink-0 mt-0.5" />
                    <div className="text-[11px] text-slate-700 font-medium">"I need a 3BR apartment in Casablanca under 2M MAD"</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        animate={{ scaleY: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                        className="w-1 h-3 bg-emerald-signal/60 rounded-full"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-emerald-signal">AI qualifying...</span>
                </div>
              </div>
            </SpatialCard>

            {/* Card 3: Automation Engine */}
            <SpatialCard className="absolute top-[55%] right-0 w-64" delay={0.6}>
              <div className="flex items-center justify-between mb-5">
                <div className="p-2 rounded-xl bg-vision-violet/10 text-vision-violet">
                  <Cpu className="h-5 w-5" />
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Automation</div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Lead Qualified", status: true },
                  { label: "WhatsApp Sent", status: true },
                  { label: "CRM Updated", status: true },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-signal shadow-sm shadow-emerald-signal/50" />
                    <span className="text-xs font-bold text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </SpatialCard>

            {/* Card 4: Campaign Signal */}
            <SpatialCard className="absolute bottom-4 left-4 w-64" delay={0.9}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-cyan-glow/10 text-cyan-glow">
                  <Target className="h-5 w-5" />
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ad Performance</div>
              </div>
              <div className="flex items-end gap-1 h-8 mb-3">
                {[3, 5, 4, 7, 6, 9, 8, 10, 9, 11].map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: i * 0.08 + 1.2, duration: 0.3 }}
                    style={{ height: `${v * 9}%`, transformOrigin: "bottom" }}
                    className="flex-1 bg-cyan-glow/40 rounded-sm"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-bold">ROAS</span>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-cyan-glow" />
                  <span className="text-[10px] font-black text-cyan-glow">4.1x</span>
                </div>
              </div>
            </SpatialCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
