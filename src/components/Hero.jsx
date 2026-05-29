import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";
import profileImg from "../assets/profile.jpg";

const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(i => (i + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
};

export default function Hero() {
  const typedText = useTypewriter(personalInfo.roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00d4ff]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7928ca]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <motion.div
            className="flex-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#00d4ff]" />
              <span className="font-mono text-[#00d4ff] text-sm tracking-widest">HELLO, WORLD</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="block text-white">Asish</span>
              <span className="block text-gradient">Baidya</span>
            </h1>

            <div className="flex items-center gap-3 mb-6 h-10">
              <span className="font-mono text-[#00d4ff] text-lg md:text-xl">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 bg-[#00d4ff] ml-1 align-middle"
                />
              </span>
            </div>

            <p className="font-body text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Final-year Power Engineering student at{" "}
              <span className="text-slate-200 font-medium">Jadavpur University</span>. Building
              scalable ML pipelines and deploying end-to-end AI solutions on real-world
              industrial datasets.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <motion.a
                href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-3 bg-[#00d4ff] text-[#050508] font-display font-semibold text-sm rounded-lg hover:bg-[#00d4ff]/90 transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(0,212,255,0.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-[#00d4ff]/30 text-[#00d4ff] font-mono text-sm rounded-lg hover:bg-[#00d4ff]/8 hover:border-[#00d4ff]/60 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV
              </motion.a>
            </div>

            <div className="flex items-center gap-5">
              {[
                { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
                { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent max-w-24" />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#00d4ff]/15 to-[#7928ca]/15 blur-xl animate-pulse-slow" />
              <motion.div
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-[#00d4ff]/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: "0 0 40px rgba(0,212,255,0.12), 0 0 80px rgba(121,40,202,0.08)" }}
              >
                <img
                  src={profileImg}
                  alt="Asish Baidya"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/20 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -right-3 glass border border-[#00d4ff]/20 rounded-xl px-3 py-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00ffaa] animate-pulse" />
                  <span className="font-mono text-[#00ffaa] text-xs">Open to Work</span>
                </div>
              </motion.div>

            <motion.div
                className="absolute -top-3 -left-3 glass border border-[#7928ca]/25 rounded-xl px-3 py-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <span className="font-mono text-[#b86cfc] text-xs">“Quantity has a quality all its own.”
          </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-[#00d4ff] transition-colors"
          >
            <span className="font-mono text-xs tracking-widest">SCROLL</span>
            <FiArrowDown size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
