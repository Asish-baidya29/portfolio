import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.04]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-xl"
            whileHover={{ scale: 1.03 }}
          >
            <span className="text-gradient">AB</span>
            <span className={`ml-2 text-sm font-mono ${darkMode ? "text-slate-500" : "text-slate-400"}`}>/</span>
            <span className={`ml-2 text-sm font-body font-normal ${darkMode ? "text-slate-400" : "text-slate-500"}`}>portfolio</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 text-sm font-body transition-colors duration-200 rounded-md ${
                  active === link.href
                    ? "text-[#00d4ff]"
                    : darkMode
                    ? "text-slate-400 hover:text-slate-100"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-[#00d4ff]/8 rounded-md border border-[#00d4ff]/15"
                  />
                )}
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                darkMode
                  ? "border-white/10 text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/30"
                  : "border-slate-200 text-slate-500 hover:text-slate-900"
              }`}
            >
              {darkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
            </motion.button>

            <a
              href="/resume.pdf"
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-mono bg-[#00d4ff]/8 border border-[#00d4ff]/25 text-[#00d4ff] rounded-md hover:bg-[#00d4ff]/15 hover:border-[#00d4ff]/50 transition-all duration-300"
            >
              Resume
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center border ${
                darkMode ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-500"
              }`}
            >
              {mobileOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#050508]/95 backdrop-blur-xl border-b border-white/[0.04] md:hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-3 px-4 text-slate-300 hover:text-[#00d4ff] hover:bg-[#00d4ff]/5 rounded-lg transition-all duration-200 font-body"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 py-3 px-4 text-center font-mono text-sm bg-[#00d4ff]/8 border border-[#00d4ff]/25 text-[#00d4ff] rounded-lg"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
