"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 mt-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-white"
      >
        Turning Data into Insight
        <span className="text-accent">, One Project at a Time.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 max-w-2xl text-gray-400"
      >
        Hi, I’m <span className="text-white font-semibold">Ayush Sharma</span> —
        a beginner Data Science & Python developer exploring the power of
        analytics, visualization, and automation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-accent rounded-lg font-semibold hover:bg-indigo-500 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-accent rounded-lg font-semibold hover:bg-accent/10 transition"
        >
          Let’s Connect →
        </a>
      </motion.div>
    </section>
  );
}
