"use client";

import { motion } from "framer-motion";
import {
  Rocket, HeartPulse, Building2, ShoppingBag, Hotel,
  Car, GraduationCap, Utensils, UserCheck, CalendarCheck
} from "lucide-react";
import { whoWeServe } from "@/lib/site";

import type { ElementType } from "react";

const iconMap: { [key: string]: ElementType } = {
  "rocket": Rocket,
  "heart-pulse": HeartPulse,
  "building-2": Building2,
  "shopping-bag": ShoppingBag,
  "hotel": Hotel,
  "car": Car,
  "graduation-cap": GraduationCap,
  "utensils": Utensils,
  "user-check": UserCheck,
  "calendar-check": CalendarCheck
};

const colorPairs = [
  { icon: "text-ai-blue", bg: "bg-ai-blue/8", glow: "rgba(37,99,235,0.15)" },
  { icon: "text-emerald-signal", bg: "bg-emerald-signal/8", glow: "rgba(16,185,129,0.15)" },
  { icon: "text-vision-violet", bg: "bg-vision-violet/8", glow: "rgba(139,92,246,0.15)" },
  { icon: "text-cyan-glow", bg: "bg-cyan-glow/8", glow: "rgba(6,182,212,0.15)" },
  { icon: "text-ai-blue", bg: "bg-ai-blue/8", glow: "rgba(37,99,235,0.15)" },
  { icon: "text-vision-violet", bg: "bg-vision-violet/8", glow: "rgba(139,92,246,0.15)" },
  { icon: "text-emerald-signal", bg: "bg-emerald-signal/8", glow: "rgba(16,185,129,0.15)" },
  { icon: "text-cyan-glow", bg: "bg-cyan-glow/8", glow: "rgba(6,182,212,0.15)" },
  { icon: "text-vision-violet", bg: "bg-vision-violet/8", glow: "rgba(139,92,246,0.15)" },
  { icon: "text-ai-blue", bg: "bg-ai-blue/8", glow: "rgba(37,99,235,0.15)" },
];

export function WhoWeBuildForSection() {
  return (
    <section id="who-we-serve" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-50/50 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="vision-chip mb-6 inline-block">Client Universe</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-8">
            Built for Ambitious <span className="text-ai-blue">Brands.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            WINBOX builds intelligent growth systems for businesses ready to invest in their next level.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {whoWeServe.map((item, i) => {
            const Icon = iconMap[item.icon as string] as React.ComponentType<{ className?: string }>;
            const colors = colorPairs[i % colorPairs.length];

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="glass-panel rounded-[28px] p-6 h-full flex flex-col items-center text-center relative overflow-hidden hover:shadow-xl transition-all duration-500 cursor-default">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 30%, ${colors.glow}, transparent 70%)` }}
                  />

                  {/* Icon */}
                  <div className={`relative z-10 w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    {Icon && <Icon className={`w-7 h-7 ${colors.icon}`} />}
                  </div>

                  {/* Label */}
                  <div className="relative z-10 font-black text-slate-900 text-sm tracking-tight leading-tight mb-2">
                    {item.label}
                  </div>

                  {/* Desc */}
                  <div className="relative z-10 text-[11px] text-slate-400 font-medium leading-snug">
                    {item.desc}
                  </div>

                  {/* Bottom glow line on hover */}
                  <div
                    className={`absolute bottom-0 left-1/4 right-1/4 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{ background: `linear-gradient(to right, transparent, ${colors.glow.replace('0.15', '0.6')}, transparent)` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 font-medium mb-2">
            Not in this list? We work with any ambitious brand.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-ai-blue font-black text-sm uppercase tracking-[0.2em] hover:gap-3 transition-all"
          >
            Tell us about your business →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
