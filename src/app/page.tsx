import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { Stats } from "@/components/home/Stats";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SectionHeading } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTABand } from "@/components/CTABand";
import { Button } from "@/components/ui/Button";
import { FaqSchema } from "@/components/Schema";
import { homeFaqs } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhoWeServe />

      {/* Services overview */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete CA services under one roof"
            subtitle="From tax filing to business registration and advisory — everything your finances need, handled by experts."
          />
          <div className="mt-14">
            <ServicesGrid />
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="outline" size="lg">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Stats />
      <WhyChoose />
      <Process />
      <Testimonials />

      {/* FAQ */}
      <section className="bg-light py-16 lg:py-24">
        <div className="mx-auto max-w-7xl container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              subtitle="Quick answers to what clients ask us most. Still unsure? Reach out — we're happy to help."
              align="left"
            />
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Ask us anything <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <FaqAccordion faqs={homeFaqs} />
          </div>
        </div>
      </section>

      <CTABand />
      <FaqSchema faqs={homeFaqs} />

      <p className="sr-only">
        <Link href="/services/income-tax">Income tax filing in Jaipur</Link>,{" "}
        <Link href="/services/gst">GST consultant in Jaipur</Link>,{" "}
        <Link href="/services/company-registration">company registration in Jaipur</Link>.
      </p>
    </>
  );
}
