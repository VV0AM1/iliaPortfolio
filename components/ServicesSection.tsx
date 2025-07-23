"use client";

import { FC, ReactElement, useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import {
  Code2,
  Paintbrush2,
  PenTool,
  Database,
  Blocks,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: ReactElement;
  items: string[];
}

const services: ServiceCardProps[] = [
  {
    title: "Front-End Development",
    icon: <Code2 size={40} />,
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "UI/UX Integration",
    icon: <Paintbrush2 size={40} />,
    items: ["Figma to Code", "Responsive Layouts", "Pixel-perfect Design", "GSAP", "Accessibility"],
  },
  {
    title: "Web Animation",
    icon: <PenTool size={40} />,
    items: ["GSAP", "Framer Motion", "CSS Animations", "ScrollTrigger", "Lottie"],
  },
  {
    title: "Back-End Development",
    icon: <Database size={40} />,
    items: ["Node.js", "TypeScript", "MongoDB", "Express.js", "Python"],
  },
  {
    title: "CMS & Site Builders",
    icon: <Blocks size={40} />,
    items: ["WordPress", "Joomla", "Shopify", "Webflow", "Wix"],
  },
];

const variants = {
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

const getCardsPerView = (width: number) => {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

const ServiceCard: FC<ServiceCardProps> = ({ title, icon, items }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="relative bg-[#1b1d2a] border border-[#2f3143] rounded-xl p-8 w-full sm:w-[300px] h-[440px] overflow-hidden group"
  >
    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full border border-[#2f3143]" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full border border-[#2f3143]" />
    </div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-6 text-white">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <ul className="text-gray-400 space-y-2 text-sm">
        {items.map((item, i) => (
          <li key={i}>» {item}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ServicesSection: FC = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const handleNext = () => {
    setDir(1);
    setIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setDir(-1);
    setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const visible = Array.from({ length: cardsPerView }, (_, i) => {
    const realIndex = (index + i) % services.length;
    return services[realIndex];
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="services"
      className="bg-[#1b1d2a] text-white py-28 px-4 sm:px-6 md:px-16 lg:px-24 relative"
    >
      <div className="text-center mb-16">
        <p className="text-gray-500 text-lg mb-2">|| My Services</p>
        <h2 className="text-4xl md:text-6xl font-bold">Services I Provide</h2>
      </div>

      <div className="flex justify-center items-center relative">
        <button
          onClick={handlePrev}
          aria-label="Previous Services"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#2a2c3c] hover:bg-[#353749] rounded-full transition"
        >
          <ChevronLeft size={24} />
        </button>

        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex gap-6 justify-center flex-wrap"
          >
            {visible.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handleNext}
          aria-label="Next Services"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#2a2c3c] hover:bg-[#353749] rounded-full transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </motion.section>
  );
};

export default ServicesSection;