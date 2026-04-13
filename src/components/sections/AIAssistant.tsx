"use client";
// src/components/sections/AIAssistant.tsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, RotateCcw, Loader2 } from "lucide-react";
import { Message } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

const SUGGESTED_QUESTIONS = [
  "What are Tejendra's top skills?",
  "Tell me about projects.",
  "Is Tejendra available to hire?",
  "What's Tejendra's experience with React?",
  "Where did Tejendra go to college?",
];

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hey there! 👋 I'm Tejendra's AI assistant. I know everything about his skills, experience, and projects. Ask me anything — I'm happy to help you learn more about Tejendra!",
  timestamp: new Date(),
};

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage]
            .filter((m) => m.id !== "welcome")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.message || "I couldn't process that request. Please try again.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Sorry, I'm having a moment. Please try again shortly!",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const resetChat = () => {
    setMessages([WELCOME_MESSAGE]);
    setInput("");
  };

  return (
    <section id="ai-assistant" className="relative section-padding">
      {/* Glow accent */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-blue-700/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max">
        <SectionHeader
          badge="05 — AI Feature"
          title="Ask my"
          highlight="AI assistant"
          description="Powered by Claude AI — ask me anything about Tejendra's work, skills, or availability."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl overflow-hidden"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between p-5 border-b border-blue-900/30">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center glow-blue-sm">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-navy-900" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Tejendra&apos;s AI Assistant</p>
                  <p className="text-xs text-green-400">Online · Powered by Claude</p>
                </div>
              </div>

              <motion.button
                onClick={resetChat}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </motion.button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-5 space-y-4 scroll-smooth">
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-white ${
                        message.role === "assistant"
                          ? "bg-blue-600"
                          : "bg-slate-700"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <Bot className="w-4 h-4" />
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                    </div>

                    {/* Bubble */}
                    <div
                      className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        message.role === "assistant"
                          ? "bg-blue-950/60 border border-blue-900/40 text-slate-200 rounded-tl-none"
                          : "bg-blue-600 text-white rounded-tr-none"
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="px-4 py-3 bg-blue-950/60 border border-blue-900/40 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                      <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                      <span className="text-xs text-slate-400">Thinking...</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions */}
            <div className="px-5 pb-3">
              <div className="flex gap-2 flex-wrap">
                {SUGGESTED_QUESTIONS.slice(0, 3).map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    disabled={loading}
                    className="text-xs px-3 py-1.5 rounded-lg bg-blue-950/50 border border-blue-900/40 text-blue-300 hover:border-blue-500/40 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-3 p-4 border-t border-blue-900/30">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Tejendra..."
                disabled={loading}
                className="flex-1 bg-blue-950/40 border border-blue-900/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-blue-950/60 transition-all disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || loading}
                className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-slate-600 mt-4">
            AI responses are generated based on Tejendra&apos;s portfolio data. For critical info, contact directly.
          </p>
        </div>
      </div>
    </section>
  );
}
