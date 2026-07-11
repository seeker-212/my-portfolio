"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/brand-icons";
import { Atom, FileCode, Triangle } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const socials = [
  { label: "GitHub", href: siteConfig.socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedInIcon },
  { label: "X", href: siteConfig.socials.twitter, Icon: XIcon },
  { label: "Email", href: siteConfig.socials.email, Icon: Mail },
];

const chips = [
  { label: "React", Icon: Atom, className: "left-0 top-10 -rotate-6" },
  { label: "TypeScript", Icon: FileCode, className: "right-2 top-24 rotate-6" },
  { label: "Next.js", Icon: Triangle, className: "bottom-10 left-6 -rotate-3" },
];

export function Hero() {
  const initials = siteConfig.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial opacity-60" />
        <div className="absolute left-1/2 top-[-10%] size-[36rem] -translate-x-1/2 rounded-full glow opacity-50" />
        <div className="absolute right-[-10%] bottom-[-10%] size-96 rounded-full bg-brand-2/20 blur-3xl" />
      </div>

      <div className="container-page">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
        >
          {/* Left column */}
          <div className="flex flex-col items-start gap-6">
            {siteConfig.available && (
              <motion.span
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Available for new projects
              </motion.span>
            )}

            <motion.h1 variants={item} className="text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {siteConfig.name.split(" ")[0]}
              <span className="text-gradient"> {siteConfig.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-balance font-display text-xl font-medium text-muted-foreground sm:text-2xl"
            >
              {siteConfig.role}
            </motion.p>

            <motion.p
              variants={item}
              className="max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group h-12 gap-2 px-6 bg-brand-gradient text-white shadow-lg shadow-brand-1/25 hover:opacity-90"
                )}
              >
                View my work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6")}
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-2 pt-2">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-1">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — avatar */}
          <motion.div variants={item} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-8 rounded-full glow opacity-70" />
            <div className="relative aspect-square rounded-[2rem] bg-brand-gradient p-[1.5px] shadow-2xl shadow-brand-1/20">
              <div className="grid size-full place-items-center overflow-hidden rounded-[1.9rem] bg-card">
                <div className="absolute inset-0 bg-grid mask-radial opacity-40" />
                <span className="relative font-display text-8xl font-bold text-gradient">
                  {initials}
                </span>
              </div>
            </div>

            {chips.map(({ label, Icon, className }) => (
              <div
                key={label}
                className={cn(
                  "absolute flex items-center gap-2 rounded-xl glass-strong px-3 py-2 text-sm font-medium shadow-lg animate-float",
                  className
                )}
              >
                <Icon className="size-4 text-brand-1" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mx-auto mt-16 hidden w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground lg:flex"
        >
          Scroll
          <ArrowDown className="size-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
