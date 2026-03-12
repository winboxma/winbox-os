"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteFooter() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "AI Lab", href: "#ai-lab" },
    { label: "Proof", href: "#proof" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/winbox.ma/" },
    { icon: Facebook, href: "https://web.facebook.com/Winbox.m" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yassineraha/" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#071226] to-[#020617] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="text-4xl font-black text-white">
              WINBOX<span className="text-blue-500">.</span>
            </Link>

            <p className="mt-6 text-lg font-semibold text-white">
              The Digital Growth Operating System.
            </p>

            <p className="mt-4 text-white/80">
              We design premium growth systems combining branding,
              AI automation, digital performance and conversion infrastructure.
            </p>

            <div className="mt-6 px-4 py-2 border border-white/15 rounded-full inline-flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Founder: Yassine Raha
            </div>

            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <Link key={i} href={href} target="_blank">
                  <Icon className="w-5 h-5 text-white/80 hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase font-semibold mb-6">Navigation</h4>

            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase font-semibold mb-6">Contact</h4>

            <div className="flex flex-col gap-4">

              <Link href="mailto:contact@winbox.ma" className="flex items-center gap-3 text-white/85">
                <Mail size={18} />
                contact@winbox.ma
              </Link>

              <Link href="tel:+212669694945" className="flex items-center gap-3 text-white/85">
                <Phone size={18} />
                +212 6 69 69 49 45
              </Link>

            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm uppercase font-semibold mb-6">Location</h4>

            <div className="flex items-start gap-3 text-white/85">
              <MapPin size={18} />

              <div>
                <p className="font-semibold text-white">
                  Rabat & Salé
                </p>

                <p className="text-white/60 text-sm">
                  Capital Region — Morocco
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-white/60 text-sm">
            © {year} WINBOX OS. Deployed globally.
          </p>

          <div className="flex gap-6 text-white/60 text-sm">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/security" className="hover:text-white">Security</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}