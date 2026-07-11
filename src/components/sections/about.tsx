import { Code2, Palette, Rocket, Gauge } from "lucide-react";
import { about } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const focus = [
  { icon: Code2, label: "Type-safe full-stack apps", text: "End-to-end TypeScript with tRPC, Prisma & Zod." },
  { icon: Palette, label: "Design systems", text: "Accessible, themeable component libraries." },
  { icon: Rocket, label: "Ship fast", text: "Edge rendering, streaming & smart caching." },
  { icon: Gauge, label: "Performance", text: "Core Web Vitals as a feature, not an afterthought." },
];

export function About() {
  return (
    <section id="about" className="section-padding relative scroll-mt-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="About"
              title="Engineering with intention"
              highlight="intention"
              description="I blend rigorous engineering with a designer's eye to ship products that are fast, accessible, and a joy to use."
            />
            <div className="flex flex-col gap-4 text-pretty text-base text-muted-foreground sm:text-lg">
              {about.summary.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal x={24} delay={0.1}>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                What I bring
              </span>
              <ul className="mt-5 flex flex-col gap-5">
                {focus.map(({ icon: Icon, label, text }) => (
                  <li key={label} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand-1/20">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{label}</p>
                      <p className="text-sm text-muted-foreground">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="glass rounded-2xl px-5 py-6 text-center">
                <div className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
