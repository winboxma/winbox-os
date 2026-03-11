"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteFooter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-slate-900 pt-24 pb-12 relative overflow-hidden border-t border-slate-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="text-3xl font-black text-white tracking-tighter mb-8 inline-block">
              WINBOX<span className="text-blue-500">.</span>
            </Link>
            <p className="text-slate-400 text-lg font-medium max-w-sm mb-10 leading-relaxed">
              The Digital Growth Operating System. Engineering the future of business acceleration with modular AI intelligence.
            </p>
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-black text-xs text-white border border-slate-700">YR</div>
               <p className="text-xs font-black text-white uppercase tracking-widest bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                Founder: Yassine Raha
               </p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Intelligence Hub</h4>
            <div className="space-y-5">
              <Link href="mailto:contact@winbox.ma" className="flex items-center gap-4 text-sm font-semibold text-slate-400 hover:text-blue-500 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                contact@winbox.ma
              </Link>
              <Link href="tel:+212669694945" className="flex items-center gap-4 text-sm font-semibold text-slate-400 hover:text-blue-500 transition-colors group">
                 <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                +212 6 69 69 49 45
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Nexus Base</h4>
            <div className="flex items-start gap-4 text-sm font-semibold text-slate-400 group">
               <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="leading-relaxed">Rabat & Salé<br/>Capital Region — Morocco</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-800/50">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black">
            © {mounted ? new Date().getFullYear() : "2026"} WINBOX OS. DEPLOYED GLOBALLY.
          </p>
          <div className="flex gap-10">
            <Link href="/privacy" className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black hover:text-white transition-colors">Privacy Protocol</Link>
            <Link href="/terms" className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Glow Slide */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-800/50 overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"
        />
      </div>
    </footer>
  );
}
