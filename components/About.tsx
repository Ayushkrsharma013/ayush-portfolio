"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-4xl px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-accent mb-6"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 leading-relaxed"
      >
        I’m a passionate learner diving deep into Python and Data Science.  
        I love solving problems with clean code, clear logic, and creative visualizations.  
        My goal is to turn raw data into actionable insights using tools like
        <span className="text-white"> Pandas, NumPy, and Scikit-learn</span>.
      </motion.p>
    </section>
  );
}
