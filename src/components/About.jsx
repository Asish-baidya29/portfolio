import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiBook } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";
import profileImg from "../assets/profile.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#00d4ff]" />
            <span className="font-mono text-[#00d4ff] text-sm tracking-widest">ABOUT ME</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00d4ff]/20 to-transparent" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeUp}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Turning data into
                <span className="text-gradient"> decisions.</span>
              </h2>
              <p className="font-body text-slate-400 leading-relaxed text-base mb-6">
                {personalInfo.summary}
              </p>

              <div className="grid grid-cols-1 gap-3 mt-8">
                {[
                  { icon: FiMapPin, text: personalInfo.location },
                  { icon: FiMail, text: personalInfo.email },
                  { icon: FiPhone, text: personalInfo.phone },
                  { icon: FiBook, text: `${personalInfo.education.degree} · ${personalInfo.education.university}` },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm">
                    <Icon size={14} className="text-[#00d4ff] flex-shrink-0" />
                    <span className="font-mono text-slate-400">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl border border-[#00d4ff]/10 bg-[#00d4ff]/[0.03]">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-full bg-[#00d4ff] rounded-full self-stretch min-h-[60px]" />
                  <div>
                    <p className="font-display font-semibold text-white text-sm">{personalInfo.education.university}</p>
                    <p className="font-body text-slate-400 text-sm mt-1">{personalInfo.education.degree}</p>
                    <p className="font-mono text-[#00d4ff] text-xs mt-1">{personalInfo.education.duration} · {personalInfo.education.gpa}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "8+", label: "Projects Built" },
                  { num: "10+", label: "Certifications" },
                  { num: "3+", label: "Research Roles" },
                  { num: "99.8%", label: "Best Model Accuracy" },
                ].map(({ num, label }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="glass glass-hover rounded-2xl p-5 text-center"
                  >
                    <p className="font-display font-bold text-3xl text-gradient mb-1">{num}</p>
                    <p className="font-body text-slate-500 text-xs leading-tight">{label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                className="glass rounded-2xl p-5 border border-white/[0.04]"
              >
                <p className="font-mono text-[#00d4ff] text-xs tracking-widest mb-3">CURRENTLY</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00ffaa] animate-pulse flex-shrink-0" />
                    <span className="font-body text-slate-300 text-sm">Research Intern @ IIT Patna</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse flex-shrink-0" />
                    <span className="font-body text-slate-300 text-sm">Final Year @ Jadavpur University</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#7928ca] animate-pulse flex-shrink-0" />
                    <span className="font-body text-slate-300 text-sm">Open to ML/AI Opportunities</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
