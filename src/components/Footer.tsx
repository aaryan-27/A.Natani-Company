import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import { site, telLink, mailLink, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-slate-300">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl container-px py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">
              Ready to simplify your taxes & compliance?
            </h3>
            <p className="mt-1 text-slate-400">
              Get a free consultation with our Chartered Accountants in Jaipur.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-heading font-semibold text-white hover:brightness-105"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Now
            </a>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-heading font-semibold text-navy hover:bg-light"
            >
              <Phone className="h-5 w-5" /> {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl container-px py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
            {site.legalName}. A trusted financial partner helping individuals,
            startups, MSMEs and businesses in Jaipur stay compliant and grow with
            confidence.
          </p>
          <div className="mt-5 flex gap-3">
            {(["LinkedIn", "Facebook", "Instagram"] as const).map((s) => (
              <a
                key={s}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-slate-300 hover:border-gold hover:text-gold"
                aria-label={s}
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-slate-400 hover:text-gold transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { label: "About Us", href: "/about" },
              { label: "Startup Compliance", href: "/startup-compliance" },
              { label: "Tax Calculator", href: "/tools/tax-calculator" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-400 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3.5 text-sm text-slate-400">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-gold" />
              <span>{site.address.full}</span>
            </li>
            <li>
              <a href={telLink} className="flex gap-3 hover:text-gold">
                <Phone className="h-5 w-5 shrink-0 text-gold" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={mailLink} className="flex gap-3 hover:text-gold">
                <Mail className="h-5 w-5 shrink-0 text-gold" /> {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-5 w-5 shrink-0 text-gold" /> {site.hours}
            </li>
            <li>
              <a
                href={site.maps.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold hover:underline"
              >
                View on Google Maps <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl container-px py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="text-slate-500">
            Chartered Accountant Jaipur · Tax & GST Consultant · Company Registration
          </p>
        </div>
      </div>
    </footer>
  );
}
