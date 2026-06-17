import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTABand } from "@/components/CTABand";
import { Process } from "@/components/home/Process";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "CA Services in Jaipur — Tax, GST, Audit & Registration",
  description:
    "Explore our complete range of Chartered Accountant services in Jaipur — income tax, GST, company registration, audit, accounting and business advisory.",
  alternates: { canonical: "/services" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete CA services for every stage of your journey"
        subtitle="Whether you're filing your first ITR, registering a company or scaling an MSME, we have the expertise to support you — all under one roof."
        breadcrumbs={breadcrumbs}
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="What We Offer"
          title="Six core practice areas, fully managed"
          subtitle="Click any service to see what's included, our process, pricing approach and FAQs."
        />
        <div className="mt-14">
          <ServicesGrid />
        </div>
      </Section>

      <Process />
      <CTABand />
      <BreadcrumbSchema items={breadcrumbs} />
    </>
  );
}
