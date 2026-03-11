"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LeadCaptureSection() {
  return (
    <section id="contact" className="py-32 lg:py-40 relative overflow-hidden bg-slate-900">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_70%)]" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest mb-10">
              System Initialization
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 tracking-[-0.04em] leading-tight">
              Ready to Architect <span className="text-ai-blue">Your Growth?</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium mb-12 max-w-lg leading-relaxed">
              Deploy a high-performance Growth OS in your business. Book a strategy audit to identify your scaling potential.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-500">
                  <Star className="h-7 w-7 fill-current" />
                </div>
                <div>
                  <p className="font-black text-white text-lg tracking-tight">Performance Leader</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Across Morocco & EMEA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-ai-blue">
                   <ShieldCheck className="h-7 w-7" />
                 </div>
                 <div>
                   <p className="font-black text-white text-lg tracking-tight">Enterprise Infrastructure</p>
                   <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">ISO-Grade Data Protocols</p>
                 </div>
               </div>
            </div>

            <div className="mt-16 pt-12 border-t border-slate-800">
              <div className="flex items-center gap-4 text-slate-500">
                 <Users className="h-5 w-5" />
                 <span className="text-sm font-black uppercase tracking-widest">Limited Intake: 2 Open Slots for March</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[56px] p-10 lg:p-14 bg-white/5 border-white/10 backdrop-blur-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Jean Dupont"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Company</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Winbox Inc"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                 </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">WhatsApp Number (with country code)</label>
                <input 
                  type="tel" 
                  placeholder="+212 600 000 000"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Monthly Revenue (MAD)</label>
                <select 
                  defaultValue=""
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-sm text-slate-400 focus:outline-none focus:border-ai-blue transition-all font-medium appearance-none"
                >
                  <option value="" disabled>Select Range</option>
                  <option value="under50k">&lt; 50,000 MAD</option>
                  <option value="50k-150k">50,000 - 150,000 MAD</option>
                  <option value="150k-500k">150,000 - 500,000 MAD</option>
                  <option value="500k+">500,000+ MAD</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Growth Objectives</label>
                <select 
                  defaultValue=""
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-sm text-slate-400 focus:outline-none focus:border-ai-blue transition-all font-medium appearance-none"
                >
                  <option value="" disabled>Select Primary Goal</option>
                  <option value="leads">Scale Lead Generation</option>
                  <option value="automation">AI & WhatsApp Automation</option>
                  <option value="ecommerce">Ecommerce ROAS Optimization</option>
                  <option value="full">Complete Brand OS Overhaul</option>
                </select>
              </div>

              <button className="w-full py-6 rounded-3xl bg-ai-blue text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-ai-blue/20">
                Start Your Growth System
              </button>
              
              <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-6">
                <Globe className="h-4 w-4" />
                EMEA Standard Response: &lt; 2 Hours
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
