import {
  Atom,
  Binary,
  Braces,
  Box,
  Cog,
  Code,
  Container,
  Cloud,
  Database,
  FileCode,
  GitBranch,
  Hexagon,
  Leaf,
  Network,
  PenTool,
  Route,
  Server,
  Share2,
  Sparkles,
  Triangle,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * ────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — edit everything about the portfolio from this one file.
 * ────────────────────────────────────────────────────────────────────────
 */
export const siteConfig = {
  name: "Henry Ugwu",
  role: "Full-Stack Developer & cybersecurity enthusiast",
  // Replace with your real domain (used for canonical URLs, OG tags, JSON-LD)
  url: "https://henryugwu.dev",
  description:
    "Full-stack engineer crafting fast, accessible, and beautifully designed web products with React, Next.js, and TypeScript.",
  email: "henryugwu565@gmail.com",
  location: "Awka, Nigeria",
  available: true,
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Frontend Engineer",
    "Backend Engineer",
    "Web Performance",
    "Portfolio",
  ],
  socials: {
    github: "https://github.com/seeker-212",
    linkedin: "https://www.linkedin.com/in/ugwu-henry-267699278/",
    twitter: "https://x.com/just_pega",
    email: "henryugwu565@gmail.com",
  },
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  summary: [
    "I'm a full-stack engineer with a soft spot for interface design. For the past three years I've been turning ambiguous ideas into polished, production-grade products — shipping everything from real-time dashboards to design systems used by millions.",
    "My happy place is the intersection of engineering and craft: typed end-to-end code, buttery micro-interactions, and interfaces that feel inevitable. I care deeply about performance, accessibility, and the small details that make software feel premium.",
  ],
  stats: [
    { label: "Years experience", value: "3+" },
    { label: "Projects shipped", value: "10+" },
    { label: "Client satisfaction", value: "98%" },
  ],
};

export type Skill = { name: string; icon: LucideIcon; level: number };

export type SkillGroup = { title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: FileCode, level: 95 },
      { name: "JavaScript", icon: Braces, level: 95 },
      { name: "Python", icon: Binary, level: 85 },
      { name: "SQL", icon: Database, level: 88 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Atom, level: 96 },
      { name: "Next.js", icon: Triangle, level: 94 },
      { name: "Tailwind CSS", icon: Wind, level: 92 },
      { name: "Framer Motion", icon: Sparkles, level: 88 },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js", icon: Server, level: 90 },
      { name: "PostgreSQL", icon: Database, level: 86 },
      { name: "MongoDB", icon: Leaf, level: 80 },
      { name: "GraphQL", icon: Share2, level: 82 },
      { name: "Redis", icon: Container, level: 74 },
      { name: "Express.js", icon: Route, level: 88 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: Container, level: 84 },
      { name: "AWS", icon: Cloud, level: 80 },
      { name: "Git", icon: GitBranch, level: 94 },
      { name: "Vite", icon: Zap, level: 90 },
    ],
  },
];

export type Project = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  // Tailwind gradient utilities used for the project thumbnail placeholder
  gradient: string;
  year: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Genovate-AI",
    image: "/projects/genovate.png",
    description:
      "**Genovate AI** is a modern AI-powered web application that streamlines content creation with tools for image generation, background removal, AI article writing, and more. It provides an intuitive interface that helps users create and edit content quickly and efficiently.",
    tech: ["React.js", "Javascript", "MongoDB", "Tailwind CSS", "WebSockets"],
    github: "https://github.com/seeker-212/Genovate-AI",
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    year: "2025",
    featured: true,
  },
  {
    title: "Astro-silo",
    image: "/projects/Astro.png",
    description:
      "**Astro-Silo** is a modern full-stack e-commerce clothing platform that delivers a seamless shopping experience with product browsing, secure authentication, shopping cart, order management, and an intuitive admin dashboard for managing products, inventory, and customer orders.",
    tech: ["React", "Javascript", "MongoDB"],
    github: "https://github.com/seeker-212/Astro-silo",
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    year: "2025",
    featured: true,
  },
  {
    title: "Chop-Now",
    image: "/projects/chopnow.png",
    description:
      "**ChopNow** is a full-stack food delivery platform that delivers a seamless ordering experience with real-time order tracking, live delivery updates, secure online payments, restaurant management, and dedicated dashboards for customers, vendors, admins, and delivery riders.",
    tech: ["React", "JavaScript", "MongoDB", "Socket.io"],
    github: "https://github.com/seeker-212/Chop-Now",
    gradient: "from-fuchsia-500 via-violet-500 to-purple-600",
    year: "2025",
    featured: false,
  },
  {
    title: "Dev Pega",
    image: "/projects/Dev.png",
    description:
      "**Dev Pega** is a modern full-stack blogging platform built with a Turborepo monorepo architecture. It features secure authentication, rich text editing, comments, likes, and a responsive interface, showcasing scalable application architecture and efficient code sharing across multiple apps and packages.",
    tech: ["Next.js", "Typescript", "Prisma", "Nest.js", "GraphQL"],
    github: "https://github.com/seeker-212/Fullstack-Turborepo-blog-app",
    gradient: "from-cyan-500 via-blue-500 to-violet-600",
    year: "2026",
    featured: false,
  },
];

export type TimelineItem = {
  type: "experience" | "education";
  title: string;
  organization: string;
  period: string;
};

export const experience: TimelineItem[] = [
  {
    type: "experience",
    title: "FreeLancer",
    organization: "Upwork",
    period: "2023 — Present",
  },
  {
    type: "experience",
    title: "FreeLancer",
    organization: "Fiver",
    period: "2023 — present",
  },
];

export const education: TimelineItem[] = [
  {
    type: "education",
    title: "SelfTaught Developer",
    organization: "Udemy, Youtube, Coursera",
    period: "2021 — 2023",
  },
];

export const contactInfo = {
  email: siteConfig.email,
  note: "I'm currently open to freelance work and full-time roles. The fastest way to reach me is email — I usually reply within a day.",
};
