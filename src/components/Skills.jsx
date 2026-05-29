import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

const categoryColors = {
  "Languages": "#00d4ff",
  "ML / AI": "#7928ca",
  "Frameworks": "#00ffaa",
  "Tools & Platforms": "#f59e0b",
  "Concepts": "#ff6b6b",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" } }),
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="w-8 h-px bg-[#00d4ff]" />
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest">TECH STACK</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00d4ff]/20 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Skills &{" "}
          <span className="text-gradient">Technologies</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], catIdx) => {
            const color = categoryColors[category] || "#00d4ff";
            return (
              <motion.div
                key={category}
                custom={catIdx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="glass glass-hover rounded-2xl p-6 group"
                style={{ "--cat-color": color }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-6 rounded-full" style={{ background: color }} />
                  <h3 className="font-display font-semibold text-white text-sm tracking-wide">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.05 + i * 0.04 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-default"
                      style={{
                        background: `${color}10`,
                        color: color,
                        border: `1px solid ${color}25`,
                      }}
                      whileHover={{
                        background: `${color}20`,
                        borderColor: `${color}50`,
                        scale: 1.05,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 p-6 glass rounded-2xl border border-[#00d4ff]/10"
        >
          <p className="font-mono text-[#00d4ff] text-xs tracking-widest mb-4">DOMAIN FOCUS</p>
          <div className="flex flex-wrap gap-3">
            {["NLP & LLMs", "Computer Vision", "Sensor Analytics", "MLOps & Deployment", "Reinforcement Learning", "RAG Systems", "Time-Series ML", "End-to-End Pipelines"].map(tag => (
              <span key={tag} className="badge badge-purple">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
