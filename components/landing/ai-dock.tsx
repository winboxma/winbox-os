"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Bot } from "lucide-react";

type Message = {
  id: string;
  sender: "user" | "bot";
  text: React.ReactNode;
};

function getBotReply(userText: string) {
  const text = userText.toLowerCase();

  if (
    text.includes("website") ||
    text.includes("site") ||
    text.includes("landing") ||
    text.includes("site web")
  ) {
    return `WINBOX builds premium websites and landing pages designed for credibility, conversion, and growth.

We combine strategy, UI design, positioning, and modern performance architecture to create digital experiences that help businesses win more qualified clients.

Are you looking to improve an existing website, or launch a new one from scratch?`;
  }

  if (
    text.includes("marketing") ||
    text.includes("ads") ||
    text.includes("publicité") ||
    text.includes("acquisition") ||
    text.includes("meta") ||
    text.includes("google ads")
  ) {
    return `WINBOX helps businesses scale through intelligent marketing systems.

We design acquisition strategy, ad creatives, conversion funnels, retargeting flows, and performance optimization to move from visibility to measurable business growth.

Are you currently struggling more with lead volume, lead quality, or conversion?`;
  }

  if (
    text.includes("branding") ||
    text.includes("brand") ||
    text.includes("identité") ||
    text.includes("image de marque") ||
    text.includes("logo")
  ) {
    return `Branding is one of the strongest growth levers for premium businesses.

WINBOX helps brands improve perception, positioning, visual identity, and messaging so they look more valuable, more credible, and easier to choose.

Are you repositioning an existing brand, or building a stronger image from zero?`;
  }

  if (
    text.includes("whatsapp") ||
    text.includes("chatbot") ||
    text.includes("automation") ||
    text.includes("automatisation") ||
    text.includes("ai") ||
    text.includes("intelligence")
  ) {
    return `WINBOX builds AI and automation systems that help businesses respond faster, qualify leads automatically, and improve customer experience.

That includes WhatsApp automation, intelligent assistants, and workflow systems that reduce friction and save time.

Are you currently handling conversations manually, or do you already use some automation?`;
  }

  if (
    text.includes("seo") ||
    text.includes("référencement") ||
    text.includes("google") ||
    text.includes("search")
  ) {
    return `WINBOX improves visibility through technical SEO, site structure, metadata, content hierarchy, and conversion-focused search strategy.

The goal is not only to rank, but to attract the right traffic and turn it into real business opportunities.

Is your priority local visibility in Morocco, or broader international search growth?`;
  }

  if (
    text.includes("price") ||
    text.includes("pricing") ||
    text.includes("budget") ||
    text.includes("tarif") ||
    text.includes("cost") ||
    text.includes("prix") ||
    text.includes("combien")
  ) {
    return `Our pricing depends on the scope of your project, the complexity of the system required, and the business objective behind it.

WINBOX works on tailored growth solutions rather than one-size-fits-all packages.

Tell me your activity and your main objective, and I’ll guide you toward the right direction.`;
  }

  if (
    text.includes("who are you") ||
    text.includes("what is winbox") ||
    text.includes("about") ||
    text.includes("agency") ||
    text.includes("qui") ||
    text.includes("c'est quoi")
  ) {
    return `WINBOX is a premium AI-powered digital marketing agency.

We build growth systems that combine branding, websites, performance marketing, automation, and strategic execution to help ambitious businesses scale with more clarity and efficiency.

Would you like me to explain what WINBOX could build for your type of business?`;
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("bonjour") ||
    text.includes("salut")
  ) {
    return `Hello, I’m WINBOX AI.

I can help you understand how WINBOX can improve your branding, website, marketing, automation, and growth systems.

What are you trying to grow right now?`;
  }

  return `That depends on your business goals.

WINBOX helps businesses improve branding, websites, acquisition, automation, and conversion systems.

Tell me a bit more about your activity and what you want to improve, and I’ll guide you toward the best direction.`;
}

export function AiDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(scrollToBottom, 120);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);

      const timer = setTimeout(() => {
        setMessages([
          {
            id: "welcome-message",
            sender: "bot",
            text: (
              <>
                Hello, I’m WINBOX AI.
                <br />
                <br />I help businesses:
                <br />• build premium digital growth systems
                <br />• improve branding and conversion
                <br />• launch AI automation
                <br />• scale acquisition and sales
                <br />
                <br />
                Tell me about your business, your market, or what you want to
                grow.
              </>
            ),
          },
        ]);
        setIsTyping(false);
      }, 900);

      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim() || isTyping) return;

    const userText = inputValue.trim();

    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: userText,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotReply(userText);

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: reply,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans md:bottom-8 md:right-8">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mb-4 w-[340px] origin-bottom-right md:w-[420px]"
          >
            <div className="relative flex h-[620px] flex-col overflow-hidden rounded-[26px] border border-slate-700/60 bg-slate-950/95 shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-xl before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent)] before:content-['']">
              <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 bg-slate-900/70 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-sm">
                      <Bot size={18} />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-500" />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold tracking-wide text-white">
                      WINBOX AI
                    </h4>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      Growth Strategist
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                  aria-label="Close chatbot"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative z-10 flex-1 overflow-y-auto bg-[#040914] px-4 py-5 text-sm">
                <div className="flex flex-col gap-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                    >
                      <div
                        className={`max-w-[88%] whitespace-pre-line leading-7 shadow-sm ${msg.sender === "user"
                            ? "rounded-2xl rounded-tr-sm bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-white"
                            : "rounded-2xl rounded-tl-sm border border-slate-700/60 bg-slate-800 px-4 py-3 text-slate-100"
                          }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex h-11 w-16 items-center gap-1.5 rounded-2xl rounded-tl-sm border border-slate-700/60 bg-slate-800 px-4 py-3">
                        <motion.div
                          className="h-1.5 w-1.5 rounded-full bg-slate-400"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                        />
                        <motion.div
                          className="h-1.5 w-1.5 rounded-full bg-slate-400"
                          animate={{ y: [0, -3, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            delay: 0.15,
                          }}
                        />
                        <motion.div
                          className="h-1.5 w-1.5 rounded-full bg-slate-400"
                          animate={{ y: [0, -3, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            delay: 0.3,
                          }}
                        />
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="relative z-10 border-t border-slate-800/80 bg-slate-900/90 p-4">
                <form onSubmit={handleSendMessage} className="relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about your business, branding, marketing, or AI..."
                    className="w-full rounded-xl border border-slate-700/60 bg-slate-950/60 px-4 py-3 pr-12 text-sm text-slate-100 placeholder:text-slate-500 shadow-inner transition-all hover:border-slate-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />

                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-lg bg-blue-600 p-2 text-white shadow-sm transition-all hover:bg-blue-500 disabled:bg-transparent disabled:text-slate-600"
                    aria-label="Send message"
                  >
                    <Send
                      size={16}
                      className={
                        inputValue.trim() && !isTyping
                          ? "translate-x-[1px] transition-transform"
                          : "transition-transform"
                      }
                    />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="pointer-events-auto relative z-50 flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_8px_32px_-8px_rgba(37,99,235,0.6)] transition-all duration-300 md:h-16 md:w-16"
        aria-label={isOpen ? "Close AI dock" : "Open AI dock"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}