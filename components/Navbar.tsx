"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
//import { ToggleTheme } from "./ui/toggle-theme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const navbarVariants: Variants = {
  initial: {
    width: "100%",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  scrolled: {
    width: "calc(100% - 240px)",
    paddingLeft: "120px",
    paddingRight: "120px",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: ["easeOut"] as const,
    },
  },
};

const linkVariants: Variants = {
  hover: {
    y: -2,
    color: "#ffffff",
    transition: {
      type: "spring" as const,
      stiffness: 400,
    },
  },
};

  return (
    <motion.nav
      variants={navbarVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
      className="fixed top-0 w-full bg-[#030303]/80 backdrop-blur-xl border-b border-white/10 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="h-6 w-6 text-indigo-400" />
          </motion.div>
          <span className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">
            Ayush
            <span className="text-gray-400 group-hover:text-indigo-300 transition-colors">.dev</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                variants={linkVariants}
                whileHover="hover"
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-rose-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
          
          {/* Theme Toggle with separator */}
          <div className="flex items-center gap-4">
            <div className="h-6 w-px bg-white/20"></div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
 {/* <ToggleTheme />*/}
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
 {/* <ToggleTheme />*/}
          </motion.div>
          <motion.button
            className="text-gray-400 hover:text-white p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 right-0 bg-[#030303]/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    x: 10,
                    backgroundColor: "rgba(255,255,255,0.05)"
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400"
        initial={{ width: "0%" }}
        animate={{ width: isScrolled ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
}