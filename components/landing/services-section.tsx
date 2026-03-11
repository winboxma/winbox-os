"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

// ─── Inline SVG Micro-Illustrations ──────────────────────────────────────────

function AiLeadIllustration({ color }: { color: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <svg ref={ref} viewBox="0 0 120 60" className="w-full h-14" fill="none">
      {/* Brain/network nodes */}
      {[[20,30],[60,15],[60,45],[100,30]].map(([cx,cy], i) => (
        <g key={i}>
          <motion.circle
            cx={cx} cy={cy} r={i === 0 || i === 3 ? 8 : 6}
            fill={`${color}20`} stroke={color} strokeWidth="1.5"
            initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          />
          <motion.circle
            cx={cx} cy={cy} r={i === 0 || i === 3 ? 3 : 2}
            fill={color}
            initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
            transition={{ delay: i * 0.15 + 0.15, duration: 0.3 }}
          />
        </g>
      ))}
      {/* Connecting lines */}
      {[[20,30,60,15],[20,30,60,45],[60,15,100,30],[60,45,100,30]].map(([x1,y1,x2,y2],i) => (
        <motion.line
          key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={color} strokeWidth="1.5" strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
        />
      ))}
      {/* Pulse ring */}
      <motion.circle
        cx={100} cy={30} r={14} fill="none" stroke={color}
        strokeWidth="1" initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] } : {}}
        transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
      />
    </svg>
  );
}

function PerformanceAdsIllustration({ color }: { color: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const bars = [30, 45, 38, 55, 48, 65, 58, 75];
  const maxH = 40;
  return (
    <svg ref={ref} viewBox="0 0 120 60" className="w-full h-14" fill="none">
      {/* Bars */}
      {bars.map((h, i) => (
        <motion.rect
          key={i} x={10 + i * 13} y={60 - (h/75)*maxH - 5}
          width="9" height={(h/75)*maxH + 5}
          rx="2" fill={color}
          style={{ opacity: 0.2 + (i/bars.length) * 0.7, transformOrigin: "bottom" }}
          initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        />
      ))}
      {/* ROAS label */}
      <motion.text x="95" y="12" fontSize="8" fontWeight="900" fill={color}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}>
        4.1×
      </motion.text>
      <motion.text x="88" y="22" fontSize="5" fill={color} opacity="0.6"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9 }}>
        ROAS
      </motion.text>
      {/* Trend line */}
      <motion.polyline
        points="14,50 27,43 40,44 53,36 66,38 79,29 92,31"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 0.7 } : {}}
        transition={{ delay: 0.5, duration: 1.2 }}
      />
    </svg>
  );
}

function WebsiteIllustration({ color }: { color: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <svg ref={ref} viewBox="0 0 120 60" className="w-full h-14" fill="none">
      {/* Browser frame */}
      <motion.rect x="5" y="5" width="110" height="50" rx="5"
        fill={`${color}08`} stroke={color} strokeWidth="1.2"
        initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      />
      {/* Browser dots */}
      {[15,22,29].map((cx,i) => (
        <motion.circle key={i} cx={cx} cy={13} r={3}
          fill={color} opacity={0.3 + i * 0.2}
          initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
          transition={{ delay: i * 0.1 + 0.3 }}
        />
      ))}
      {/* URL bar */}
      <motion.rect x="35" y="9" width="50" height="7" rx="3"
        fill={`${color}15`} style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.4 }}
      />
      {/* Content divider */}
      <line x1="5" y1="20" x2="115" y2="20" stroke={color} strokeWidth="0.8" opacity="0.3" />
      {/* Conversion block */}
      <motion.rect x="15" y="25" width="40" height="25" rx="4"
        fill={`${color}12`}
        initial={{ opacity: 0, y: 5 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
      />
      <motion.rect x="67" y="25" width="43" height="11" rx="3"
        fill={color} opacity="0.8" style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.7 }}
      />
      <motion.rect x="67" y="39" width="30" height="8" rx="3"
        fill={`${color}30`} style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.8 }}
      />
    </svg>
  );
}

