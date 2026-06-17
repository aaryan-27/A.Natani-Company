import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticPages = [
    { url: "/", priority: 1 },
    { url: "/about", priority: 0.8 },
    { url: "/services", priority: 0.9 },
    { url: "/startup-compliance", priority: 0.9 },
    { url: "/tools/tax-calculator", priority: 0.7 },
    { url: "/blog", priority: 0.7 },
    { url: "/contact", priority: 0.8 },
  ].map((p) => ({
    url: `${base}${p.url}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p.priority,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
