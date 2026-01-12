import { Experience } from "../types";
import { Code2, Building2, MonitorSmartphone } from "lucide-react";

export const experiences: Experience[] = [
    {
        title: "Front-End Developer (Intern)",
        company: "Okkam Group, Moscow",
        date: "June 2023 – Nov 2023",
        description: [
            "Built and optimized dynamic React apps with reusable components",
            "Integrated third-party REST APIs, implemented SEO enhancements",
            "Improved UI performance using lazy loading, code splitting",
        ],
        tech: ["React", "Next.js", "SEO", "REST API", "Lazy Loading"],
        icon: <Code2 size={20} />,
    },
    {
        title: "Junior Front-End Developer",
        company: "Indra, Barcelona",
        date: "Dec 2023 – Sept 2024",
        description: [
            "Led UI improvements and reduced page load by 18%",
            "Worked on Agile team integrating REST APIs and JIRA",
            "Built components with TypeScript, integrated testing with Jest",
        ],
        tech: ["TypeScript", "React", "JIRA", "Jest", "Agile"],
        icon: <Building2 size={20} />,
    },
    {
        title: "Web Admin & WordPress Dev",
        company: "Store Alarcon, Barcelona",
        date: "Oct 2024 – Apr 2025",
        description: [
            "Managed eCommerce store updates, built custom plugins",
            "Improved Core Web Vitals scores using optimization strategies",
            "Enhanced SEO and UX with layout improvements",
        ],
        tech: ["WordPress", "WooCommerce", "SEO", "Core Web Vitals", "PHP"],
        icon: <MonitorSmartphone size={20} />,
    },
];
