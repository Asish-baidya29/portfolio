import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  if (loading) return <Loader />;

  return (
    <div className={`relative min-h-screen ${darkMode ? "bg-[#050508] text-slate-100" : "bg-[#f8f9fc] text-slate-900"} transition-colors duration-500`}>
      <ParticleBackground darkMode={darkMode} />
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
