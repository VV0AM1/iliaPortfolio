"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../../types";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
    <div
        className="group relative w-full h-[500px] rounded-3xl overflow-hidden glass border border-white/5 shadow-2xl transition-all duration-300"
    >
        {/* Image Container */}
        <div className="relative h-[280px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] via-transparent to-transparent z-10 opacity-80" />
            <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${project.wip ? "grayscale blur-[2px]" : ""
                    }`}
            />
            {project.wip && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-bold rounded-full border border-yellow-500/30 backdrop-blur-md">
                    IN PROGRESS
                </div>
            )}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 pt-0 flex flex-col justify-end z-20 h-full pointer-events-none">
            <div className="pointer-events-auto">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors drop-shadow-lg">
                    {project.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed mb-6 font-medium drop-shadow-md">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-gray-200 border border-white/5 backdrop-blur-sm shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href={project.url}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:-translate-y-1"
                    >
                        Visit Site <ExternalLink size={16} />
                    </Link>
                    {project.repo && (
                        <Link
                            href={project.repo}
                            target="_blank"
                            className="p-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all border border-white/10 hover:-translate-y-1"
                        >
                            <Github size={20} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export default ProjectCard;
