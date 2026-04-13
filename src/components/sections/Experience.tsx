"use client";
// src/components/sections/Experience.tsx
import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="absolute left-0 top-1/2 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max">
        <SectionHeader
          badge="03 — Experience"
          title="Where I've"
          highlight="worked"
          description="5+ years of shipping production software at companies big and small."
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/60 via-blue-800/40 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-5 w-5 h-5 rounded-full bg-blue-600 border-4 border-navy-900 hidden sm:flex items-center justify-center z-10 glow-blue-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                {/* Card */}
                <motion.div
                  className="glass-card rounded-3xl p-6 sm:p-8 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-white group-hover:text-blue-300 transition-colors mb-1">
                        {job.role}
                      </h3>
                      <p className="text-blue-400 font-semibold text-sm">{job.company}</p>
                    </div>

                    <div className="flex flex-col gap-1.5 text-right">
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 justify-end">
                        <Calendar className="w-3.5 h-3.5" /> {job.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 justify-end">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{job.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-5">
                    {job.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.08 }}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono text-blue-300 bg-blue-950/50 border border-blue-900/40 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
