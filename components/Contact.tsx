"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-4xl px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-accent mb-8"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 mb-8"
      >
        I’m open to internships, collaborations, or just discussing cool data projects.
      </motion.p>

      <a
        href="mailto:ayush9630755104@gmail.com"
        className="px-6 py-3 bg-accent rounded-lg font-semibold hover:bg-indigo-500 transition"
      >
        📩 Send an Email
      </a>

      <p className="mt-6 text-gray-500 text-sm">
        or connect on <a href="#" className="text-accent">LinkedIn</a> & <a href="#" className="text-accent">GitHub</a>.
      </p>
    </section>
  );
}
