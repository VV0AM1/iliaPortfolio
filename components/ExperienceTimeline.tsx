"use client";

import { FC } from "react";
import ExperienceCard from "./cards/ExperienceCard";
import { experiences } from "../data/experience";

const ExperienceSection: FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 md:px-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center mb-20 relative z-10">
        <span className="text-accent font-medium tracking-wider mb-2 block uppercase text-sm">Career Path</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Work Experience</h2>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-white/5 transform -translate-x-1/2 z-0" />

        <div className="flex flex-col gap-20">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ExperienceCard key={i} experience={exp} isLeft={isLeft} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
