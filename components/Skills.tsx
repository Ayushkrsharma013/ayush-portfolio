"use client";
import { motion } from "framer-motion";

const skills = [
  "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn",
  "Scikit-learn", "SQL (Basics)", "Streamlit", "GitHub", "Google Colab"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-4xl px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-accent mb-10"
      >
        Skills & Tools
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.1 }}
            className="px-5 py-2 bg-gray-800 rounded-full text-gray-200 border border-gray-700"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
