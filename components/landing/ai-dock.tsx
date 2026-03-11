"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Bot } from "lucide-react";

type Message = {
  id: string;
  sender: "user" | "bot";
  text: React.ReactNode;
};

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
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen, messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: "msg-1",
            sender: "bot",
            text: (
              <>
                Hello, I'm WINBOX AI.
                <br /><br />
                I can help you:<br />
                • build your digital growth system<br />
                • scale your marketing<br />
                • launch AI automation
                <br /><br />
                What are you trying to grow today?
              </>
            ),
          },
        ]);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const newUserMsg: Message = { id: Date.now().toString(), sender: "user", text: userText };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Tell me more about your business and growth objectives.";
      const lowerText = userText.toLowerCase();

      if (lowerText.includes("hello") || lowerText.includes("hi")) {
        botResponse = "Hello! I'm WINBOX AI. How can I accelerate your business today?";
      } else if (lowerText.includes("pricing") || lowerText.includes("cost")) {
        botResponse = "Our solutions are tailored to your growth stage. Tell me about your company.";
      } else if (lowerText.includes("website") || lowerText.includes("web")) {
        botResponse = "We build high-performance digital growth systems.";
      } else if (lowerText.includes("marketing")) {
        botResponse = "We design AI-powered marketing infrastructures.";
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: "bot", text: botResponse },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-[320px] md:w-[380px] pointer-events-auto origin-bottom-right"
          >
            <div className="bg-slate-900 border border-slate-800 overflow-hidden rounded-[24px] shadow-2xl flex flex-col">
              {/* Header */}
              <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 shadow-sm flex items-center justify-center text-white">
                    <Bot size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">WINBOX AI</h4>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Growth Agent
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Chat Area */}
              <div className="p-5 flex flex-col gap-4 h-[350px] overflow-y-auto bg-slate-950 scroll-smooth relative">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} max-w-full`}
                  >
                    <div
                      className={`
                        text-sm leading-relaxed ${msg.sender === "bot" ? "whitespace-pre-wrap" : ""}
                        ${
                          msg.sender === "user"
                            ? "bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2"
                            : "bg-slate-800 text-slate-200 rounded-2xl rounded-tl-sm px-4 py-2"
                        }
                      `}
                      style={{ maxWidth: "85%" }}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start max-w-full"
                  >
                    <div className="bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1 h-10">
                      <motion.div className="w-1.5 h-1.5 rounded-full bg-slate-400" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} />
                      <motion.div className="w-1.5 h-1.5 rounded-full bg-slate-400" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }} />
                      <motion.div className="w-1.5 h-1.5 rounded-full bg-slate-400" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} />
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-slate-900 border-t border-slate-800">
                <form onSubmit={handleSendMessage} className="relative flex items-center">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your question..."
                    className="w-full bg-slate-950 px-4 py-3 pr-10 rounded-xl text-sm border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm placeholder:text-slate-500 text-slate-200"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="absolute right-2 p-1.5 text-blue-500 hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-40"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-[0_10px_40px_-10px_rgba(37,99,235,0.4)] transition-colors duration-300 z-50 bg-blue-600 text-white hover:bg-blue-700"
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
