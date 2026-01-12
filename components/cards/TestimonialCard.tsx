"use client";

import { FC } from "react";
import { Quote, Star } from "lucide-react";
import { Testimonial } from "../../types";

const StarRating = ({ count }: { count: number }) => (
    <div className="flex space-x-1 mt-2">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={14}
                className={i < count ? "fill-orange-400 text-orange-400" : "fill-gray-700 text-gray-700"}
            />
        ))}
    </div>
);

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => (
    <div
        className="glass p-8 rounded-3xl border border-white/5 relative h-[350px] flex flex-col justify-between w-[90vw] md:w-[450px]"
    >
        <div className="absolute -top-6 -left-4 bg-primary text-white p-3 rounded-xl shadow-lg shadow-primary/30">
            <Quote size={28} />
        </div>

        <div className="mt-4">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200 italic">
                "{testimonial.text}"
            </p>
        </div>

        <div className="border-t border-white/5 pt-6 flex justify-between items-center">
            <div>
                <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
            <StarRating count={testimonial.rating} />
        </div>
    </div>
);

export default TestimonialCard;
