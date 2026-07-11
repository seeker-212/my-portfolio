"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GitHubIcon } from "@/components/brand-icons";

export function Projects() {
  return (
    <section id="projects" className="section-padding relative scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          highlight="work"
          description="A few products I've designed and engineered end-to-end. Each one taught me something new."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1}>
              <article className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-brand-1/40 hover:shadow-2xl hover:shadow-brand-1/5">
                {/* Thumbnail / mockup */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                      project.gradient,
                    )}
                  />
                  <div className="absolute inset-0 bg-grid mask-radial opacity-30" />

                  {/* Browser chrome */}
                  <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 px-4 py-3">
                    <span className="size-2.5 rounded-full bg-white/50" />
                    <span className="size-2.5 rounded-full bg-white/35" />
                    <span className="size-2.5 rounded-full bg-white/20" />
                    <span className="ml-3 hidden h-4 w-28 rounded bg-white/15 sm:block" />
                  </div>

                  {/* Faux dashboard content */}
                  <div className="absolute inset-x-4 bottom-4 space-y-2">
                    <div className="h-2 w-1/3 rounded-full bg-white/50" />
                    <div className="h-2 w-2/3 rounded-full bg-white/30" />
                    <div className="grid grid-cols-3 gap-2 pt-1.5">
                      <div className="h-9 rounded-lg bg-white/15" />
                      <div className="h-9 rounded-lg bg-white/15" />
                      <div className="h-9 rounded-lg bg-white/15" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-xs font-medium text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-pretty text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-4 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <GitHubIcon className="size-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center" delay={0.1}>
          <a
            href="https://github.com/seeker-212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects on GitHub
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
