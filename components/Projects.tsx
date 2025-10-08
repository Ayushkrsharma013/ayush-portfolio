"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Data Cleaning & Visualization Dashboard",
    desc: "Built an interactive Streamlit app to upload, clean, and visualize CSV data.",
    tech: "Python • Pandas • Matplotlib • Streamlit",
  },
  {
    title: "Movie Recommendation System",
    desc: "Used cosine similarity and TF-IDF to recommend similar movies.",
    tech: "Python • Scikit-learn • Numpy • Pandas",
  },
  {
    title: "WhatsApp Chat Analyzer",
    desc: "Analyzed personal chat exports for word frequency, sentiment, and top active hours.",
    tech: "Python • NLTK • WordCloud • Matplotlib",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-5xl px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-accent text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-6 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-3">{p.desc}</p>
            <p className="text-sm text-accent">{p.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
