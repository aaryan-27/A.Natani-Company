"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { whatsappLink, site } from "@/lib/site";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 lg:bottom-6 lg:right-6 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="w-[19rem] overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.25)] ring-1 ring-line"
          >
            <div className="bg-[#075E54] px-4 py-3 text-white">
              <p className="font-heading font-semibold">Yogendra Jain & Co.</p>
              <p className="text-xs text-emerald-100">Typically replies within minutes</p>
            </div>
            <div className="p-4">
              <div className="rounded-xl rounded-tl-none bg-light p-3 text-sm text-navy-700">
                👋 Hi! How can we help you with your tax, GST or compliance needs
                today?
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-heading font-semibold text-white hover:brightness-105"
              >
                <MessageCircle className="h-5 w-5" /> Start Chat
              </a>
              <p className="mt-2 text-center text-[11px] text-muted">
                or call {site.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-105"
      >
        {!open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
        )}
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
