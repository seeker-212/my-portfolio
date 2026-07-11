import { Briefcase, GraduationCap, Check, MapPin } from "lucide-react";
import { experience, education, type TimelineItem } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function TimelineList({ items }: { items: TimelineItem[] }) {
  const Icon = items[0]?.type === "education" ? GraduationCap : Briefcase;
  return (
    <div className="relative ml-1">
      <span className="absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-brand-1/40 via-border to-transparent" />
      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <Reveal key={`${item.type}-${item.title}`} delay={i * 0.08} x={-16}>
            <div className="relative pl-14">
              <span className="absolute left-0 top-0 grid size-9 place-items-center rounded-full bg-brand-gradient text-white shadow-lg shadow-brand-1/20">
                <Icon className="size-[18px]" />
              </span>
              <div className="glass rounded-2xl p-5 transition-colors hover:border-brand-1/40">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-brand-1">
                  {item.organization}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="experience" className="section-padding relative scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & education"
          highlight="education"
          description="A short timeline of where I've worked, what I've built, and what I've studied."
          align="center"
          className="mx-auto"
        />

        <Tabs
          defaultValue="experience"
          className="mt-10 flex flex-col items-center"
        >
          <TabsList variant="line">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="experience" className="mt-10 w-full">
            <TimelineList items={experience} />
          </TabsContent>
          <TabsContent value="education" className="mt-10 w-full">
            <TimelineList items={education} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
