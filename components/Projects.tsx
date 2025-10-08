"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Data Cleaning & Visualization Dashboard",
    desc: "Built an interactive Streamlit app to upload, clean, and visualize CSV data with real-time analytics.",
    tech: "Python • Pandas • Matplotlib • Streamlit",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Movie Recommendation System",
    desc: "Used cosine similarity and TF-IDF to recommend similar movies based on content analysis.",
    tech: "Python • Scikit-learn • Numpy • Pandas",
    gradient: "from-rose-500/20 to-pink-500/20"
  },
  {
    title: "WhatsApp Chat Analyzer",
    desc: "Analyzed personal chat exports for word frequency, sentiment, and top active hours with visual insights.",
    tech: "Python • NLTK • WordCloud • Matplotlib",
    gradient: "from-amber-500/20 to-yellow-500/20"
  },
];

function FloatingShape({ className }: { className?: string }) {
  return (
    <div className={`absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 backdrop-blur-sm border border-white/5 ${className} float-animation`} />
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 max-w-6xl px-4 sm:px-6 relative overflow-hidden section-glow">
      {/* Background elements */}
      <div className="gradient-orb absolute top-10 left-10 w-80 h-80 opacity-20" />
      <div className="gradient-orb absolute bottom-10 right-10 w-60 h-60 opacity-25" />
      
      <FloatingShape className="top-20 left-10" />
      <FloatingShape className="bottom-20 right-10" />
      <FloatingShape className="top-1/2 left-1/4" />
      
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        Featured <span className="text-accent">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
            <div className="relative glass rounded-2xl p-6 border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">{p.title}</h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
              </div>
              <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">{p.desc}</p>
              <p className="text-xs text-accent font-medium">{p.tech}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}