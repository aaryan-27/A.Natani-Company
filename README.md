# Yogendra Jain & Company — CA Firm Website

A premium, modern, conversion-focused website for **YOGENDRA JAIN & COMPANY**,
Chartered Accountants in Jaipur. Built for trust-building, local SEO and
WhatsApp-driven lead generation.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (custom navy / royal-blue / gold design system)
- **Framer Motion** (scroll & UI animations)
- **lucide-react** (icons)
- API route ready to wire to **Supabase** + email

> Note: instead of pulling in the full shadcn/ui registry, the project ships
> lightweight, self-contained components built in the same spirit
> (`src/components/ui/*`) — smaller bundle, same premium feel.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Copy `.env.example` to `.env.local` and set at least `NEXT_PUBLIC_SITE_URL`.

## Project structure

```
src/
  app/
    page.tsx                 Home
    about/                   About Us
    services/                Services hub + [slug] detail pages
    startup-compliance/      Startup & company registration (SEO landing)
    blog/                    Blog list + [slug] articles
    contact/                 Contact + map + lead form
    tools/tax-calculator/    Income Tax (FY 2025-26) + GST calculator
    api/lead/                Lead capture endpoint (Supabase/email ready)
    sitemap.ts robots.ts manifest.ts
  components/                Header, Footer, LeadForm, CTA, sections, etc.
  lib/                       site config, services, blog, marketing content
```

## Editing content

Everything is data-driven — update these and the whole site follows:

- **Firm details / contact / nav** → `src/lib/site.ts`
- **Services** (cards + detail pages) → `src/lib/services.ts`
- **Blog articles** → `src/lib/blog.ts`
- **Stats, testimonials, FAQs, values** → `src/lib/content.ts`

## Lead generation

- **WhatsApp is the guaranteed channel:** every lead form opens WhatsApp with a
  prefilled summary, plus a floating chat button and a sticky mobile call/WhatsApp bar.
- **`POST /api/lead`** validates and logs leads. To persist + email, uncomment
  the marked sections in `src/app/api/lead/route.ts` and set the env vars.

## SEO

- Per-page metadata, Open Graph & canonical URLs
- JSON-LD schema: `AccountingService` (LocalBusiness), `Service`, `FAQPage`,
  `BreadcrumbList`, `BlogPosting`
- `sitemap.xml`, `robots.txt`, web manifest
- Local-SEO copy targeting Jaipur keywords

## Before going live

1. Set the real domain in `NEXT_PUBLIC_SITE_URL` and `site.url` (`src/lib/site.ts`).
2. Replace placeholder founder image/qualifications in `src/app/about/page.tsx`.
3. Confirm the Google Maps embed/place ID in `src/lib/site.ts`.
4. Add a real `public/og.png` (1200×630) for social sharing.
5. Wire `/api/lead` to Supabase + email if you want to store leads server-side.
