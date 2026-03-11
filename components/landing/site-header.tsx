"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "AI Lab", href: "#systems" },
  { label: "Proof", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-8 z-[100] w-full px-6 flex justify-center pointer-events-none">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`
          pointer-events-auto
          flex items-center justify-between gap-8
          px-8 py-3 rounded-full
          glass-panel border-white/40
          transition-all duration-500
          ${scrolled ? "w-[95%] max-w-5xl shadow-2xl" : "w-full max-w-6xl shadow-xl"}
        `}
      >
        <Link href="/" className="group flex items-center gap-2 shrink-0">
          <span className="text-xl font-black tracking-tighter text-slate-900">
            WINBOX<span className="text-ai-blue">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-5 py-2 text-[12px] font-bold uppercase tracking-widest text-slate-500 transition-all hover:text-ai-blue group"
            >
              <span className="relative z-10">{link.label}</span>
              <motion.span
                className="absolute inset-0 rounded-full bg-ai-blue/5 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.2 }}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="h-11 rounded-full bg-ai-blue px-8 text-[12px] font-black uppercase tracking-[0.15em] text-white shadow-lg shadow-ai-blue/20 hover:bg-ai-blue hover:shadow-xl hover:shadow-ai-blue/30 transition-all border-none">
              <Link href="#contact" className="flex items-center gap-2">
                <span>Start Project</span>
              </Link>
            </Button>
          </motion.div>

          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-24 left-6 right-6 p-8 glass-panel rounded-[32px] pointer-events-auto border-white/60 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-900 tracking-tight"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full h-14 rounded-2xl bg-ai-blue text-white font-bold">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Start Your Project</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

