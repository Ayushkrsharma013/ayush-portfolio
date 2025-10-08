"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Pandas", level: 85, color: "from-green-500 to-emerald-500" },
  { name: "NumPy", level: 80, color: "from-indigo-500 to-purple-500" },
  { name: "Matplotlib", level: 75, color: "from-rose-500 to-pink-500" },
  { name: "Seaborn", level: 70, color: "from-amber-500 to-yellow-500" },
  { name: "Scikit-learn", level: 75, color: "from-orange-500 to-red-500" },
  { name: "SQL", level: 65, color: "from-purple-500 to-pink-500" },
  { name: "Streamlit", level: 80, color: "from-red-500 to-rose-500" },
  { name: "GitHub", level: 85, color: "from-gray-500 to-slate-500" },
  { name: "Google Colab", level: 90, color: "from-yellow-500 to-amber-500" }
];

function FloatingShape({ className }: { className?: string }) {
  return (
    <div className={`absolute w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm border border-white/5 ${className} float-animation`} />
  );
}

export default function Skills() {
  return (
<section id="skills" className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 text-center relative overflow-hidden section-glow">
  <div className="max-w-6xl mx-auto">
{/* Background elements */}
      <div className="gradient-orb absolute top-1/3 left-1/4 w-72 h-72 opacity-25" />
      <div className="gradient-orb absolute bottom-1/3 right-1/4 w-64 h-64 opacity-20" />
      
      <FloatingShape className="top-10 left-10" />
      <FloatingShape className="top-20 right-20" />
      <FloatingShape className="bottom-10 left-20" />
      <FloatingShape className="bottom-20 right-10" />
      <FloatingShape className="top-1/2 right-1/3" />
      
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        Skills & <span className="text-accent">Expertise</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-left"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-medium text-sm">{skill.name}</span>
              <span className="text-accent text-sm font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                className={`h-2 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
              />
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}