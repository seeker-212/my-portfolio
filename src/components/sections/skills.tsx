"use client";

import { motion } from "framer-motion";
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
          title="Tools I work with"
          highlight="work"
          description="A practical toolkit honed across startups and product teams — from typed frontends to cloud-native backends."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08} x={gi % 2 === 0 ? -20 : 20}>
              <div className="glass h-full rounded-3xl p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-lg bg-muted text-brand-1 transition-colors group-hover:text-brand-2">
                          <skill.icon className="size-[18px]" />
                        </span>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full bg-brand-gradient"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                        />
                      </div>
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
