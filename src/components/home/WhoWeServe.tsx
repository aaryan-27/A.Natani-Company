import { Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { whoWeServe } from "@/lib/content";

export function WhoWeServe() {
  return (
    <section className="border-y border-line bg-light py-12">
      <div className="mx-auto max-w-7xl container-px">
        <Reveal className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
          <div className="flex shrink-0 items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-royal text-white">
              <Users className="h-6 w-6" />
            </span>
            <span className="font-heading text-base font-bold text-navy">
              Who we serve
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {whoWeServe.map((w) => (
              <span
                key={w}
                className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-navy-700"
              >
                {w}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
