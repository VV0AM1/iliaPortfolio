'use client'

import { FC, ReactElement, useState, useEffect } from "react";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiNodedotjs,
  SiExpress, SiMongodb, SiPhp, SiMysql, SiWordpress, SiShopify, SiJoomla, SiWebflow, SiWix,
  SiFigma, SiPostman, SiGit, SiGithub
} from "react-icons/si";
import { motion, easeOut } from "framer-motion";

type Skill = {
  name: string;
  icon: ReactElement;

};

const frontend: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript size={28} /> },
  { name: "TypeScript", icon: <SiTypescript size={28} /> },
  { name: "React", icon: <SiReact size={28} /> },
  { name: "Next.js", icon: <SiNextdotjs size={28} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
  { name: "Framer Motion", icon: <SiFramer size={28} /> },
];

const backend: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs size={28} /> },
  { name: "Express.js", icon: <SiExpress size={28} /> },
  { name: "MongoDB", icon: <SiMongodb size={28} /> },
  { name: "PHP", icon: <SiPhp size={28} /> },
  { name: "MySQL", icon: <SiMysql size={28} /> },
];

const cms: Skill[] = [
  { name: "WordPress", icon: <SiWordpress size={28} /> },
  { name: "Shopify", icon: <SiShopify size={28} /> },
  { name: "Joomla", icon: <SiJoomla size={28} /> },
  { name: "Webflow", icon: <SiWebflow size={28} /> },
  { name: "Wix", icon: <SiWix size={28} /> },
];

const tools: Skill[] = [
  { name: "Figma", icon: <SiFigma size={28} /> },
  { name: "Postman", icon: <SiPostman size={28} /> },
  { name: "Git", icon: <SiGit size={28} /> },
  { name: "GitHub", icon: <SiGithub size={28} /> },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: easeOut } },
};

const Category = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
    className="space-y-4"
  >
    <motion.h3
      variants={itemVariants}
      className="text-xl font-semibold text-white"
    >
      {title}
    </motion.h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
          className="group flex flex-col items-center justify-center p-4 rounded-lg bg-[#1c1e2b] transition-all duration-300 hover:scale-105"
        >
          <div className="text-gray-500 group-hover:text-white group-hover:scale-110 transition duration-300">
            {skill.icon}
          </div>
          <span className="text-xs text-gray-400 mt-2 group-hover:text-white transition duration-300">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SkillsGrid: FC = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#13141c] text-white py-24 px-6 md:px-24"
    >
      <div className="text-center mb-16">
        <p className="text-gray-500 text-lg mb-2">|| Skills & Stack</p>
        <h2 className="text-4xl md:text-6xl font-bold">Technologies I Use</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Category title="Frontend" skills={frontend} />
        <Category title="Backend" skills={backend} />
        <Category title="CMS / Platforms" skills={cms} />
        <Category title="Tools & Utilities" skills={tools} />
      </div>
    </motion.section>
  );
};

export default SkillsGrid;