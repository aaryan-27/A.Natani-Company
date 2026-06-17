"use client";

import { motion } from "framer-motion";
import { MessagesSquare, FolderCheck, FileCheck2, LifeBuoy } from "lucide-react";
import { SectionHeading } from "@/components/ui/Section";
import { processSteps } from "@/lib/content";

const icons = [MessagesSquare, FolderCheck, FileCheck2, LifeBuoy];

export function Process() {
  return (
    <section className="bg-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, transparent 4-step process"
          subtitle="From first conversation to ongoing support — we make working with a CA effortless."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            style={{ originX: 0 }}
            className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-royal via-royal to-gold lg:block"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const Ic = icons[i];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative text-center lg:text-left"
                >
                  <div className="relative z-10 mx-auto lg:mx-0 grid h-14 w-14 place-items-center rounded-2xl bg-white text-royal shadow-card ring-1 ring-line">
                    <Ic className="h-7 w-7" strokeWidth={1.75} />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gold font-heading text-xs font-bold text-navy">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
