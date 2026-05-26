"use client";
// src/components/sections/Hero.tsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  BookOpen,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  const socials = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: personalInfo.twitter, label: "Instagram" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-blue-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-slate-300 font-mono">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-6xl sm:text-7xl lg:text-8xl text-white mb-4 leading-none tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl text-slate-300 font-body font-light mb-6 h-10"
          >
            <TypeAnimation
              sequence={[
                "Aspiring AI Engineer 🚀",
                2000,
                "Full-Stack Developer 👨‍💻",
                2000,
                "Python Developer 🌐",
                2000,
                "Machine Learning Engineer 👩🏽‍💻",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-blue-300"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5"
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all glow-blue"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59,130,246,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 px-8 py-4 glass border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold rounded-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-4 h-4" /> Resume
            </motion.a>
          </motion.div>

          {/* Documentation Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex justify-center mb-12"
          >
            <motion.a
              href="https://documentation-site-ten.vercel.app/python/data-types"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 glass border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold rounded-xl transition-all hover:bg-blue-500/10"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59,130,246,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <BookOpen className="w-4 h-4" />
              Explore My Docs
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            {socials.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 glass border border-blue-500/20 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400/50 transition-all"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
          >
            {[
              { value: "1+", label: "Years Exp." },
              { value: "10+", label: "Projects" },
              { value: "9.4", label: "CGPA" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-4 text-center"
              >
                <div className="text-2xl font-display font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono">scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}