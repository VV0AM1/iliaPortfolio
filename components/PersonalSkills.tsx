"use client";

import { FC, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Download, Brain, Sparkles } from "lucide-react";

const skills = [
  { name: "Strategic Thinking", percent: 85 },
  { name: "Technical Leadership", percent: 80 },
  { name: "Agile Methodology", percent: 90 },
  { name: "Problem Solving", percent: 95 },
];

const ProgressBar: FC<{ name: string; percent: number }> = ({ name, percent }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percent}%`,
        transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
      });
    }
  }, [inView, percent, controls]);

  return (
    <motion.div
      ref={ref}
      className="w-full"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex justify-between text-sm font-medium text-gray-300 mb-2">
        <span className="flex items-center gap-2"><Sparkles size={14} className="text-secondary" /> {name}</span>
        <span className="text-primary">{percent}%</span>
      </div>
      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
          initial={{ width: 0 }}
          animate={controls}
        >
          <div className="absolute right-0 top-0 h-full w-2 bg-white/50 blur-[2px]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const PersonalSkills: FC = () => {
  return (
    <section id="personal" className="relative py-24 px-6 md:px-24">
      {/* Container */}
      <div className="max-w-6xl mx-auto glass-strong rounded-3xl p-8 md:p-16 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden">

        {/* Decor */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[45%] relative z-10"
        >
          <div className="inline-block p-3 rounded-xl bg-white/5 mb-6 text-primary">
            <Brain size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Beyond the Code
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            While hard skills build the product, soft skills build the team. I focus on clear communication, proactive leadership, and adaptive problem-solving to ensure project success.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/images/resume.pdf"
            download
            className="px-8 py-4 bg-white text-black rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-200 transition-all w-fit shadow-lg shadow-white/10"
          >
            Download Resume <Download size={18} />
          </motion.a>
        </motion.div>

        <div className="w-full md:w-[45%] flex flex-col gap-8 relative z-10">
          {skills.map((skill, idx) => (
            <ProgressBar key={idx} name={skill.name} percent={skill.percent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalSkills;
