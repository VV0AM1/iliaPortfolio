"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe } from "lucide-react";

const Footer: FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#1b1d2a] text-white py-10 px-6 md:px-16 border-t border-[#2c2e3e]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Ilia Akimov. All rights reserved.
        </p>

        <div className="flex gap-4">
          {[
            {
              icon: Github,
              url: "https://github.com/VV0AM1",
            },
            {
              icon: Linkedin,
              url: "https://www.linkedin.com/in/ilia-akimov-74889133b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              icon: Globe,
              url: "https://iliaakimov.netlify.app",
            },
          ].map(({ icon: Icon, url }, i) => (
            <motion.a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;