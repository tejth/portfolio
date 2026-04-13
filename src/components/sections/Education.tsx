"use client";
// src/components/sections/Education.tsx
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";
import { education, certifications } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="relative section-padding">
      <div className="container-max">
        <SectionHeader
          badge="04 — Education"
          title="Academic"
          highlight="background"
          description="Building a strong foundation in computer science and continuously leveling up through certifications."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Degree cards — wider */}
          <div className="lg:col-span-3 space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card rounded-3xl p-8"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center flex-shrink-0 glow-blue-sm">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-white mb-1 leading-tight">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold">{edu.institution}</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="text-xs text-slate-500 font-mono">{edu.year}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                      <span className="text-xs text-green-400 font-mono flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" /> {edu.gpa}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-5">
                  <h4 className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5" /> Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((ach, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.08 }}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {ach}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Coursework */}
                <div>
                  <h4 className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" /> Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-xs font-mono text-slate-300 bg-blue-950/40 border border-blue-900/40 rounded-lg"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications — narrower */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-3xl p-6"
            >
              <h3 className="font-display text-xl text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" /> Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-blue-950/30 rounded-2xl border border-blue-900/30 group hover:border-blue-500/30 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                    <div className="min-w-0">
                      <p className="text-sm text-white font-medium leading-tight mb-0.5">{cert.name}</p>
                      <p className="text-xs text-slate-500">{cert.issuer}</p>
                      <p className="text-xs text-blue-400 font-mono mt-0.5">{cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
