import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="w-8 h-px bg-[#00d4ff]" />
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest">HIGHLIGHTS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00d4ff]/20 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Hackathons &{" "}
          <span className="text-gradient">Wins</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative glass rounded-2xl p-7 border border-white/[0.04] overflow-hidden group"
              whileHover={{ borderColor: "rgba(0,212,255,0.12)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/[0.03] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#00d4ff]/[0.06] transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00d4ff]/8 border border-[#00d4ff]/15 flex items-center justify-center text-2xl flex-shrink-0">
                    {a.badge}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg leading-snug">{a.title}</h3>
                    <p className="font-body text-[#00d4ff] text-sm mt-0.5">{a.org}</p>
                  </div>
                </div>

                <p className="font-body text-slate-400 text-sm leading-relaxed mb-4">{a.description}</p>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-slate-600 text-xs">{a.date}</span>
                  {a.team && (
                    <span className="badge badge-green">{a.team}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
