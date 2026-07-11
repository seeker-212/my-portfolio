import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  /** A word within `title` to render with the brand gradient */
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const titleParts = highlight
    ? title.split(new RegExp(`(${highlight})`, "i"))
    : [title];

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-brand-gradient" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        {titleParts.map((part, i) =>
          part.toLowerCase() === highlight?.toLowerCase() ? (
            <span key={i} className="text-gradient">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
