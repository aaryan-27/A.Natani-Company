"use client";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { telLink, whatsappLink } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-line bg-white/95 backdrop-blur shadow-[0_-4px_24px_rgba(15,23,42,0.08)]">
      <div className="grid grid-cols-3 divide-x divide-line">
        <a
          href={telLink}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-navy"
        >
          <Phone className="h-5 w-5 text-royal" />
          <span className="text-[11px] font-heading font-semibold">Call Now</span>
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-navy"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" />
          <span className="text-[11px] font-heading font-semibold">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-0.5 bg-royal py-2.5 text-white"
        >
          <CalendarCheck className="h-5 w-5" />
          <span className="text-[11px] font-heading font-semibold">Book</span>
        </Link>
      </div>
    </div>
  );
}
