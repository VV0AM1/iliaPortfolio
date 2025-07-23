"use client";

import { FC, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Download } from "lucide-react";

const skills = [
  { name: "Communication", percent: 75 },
  { name: "Leadership", percent: 70 },
  { name: "Teamwork", percent: 90 },
  { name: "Flexibility", percent: 80 },
];

const ProgressBar: FC<{ name: string; percent: number }> = ({ name, percent }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percent}%`,
        transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] },
      });
    }
  }, [inView, percent, controls]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#262837] p-4 rounded-lg w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex justify-between text-sm text-gray-300 mb-2">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full h-2 bg-[#383a4a] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </motion.div>
  );
};

const PersonalSkills: FC = () => {
  return (
    <section id="" className="bg-[#202231] w-[80vw] text-white py-28 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[45%]"
        >
          <p className="text-gray-500 text-lg mb-3">|| Special Skills</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
            My Special Skill <br /> Field Here.
          </h2>
          <a
            href="/images/resume.pdf"
            download
            className="px-8 py-4 border border-gray-400 rounded-full text-sm flex items-center gap-2 hover:bg-white hover:text-black transition-all"
          >
            Get Resume <Download size={16} />
          </a>
        </motion.div>

        <div className="w-full md:w-[45%] md:ml-12 flex flex-col gap-6">
          {skills.map((skill, idx) => (
            <ProgressBar key={idx} name={skill.name} percent={skill.percent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalSkills;