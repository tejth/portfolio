"use client";
// src/components/ui/SectionHeader.tsx
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight: string;
  description?: string;
}

export default function SectionHeader({ badge, title, highlight, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono font-semibold text-blue-400 bg-blue-600/10 border border-blue-500/20 rounded-full tracking-widest uppercase">
        {badge}
      </span>
      <h2 className="font-display text-4xl sm:text-5xl text-white mb-4 leading-tight">
        {title}{" "}
        <span className="text-gradient">{highlight}</span>
      </h2>
      {description && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
