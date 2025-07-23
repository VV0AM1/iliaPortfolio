"use client";

import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    text: "Thanks to their SEO and WordPress work, our visibility improved significantly. Professional and fast!",
    name: "Carlos Muñoz",
    role: "CEO, Almascotas",
    rating: 5,
  },
  {
    text: "Excellent job! The Next.js site runs smoothly and looks stunning. Our clients love the design.",
    name: "Marta López",
    role: "Manager, Luzanimal",
    rating: 5,
  },
  {
    text: "Amazing UI implementation on our online store. Increased our online sales and customer satisfaction.",
    name: "Lucía Gómez",
    role: "Owner, La Tienda Alarcón",
    rating: 5,
  },
  {
    text: "Superb communication and modern development approach. The dashboard is clean and responsive!",
    name: "Nicolas Torres",
    role: "Product Owner, DataPanel Pro",
    rating: 4,
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
    transition: { duration: 0.6, ease: easeInOut },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.5, ease: easeInOut },
  }),
};

const StarRating = ({ count }: { count: number }) => (
  <div className="flex space-x-1 mt-2">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? "text-orange-400" : "text-gray-500"}>★</span>
    ))}
  </div>
);

const TestimonialCard = ({
  testimonial,
  offset,
}: {
  testimonial: Testimonial;
  offset?: boolean;
}) => (
  <div
    className={`bg-[#1b1c2b] rounded-xl p-8 w-[70vw] sm:w-[360px] h-[440px] text-gray-300 transition-all duration-500 ${
      offset ? "translate-y-6" : "-translate-y-6"
    }`}
  >
    <Quote className="text-gray-400 mb-4" size={36} />
    <p className="text-lg sm:text-xl font-light leading-relaxed mb-6">{testimonial.text}</p>
    <div>
      <p className="text-base font-semibold">{testimonial.name}</p>
      <p className="text-sm text-gray-500">{testimonial.role}</p>
      <StarRating count={testimonial.rating} />
    </div>
  </div>
);

const TestimonialSection: FC = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  useEffect(() => {
    const updateView = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 2);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const next = () => {
    setDir(1);
    setIndex((prev) => (prev + cardsPerView >= testimonials.length ? 0 : prev + cardsPerView));
  };

  const prev = () => {
    setDir(-1);
    setIndex((prev) =>
      prev === 0 ? testimonials.length - cardsPerView : prev - cardsPerView
    );
  };

  const visible = testimonials.slice(index, index + cardsPerView);

  return (
    <section id="testimonial" className="bg-[#1f2130] sm:w-[80vw] text-white py-24 px-4 sm:px-6 md:px-24">
      <div className="text-center mb-16">
        <p className="text-gray-500 text-lg mb-2">|| Testimonial</p>
        <h2 className="text-4xl md:text-6xl font-bold">Satisfied Clients Say</h2>
      </div>

      <div className="flex flex-col items-center">
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-20 mb-8"
          >
            {visible.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                offset={idx % 2 === 0}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4 mt-4">
          <button
            onClick={prev}
            className="p-6 bg-[#2a2c3c] border border-[#2f3143] hover:bg-[#353749] rounded-full transition"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="p-6 bg-[#2a2c3c] border border-[#2f3143] hover:bg-[#353749] rounded-full transition"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;