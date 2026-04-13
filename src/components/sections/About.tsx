"use client";
// src/components/sections/About.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Mail, Coffee, Zap } from "lucide-react";
import { personalInfo, skills } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

/** Animated progress bar for skills */
function SkillBar({ name, level, icon, delay }: { name: string; level: number; icon: string; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 text-sm text-slate-300 font-medium">
          <span>{icon}</span> {name}
        </span>
        <span className="text-xs font-mono text-blue-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-blue-950/60 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

const highlights = [
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: Mail, label: "Email", value: personalInfo.email },
  { icon: Coffee, label: "University", value: "JECRC University" },
  { icon: Zap, label: "Status", value: "Open to work" },
];

export default function About() {
  const skillCategories = [
    { label: "Frontend", items: skills.frontend },
    { label: "Backend", items: skills.backend },
    { label: "Tools & Cloud", items: skills.tools },
  ];

  return (
    <section id="about" className="relative section-padding">
      <div className="container-max">
        <SectionHeader
          badge="01 — About Me"
          title="Passionate about"
          highlight="great software"
          description="I turn complex problems into elegant, scalable solutions — with code that's clean and interfaces that delight."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Bio & highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Avatar placeholder + bio */}
            <div className="glass-card rounded-3xl p-8 mb-6">
              <div className="flex items-start gap-5 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-3xl font-display font-bold text-white">
                    AM
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-navy-900" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white mb-1">{personalInfo.name}</h3>
                  <p className="text-blue-400 text-sm font-mono">{personalInfo.title}</p>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed text-sm mb-6">{personalInfo.bio}</p>

              {/* Quick info grid */}
              <div className="grid grid-cols-2 gap-3">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 p-3 bg-blue-950/30 rounded-xl border border-blue-900/30">
                    <Icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500">{label}</p>
                      <p className="text-xs text-slate-300 font-medium truncate">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { emoji: "🏆", text: "CGPA 9.4/10" },
                { emoji: "⭐", text: "HackerRank 5-star" },
                { emoji: "🤖", text: "ML & AI Projects" },
              ].map((fact) => (
                <motion.div
                  key={fact.text}
                  className="glass-card rounded-2xl p-4 text-center"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="text-2xl mb-1">{fact.emoji}</div>
                  <div className="text-xs text-slate-400">{fact.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              {skillCategories.map((cat, catIdx) => (
                <div key={cat.label} className="glass-card rounded-3xl p-6">
                  <h4 className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4">
                    /{cat.label}
                  </h4>
                  {cat.items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      delay={catIdx * 0.1 + i * 0.08}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
