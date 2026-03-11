"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/landing/section-heading";
import { visualShowcase } from "@/lib/site";

import { Search, MousePointer2, UserCheck, MessageSquare, BadgeCheck, BarChart3 } from "lucide-react";

const journeySteps = [
  {
    title: "Traffic",
    description: "Multi-channel AI bidding targeting your ideal audience across social and search.",
    icon: Search,
    color: "blue"
  },
  {
    title: "Smart Landing Page",
    description: "High-speed, neuro-mapped experience designed for immediate psychological conversion.",
    icon: MousePointer2,
    color: "indigo"
  },
  {
    title: "Qualified Lead",
    description: "Zero-friction data capture with real-time validation and CRM synchronization.",
    icon: UserCheck,
    color: "cyan"
  },
  {
    title: "AI WhatsApp Nurture",
    description: "Autonomous assistant qualifies, answers questions, and schedules meetings 24/7.",
    icon: MessageSquare,
    color: "emerald"
  },
  {
    title: "Closed Deal",
    description: "Higher intent leads resulting in faster sales cycles and improved closing ratios.",
    icon: BadgeCheck,
    color: "violet"
  },
  {
    title: "Automated Scale",
    description: "AI-driven scaling based on winning data patterns for predictable growth.",
    icon: BarChart3,
    color: "orange"
  }
];

export function VisualShowcaseSection() {
  return (
    <section id="process" className="py-32 bg-slate-50/30 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-black uppercase tracking-widest mb-8">
            The Journey Optimization
          </div>
          <h2 className="section-title text-4xl lg:text-7xl mb-8 tracking-[-0.04em]">From Traffic to Scalable Revenue</h2>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto font-medium">
            Visualizing the intelligent flow where raw interest is converted into qualified, closed, and scalable business value.
          </p>
        </div>

        <div className="relative">
          {/* Central Vertical Connector Card-Style */}
          <div className="absolute top-0 bottom-0 left-[24px] lg:left-1/2 w-0.5 bg-gradient-to-bottom from-blue-600/50 via-indigo-600/50 to-emerald-600/50 opacity-20 hidden lg:block" />

          <div className="space-y-12 relative z-10">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-24`}
              >
                {/* Visual Side */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className={`
                    glass-panel aspect-video rounded-[3rem] flex items-center justify-center relative overflow-hidden group
                    ${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"}
                    max-w-[500px] mx-auto
                  `}>
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/20" />
                    <step.icon className="h-20 w-20 text-blue-600/20 group-hover:scale-110 group-hover:text-blue-600/40 transition-all duration-700" />
                    
                    {/* Animated Glow in backdrop */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full" />
                  </div>
                </div>

                {/* Vertical Step Marker */}
                <div className="relative hidden lg:flex items-center justify-center w-12 h-12">
                   <div className="absolute w-12 h-12 rounded-full bg-white border-2 border-slate-100 shadow-xl z-20 flex items-center justify-center font-black text-xs text-slate-900">
                    {index + 1}
                   </div>
                   <div className="absolute w-4 h-4 bg-blue-600 rounded-full animate-ping opacity-25" />
                </div>

                {/* Content Side */}
                <div className={`flex-1 w-full lg:w-auto text-center ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}>
                   <div className="max-w-[450px] mx-auto lg:mx-0">
                      <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-lg font-medium leading-relaxed">
                        {step.description}
                      </p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
