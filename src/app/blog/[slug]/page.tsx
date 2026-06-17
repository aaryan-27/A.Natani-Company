import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, CalendarDays, ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { posts, getPost } from "@/lib/blog";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Section";
import { LeadForm } from "@/components/LeadForm";
import { CTABand } from "@/components/CTABand";
import { BreadcrumbSchema } from "@/components/Schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-royal/25 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl container-px py-12 lg:py-16">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-6">
            <Eyebrow tone="dark">{post.category}</Eyebrow>
            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-5 text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" /> {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* body + sidebar */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl container-px grid gap-12 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <div className="max-w-2xl">
              {post.body.map((block, i) => {
                if (block.type === "h2")
                  return (
                    <h2 key={i} className="mt-9 font-heading text-2xl font-bold text-navy">
                      {block.text}
                    </h2>
                  );
                if (block.type === "ul")
                  return (
                    <ul key={i} className="mt-4 space-y-2.5">
                      {block.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 text-navy-700">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-royal" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  );
                return (
                  <p key={i} className="mt-4 leading-relaxed text-navy-700">
                    {block.text}
                  </p>
                );
              })}

              <div className="mt-10 rounded-2xl border-l-4 border-gold bg-light p-5 text-sm text-navy-700">
                <strong className="text-navy">Disclaimer:</strong> This article is
                for general information only and not a substitute for professional
                advice. Tax and compliance rules change — please consult our team
                for guidance specific to your situation.
              </div>

              <Link
                href="/blog"
                className="mt-8 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-royal"
              >
                <ArrowLeft className="h-4 w-4" /> Back to all articles
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <LeadForm
                title="Have a question?"
                subtitle="Talk to our CA team about your specific situation."
                compact
                source={`blog:${post.slug}`}
              />
              <div className="rounded-2xl border border-line bg-light p-6">
                <h3 className="font-heading text-base font-bold text-navy">Related articles</h3>
                <ul className="mt-4 space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`} className="group block">
                        <span className="text-xs font-semibold text-royal">{r.category}</span>
                        <span className="mt-1 flex items-start gap-1.5 font-heading text-sm font-semibold text-navy">
                          {r.title}
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTABand />
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
