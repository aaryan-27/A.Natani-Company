"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, telLink, whatsappLink, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
          : "bg-white"
      )}
    >
      {/* Top utility bar */}
      <div className="hidden lg:block bg-navy text-slate-200 text-xs">
        <div className="mx-auto max-w-7xl container-px flex items-center justify-between py-2">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Trusted CA firm in Jaipur — Tax, GST, Audit & Business Compliance
          </span>
          <div className="flex items-center gap-5">
            <a href={telLink} className="flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5 text-gold" /> {site.phone}
            </a>
            <span className="text-slate-500">|</span>
            <span>{site.hours}</span>
          </div>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl container-px">
        <div className="flex h-16 lg:h-[4.5rem] items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              if ("children" in item && item.children) {
                return (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium font-heading transition-colors",
                        active ? "text-royal" : "text-navy-700 hover:text-royal"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="w-64 rounded-2xl border border-line bg-white p-2 shadow-[0_16px_50px_rgba(15,23,42,0.14)]">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block rounded-xl px-3 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-light hover:text-royal"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm font-medium font-heading transition-colors",
                      active ? "text-royal" : "text-navy-700 hover:text-royal"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <Button href={whatsappLink()} external variant="outline" size="sm">
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
            </Button>
            <Button href="/contact" variant="primary" size="sm">
              Book Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-line text-navy"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-line bg-white"
          >
            <ul className="container-px py-4 space-y-1">
              {nav.map((item) => {
                if ("children" in item && item.children) {
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => setServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-navy"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform",
                            servicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            <li>
                              <Link
                                href={item.href}
                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-royal"
                              >
                                All Services
                              </Link>
                            </li>
                            {item.children.map((c) => (
                              <li key={c.href}>
                                <Link
                                  href={c.href}
                                  className="block rounded-lg px-3 py-2.5 text-sm text-navy-700"
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-navy"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="grid grid-cols-2 gap-2 pt-3">
                <Button href={telLink} external variant="outline" size="md">
                  <Phone className="h-4 w-4" /> Call
                </Button>
                <Button href={whatsappLink()} external variant="whatsapp" size="md">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </Button>
              </li>
              <li>
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Book Free Consultation
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
