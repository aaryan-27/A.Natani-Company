import { Breadcrumbs } from "./Breadcrumbs";
import { Eyebrow } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  breadcrumbs: { name: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-royal/30 blur-[100px]" />
      <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl container-px py-12 lg:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-6 max-w-3xl">
          {eyebrow && (
            <div className="mb-4">
              <Eyebrow tone="dark">{eyebrow}</Eyebrow>
            </div>
          )}
          <Reveal>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08]">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={1}>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">{subtitle}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
