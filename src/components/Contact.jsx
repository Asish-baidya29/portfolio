import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="w-8 h-px bg-[#00d4ff]" />
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest">CONTACT</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00d4ff]/20 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Let's{" "}
          <span className="text-gradient">Connect</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-slate-400 mb-12 max-w-xl"
        >
          Open to ML/AI roles, research collaborations, and interesting projects. Let's build something impactful together.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { icon: FiMail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: FiPhone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: FiMapPin, label: "Location", value: personalInfo.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 p-4 glass rounded-xl border border-white/[0.04]">
                <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/8 border border-[#00d4ff]/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#00d4ff]" />
                </div>
                <div>
                  <p className="font-mono text-slate-600 text-xs">{label}</p>
                  {href ? (
                    <a href={href} className="font-body text-slate-300 text-sm hover:text-[#00d4ff] transition-colors">{value}</a>
                  ) : (
                    <p className="font-body text-slate-300 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[
                { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
                { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 glass border border-white/8 rounded-xl text-slate-400 hover:text-white hover:border-white/15 transition-all duration-300 font-mono text-sm"
                  whileHover={{ y: -2 }}
                >
                  <Icon size={15} />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "name", placeholder: "Your Name", type: "text" },
                  { name: "email", placeholder: "Your Email", type: "email" },
                ].map(field => (
                  <div key={field.name}>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-slate-300 placeholder-slate-600 font-body text-sm focus:outline-none focus:border-[#00d4ff]/40 focus:bg-[#00d4ff]/[0.03] transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-slate-300 placeholder-slate-600 font-body text-sm focus:outline-none focus:border-[#00d4ff]/40 focus:bg-[#00d4ff]/[0.03] transition-all duration-300"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-slate-300 placeholder-slate-600 font-body text-sm focus:outline-none focus:border-[#00d4ff]/40 focus:bg-[#00d4ff]/[0.03] transition-all duration-300 resize-none"
              />
              <motion.button
                type="submit"
                className={`w-full py-3.5 rounded-xl font-mono text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  sent
                    ? "bg-[#00ffaa]/15 text-[#00ffaa] border border-[#00ffaa]/30"
                    : "bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30 hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/60"
                }`}
                whileHover={!sent ? { scale: 1.01 } : {}}
                whileTap={!sent ? { scale: 0.98 } : {}}
              >
                {sent ? (
                  <><FiCheck size={16} /> Message Sent!</>
                ) : (
                  <><FiSend size={16} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
