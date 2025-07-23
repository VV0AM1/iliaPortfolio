"use client";

import { FC, useState } from "react";
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
} from "lucide-react";import Link from "next/link";

const navItems = [
  { label: "Home", icon: <Home size={18} />, href: "#" },
  { label: "Service", icon: <Briefcase size={18} />, href: "#services" },
  { label: "Personal", icon: <FileText size={18} />, href: "#personal" },
  { label: "Projects", icon: <Layers size={18} />, href: "#projects" },
  { label: "Testimonial", icon: <MessageSquare size={18} />, href: "#testimonial" },
  { label: "Experience", icon: <TrendingUp size={18} />, href: "#experience" },    
  { label: "Skills", icon: <Code2 size={18} />, href: "#skills" },               
  { label: "Contact", icon: <Mail size={18} />, href: "#contact" },              
];
const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-5 bg-[#1F2030] text-white shadow-lg z-50 h-[72px]"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold flex items-center gap-2 cursor-pointer"
        >
          <div className="w-6 h-6 bg-white rounded-sm" />
        </motion.div>

        <nav className="space-x-8 text-gray-300 hidden md:flex text-base font-medium">
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ color: "#ffffff", scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer transition-colors duration-200"
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.div>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
        >
          <Link href="#contact">Hire Me<span className="ml-1">»</span></Link>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full bg-[#1F2030] flex flex-col items-center gap-6 py-6 shadow-xl z-40"
          >
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-lg text-gray-300 hover:text-white transition"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;