"use client";

import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Briefcase,
  FileText,
  Layers,
  MessageSquare,
  TrendingUp,
  Code2,
  Mail,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", icon: <Home size={18} />, href: "#" },
  { label: "Services", icon: <Briefcase size={18} />, href: "#services" },
  { label: "Skills", icon: <Code2 size={18} />, href: "#skills" },
  { label: "Projects", icon: <Layers size={18} />, href: "#projects" },
  { label: "Experience", icon: <TrendingUp size={18} />, href: "#experience" },
  { label: "Contact", icon: <Mail size={18} />, href: "#contact" },
];

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 z-50 transition-all duration-300 ${scrolled ? "glass-strong py-3" : "bg-transparent py-6"
          }`}
      >
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-primary/50 transition-all">
            IA
          </div>
          <span className="text-lg font-bold text-white tracking-wide">Ilia Akimov</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="text-gray-300 hover:text-white hover:scale-105 transition-all text-sm font-medium flex items-center gap-1.5"
            >
              {item.label}
            </Link>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Hire Me
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#0f111a] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-white flex items-center gap-3 hover:text-primary transition-colors"
                >
                  {item.icon}
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold text-lg shadow-lg"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
