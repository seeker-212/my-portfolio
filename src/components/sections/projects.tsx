"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
              <article className="group glass flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:border-brand-1/40 hover:shadow-2xl hover:shadow-brand-1/10">
                {/* Project Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={project.featured}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Year Badge */}
                  <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="font-display text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <GitHubIcon className="size-4" />
                      View Code
                    </a>
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
