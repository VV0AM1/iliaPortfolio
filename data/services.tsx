import { Service } from "../types";
import { Code2, Paintbrush, Zap, Server, Layout, Smartphone } from "lucide-react";

export const services: Service[] = [
    {
        title: "Front-End Excellence",
        description: "Building lightning-fast, interactive user interfaces with modern frameworks.",
        icon: <Code2 size={40} />,
        items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "UI/UX Implementation",
        description: "Translating sophisticated designs into pixel-perfect, accessible code.",
        icon: <Paintbrush size={40} />,
        items: ["Figma to Code", "Responsive Layouts", "Accessibility", "Design Systems"],
    },
    {
        title: "Web Animation",
        description: "Adding life to the web with smooth, performant animations.",
        icon: <Zap size={40} />,
        items: ["Framer Motion", "GSAP", "Scroll Animations", "Micro-interactions"],
    },
    {
        title: "Backend Integration",
        description: "Robust server-side logic and database integration for full-stack power.",
        icon: <Server size={40} />,
        items: ["Node.js", "NestJS", "PostgreSQL", "API Design"],
    },
    {
        title: "CMS Solutions",
        description: "Flexible content management systems for client autonomy.",
        icon: <Layout size={40} />,
        items: ["Headless CMS", "WordPress", "Shopify", "Contentful"],
    },
    {
        title: "Mobile First",
        description: "Ensuring your experience flows perfectly on every device.",
        icon: <Smartphone size={40} />,
        items: ["Responsive Design", "Touch Gestures", "PWA", "Performance"],
    },
];
