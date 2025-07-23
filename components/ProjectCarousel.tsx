"use client";

import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "Tanatorio de Mascotas",
    category: "NextJS / TS / React / SEO",
    image: "/images/project.png",
    url: "https://luzanimal.com/",
  },
  {
    title: "Aniverse - Favourite Anime Catalog",
    category: "NextJS / TS / React / MongoDB",
    image: "/images/project2.png",
    url: "https://aniverse.netlify.app",
  },
  {
    title: "Almascotas - Servicio de incineracion de mascotas",
    category: "WordPress / SEO",
    image: "/images/project3.png",
    url: "https://almascotas.com/",
  },
  {
    title: "La Tienda Alarcon - Muebles de mejor calidad",
    category: "SEO / WordPress / Ecommerce / Elementor",
    image: "/images/project4.png",
    url: "https://latiendadealarcon.com/",
  },
  {
    title: "CryptoIA - Tu portfolio de crypto monedas",
    category: "NextJS / TS / React / MongoDB",
    image: "/images/project5.png",
    url: "https://cryptoia.netlify.app/",
  },
];

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeInOut },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: easeInOut },
  }),
};

const ProjectCard = ({ project, isLast }: { project: Project; isLast: boolean }) => (
  <Link
    href={project.url}
    target={isLast ? "_self" : "_blank"}
    rel="noopener noreferrer"
    className="w-full sm:w-[300px] flex-shrink-0 bg-[#20222f] rounded-xl overflow-hidden shadow-lg transition-all duration-300 group hover:scale-[1.03] relative"
  >
    <div className="overflow-hidden relative">
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        className={`object-cover w-full h-[200px] transition-transform duration-500 ${
          isLast ? "blur-sm grayscale" : "group-hover:scale-105"
        }`}
      />

      {isLast && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-white font-bold text-lg">IN PROCESS</span>
        </div>
      )}
    </div>

    <div className="p-5">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-sm text-gray-400">{project.category}</p>
    </div>
  </Link>
);
const getCardsPerView = (width: number) => {
  if (width < 640) return 1;
  if (width < 1024) return 3;
  return 3;
};

const ProjectCarousel: FC = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const updateView = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjects = Array.from({ length: cardsPerView }, (_, i) => {
    const realIndex = (index + i) % projects.length;
    return projects[realIndex];
  });

  return (
    <section id="projects" className="bg-[#1b1d2a] text-white py-24 px-4 sm:px-6 md:px-16 lg:px-24 relative">
      <div className="text-center mb-14">
        <p className="text-gray-500 text-lg mb-2">|| Awesome Portfolio</p>
        <h2 className="text-4xl md:text-6xl font-bold">My Complete Projects</h2>
      </div>

      <div className="flex justify-center items-center relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#2a2c3c] hover:bg-[#353749] rounded-full transition"
        >
          <ChevronLeft size={24} />
        </button>

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex gap-6 justify-center flex-wrap"
          >
            {visibleProjects.map((project) => (
                <ProjectCard key={project.title} project={project} isLast={project === projects[projects.length - 1]} />
            ))}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#2a2c3c] hover:bg-[#353749] rounded-full transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default ProjectCarousel;