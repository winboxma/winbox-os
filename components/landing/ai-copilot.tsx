"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, X, ChevronUp, ArrowRight, 
  TrendingUp, MessageSquare, BarChart3, Shield
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const QUICK_ACTIONS = [
  {
    id: "simulate",
    icon: TrendingUp,
    label: "Simulate your growth system",
    response: "Based on your sector and current CAC, I estimate you could 3× your qualified leads in 90 days. Want a full growth audit?"
  },
  {
    id: "estimate",
    icon: BarChart3,
    label: "Estimate campaign potential",
    response: "With a MAD 15K/mo budget in your market, WINBOX systems typically generate 4–8× ROAS. Let's run the numbers for your business."
  },
  {
    id: "whatsapp",
    icon: MessageSquare,
    label: "Ask about WhatsApp AI",
    response: "WINBOX WhatsApp AI agents qualify leads 24/7, respond in under 2 minutes, and route them into your CRM automatically. Zero manual work."
  },
  {
    id: "audit",
    icon: Shield,
    label: "Get a strategic audit",
    response: "I'll analyze your current funnel, identify the biggest growth levers, and propose a 90-day system. Shall I connect you with the team?"
  }
];

export function AiCopilot() {
  const [open, setOpen] = useState(false);
  const [activeResponse, setActiveResponse] = useState<string | null>(null);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const handleAction = (action: typeof QUICK_ACTIONS[0]) => {
    setSelectedAction(action.id);
    setActiveResponse(null);
    setTimeout(() => setActiveResponse(action.response), 600);
  };

  return (
    <>
      {/* Mobile: floating pill */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-ai-blue text-white text-sm font-black shadow-2xl shadow-ai-blue/40 hover:scale-105 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          Chat with AI Assistant
        </a>
      </div>

      {/* Desktop: floating dock */}
      <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 w-80 glass-panel rounded-[32px] overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-slate-100/40">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-ai-blue/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-ai-blue" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-sm">WINBOX AI Assistant</div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-signal animate-pulse" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response area */}
              <div className="px-6 py-4">
                <AnimatePresence mode="wait">
                  {activeResponse ? (
                    <motion.div
                      key="response"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mb-4"
                    >
                      <div className="glass-panel rounded-2xl p-4 bg-ai-blue/5 border-ai-blue/10">
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">{activeResponse}</p>
                      </div>
                      <a
                        href={siteConfig.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex items-center gap-2 text-xs font-black text-ai-blue uppercase tracking-widest hover:gap-3 transition-all"
                      >
                        Talk to the team <ArrowRight className="w-3 h-3" />
                      </a>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-slate-400 font-medium mb-4"
                    >
                      How can I help you grow today?
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Quick actions */}
                <div className="space-y-2">
                  {QUICK_ACTIONS.map(action => {
                    const Icon = action.icon;
                    const isSelected = selectedAction === action.id;
                    return (
                      <button
                        key={action.id}
                        onClick={() => handleAction(action)}
                        className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-all duration-300 text-xs font-bold
                          ${isSelected 
                            ? "bg-ai-blue text-white shadow-lg shadow-ai-blue/20" 
                            : "bg-white/50 text-slate-600 hover:bg-white hover:shadow-md"
                          }
                        `}
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                        {action.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <div className="text-[10px] text-center text-slate-400 font-medium">
                  Powered by WINBOX AI · Response within 2 min
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.button
          onClick={() => setOpen(prev => !prev)}
          data-magnetic
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 h-14 px-6 rounded-full bg-slate-900 text-white shadow-2xl shadow-slate-900/30 hover:shadow-slate-900/50 transition-all"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Sparkles className="w-5 h-5" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-signal" />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="font-black text-sm uppercase tracking-[0.1em]">
            {open ? "Close" : "AI Assistant"}
          </span>
          {!open && <ChevronUp className="w-4 h-4 opacity-50" />}
        </motion.button>
      </div>
    </>
  );
}
