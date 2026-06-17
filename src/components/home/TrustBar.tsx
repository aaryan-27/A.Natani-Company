import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { trustIndicators } from "@/lib/content";

export function TrustBar() {
  return (
    <div className="relative z-10 mx-auto -mt-10 max-w-7xl container-px">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-[0_18px_50px_rgba(15,23,42,0.10)] lg:grid-cols-4">
        {trustIndicators.map((t, i) => (
          <Reveal key={t.title} delay={i}>
            <div className="flex h-full items-center gap-3 bg-white p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-royal-50 text-royal">
                <Icon name={t.icon} className="h-6 w-6" />
              </span>
              <span className="font-heading text-sm font-semibold leading-tight text-navy">
                {t.title}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
