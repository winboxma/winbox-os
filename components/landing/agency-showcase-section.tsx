"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Camera, BarChart3, Brush, MessageSquare } from "lucide-react";
import Image from "next/image";

const SHOWCASES = [
  {
    id: "strategy",
    eyebrow: "Strategy & Direction",
    headline: "We sit down and understand your business — before touching a single ad.",
    body: "Every WINBOX engagement starts with a deep-dive audit of your market, competitors, and current funnel. We map the gaps, define the growth levers, and build a 90-day execution plan.",
    photo: "/marketing-strategy.png",
    alt: "WINBOX team reviewing campaign analytics on monitor with Moroccan city skyline backdrop",
    metric: { value: "90-Day", label: "Growth Blueprint" },
    tag: "Strategic Foundation",
    color: "#2563EB",
    tags: ["Competitive Audit", "Funnel Mapping", "90-Day Roadmap"],
    imageRight: false
  },
  {
    id: "creative",
    eyebrow: "Brand & Creative Direction",
    headline: "Premium creative that builds authority in any market.",
    body: "Our creative team builds cohesive visual systems — logos, ad creatives, landing pages, and brand storytelling that position you as the premium choice in your industry.",
    photo: "/creative-branding.png",
    alt: "WINBOX designer working on brand identity at studio desk in Morocco",
    metric: { value: "6–12", label: "Creative Variants Tested" },
    tag: "Brand Excellence",
    color: "#8B5CF6",
    tags: ["Logo & Identity", "Ad Creatives", "Visual Systems"],
    imageRight: true
  },
  {
    id: "automation",
    eyebrow: "WhatsApp AI Automation",
    headline: "Your AI agent responds. Qualifies. Books. Never sleeps.",
    body: "WINBOX deploys WhatsApp AI agents that handle inbound leads in Arabic, French, and English — qualifying intent, answering questions, and routing contacts into your CRM automatically.",
    photo: "/ai-automation.png",
    alt: "Hand holding smartphone with WhatsApp AI qualification conversation in Casablanca",
    metric: { value: "< 2 min", label: "AI Response Time" },
    tag: "AI Automation",
    color: "#10B981",
    tags: ["Lead Qualification", "24/7 Response", "CRM Routing"],
    imageRight: false
  },
  {
    id: "performance",
    eyebrow: "Performance Marketing",
    headline: "Data-driven campaigns engineered for maximum ROAS.",
    body: "Meta Ads, Google Ads, and TikTok — managed weekly with ROAS-first thinking and creative testing at scale. We optimize until the numbers outperform the market.",
    photo: "/performance-optimization.png",
    alt: "MacBook showing Meta Ads analytics dashboard with 4.1x ROAS on marble desk",
    metric: { value: "4.1×", label: "Avg Campaign ROAS" },
    tag: "Performance Engine",
    color: "#06B6D4",
    tags: ["Meta Ads", "Google Performance", "Weekly Optimization"],
    imageRight: true
  },
];

function ShowcaseCard({ showcase, index }: { showcase: typeof SHOWCASES[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], showcase.imageRight ? ["5%", "-5%"] : ["-5%", "5%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${showcase.imageRight ? "" : ""}`}
    >
      {/* Content side - always shows in natural order on mobile */}
      <div className={`${showcase.imageRight ? "lg:order-1" : "lg:order-2"} order-2`}>
        <motion.div
          initial={{ opacity: 0, x: showcase.imageRight ? -30 : 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: showcase.color }} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: showcase.color }}>
              {showcase.eyebrow}
            </span>
          </div>

          <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-[-0.04em] leading-[1.1] mb-6">
            {showcase.headline}
          </h3>
          <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
            {showcase.body}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {showcase.tags.map(tag => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em]"
                style={{ backgroundColor: `${showcase.color}12`, color: showcase.color, border: `1px solid ${showcase.color}20` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Result metric */}
          <div className="flex items-center gap-5 glass-panel rounded-2xl px-6 py-4 inline-flex">
            <div>
              <div className="text-2xl font-black text-slate-900">{showcase.metric.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{showcase.metric.label}</div>
            </div>
            <div className="h-8 w-px bg-slate-100" />
            <span
              className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full"
              style={{ backgroundColor: `${showcase.color}12`, color: showcase.color }}
            >
              {showcase.tag}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Photo side */}
      <div className={`${showcase.imageRight ? "lg:order-2" : "lg:order-1"} order-1 relative`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[40px] overflow-hidden shadow-2xl"
          style={{ boxShadow: `0 40px 80px -20px ${showcase.color}20` }}
        >
          {/* Parallax photo wrapper */}
          <motion.div style={{ y: imageY }} className="relative h-[420px] lg:h-[520px]">
            <Image
              src={showcase.photo}
              alt={showcase.alt}
              fill
              className="object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal saturate-[0.8] hover:saturate-100 transition-all duration-1000 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle gradient overlay for legibility / mood */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${showcase.color}15 0%, transparent 50%)` }}
            />
          </motion.div>

          {/* Floating tag on photo */}
          <div className="absolute bottom-6 left-6 glass-panel rounded-2xl px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: showcase.color }} />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-700">{showcase.tag}</span>
            </div>
          </div>
        </motion.div>

        {/* Side accent */}
        <div
          className={`absolute -z-10 top-12 ${showcase.imageRight ? "-right-6" : "-left-6"} bottom-12 w-full rounded-[40px] opacity-30 blur-2xl`}
          style={{ backgroundColor: `${showcase.color}` }}
        />
      </div>
    </motion.div>
  );
}

export function AgencyShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "start start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={sectionRef} id="agency" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Subtle bg texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-24"
        >
          <div className="vision-chip mb-6 inline-block">How We Actually Work</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-tight mb-8">
            Real Agency Work.<br />
            <span className="text-ai-blue">Real Business Results.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Behind every WINBOX campaign is a cross-functional team — strategists, creatives, media buyers, and AI engineers — all aligned on one metric: your growth.
          </p>
        </motion.div>

        {/* Showcase cards */}
        <div className="space-y-32 lg:space-y-40">
          {SHOWCASES.map((showcase, i) => (
            <ShowcaseCard key={showcase.id} showcase={showcase} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <p className="text-slate-500 font-medium mb-6 text-lg">
            Ready to work with a team that treats your growth like their own?
          </p>
          <a
            href="#contact"
            data-magnetic
            className="inline-flex items-center gap-3 h-16 px-14 rounded-full bg-ai-blue text-white font-black uppercase tracking-[0.1em] text-sm shadow-2xl shadow-ai-blue/30 hover:shadow-ai-blue/50 hover:scale-105 transition-all duration-300"
          >
            Book a Strategy Session <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
