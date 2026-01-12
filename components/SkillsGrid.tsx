'use client';

import { FC, ReactElement } from "react";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiNestjs, SiSocketdotio, SiDocker,
  SiGit, SiGithub, SiFigma, SiPostman
} from "react-icons/si";
import { motion, Variants } from "framer-motion";

type Skill = {
  name: string;
  icon: ReactElement;
  level?: string;
};

const frontend: Skill[] = [
  { name: "React", icon: <SiReact size={32} />, level: "Advanced" },
  { name: "Next.js", icon: <SiNextdotjs size={32} />, level: "Advanced" },
  { name: "TypeScript", icon: <SiTypescript size={32} />, level: "Advanced" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} />, level: "Expert" },
  { name: "Framer Motion", icon: <SiFramer size={32} />, level: "Intermediate" },
  { name: "JavaScript", icon: <SiJavascript size={32} />, level: "Expert" },
];

const backend: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs size={32} /> },
  { name: "NestJS", icon: <SiNestjs size={32} /> },
  { name: "Prisma ORM", icon: <SiPrisma size={32} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
  { name: "Socket.io", icon: <SiSocketdotio size={32} /> },
  { name: "Docker", icon: <SiDocker size={32} /> },
];

const tools: Skill[] = [
  { name: "Git", icon: <SiGit size={32} /> },
  { name: "GitHub", icon: <SiGithub size={32} /> },
  { name: "Figma", icon: <SiFigma size={32} /> },
  { name: "Postman", icon: <SiPostman size={32} /> },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Faster stagger to prevent "waiting" feel
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Simplified transition
};

const SkillCard = ({ skill }: { skill: Skill }) => (
  <motion.div
    variants={itemVariants}
    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl glass hover:bg-white/5 border border-white/5 transition-colors duration-300 will-change-transform"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
    <div className="text-gray-400 group-hover:text-primary transition-colors duration-300 mb-4 transform group-hover:scale-110">
      {skill.icon}
    </div>
    <span className="font-semibold text-gray-200 group-hover:text-white transition-colors z-10 text-sm md:text-base">
      {skill.name}
    </span>
  </motion.div>
);

const SkillsGrid: FC = () => {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-accent font-medium tracking-wider mb-2 block uppercase text-sm">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Tech Ecosystem
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A robust stack of modern technologies tailored for scalable, high-performance web applications.
          </p>
        </div>

        <div className="grid gap-16">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-primary pl-4">Frontend Engineering</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {frontend.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-secondary pl-4">Backend & Infrastructure</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {backend.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-accent pl-4">Tools & Workflow</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
            >
              {tools.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;

