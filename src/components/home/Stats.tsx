import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy py-14 lg:py-16 text-white">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-20 left-1/3 h-60 w-60 rounded-full bg-royal/20 blur-[90px]" />
      <div className="relative mx-auto max-w-7xl container-px">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i} className="text-center">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-gradient-gold">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-slate-300">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
