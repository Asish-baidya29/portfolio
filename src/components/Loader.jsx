import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#050508] flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="relative w-20 h-20 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#00d4ff]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border-t-2 border-[#00d4ff]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border-b-2 border-[#7928ca]"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#00d4ff] font-mono text-lg font-bold">AB</span>
            </div>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 font-mono text-sm tracking-widest"
        >
          INITIALIZING...
        </motion.p>
        <motion.div
          className="mt-4 h-0.5 bg-[#0f0f18] w-48 mx-auto rounded overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#00d4ff] to-[#7928ca]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
