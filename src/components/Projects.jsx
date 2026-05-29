import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiYoutube, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolio";

const categories = ["All", "MLOps", "NLP", "Machine Learning", "Deep Learning", "Computer Vision", "Reinforcement Learning"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="w-8 h-px bg-[#00d4ff]" />
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest">PROJECTS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00d4ff]/20 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-8"
        >
          What I've{" "}
          <span className="text-gradient">Built</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-300 ${
                active === cat
                  ? "bg-[#00d4ff]/15 text-[#00d4ff] border border-[#00d4ff]/40"
                  : "text-slate-500 border border-white/8 hover:text-slate-300 hover:border-white/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 border border-white/[0.04] group hover:border-white/[0.09] transition-all duration-300 flex flex-col"
                whileHover={{ y: -4, boxShadow: `0 12px 40px ${project.color}12` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: `${project.color}12`,
                          color: project.color,
                          border: `1px solid ${project.color}25`,
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="font-mono text-slate-600 text-xs">#{String(project.id).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-display font-bold text-white text-xl leading-tight">{project.title}</h3>
                    <p style={{ color: project.color }} className="font-mono text-xs mt-1 opacity-80">{project.subtitle}</p>
                  </div>

                  <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                    {project.youtube && (
                      <motion.a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-red-400 hover:bg-red-400/10 border border-white/5 hover:border-red-400/20 transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Watch Demo"
                      >
                        <FiYoutube size={14} />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 border border-white/5 hover:border-[#00d4ff]/20 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiExternalLink size={14} />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/8 border border-white/5 hover:border-white/15 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="View on GitHub"
                    >
                      <FiGithub size={14} />
                    </motion.a>
                  </div>
                </div>

                <p className="font-body text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="mt-auto">
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg mb-4 text-xs font-mono"
                    style={{
                      background: `${project.color}08`,
                      borderLeft: `2px solid ${project.color}`,
                      color: project.color,
                    }}
                  >
                    <span className="opacity-60">✦</span>
                    {project.highlight}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className="badge text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Asish-baidya29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 rounded-xl font-mono text-sm transition-all duration-300"
          >
            <FiGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
