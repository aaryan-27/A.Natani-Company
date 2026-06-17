import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
  tone = "white",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "light" | "navy";
}) {
  const tones = {
    white: "bg-white",
    light: "bg-light",
    navy: "bg-navy text-white",
  };
  return (
    <section id={id} className={cn("py-16 lg:py-24", tones[tone], className)}>
      <div className="mx-auto max-w-7xl container-px">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider font-heading",
        tone === "light"
          ? "bg-royal-50 text-royal"
          : "bg-white/10 text-gold ring-1 ring-white/15"
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("mb-4", align === "center" && "flex justify-center")}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.1]",
          tone === "dark" ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            tone === "dark" ? "text-slate-300" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
