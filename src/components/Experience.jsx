import { motion } from "framer-motion";
import { experiences } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }),
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="w-8 h-px bg-[#00d4ff]" />
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest">EXPERIENCE</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00d4ff]/20 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Research &{" "}
          <span className="text-gradient">Work</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/40 via-[#7928ca]/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="relative pl-16 md:pl-20"
              >
                <div
                  className="absolute left-4 md:left-5 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: exp.color, background: `${exp.color}15` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                </div>

                <motion.div
                  className="glass rounded-2xl p-6 border border-white/[0.04] group hover:border-white/[0.08] transition-all duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: `${exp.color}15`,
                            color: exp.color,
                            border: `1px solid ${exp.color}25`,
                          }}
                        >
                          {exp.type}
                        </span>
                        {exp.duration.includes("Present") && (
                          <span className="flex items-center gap-1 font-mono text-xs text-[#00ffaa]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00ffaa] animate-pulse" />
                            Active
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-white text-lg">{exp.company}</h3>
                      <p style={{ color: exp.color }} className="font-body text-sm mt-0.5">{exp.role}</p>
                      {exp.supervisor && (
                        <p className="font-mono text-slate-500 text-xs mt-1">{exp.supervisor}</p>
                      )}
                    </div>
                    <span className="font-mono text-slate-500 text-xs whitespace-nowrap">{exp.duration}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-sm text-slate-400 font-body leading-relaxed">
                        <span style={{ color: exp.color }} className="mt-1.5 flex-shrink-0 text-xs">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="badge">{t}</span>
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
