"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCheck, MoreVertical, Phone, Video, Search, MessageSquare, Bot } from "lucide-react";

const messages = [
  { sender: "user", text: "I need to scale my lead generation for our real estate business.", delay: 1000 },
  { sender: "ai", text: "Calibrating systems. What is your current monthly lead volume?", delay: 1500 },
  { sender: "user", text: "About 50/month, but qualification is manual and slow.", delay: 1200 },
  { sender: "ai", text: "Deploying AI Lead Engine. We can automate qualification and scale to 250+ high-intent prospects/month.", delay: 2500 },
  { sender: "user", text: "Show me the projection.", delay: 1000 },
  { sender: "ai", text: "Analysis complete: +380% Projected ROI. Booking strategy call for tomorrow at 10 AM? ✅", delay: 2000 },
];

export function AiDemo() {
  const [visibleMessages, setVisibleMessages] = useState<typeof messages>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length) {
      const nextMessage = messages[index];
      
      const timer = setTimeout(() => {
        setIsTyping(true);
        
        const typingTimer = setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => [...prev, nextMessage]);
          setIndex((prev) => prev + 1);
        }, nextMessage.delay);
        
        return () => clearTimeout(typingTimer);
      }, 1500);
      
      return () => clearTimeout(timer);
    } else {
      const loopTimer = setTimeout(() => {
        setVisibleMessages([]);
        setIndex(0);
      }, 5000);
      return () => clearTimeout(loopTimer);
    }
  }, [index]);

  return (
    <section id="ai-demo" className="py-32 relative">
      <div className="section-container relative z-10">
        <div className="text-center mb-24">
          <div className="vision-chip mb-6 inline-block">Adaptive Intelligence</div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-8">
            Modular <span className="text-ai-blue">Inference.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Witness our autonomous agents qualify, engage, and architect strategy in real-time.
          </p>
        </div>

        <div className="max-w-[480px] mx-auto relative group">
          {/* Spatial OS Frame */}
          <div className="relative z-10 bg-slate-950/80 backdrop-blur-3xl rounded-[4rem] p-4 shadow-3xl border border-white/10 h-[720px] flex flex-col overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-ai-blue/5 to-transparent pointer-events-none" />
            
            {/* Interface Header */}
            <div className="px-8 pt-12 pb-6 flex items-center justify-between border-b border-white/5 relative z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-ai-blue/10 border border-ai-blue/20 flex items-center justify-center text-ai-blue">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-white text-sm tracking-tight leading-none mb-1">WINBOX_CORE_v4</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-signal animate-pulse" />
                    <span className="text-[10px] text-emerald-signal font-black uppercase tracking-widest">Inference Active</span>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white/40">
                <Search className="w-4 h-4" />
              </div>
            </div>

            {/* Chat Environment */}
            <div className="flex-1 p-8 overflow-y-auto space-y-6 scrollbar-hide flex flex-col pt-10">
              <AnimatePresence>
                {visibleMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`
                      max-w-[85%] px-6 py-4 rounded-[2rem] text-sm font-medium leading-relaxed
                      ${msg.sender === "user" 
                        ? "bg-ai-blue text-white rounded-tr-none shadow-xl shadow-ai-blue/10" 
                        : "bg-white/5 border border-white/10 text-slate-300 rounded-tl-none backdrop-blur-md"
                      }
                    `}>
                      {msg.text}
                      <div className="mt-2 flex justify-end gap-1.5 opacity-40">
                         <span className="text-[9px] font-black uppercase tracking-tighter">09:41</span>
                         {msg.sender === "user" && <CheckCheck className="w-3 h-3" />}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-[2rem] rounded-tl-none flex gap-1.5 items-center">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-ai-blue" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-ai-blue" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-ai-blue" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-8 pb-10">
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] px-8 py-5 flex items-center gap-4 text-white/30 text-xs font-black uppercase tracking-widest">
                <span>Enter protocol_cmd...</span>
                <div className="ml-auto w-10 h-10 rounded-2xl bg-ai-blue flex items-center justify-center text-white">
                  <Send className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Device Shadow/Glow */}
          <div className="absolute -inset-10 bg-ai-blue/5 rounded-[6rem] blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

