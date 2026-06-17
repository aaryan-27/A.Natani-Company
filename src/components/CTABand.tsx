import { CalendarCheck, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { whatsappLink, telLink, site } from "@/lib/site";

export function CTABand({
  title = "Need Expert Tax & Compliance Assistance?",
  subtitle = "Book a free consultation today. Our Chartered Accountants in Jaipur are ready to help.",
  whatsappMessage,
}: {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-royal-600/40" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-gold/15 blur-[90px]" />
      <div className="relative mx-auto max-w-7xl container-px py-16 lg:py-20 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Free Consultation
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="gold" size="lg">
              <CalendarCheck className="h-5 w-5" /> Schedule a Call
            </Button>
            <Button href={whatsappLink(whatsappMessage)} external variant="whatsapp" size="lg">
              <MessageCircle className="h-5 w-5" /> WhatsApp Consultation
            </Button>
            <Button href={telLink} external variant="outline" size="lg" className="!bg-transparent !text-white !border-white/30 hover:!border-white">
              <PhoneCall className="h-5 w-5" /> {site.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
