import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TaxCalculator } from "@/components/tools/TaxCalculator";
import { CTABand } from "@/components/CTABand";
import { LeadForm } from "@/components/LeadForm";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Free Income Tax & GST Calculator — FY 2025-26",
  description:
    "Free online Income Tax calculator (New Regime, FY 2025-26) and GST calculator. Estimate your tax liability instantly, then talk to a CA in Jaipur to optimise it.",
  alternates: { canonical: "/tools/tax-calculator" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Tax Calculator", href: "/tools/tax-calculator" },
];

export default function TaxCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Tools"
        title="Income Tax & GST Calculator"
        subtitle="Get an instant estimate of your income tax (New Regime, FY 2025-26) or quickly add/remove GST from any amount. For a precise, optimised plan, talk to our CA team."
        breadcrumbs={breadcrumbs}
      />

      <Section tone="light">
        <div className="mx-auto max-w-4xl">
          <TaxCalculator />
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Plan it properly"
              title="A calculator gives an estimate. A CA gives a strategy."
              subtitle="The right deductions, regime choice and timing can save you significantly more than any calculator suggests. Get a personalised tax-saving assessment from our team."
              align="left"
            />
          </div>
          <div className="lg:col-span-6">
            <LeadForm
              title="Get a Tax Saving Assessment"
              subtitle="Share your details for a free, personalised review."
              defaultService="Income Tax / ITR Filing"
              source="tax-calculator"
            />
          </div>
        </div>
      </Section>

      <CTABand
        title="Want to legally pay less tax?"
        whatsappMessage="Hello, I'd like a tax saving assessment. Please help."
      />
      <BreadcrumbSchema items={breadcrumbs} />
    </>
  );
}
