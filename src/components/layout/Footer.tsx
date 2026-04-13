"use client";
// src/components/layout/Footer.tsx
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Heart, Code2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: personalInfo.twitter, label: "Twitter" },
  ];

  return (
    <footer className="relative border-t border-blue-900/30 bg-navy-900/80">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-xl text-white font-bold">
              Tej<span className="text-blue-400">.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500" /> by Tejendra Pal Singh © {year}
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
