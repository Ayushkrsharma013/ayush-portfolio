"use client";
import { motion } from "framer-motion";

function FloatingShape({ className, color = "from-indigo-500/10 to-purple-500/10" }: { className?: string; color?: string }) {
  return (
    <div className={`absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${color} backdrop-blur-sm border border-white/5 ${className} float-animation`} />
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 max-w-5xl px-4 sm:px-6 text-center relative overflow-hidden section-glow">
      {/* Hero-inspired gradient orbs */}
      <div className="gradient-orb absolute top-1/4 left-1/4 w-64 h-64 opacity-40" />
      <div className="gradient-orb absolute bottom-1/4 right-1/4 w-48 h-48 opacity-30" />
      
      {/* Enhanced floating elements */}
      <FloatingShape className="top-10 left-5" color="from-indigo-500/15 to-purple-500/15" />
      <FloatingShape className="bottom-10 right-5" color="from-rose-500/15 to-pink-500/15" />
      <FloatingShape className="top-20 right-20" color="from-amber-500/10 to-yellow-500/10" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-8 border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm a passionate learner diving deep into <span className="text-accent font-semibold">Python</span> and <span className="text-accent font-semibold">Data Science</span>.  
            I love solving problems with clean code, clear logic, and creative visualizations.  
            My goal is to turn raw data into <span className="text-accent font-semibold">actionable insights</span> using tools like
            <span className="text-white font-medium"> Pandas, NumPy, and Scikit-learn</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}