import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { LeadForm } from "@/components/LeadForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTABand } from "@/components/CTABand";
import { Button } from "@/components/ui/Button";
import {
  FaqSchema,
  BreadcrumbSchema,
  ServiceSchema,
} from "@/components/Schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const title = `${service.tagline} | ${service.title}`;
  return {
    title,
    description: `${service.intro} Trusted ${service.title.toLowerCase()} by ${site.name} in Jaipur.`,
    keywords: service.keywords,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title, description: service.intro },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/services/${service.slug}` },
  ];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={service.tagline}
        title={service.title}
        subtitle={service.intro}
        breadcrumbs={breadcrumbs}
      />

      {/* Overview + form */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy to-royal-600 text-white shadow-glow">
                <ServiceIcon icon={service.icon} className="h-7 w-7" />
              </span>
              <h2 className="font-heading text-2xl font-bold text-navy">
                What&apos;s included
              </h2>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.items.map((it, i) => (
                <Reveal key={it} delay={i % 2}>
                  <div className="flex items-center gap-3 rounded-xl border border-line bg-light px-4 py-3.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-royal" />
                    <span className="text-sm font-medium text-navy">{it}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Benefits */}
            <h3 className="mt-12 font-heading text-2xl font-bold text-navy">
              Why it matters
            </h3>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                  </span>
                  <span className="text-navy-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <LeadForm
                title={`Get started with ${service.title}`}
                subtitle="Tell us your requirement and we'll respond with a clear, fixed quote."
                defaultService={service.title}
                source={`service:${service.slug}`}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Our Process"
          title={`How we handle your ${service.title.toLowerCase()}`}
          subtitle="A clear, structured approach so you always know what happens next."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((p, i) => (
            <Reveal key={p.title} delay={i}>
              <div className="relative h-full rounded-2xl border border-line bg-white p-6">
                <span className="font-display text-5xl font-extrabold text-royal-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQ"
              title={`${service.title} — your questions answered`}
              align="left"
            />
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Talk to a CA <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </Section>

      {/* Related services */}
      <Section tone="light">
        <SectionHeading eyebrow="Explore More" title="Other services you may need" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-royal/30 hover:shadow-card"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-royal-50 text-royal">
                <ServiceIcon icon={s.icon} className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-heading font-semibold text-navy">{s.title}</span>
                <span className="mt-0.5 inline-flex items-center gap-1 text-sm text-royal">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand
        title={`Ready to get your ${service.title.toLowerCase()} sorted?`}
        whatsappMessage={`Hello, I'm interested in your ${service.title}. Please share details.`}
      />

      <ServiceSchema name={service.title} description={service.intro} />
      <FaqSchema faqs={service.faqs} />
      <BreadcrumbSchema items={breadcrumbs} />
    </>
  );
}
