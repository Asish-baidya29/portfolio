import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.04] py-10 mt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-display font-bold text-xl text-gradient">AB</span>
            <p className="font-mono text-slate-600 text-xs mt-1">Asish Baidya · ML & AI Engineer</p>
          </motion.div>

          <div className="flex items-center gap-4">
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
                className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-slate-500 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>

          <p className="font-mono text-slate-600 text-xs flex items-center gap-1.5">
            © {year} · Built with
            <FiHeart size={11} className="text-[#ff6b6b]" />
            by Asish
          </p>
        </div>
      </div>
    </footer>
  );
}
