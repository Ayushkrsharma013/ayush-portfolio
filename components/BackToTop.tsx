"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTopPro() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const circumference = 2 * Math.PI * 20; // SVG circle circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
          className="fixed bottom-8 right-8 z-50 p-1 rounded-2xl glass border border-white/20 shadow-2xl backdrop-blur-xl group"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          {/* Progress Circle Background */}
          <div className="relative">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 44 44">
              {/* Background circle */}
              <circle
                cx="22"
                cy="22"
                r="20"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                fill="none"
              />
              {/* Progress circle */}
              <motion.circle
                cx="22"
                cy="22"
                r="20"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - (scrollProgress / 100) * circumference}
                initial={{ strokeDashoffset: circumference }}
                transition={{ duration: 0.3 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center"
              >
                <ChevronUp 
                  className="w-5 h-5 text-gray-300 group-hover:text-accent transition-colors duration-300" 
                />
              </motion.div>
            </div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}