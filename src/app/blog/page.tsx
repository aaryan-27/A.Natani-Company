import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/CTABand";
import { BreadcrumbSchema } from "@/components/Schema";
import { posts, categories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Tax, GST & Compliance Insights",
  description:
    "Practical articles on income tax, GST, startup registration, accounting and business compliance from the CA team at A.Natani & Company, Jaipur.",
  alternates: { canonical: "/blog" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Insights & Guides"
        title="Tax, GST & business compliance — made simple"
        subtitle="Clear, practical articles to help you understand your finances and stay compliant. Updated regularly by our CA team."
        breadcrumbs={breadcrumbs}
      />

      <Section tone="white">
        {/* categories */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-navy px-4 py-1.5 text-sm font-medium text-white">All</span>
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-navy-700"
            >
              {c}
            </span>
          ))}
        </div>

        {/* featured */}
        <Reveal className="mt-10">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-shadow hover:shadow-lift lg:grid-cols-2"
          >
            <div className="relative min-h-[16rem] bg-gradient-to-br from-navy to-royal-600 p-8">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="inline-flex w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                  Featured · {featured.category}
                </span>
                <p className="font-display text-2xl font-bold text-white">
                  {featured.title}
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" /> {formatDate(featured.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {featured.readingTime} min read
                </span>
              </div>
              <h2 className="mt-3 font-heading text-2xl font-bold text-navy">{featured.title}</h2>
              <p className="mt-3 text-muted">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-heading font-semibold text-royal">
                Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i % 3}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex w-fit rounded-full bg-royal-50 px-3 py-1 text-xs font-semibold text-royal">
                  {p.category}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
                  <span>{formatDate(p.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {p.readingTime} min
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand />
      <BreadcrumbSchema items={breadcrumbs} />
    </>
  );
}
