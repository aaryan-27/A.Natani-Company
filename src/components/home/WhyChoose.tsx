import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { whyChoose } from "@/lib/content";

export function WhyChoose() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A CA firm that actually feels like a partner"
          subtitle="We combine technical expertise with genuine, personal service — so you always know where you stand."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((f, i) => (
            <Reveal key={f.title} delay={i % 3}>
              <div className="group h-full rounded-2xl border border-line bg-white p-7 transition-all hover:border-royal/30 hover:shadow-card">
                <span className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-royal-50 to-white p-3 text-royal ring-1 ring-royal/10 transition-colors group-hover:bg-royal group-hover:text-white">
                  <Icon name={f.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
