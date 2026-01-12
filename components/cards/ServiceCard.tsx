"use client";

import { FC } from "react";
import { Service } from "../../types";

const ServiceCard: FC<Service> = ({ title, description, icon, items }) => (
    <div
        className="relative group w-full h-[380px] p-8 rounded-3xl glass border border-white/5 hover:border-primary/30 transition-all duration-300 md:w-[350px] flex-shrink-0"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />

        <div className="relative z-10 flex flex-col h-full">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-lg group-hover:shadow-primary/20">
                {icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {description}
            </p>

            <div className="border-t border-white/5 pt-6 mt-auto">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Tech Includes</h4>
                <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default ServiceCard;
