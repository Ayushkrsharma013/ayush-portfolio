"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

function MinimalFooterBar() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full border-t border-white/10 bg-[#030303]"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-gray-400"
          >
            <span>© {currentYear} Ayush Sharma</span>
          </motion.div>

          {/* Built with */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            <span>Made with</span>
            <Heart className="h-4 w-4 text-rose-500" />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default MinimalFooterBar;