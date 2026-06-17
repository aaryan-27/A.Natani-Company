"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  MessageCircle,
  Star,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/LeadForm";
import { whatsappLink, site } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.21, 0.5, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#142a52]" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-royal/25 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl container-px py-14 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold ring-1 ring-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Chartered Accountants in Jaipur
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="mt-6 font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.05]"
            >
              Simplifying{" "}
              <span className="text-gradient-gold">Taxation, Compliance</span>{" "}
              &amp; Business Growth
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed"
            >
              Helping individuals, startups &amp; businesses stay compliant and
              financially organized with expert CA services — income tax, GST,
              audit, registration and advisory.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href="/contact" variant="gold" size="lg">
                <CalendarCheck className="h-5 w-5" /> Book Free Consultation
              </Button>
              <Button href={whatsappLink()} external variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </Button>
            </motion.div>

            {/* trust row */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={4}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
            >
              <span className="flex items-center gap-2 text-slate-300">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </span>
                <strong className="text-white">4.9/5</strong> from happy clients
              </span>
              {[
                { icon: FileCheck2, label: "12,000+ Returns Filed" },
                { icon: ShieldCheck, label: "100% Confidential" },
              ].map((t) => (
                <span key={t.label} className="flex items-center gap-2 text-slate-300">
                  <t.icon className="h-4 w-4 text-gold" /> {t.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* floating badges */}
              <div className="absolute -top-4 -left-4 z-10 hidden sm:flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lift">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                </span>
                <span className="text-xs font-heading font-semibold text-navy">
                  Same-day response
                </span>
              </div>
              <div className="absolute -bottom-4 -right-3 z-10 hidden sm:flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lift">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-royal-50">
                  <TrendingUp className="h-5 w-5 text-royal" />
                </span>
                <span className="text-xs font-heading font-semibold text-navy">
                  Save more on tax
                </span>
              </div>
              <LeadForm
                title="Get a Free Consultation"
                subtitle="No obligation. Our CA team responds within hours."
                source="hero"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* wave divider */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 80"
          className="block w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,40 C360,90 1080,-10 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
      <span className="sr-only">{site.name} — Chartered Accountant in Jaipur</span>
    </section>
  );
}