function BrandIllustration({ color }: { color: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const colors = ["#2563EB", "#8B5CF6", "#10B981", "#06B6D4"];
  return (
    <svg ref={ref} viewBox="0 0 120 60" className="w-full h-14" fill="none">
      {/* Logo mark */}
      <motion.polygon
        points="25,10 40,35 10,35" fill={color} opacity="0.8"
        initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 0.8 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
      {/* Color swatches */}
      {colors.map((c, i) => (
        <motion.rect
          key={i} x={55 + i * 16} y={8} width="12" height="12" rx="2"
          fill={c}
          initial={{ y: -10, opacity: 0 }} animate={inView ? { y: 8, opacity: 1 } : {}}
          transition={{ delay: 0.3 + i * 0.1 }}
        />
      ))}
      {/* Typography hints */}
      <motion.text x="10" y="52" fontSize="12" fontWeight="900" fill={color} opacity="0.5"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 0.5 } : {}}
        transition={{ delay: 0.8 }}>
        Aa
      </motion.text>
      <motion.rect x="55" y="27" width="57" height="4" rx="2" fill={color} opacity="0.2" style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.6 }}
      />
      <motion.rect x="55" y="35" width="40" height="3" rx="1.5" fill={color} opacity="0.15" style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.7 }}
      />
      <motion.rect x="55" y="42" width="50" height="3" rx="1.5" fill={color} opacity="0.12" style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.8 }}
      />
      <motion.rect x="55" y="49" width="35" height="3" rx="1.5" fill={color} opacity="0.1" style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.9 }}
      />
    </svg>
  );
}

function ContentIllustration({ color }: { color: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <svg ref={ref} viewBox="0 0 120 60" className="w-full h-14" fill="none">
      {/* Video frame */}
      <motion.rect x="5" y="8" width="60" height="44" rx="5"
        fill={`${color}10`} stroke={color} strokeWidth="1.2"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      />
      {/* Play button */}
      <motion.polygon
        points="25,30 43,22 43,38" fill={color}
        initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.4 }}
      />
      {/* Text lines */}
      {[0, 1, 2, 3].map(i => (
        <motion.rect
          key={i} x="73" y={10 + i * 11} width={i % 2 === 0 ? 40 : 30} height="5" rx="2.5"
          fill={color} opacity={0.2 - i * 0.03} style={{ transformOrigin: "left" }}
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3 + i * 0.1 }}
        />
      ))}
      {/* Sparkle */}
      <motion.text x="88" y="52" fontSize="14"
        initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.7 }}>
        ✦
      </motion.text>
    </svg>
  );
}

function AutomationIllustration({ color }: { color: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <svg ref={ref} viewBox="0 0 120 60" className="w-full h-14" fill="none">
      {/* Flow nodes */}
      {[[15,30],[50,15],[50,45],[85,30],[110,30]].map(([cx,cy], i) => (
        <motion.circle
          key={i} cx={cx} cy={cy} r={i === 0 || i === 4 ? 9 : 7}
          fill={`${color}${i === 4 ? "30" : "15"}`} stroke={color} strokeWidth="1.5"
          initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
          transition={{ delay: i * 0.12, duration: 0.4 }}
        />
      ))}
      {/* Arrows */}
      {[[15,30,50,15],[15,30,50,45],[50,15,85,30],[50,45,85,30],[85,30,110,30]].map(([x1,y1,x2,y2],i) => (
        <motion.line
          key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={color} strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
          markerEnd="url(#arr)"
        />
      ))}
      <defs>
        <marker id="arr" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
          <polygon points="0,0 4,2 0,4" fill={color} opacity="0.6" />
        </marker>
      </defs>
      {/* Check at end */}
      <motion.text x="103" y="34" fontSize="10" fill={color}
        initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.9 }}>
        ✓
      </motion.text>
    </svg>
  );
}

