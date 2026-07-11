"use client";

import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="section-padding relative scroll-mt-24">
      <div className="pointer-events-none absolute left-1/2 top-1/3 size-[30rem] -translate-x-1/2 rounded-full glow opacity-30" />

      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I use"
          highlight="Technologies"
          description="The tools and technologies I use to design, build, and deploy modern full-stack applications."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.08}
              x={index % 2 === 0 ? -20 : 20}
            >
              <div className="glass h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-1/30">
                <h3 className="mb-6 font-display text-xl font-semibold">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-4 py-3 transition-all duration-300 hover:border-brand-1/40 hover:bg-muted"
                    >
                      <skill.icon className="size-5 text-brand-1" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
