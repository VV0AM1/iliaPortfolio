"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./cards/TestimonialCard";
import { testimonials } from "../data/testimonials";

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
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
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    }
  }),
};

const TestimonialSection: FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = Math.abs(page % testimonials.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section id="testimonial" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">

        {/* Text Side */}
        <div className="w-full md:w-1/3 space-y-8 text-center md:text-left">
          <div>
            <span className="text-accent font-medium tracking-wider mb-2 block uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              What My <br /> Clients Say
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            I take pride in building lasting relationships and delivering high-quality digital solutions.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <button
              onClick={() => paginate(-1)}
              className="p-4 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-4 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Side */}
        <div className="w-full md:w-2/3 flex justify-center md:justify-end h-[400px] items-center overflow-visible">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute"
            >
              <TestimonialCard testimonial={testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
