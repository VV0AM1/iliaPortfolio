"use client";

import { FC } from "react";
import Image from "next/image";
import {
  Download,
  Play,
  Mail,
  Globe,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

const HomeHero: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      id="#"
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#161722] min-h-screen text-white px-4 md:px-16 pt-32 pb-16 flex flex-col md:flex-row justify-center items-center relative overflow-hidden"
    >
      <div className="absolute right-[-250px] top-[-150px] w-[900px] h-[900px] rounded-full border-[1px] border-[#2f3143] z-0" />
      <div className="absolute right-[-180px] top-[-80px] w-[700px] h-[700px] rounded-full border-[1px] border-[#2f3143] z-0" />
      <div className="absolute right-[-110px] top-[-10px] w-[500px] h-[500px] rounded-full border-[1px] border-[#2f3143] z-0" />

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-2xl z-10 mr-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Hello! I’m
        </h1>
        <h2 className="text-6xl md:text-8xl font-extrabold mb-6">
          Ilia Akimov
        </h2>
        <p className="text-gray-400 text-xl md:text-2xl mb-10">
          Front-End Developer specializing in React and NextJs.
        </p>
        <div className="flex items-center gap-6">
            <a
              href="/images/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-gray-400 hover:bg-white hover:text-black transition text-base duration-300"
            >
              Get Resume <Download size={18} />
            </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative mt-20 md:mt-0 w-[360px] md:w-[520px] lg:w-[600px] z-10"
      >
        <Image
          src="/images/portfolio.png"
          alt="Ilia Akimov"
          width={600}
          height={800}
          className="object-contain mb-[-60px] w-full h-auto drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] brightness-70 transition duration-300 hover:brightness-100 hover:scale-105"
        />
        <div className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 space-y-6 hidden lg:flex flex-col items-center justify-center gap-8">
          {[
            {
              icon: Mail,
              url: "mailto:serleb2000@gmail.com",
            },
            {
              icon: Globe,
              url: "https://iliaakimov.netlify.app",
            },
            {
              icon: Github,
              url: "https://github.com/VV0AM1",
            },
            {
              icon: Linkedin,
              url: "https://www.linkedin.com/in/ilia-akimov-74889133b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
          ].map(({ icon: Icon, url }, i) => (
            <motion.a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HomeHero;