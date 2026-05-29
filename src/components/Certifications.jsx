import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="w-8 h-px bg-[#00d4ff]" />
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest">CERTIFICATIONS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00d4ff]/20 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Credentials &{" "}
          <span className="text-gradient">Achievements</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass glass-hover rounded-2xl p-5 flex items-start gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: `${cert.color}12`, border: `1px solid ${cert.color}25` }}
              >
                {cert.badge}
              </div>
              <div className="min-w-0">
                <p
                  className="font-mono text-xs mb-1 px-2 py-0.5 rounded-full inline-block"
                  style={{
                    background: `${cert.color}10`,
                    color: cert.color,
                    border: `1px solid ${cert.color}20`,
                  }}
                >
                  {cert.type}
                </p>
                <h3 className="font-display font-semibold text-white text-sm leading-snug mt-1">{cert.title}</h3>
                <p className="font-body text-slate-500 text-xs mt-1">{cert.issuer}</p>
                <p className="font-mono text-slate-600 text-xs mt-1">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
