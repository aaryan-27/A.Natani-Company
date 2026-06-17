"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { serviceOptions, whatsappLink, site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Props = {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  tone?: "light" | "dark";
  compact?: boolean;
  source?: string;
};

export function LeadForm({
  title = "Request a Free Consultation",
  subtitle = "Share your details and our CA team will get back to you shortly.",
  defaultService,
  tone = "light",
  compact = false,
  source = "website",
}: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const dark = tone === "dark";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    if (!data.name || !data.phone) {
      setError("Please enter your name and phone number.");
      return;
    }

    setStatus("loading");
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
    } catch {
      // Non-blocking — WhatsApp remains the guaranteed delivery channel.
    }

    // Open WhatsApp with a prefilled summary so the lead reaches us instantly.
    const msg =
      `New consultation request%0A%0A` +
      `Name: ${data.name}%0A` +
      `Phone: ${data.phone}%0A` +
      (data.email ? `Email: ${data.email}%0A` : "") +
      (data.service ? `Service: ${data.service}%0A` : "") +
      (data.message ? `Message: ${data.message}` : "");
    window.open(
      `https://wa.me/${site.phoneRaw}?text=${msg}`,
      "_blank",
      "noopener"
    );

    setStatus("done");
    form.reset();
  }

  if (status === "done") {
    return (
      <div
        className={cn(
          "rounded-2xl border p-8 text-center",
          dark ? "border-white/15 bg-white/5" : "border-line bg-white shadow-card"
        )}
      >
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className={cn("mt-4 font-heading text-xl font-bold", dark ? "text-white" : "text-navy")}>
          Thank you!
        </h3>
        <p className={cn("mt-2 text-sm", dark ? "text-slate-300" : "text-muted")}>
          We&apos;ve received your request. Our team will reach out shortly. For an
          instant response, continue on WhatsApp.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-heading font-semibold text-white"
        >
          <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
        </a>
        <button
          onClick={() => setStatus("idle")}
          className={cn("mt-4 block w-full text-xs underline", dark ? "text-slate-400" : "text-muted")}
        >
          Submit another request
        </button>
      </div>
    );
  }

  const labelCls = cn(
    "mb-1.5 block text-xs font-semibold font-heading uppercase tracking-wide",
    dark ? "text-slate-300" : "text-navy-700"
  );
  const inputCls = cn(
    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors",
    dark
      ? "border-white/15 bg-white/5 text-white placeholder:text-slate-500 focus:border-gold"
      : "border-line bg-white text-navy placeholder:text-slate-400 focus:border-royal focus:ring-2 focus:ring-royal/15"
  );

  return (
    <div
      className={cn(
        "rounded-2xl border p-6 sm:p-7",
        dark ? "border-white/15 bg-white/5 backdrop-blur" : "border-line bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
      )}
    >
      <div className="mb-5">
        <h3 className={cn("font-heading text-xl font-bold", dark ? "text-white" : "text-navy")}>
          {title}
        </h3>
        <p className={cn("mt-1 text-sm", dark ? "text-slate-300" : "text-muted")}>{subtitle}</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className={cn(!compact && "grid sm:grid-cols-2 gap-4")}>
          <div>
            <label htmlFor="name" className={labelCls}>Full Name *</label>
            <input id="name" name="name" required placeholder="Your name" className={inputCls} />
          </div>
          <div>
            <label htmlFor="phone" className={labelCls}>Phone *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              placeholder="+91 XXXXX XXXXX"
              className={inputCls}
            />
          </div>
        </div>

        <div className={cn(!compact && "grid sm:grid-cols-2 gap-4")}>
          <div>
            <label htmlFor="email" className={labelCls}>Email</label>
            <input id="email" name="email" type="email" placeholder="you@email.com" className={inputCls} />
          </div>
          <div>
            <label htmlFor="service" className={labelCls}>Service Required</label>
            <select
              id="service"
              name="service"
              defaultValue={defaultService ?? ""}
              className={cn(inputCls, "appearance-none")}
            >
              <option value="" disabled>Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelCls}>Message</label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 2 : 3}
            placeholder="Tell us briefly what you need help with…"
            className={inputCls}
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-royal px-6 py-3.5 font-heading font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:bg-royal-600 hover:-translate-y-0.5 disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" /> Sending…
            </>
          ) : (
            "Request Consultation"
          )}
        </button>

        <p className={cn("flex items-center justify-center gap-1.5 text-xs", dark ? "text-slate-400" : "text-muted")}>
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
          100% confidential. We never share your information.
        </p>
      </form>
    </div>
  );
}
