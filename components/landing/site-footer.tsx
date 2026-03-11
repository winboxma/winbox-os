"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteFooter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#071226] to-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="text-3xl font-black text-white tracking-tighter mb-4 inline-block">
              WINBOX<span className="text-blue-500">.</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              The Digital Growth Operating System.<br/>
              Engineering the future of business acceleration with modular AI intelligence.
            </p>
            <div className="bg-slate-800 text-slate-300 px-4 py-1 rounded-full text-sm font-medium">
              Founder: Yassine Raha
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <div className="flex flex-col gap-4">
              {['Services', 'AI Lab', 'Proof', 'Process', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-slate-400 hover:text-white transition text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <Link href="mailto:contact@winbox.ma" className="flex items-center gap-3 text-slate-300 text-sm hover:text-white transition group">
                <Mail className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform" />
                contact@winbox.ma
              </Link>
              <Link href="tel:+212669694945" className="flex items-center gap-3 text-slate-300 text-sm hover:text-white transition group">
                <Phone className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform" />
                +212 6 69 69 49 45
              </Link>
            </div>
          </div>

          {/* Column 4 - Location */}
          <div>
            <h4 className="text-white font-semibold mb-6">Nexus Base</h4>
            <div className="flex items-start gap-3 text-slate-300 text-sm">
              <MapPin className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Rabat & Salé<br/>
                Capital Region — Morocco
              </span>
            </div>
          </div>

        </div>

        {/* Divider and Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {mounted ? new Date().getFullYear() : "2026"} WINBOX OS. Deployed globally.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-slate-500 text-sm hover:text-white transition">Privacy</Link>
              <Link href="/terms" className="text-slate-500 text-sm hover:text-white transition">Terms</Link>
              <Link href="/security" className="text-slate-500 text-sm hover:text-white transition">Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
