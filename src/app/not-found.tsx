import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-royal/25 blur-[100px]" />
      <div className="relative mx-auto max-w-lg px-6 text-center">
        <p className="font-display text-7xl font-extrabold text-gradient-gold">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold">Page not found</h1>
        <p className="mt-3 text-slate-300">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back on track.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="gold" size="lg">
            <Home className="h-5 w-5" /> Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="!bg-transparent !text-white !border-white/30">
            <ArrowLeft className="h-5 w-5" /> Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
