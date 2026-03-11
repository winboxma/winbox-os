"use client";

import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Calculator, TrendingUp, Zap, MousePointer2, CreditCard, Target } from 'lucide-react';

// Component for smooth number animation using useSpring
const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const [mounted, setMounted] = useState(false);
  const spring = useSpring(value, { 
    mass: 1, 
    stiffness: 100, 
    damping: 30,
    restDelta: 0.01
  });
  
  const display = useTransform(spring, (current) => {
    if (!mounted) return `${prefix}0${suffix}`;
    return `${prefix}${Math.round(current).toLocaleString('fr-MA')}${suffix}`;
  });

  useEffect(() => {
    setMounted(true);
    spring.set(value);
  }, [spring, value]);

  return <motion.span className="tabular-nums">{display}</motion.span>;
};

interface CustomSliderProps {
  label: string;
  icon: any;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (val: number) => void;
}

const CustomSlider = ({ label, icon: Icon, value, min, max, step, suffix = "", onChange }: CustomSliderProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-ai-blue/5 text-ai-blue">
            <Icon className="w-4 h-4" />
          </div>
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{label}</label>
        </div>
        <div className="text-sm font-black text-slate-900 bg-white border border-slate-100 px-4 py-1.5 rounded-full shadow-sm font-mono leading-none">
          {mounted ? value.toLocaleString('fr-MA') : value}{suffix}
        </div>
      </div>
      <div className="relative h-6 flex items-center group">
        <div className="absolute w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-ai-blue"
            initial={false}
            animate={{ width: `${((value - min) / (max - min)) * 100}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute w-full h-2 opacity-0 cursor-pointer z-10"
        />
        <motion.div 
          className="absolute w-6 h-6 bg-white border-2 border-ai-blue rounded-full shadow-xl pointer-events-none z-0"
          initial={false}
          animate={{ left: `calc(${((value - min) / (max - min)) * 100}% - 12px)` }}
          whileHover={{ scale: 1.25, boxShadow: "0 0 20px rgba(37,99,235,0.4)" }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </div>
  );
};

export function RevenueSimulator() {
  const [visitors, setVisitors] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2.0);
  const [aov, setAov] = useState(500);

  const currentRevenue = visitors * (conversionRate / 100) * aov;
  const projectedConversion = conversionRate * 1.8;
  const projectedRevenue = visitors * (projectedConversion / 100) * aov;
  const growth = projectedRevenue - currentRevenue;

  return (
    <section id="simulator" className="py-32 relative">
      <div className="section-container relative z-10">
        <div className="text-center mb-24">
          <div className="vision-chip mb-6 inline-block">Revenue Intelligence Module</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-8">
            Analyze Your <span className="text-ai-blue">Potential.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Analyze the mathematical impact of WINBOX intelligent growth architecture on your current metrics.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls Panel */}
          <div className="lg:col-span-7 spatial-card p-12 lg:p-16">
            <div className="space-y-16">
              <CustomSlider 
                label="Monthly Traffic"
                icon={MousePointer2}
                value={visitors}
                min={1000}
                max={200000}
                step={1000}
                onChange={setVisitors}
              />
              <CustomSlider 
                label="Conversion Rate"
                icon={Target}
                value={conversionRate}
                min={0.1}
                max={10}
                step={0.1}
                suffix="%"
                onChange={setConversionRate}
              />
              <CustomSlider 
                label="Average Sale Value"
                icon={CreditCard}
                value={aov}
                min={50}
                max={10000}
                step={50}
                suffix=" MAD"
                onChange={setAov}
              />
            </div>

            <div className="mt-20 pt-10 border-t border-slate-100/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-signal/5 text-emerald-signal">
                  <Zap className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                  ROI Algorithm v3.14 Activated
                </p>
              </div>
              <div className="text-[10px] font-black text-ai-blue uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-ai-blue animate-pulse" />
                Live Analysis
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-5 relative group">
            <div className="h-full bg-slate-950 rounded-[48px] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden border border-white/10 shadow-3xl">
              {/* Internal Vision Pro Light Effect */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ai-blue/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-ai-blue/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10 w-full space-y-16">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8">Projected Annual Revenue</p>
                  <div className="text-6xl lg:text-7xl font-black text-white tracking-tighter">
                    <AnimatedNumber value={projectedRevenue * 12} />
                    <span className="text-xl text-slate-500 ml-4 font-bold tracking-widest uppercase">MAD</span>
                  </div>
                </div>

                <div className="h-px w-full bg-white/5" />

                <div className="space-y-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Monthly Net Uplift</p>
                  <div className="text-5xl font-black text-emerald-signal flex items-center justify-center gap-2">
                    <span className="text-3xl">+</span>
                    <AnimatedNumber value={growth} />
                  </div>
                  <div className="vision-chip bg-emerald-signal/5 border-emerald-signal/20 text-emerald-signal mx-auto block w-fit mt-4">
                    +180% Efficiency Shift
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-6 bg-ai-blue rounded-3xl text-white font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-ai-blue/20 transition-all hover:bg-ai-blue hover:shadow-ai-blue/40 border-none"
                >
                  Architect This Growth
                </motion.button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


