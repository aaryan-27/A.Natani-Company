import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { BreadcrumbSchema } from "@/components/Schema";
import { site, telLink, mailLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — CA Firm in Bani Park, Jaipur",
  description:
    "Contact Yogendra Jain & Company, Chartered Accountants in Bani Park, Jaipur. Call +91 82854 95212, WhatsApp us, or request a free consultation online.",
  alternates: { canonical: "/contact" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

const cards = [
  {
    icon: Phone,
    title: "Call Us",
    value: site.phone,
    href: telLink,
    cta: "Tap to call",
    external: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with our team",
    href: whatsappLink(),
    cta: "Open chat",
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    value: site.email,
    href: mailLink,
    cta: "Send email",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your taxes & compliance"
        subtitle="Reach out for a free, no-obligation consultation. We respond quickly — usually within a few hours."
        breadcrumbs={breadcrumbs}
      />

      {/* Quick contact cards */}
      <Section tone="white" className="!pb-0">
        <div className="grid gap-5 sm:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-royal/30 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal-50 text-royal transition-colors group-hover:bg-royal group-hover:text-white">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-navy">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.value}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-royal">
                  {c.cta} <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Form + details + map */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <LeadForm
              title="Request a Consultation"
              subtitle="Fill in your details and we'll get back to you. Submitting also opens WhatsApp for an instant response."
              source="contact-page"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="rounded-2xl border border-line bg-light p-6">
                <h3 className="font-heading text-lg font-bold text-navy">Visit our office</h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-royal" />
                    <span className="text-navy-700">{site.address.full}</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-royal" />
                    <span className="text-navy-700">{site.hours}</span>
                  </li>
                </ul>
                <a
                  href={site.maps.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-royal hover:underline"
                >
                  Get directions on Google Maps <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="overflow-hidden rounded-2xl border border-line shadow-card">
                <iframe
                  title={`${site.name} location on Google Maps`}
                  src={site.maps.embed}
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <BreadcrumbSchema items={breadcrumbs} />
    </>
  );
}
