"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Experience } from "../../types";

interface ExperienceCardProps {
    experience: Experience;
    isLeft: boolean;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience, isLeft }) => (
    <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`relative z-10 flex flex-col md:flex-row items-center md:items-start ${isLeft ? "md:justify-start" : "md:justify-end"
            }`}
    >
        <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-2 z-10 bg-[#0f111a] border border-white/10 rounded-full w-12 h-12 shadow-lg shadow-primary/20 text-primary">
            {experience.icon}
        </div>

        <div
            className={`w-full md:w-[500px] glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${isLeft ? "md:mr-12" : "md:ml-12"
                }`}
        >
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">{experience.date}</span>
                <span className="text-gray-400 font-medium tracking-wide">{experience.company}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">{experience.title}</h3>

            <ul className="text-gray-400 text-sm space-y-2 mb-6">
                {experience.description.map((line, idx) => (
                    <li key={idx} className="flex gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{line}</span>
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {experience.tech.map((tech, idx) => (
                    <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-md border border-white/5"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default ExperienceCard;
