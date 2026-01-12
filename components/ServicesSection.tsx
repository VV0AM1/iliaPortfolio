"use client";

import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence, Variants, wrap } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./cards/ServiceCard";
import { services } from "../data/services";

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 500 : -500,
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
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }
    };
  },
};

const ServicesSection: FC = () => {
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

  const serviceIndex = wrap(0, services.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const visibleServices = [];
  for (let i = 0; i < cardsPerView; i++) {
    visibleServices.push(services[(serviceIndex + i) % services.length]);
  }

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider mb-2 block uppercase text-sm">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Specialized Services
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Controls - Mobile Only (Top) or Desktop (Sides) */}
          <div className="hidden md:block">
            <button onClick={() => paginate(-1)} className="p-4 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95">
              <ChevronLeft size={24} />
            </button>
          </div>


          <div className="flex justify-center gap-6 overflow-visible w-full min-h-[380px]">
            <AnimatePresence initial={false} mode="popLayout" custom={direction}>
              {visibleServices.map((service, i) => (
                <motion.div
                  key={`${service.title}-${page}-${i}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  layout
                  className="w-full sm:w-[320px] md:w-[350px] flex-shrink-0"
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="hidden md:block">
            <button onClick={() => paginate(1)} className="p-4 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden gap-4 mt-8">
            <button onClick={() => paginate(-1)} className="p-4 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => paginate(1)} className="p-4 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95">
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
