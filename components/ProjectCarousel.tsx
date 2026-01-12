"use client";

import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence, Variants, wrap } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./cards/ProjectCard";
import { projects } from "../data/projects";

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    }
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }
    };
  },
};

const ProjectCarousel: FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1280) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectIndex = wrap(0, projects.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const visibleProjects = [];
  for (let i = 0; i < cardsPerView; i++) {
    visibleProjects.push(projects[(projectIndex + i) % projects.length]);
  }

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden bg-[#0f111a]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decor text */}
      <div className="absolute top-10 right-0 text-9xl font-bold text-white/[0.02] pointer-events-none select-none hidden lg:block">
        WORKS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4">
          <div>
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured Projects
            </h2>
          </div>

          <div className="flex gap-4 mt-8 md:mt-0">
            <button onClick={() => paginate(-1)} className="p-4 rounded-full glass hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95 border border-white/5">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => paginate(1)} className="p-4 rounded-full glass hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95 border border-white/5">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="flex justify-center md:justify-start gap-6 lg:gap-8 overflow-visible px-4">
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            {visibleProjects.map((project, i) => (
              <motion.div
                key={`${project.title}-${page}-${i}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                layout
                className="w-full sm:w-[320px] md:w-[350px] flex-shrink-0"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
