import type { Metadata } from "next";
import {
  Target,
  Eye,
  Gem,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/CTABand";
import { Stats } from "@/components/home/Stats";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/Schema";
import { coreValues } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Chartered Accountants in Jaipur",
  description:
    "Learn about A.Natani & Company, a trusted Chartered Accountant firm in Jaipur. Our mission, values and the expertise behind our tax, GST and compliance services.",
  alternates: { canonical: "/about" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const mvv = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To make taxation and compliance simple, transparent and stress-free for every client — so they can focus on what they do best.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the most trusted and approachable Chartered Accountant firm in Jaipur, known for integrity and genuine client success.",
  },
  {
    icon: Gem,
    title: "Our Values",
    desc: "Integrity, accuracy and confidentiality guide every engagement. We treat your finances as carefully as our own.",
  },
];

const trustTimeline = [
  { title: "Personal attention", desc: "You work directly with experienced professionals — not a call centre." },
  { title: "Proactive compliance", desc: "We track your deadlines and act early, so you never face penalties." },
  { title: "Plain-language advice", desc: "We explain the 'why', not just the 'what' — no confusing jargon." },
  { title: "Long-term partnership", desc: "From your first filing to scaling your business, we grow with you." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>About <span className="text-gradient-gold">{site.shortName}</span></>}
        subtitle="A Jaipur-based Chartered Accountant firm helping individuals, startups, MSMEs and businesses stay compliant, save tax and grow with confidence."
        breadcrumbs={breadcrumbs}
      />

      {/* Firm overview */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-bold text-navy leading-tight">
              Your trusted financial partner in Jaipur
            </h2>
            <div className="mt-5 space-y-4 text-muted leading-relaxed">
              <p>
                {site.legalName} is a professional accounting, taxation and
                business advisory firm based in Sindhi Camp, Jaipur. We bring
                together deep technical expertise and a genuinely personal
                approach to serve clients across India and abroad.
              </p>
              <p>
                From income tax and GST to company registration, audit,
                accounting and advisory, we offer end-to-end services designed to
                keep you compliant and financially organized — all under one roof.
              </p>
              <p>
                We believe great accounting is about more than numbers. It&apos;s
                about giving you clarity, confidence and the freedom to focus on
                your goals.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Work with us
              </Button>
              <Button href={whatsappLink()} external variant="outline" size="lg">
                WhatsApp us
              </Button>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Income Tax & ITR Filing",
                "GST Registration & Returns",
                "Company & LLP Registration",
                "Audit & Assurance",
                "Accounting & Payroll",
                "Business Advisory & CFO",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-line bg-light p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-royal" />
                  <span className="text-sm font-medium text-navy">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission / Vision / Values */}
      <Section tone="light">
        <div className="grid gap-6 lg:grid-cols-3">
          {mvv.map((m, i) => (
            <Reveal key={m.title} delay={i}>
              <div className="h-full rounded-2xl border border-line bg-white p-8 shadow-card">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy to-royal-600 text-white">
                  <m.icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Founder */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-royal-600 p-1">
                <div className="grid h-full w-full place-items-center rounded-[1.4rem] bg-navy text-white">
                  <div className="text-center">
                    <span className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-white/10 font-display text-4xl font-extrabold text-gradient-gold ring-1 ring-white/15">
                      AN
                    </span>
                    <p className="mt-5 font-heading text-xl font-bold">A.Natani & Company</p>
                    <p className="text-sm text-slate-300">Founder &amp; Principal</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-white px-5 py-3 shadow-lift ring-1 ring-line">
                <p className="font-display text-2xl font-extrabold text-royal">12+</p>
                <p className="text-xs text-muted">Years of experience</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-7">
            <Eyebrow>Meet the Founder</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-bold text-navy">A.Natani & Company</h2>
            <p className="mt-4 leading-relaxed text-muted">
              A team of qualified Chartered Accountants with over a decade of
              experience advising individuals, startups and growing businesses,
              A.Natani & Company was founded with a simple belief: every
              client deserves honest, accessible and expert financial guidance.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                { icon: GraduationCap, title: "Qualification", desc: "Chartered Accountant (ICAI)" },
                { icon: Briefcase, title: "Experience", desc: "12+ years in practice" },
                { icon: Award, title: "Expertise", desc: "Tax, GST, Audit & Advisory" },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-line bg-light p-4">
                  <c.icon className="h-6 w-6 text-royal" strokeWidth={1.75} />
                  <p className="mt-3 font-heading text-sm font-semibold text-navy">{c.title}</p>
                  <p className="mt-1 text-xs text-muted">{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border-l-4 border-gold bg-light p-5">
              <p className="italic text-navy-700">
                “Our goal is to be the CA you can actually reach — someone who
                understands your business and genuinely cares about your success.”
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Stats />

      {/* Why clients trust us — timeline */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Why Clients Trust Us"
          title="Built on relationships, not just transactions"
          subtitle="Here's what working with us actually feels like."
        />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-line sm:left-1/2" />
          <div className="space-y-10">
            {trustTimeline.map((t, i) => (
              <Reveal key={t.title} delay={i % 2}>
                <div
                  className={`relative flex sm:items-center ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="hidden sm:block sm:w-1/2" />
                  <span className="absolute left-4 sm:left-1/2 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-royal font-heading text-sm font-bold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
                    <h3 className="font-heading text-lg font-bold text-navy">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Core values */}
      <Section tone="light">
        <SectionHeading eyebrow="Core Values" title="The principles we never compromise on" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((v, i) => (
            <Reveal key={v.title} delay={i % 5}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-royal-50 font-heading text-lg font-bold text-royal">
                  {v.title[0]}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-navy">{v.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand />
      <BreadcrumbSchema items={breadcrumbs} />
    </>
  );
}
