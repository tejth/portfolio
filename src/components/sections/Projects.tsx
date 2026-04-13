"use client";
// src/components/sections/Projects.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

/** Individual project card */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative glass-card rounded-3xl overflow-hidden cursor-pointer"
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
    >
      {/* Project image */}
      <div className="relative h-48 overflow-hidden">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 z-10`} />
        <div className="absolute inset-0 bg-navy-900/40 z-10" />

        {/* Image (CSS background as fallback) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-blue-600/90 backdrop-blur-sm rounded-full text-xs text-white font-semibold">
            <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" /> Featured
          </div>
        )}

        {/* Action buttons — appear on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 right-4 z-20 flex gap-2"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 bg-navy-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 bg-navy-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card content */}
      <div className="p-6">
        <h3 className="font-display text-xl text-white mb-2 group-hover:text-blue-300 transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono text-blue-300 bg-blue-950/50 border border-blue-900/50 rounded-md"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-mono text-slate-500 bg-slate-900/50 rounded-md">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        </div>
      </div>

      {/* Animated bottom border */}
      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${project.color}`}
        initial={{ width: "0%" }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max">
        <SectionHeader
          badge="02 — Projects"
          title="Things I've"
          highlight="built"
          description="A selection of projects I'm proud of — from AI platforms to developer tools."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/tejth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-blue-500/20 hover:border-blue-400/40 text-blue-300 hover:text-white rounded-xl text-sm font-medium transition-all"
          >
            <Github className="w-4 h-4" /> View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
