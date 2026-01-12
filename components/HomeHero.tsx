"use client";

import { FC, useRef } from "react";
import Image from "next/image";
import {
  Download,
  Mail,
  Globe,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const HomeHero: FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-16 pt-20"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #1e1b4b 0%, var(--color-background) 70%)",
      }}
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-accent"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            Available for Freelance & Full-time
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            Ilia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Akimov
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Senior Front-End Developer crafting{" "}
            <span className="text-white font-semibold">exceptional</span> digital experiences
            with Next.js, React, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/images/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 glass text-white rounded-full font-medium hover:bg-white/10 transition-all"
            >
              Resume <Download size={18} />
            </motion.a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 text-gray-400">
            {[
              { icon: Github, url: "https://github.com/VV0AM1" },
              { icon: Linkedin, url: "https://www.linkedin.com/in/ilia-akimov-74889133b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
              { icon: Mail, url: "mailto:serleb2000@gmail.com" },
              { icon: Globe, url: "https://iliaakimov.netlify.app" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#fff" }}
                className="hover:text-white transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y: y1 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[100px] opacity-20 animate-pulse" />
            <Image
              src="/images/portfolio.png"
              alt="Ilia Akimov"
              width={600}
              height={800}
              quality={100}
              priority
              className="relative z-10 object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </div>

          {/* Floating Elements */}
          <motion.div
            style={{ y: y2 }}
            className="absolute top-20 -right-10 glass p-4 rounded-2xl flex items-center gap-3 shadow-xl z-20 animate-bounce-slow"
          >
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm font-medium">2+ Years Exp.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
