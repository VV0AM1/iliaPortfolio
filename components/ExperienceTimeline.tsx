"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Code2, Building2, MonitorSmartphone } from "lucide-react";

const experiences = [
  {
    title: "Front-End Developer (Intern)",
    company: "Okkam Group, Moscow",
    date: "June 2023 – Nov 2023",
    description: [
      "Built and optimized dynamic React apps with reusable components",
      "Integrated third-party REST APIs, implemented SEO enhancements",
      "Improved UI performance using lazy loading, code splitting",
    ],
    tech: ["React", "Next.js", "SEO", "REST API", "Lazy Loading"],
    icon: <Code2 size={20} />,
  },
  {
    title: "Junior Front-End Developer",
    company: "CROC, Moscow",
    date: "Dec 2023 – Sept 2024",
    description: [
      "Led UI improvements and reduced page load by 18%",
      "Worked on Agile team integrating REST APIs and JIRA",
      "Built components with TypeScript, integrated testing with Jest",
    ],
    tech: ["TypeScript", "React", "JIRA", "Jest", "Agile"],
    icon: <Building2 size={20} />,
  },
  {
    title: "Web Admin & WordPress Dev",
    company: "Store Alarcon, Barcelona",
    date: "Oct 2024 – Apr 2025",
    description: [
      "Managed eCommerce store updates, built custom plugins",
      "Improved Core Web Vitals scores using optimization strategies",
      "Enhanced SEO and UX with layout improvements",
    ],
    tech: ["WordPress", "WooCommerce", "SEO", "Core Web Vitals", "PHP"],
    icon: <MonitorSmartphone size={20} />,
  },
];

const ExperienceSection: FC = () => {
  return (
    <section id="experience" className="bg-[#1b1d2a] text-white py-24 px-4 sm:px-6 md:px-20">
      <div className="text-center mb-16">
        <p className="text-gray-500 text-lg mb-2">|| My Journey</p>
        <h2 className="text-4xl md:text-6xl font-bold">Work Experience</h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-[#2f3143] transform -translate-x-1/2 z-0" />

        <div className="flex flex-col gap-20">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative z-10 flex flex-col md:flex-row items-center md:items-start ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-2 z-10 bg-[#2a2c3c] border border-[#2f3143] rounded-full w-10 h-10">
                  {exp.icon}
                </div>

                <div
                  className={`w-full md:w-[520px] bg-[#20222f] border border-[#2f3143] rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_#2f3143] ${
                    isLeft ? "md:ml-10" : "md:mr-10"
                  }`}
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                    <span>{exp.date}</span>
                    <span className="text-gray-600">•</span>
                    <span>{exp.company}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{exp.title}</h3>

                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-4">
                    {exp.description.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-[#2a2c3c] text-gray-300 rounded-full hover:bg-[#353749] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;