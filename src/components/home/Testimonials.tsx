import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by individuals, startups & businesses"
          subtitle="Real feedback from clients we've helped stay compliant and grow."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i % 3}>
              <figure className="break-inside-avoid rounded-2xl border border-line bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-royal-50" fill="currentColor" />
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-navy-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-navy to-royal-600 font-heading text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-semibold text-navy">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