const ILLUSTRATION_MAP: Record<string, React.FC<{ color: string }>> = {
  ai: AiLeadIllustration,
  ads: PerformanceAdsIllustration,
  website: WebsiteIllustration,
  brand: BrandIllustration,
  content: ContentIllustration,
  automation: AutomationIllustration,
};

const engines = [
  {
    title: "AI Lead Engine",
    tag: "Acquisition",
    desc: "Predictive targeting + AI qualification = 3× more pipeline from the same budget.",
    bullets: ["AI audience scoring", "Automated qualification", "CRM auto-routing"],
    icon: "ai", glow: "#2563EB", color: "#2563EB"
  },
  {
    title: "Performance Ads Engine",
    tag: "Growth",
    desc: "Meta, Google, and TikTok campaigns with weekly ROAS-first optimization sprints.",
    bullets: ["Multi-channel scaling", "Creative testing (6–12 variants)", "ROAS-driven spend"],
    icon: "ads", glow: "#6366F1", color: "#6366F1"
  },
  {
    title: "Premium Website Engine",
    tag: "Architecture",
    desc: "Conversion-first web experiences built to turn clicks into booked leads.",
    bullets: ["Sub-2s load speed", "Mobile-first CRO", "A/B tested flows"],
    icon: "website", glow: "#06B6D4", color: "#06B6D4"
  },
  {
    title: "Brand Identity Engine",
    tag: "Design",
    desc: "Visual systems that position you as the premium, trustworthy choice in your market.",
    bullets: ["Logo & visual identity", "Ad creative production", "Brand story design"],
    icon: "brand", glow: "#8B5CF6", color: "#8B5CF6"
  },
  {
    title: "AI Content Engine",
    tag: "Content",
    desc: "Scalable content production — captions, scripts, videos — powered by AI and creative direction.",
    bullets: ["Video content scripts", "Multilingual copy", "Social content calendar"],
    icon: "content", glow: "#10B981", color: "#10B981"
  },
  {
    title: "Automation Engine",
    tag: "Operations",
    desc: "WhatsApp AI agents that qualify, follow up, and book leads 24/7 without human intervention.",
    bullets: ["WhatsApp AI agents", "CRM automation", "Follow-up sequences"],
    icon: "automation", glow: "#06B6D4", color: "#2563EB"
  },
];

export function ServicesSection() {
  return (
    <section id="systems" className="py-32 lg:py-40 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="vision-chip mb-6 inline-block">Growth Engines</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-tight mb-8">
            Six Systems. <span className="text-ai-blue">One Goal.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Every WINBOX engagement combines the right engines for your business — designed to compound over time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engines.map((engine, i) => {
            const Illus = ILLUSTRATION_MAP[engine.icon];
            return (
              <motion.div
                key={engine.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div
                  className="glass-panel rounded-[36px] p-8 h-full relative overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                    style={{ backgroundColor: engine.glow }}
                  />

                  {/* Tag */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <span
                      className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em]"
                      style={{ backgroundColor: `${engine.color}12`, color: engine.color }}
                    >
                      {engine.tag}
                    </span>
                  </div>

                  {/* Illustration */}
                  <div className="mb-6 relative z-10">
                    <Illus color={engine.color} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3 relative z-10">
                    {engine.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 relative z-10 flex-1">
                    {engine.desc}
                  </p>

                  {/* Bullets */}
                  <div className="space-y-2 relative z-10">
                    {engine.bullets.map(b => (
                      <div key={b} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: engine.color }} />
                        <span className="text-xs font-semibold text-slate-600">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom border on hover */}
                  <div
                    className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, transparent, ${engine.color}, transparent)` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            data-magnetic
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-ai-blue hover:gap-3 transition-all duration-300"
          >
            See all capabilities <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
