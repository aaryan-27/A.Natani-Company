import type { Metadata } from "next";
import {
  CheckCircle2,
  Rocket,
  CalendarDays,
  ShieldCheck,
  TrendingUp,
  Clock,
  BadgeIndianRupee,
  Star,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTABand } from "@/components/CTABand";
import { Button } from "@/components/ui/Button";
import { FaqSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Startup & Company Registration in Jaipur — Compliance Experts",
  description:
    "Startup registration, company registration and LLP registration in Jaipur. End-to-end incorporation and compliance for founders and MSMEs by A.Natani & Company.",
  keywords: [
    "Startup Registration Jaipur",
    "Company Registration Jaipur",
    "LLP Registration Jaipur",
    "Business Compliance Jaipur",
  ],
  alternates: { canonical: "/startup-compliance" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Startup Compliance", href: "/startup-compliance" },
];

const checklist = [
  "Choose the right business structure",
  "Reserve & approve company name",
  "Obtain DSC & DIN for directors",
  "Incorporate with MCA / ROC",
  "PAN, TAN & bank account setup",
  "GST registration (if applicable)",
  "MSME / Udyam registration",
  "Startup India recognition (DPIIT)",
  "Set up accounting & bookkeeping",
  "Compliance calendar & filings",
];

const packages = [
  {
    name: "Private Limited",
    tagline: "Best for funded startups",
    points: ["Name approval & incorporation", "DSC + DIN for 2 directors", "MOA, AOA & PAN/TAN", "Startup India guidance"],
    popular: true,
  },
  {
    name: "LLP Registration",
    tagline: "Best for professional firms",
    points: ["LLP name approval", "DSC + DPIN for partners", "LLP agreement drafting", "PAN/TAN & filing"],
    popular: false,
  },
  {
    name: "OPC / Proprietorship",
    tagline: "Best for solo founders",
    points: ["Single-owner setup", "GST & MSME registration", "Basic compliance setup", "Tax registration"],
    popular: false,
  },
];

const calendar = [
  { period: "Monthly", items: "GST returns (GSTR-1, 3B), TDS payments, payroll" },
  { period: "Quarterly", items: "TDS returns, advance tax, GST (QRMP scheme)" },
  { period: "Annually", items: "ROC filings (AOC-4, MGT-7), income tax & audit" },
  { period: "Event-based", items: "Director changes, share allotment, address change" },
];

const benefits = [
  { icon: ShieldCheck, title: "Zero penalties", desc: "We track every deadline so you never miss a filing." },
  { icon: TrendingUp, title: "Investor ready", desc: "Clean compliance makes due diligence painless." },
  { icon: Clock, title: "Save time", desc: "Focus on building — we handle the paperwork." },
  { icon: BadgeIndianRupee, title: "Cost effective", desc: "Bundled packages cost less than going piecemeal." },
];

const faqs = [
  { q: "How long does company registration take in Jaipur?", a: "A Private Limited Company or LLP typically takes 7–12 working days end-to-end, depending on name approval and document readiness. We handle the entire MCA/ROC process for you." },
  { q: "What documents do I need to register a company?", a: "PAN and Aadhaar of directors, passport-size photos, address proof, and proof of registered office (rent agreement/utility bill + NOC). We'll send you a simple checklist." },
  { q: "Do you provide Startup India (DPIIT) registration?", a: "Yes. We help eligible startups obtain DPIIT recognition, which unlocks tax benefits, easier compliance and access to government schemes." },
  { q: "What compliances apply after registration?", a: "Depending on your entity: GST returns, TDS, ROC annual filings, income tax and audit. We set up your compliance calendar and manage it for you." },
];

export default function StartupCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Startup & Business Compliance"
        title={<>Launch &amp; scale your business in <span className="text-gradient-gold">Jaipur</span> — fully compliant</>}
        subtitle="From company registration to ongoing compliance, we give founders and MSMEs a single trusted partner for everything legal, tax and financial."
        breadcrumbs={breadcrumbs}
      />

      {/* Checklist + form */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-royal-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-royal">
              <Rocket className="h-4 w-4" /> Startup Launch Checklist
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-navy">
              Everything you need to start right
            </h2>
            <p className="mt-3 text-muted">
              We guide you through every step — so nothing slips through the cracks.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {checklist.map((c, i) => (
                <Reveal key={c} delay={i % 2}>
                  <div className="flex items-center gap-3 rounded-xl border border-line bg-light px-4 py-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-sm font-medium text-navy">{c}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <LeadForm
                title="Start your company today"
                subtitle="Tell us about your business and get a free registration consultation."
                defaultService="Company / LLP Registration"
                source="startup-compliance"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Packages */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Registration Packages"
          title="Pick the structure that fits your goals"
          subtitle="Not sure which is right? Book a free consultation and we'll recommend the best fit."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-7 ${
                  p.popular ? "border-royal shadow-glow" : "border-line shadow-card"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                    <Star className="h-3.5 w-3.5 fill-navy" /> Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-navy">{p.name}</h3>
                <p className="mt-1 text-sm text-royal">{p.tagline}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-navy-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={p.popular ? "primary" : "outline"}
                  size="md"
                  className="mt-6 w-full"
                >
                  Get a Quote
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Compliance calendar */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Compliance Calendar"
          title="Stay ahead of every deadline"
          subtitle="A snapshot of what we manage for you, all year round."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {calendar.map((c, i) => (
            <Reveal key={c.period} delay={i}>
              <div className="h-full rounded-2xl border border-line bg-light p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold">
                  <CalendarDays className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-navy">{c.period}</h3>
                <p className="mt-1.5 text-sm text-muted">{c.items}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section tone="light">
        <SectionHeading eyebrow="Why a Professional CA" title="The benefits of doing it right from day one" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 text-center">
                <span className="mx-auto grid h-13 w-13 place-items-center rounded-2xl bg-royal-50 p-3 text-royal">
                  <b.icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-navy">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <SectionHeading eyebrow="FAQ" title="Startup & registration questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>

      <CTABand
        title="Ready to register your startup in Jaipur?"
        whatsappMessage="Hello, I want to register my startup/company in Jaipur. Please guide me."
      />
      <FaqSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />
    </>
  );
}
