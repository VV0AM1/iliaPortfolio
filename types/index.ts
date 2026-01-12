import { ReactElement } from "react";

export interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    url: string;
    repo?: string;
    wip?: boolean;
}

export interface Service {
    title: string;
    description: string;
    icon: ReactElement;
    items: string[];
}

export interface Testimonial {
    text: string;
    name: string;
    role: string;
    rating: number;
}

export interface Experience {
    title: string;
    company: string;
    date: string;
    description: string[];
    tech: string[];
    icon: ReactElement;
}
