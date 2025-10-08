"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="font-bold text-xl text-accent">
          Ayush<span className="text-white">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {open && (
          <div className="absolute top-14 right-6 bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col gap-3 md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
}
