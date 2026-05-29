import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/60 transition-all duration-300 backdrop-blur-sm"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
