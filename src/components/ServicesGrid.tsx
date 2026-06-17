import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { ServiceIcon } from "./ServiceIcon";
import { Reveal } from "./ui/Reveal";

export function ServicesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.slug} delay={i % 3}>
          <Link
            href={`/services/${s.slug}`}
            className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-royal/30 hover:shadow-lift"
          >
            <span className="absolute right-6 top-6 h-12 w-12 rounded-full bg-royal-50 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy to-royal-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.28)]">
              <ServiceIcon icon={s.icon} className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.short}</p>
            <ul className="mt-4 space-y-1.5">
              {s.items.slice(0, 4).map((it) => (
                <li key={it} className="flex items-center gap-2 text-sm text-navy-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {it}
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-royal">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
