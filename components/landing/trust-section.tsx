"use client";

import { Globe2, ShieldCheck, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { clientLogos, trustStats, industries } from "@/lib/site";

const testimonials = [
  {
    quote: "WINBOX built us a full lead funnel in under 3 weeks. Our WhatsApp inquiries tripled and bookings are fully automated now.",
    author: "Atlas Travel Group",
    role: "Managing Director",
    sector: "Tourism"
  },
  {
    quote: "We went from 40 leads/month to 180+ in 60 days. The AI qualification system filters out the noise completely.",
    author: "Nova Clinic",
    role: "Marketing Director",
    sector: "Healthcare"
  },
  {
    quote: "Our ROAS went from 1.8x to 4.3x. The creative testing loop and retargeting architecture they built is exceptional.",
    author: "Velvet Perfume",
    role: "Founder & CEO",
    sector: "Ecommerce"
  }
];

export function TrustSection() {
  const logoMarquee = [...clientLogos, ...clientLogos, ...clientLogos];
  const industryMarquee = [...industries, ...industries, ...industries];

  return (
    <section id="trust" className="py-32 lg:py-40 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-8">
            Network & Trust
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-[-0.04em] leading-tight mb-8">
            Global Trust Infrastructure
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto">
            50+ campaigns. 10+ industries. One unified growth methodology.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-[32px] text-center group hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div className="text-4xl font-black text-slate-900 mb-3 group-hover:scale-110 transition-transform duration-500 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-ai-blue transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry badges marquee */}
        <div className="mb-12 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50/50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50/50 to-transparent z-10" />
          <motion.div
            animate={{ x: [0, -800] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 items-center whitespace-nowrap"
          >
            {industryMarquee.map((industry, idx) => (
              <span
                key={`${industry}-${idx}`}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-100 text-[11px] font-black uppercase tracking-[0.15em] text-slate-500 shadow-sm flex-shrink-0"
              >
                {industry}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Client logos marquee */}
        <div className="glass-panel rounded-[40px] p-10 overflow-hidden bg-white/70 mb-12">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Globe2 className="h-5 w-5 text-ai-blue" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Trusted by Growth-Driven Brands</h3>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Morocco & International Markets</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="h-4 w-4 fill-emerald-500 text-emerald-500" />
              ))}
              <span className="ml-2 text-xs font-black text-slate-900 uppercase tracking-widest">5.0 Rating</span>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 items-center whitespace-nowrap"
            >
              {logoMarquee.map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-3xl lg:text-4xl font-black text-slate-300 hover:text-ai-blue transition-colors cursor-default tracking-tighter uppercase flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/80 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/80 to-transparent z-10" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-panel rounded-[28px] p-8 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <p className="text-slate-700 font-medium text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="border-t border-slate-100/60 pt-5">
                <div className="font-black text-slate-900 text-sm">{t.author}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{t.role} · {t.sector}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex justify-center gap-6 flex-wrap">
          {["Verified Growth Audits", "Enterprise Performance Standards", "24/7 AI Monitoring", "Privacy-First Operations"].map(badge => (
            <div key={badge} className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
