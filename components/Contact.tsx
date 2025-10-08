"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

function FloatingShape({ className }: { className?: string }) {
  return (
    <div className={`absolute w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-white/5 ${className} float-animation`} />
  );
}

export default function Contact() {
  return (
<section id="contact" className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 text-center relative overflow-hidden section-glow">
  <div className="max-w-4xl mx-auto">
 {/* Background elements */}
      <div className="gradient-orb absolute top-1/4 right-1/4 w-80 h-80 opacity-30" />
      <div className="gradient-orb absolute bottom-1/4 left-1/4 w-64 h-64 opacity-25" />
      
      <FloatingShape className="top-10 left-10" />
      <FloatingShape className="bottom-10 right-10" />
      <FloatingShape className="top-20 right-20" />
      <FloatingShape className="bottom-20 left-20" />
      
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
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Let's <span className="text-accent">Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto"
        >
          I'm open to internships, collaborations, or just discussing cool data projects. 
          Let's turn ideas into <span className="text-accent">impactful solutions</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.a
            href="mailto:ayush9630755104@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent rounded-2xl font-semibold hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center gap-3 text-white"
          >
            <Mail className="w-5 h-5" />
            📩 Send an Email
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/ayushksharma-engineer-ai/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/Ayushkrsharma013/ayush-portfolio", label: "GitHub" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="glass p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-gray-300 hover:text-accent transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}