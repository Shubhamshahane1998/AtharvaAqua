import type { Metadata } from "next";
import { Breadcrumbs, Section } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const trail = [
  { href: "/", label: "Home" },
  { href: "/terms", label: "Terms of Service" },
];

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms covering RO water purifier service, spare parts, warranty and AMC plans provided by ${site.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <Breadcrumbs trail={trail} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink">Terms of Service</h1>
          <p className="mt-3 text-sm text-muted">Last updated: 29 September 2026</p>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted">
            <section>
              <h2 className="text-lg font-bold text-ink">Service bookings</h2>
              <p className="mt-2">
                Bookings are confirmed by phone or WhatsApp. Response times quoted on this site,
                including the 2-hour target, are best-effort targets and may vary with technician
                availability, distance, weather and traffic.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">Quotes and pricing</h2>
              <p className="mt-2">
                A visit charge may apply for diagnosis. Any spare parts or additional work are
                quoted and approved by you before the work begins. Prices shown on enquiry are
                valid for the period stated at the time of quoting.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">Parts and warranty</h2>
              <p className="mt-2">
                We fit genuine spare parts. Warranty on parts is as provided by the respective
                manufacturer; workmanship warranty is as stated on your service invoice. Warranty
                does not cover damage from tampering, third-party repairs, unsuitable input water
                or electrical faults outside the purifier.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">AMC plans</h2>
              <p className="mt-2">
                Annual maintenance contracts cover the services listed in your specific plan for
                the stated period. Consumables or repairs outside the plan are billed separately
                after your approval.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">Cancellation</h2>
              <p className="mt-2">
                You may cancel or reschedule a booked visit free of charge by informing us before
                the technician is dispatched.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">Contact</h2>
              <p className="mt-2">
                Questions about these terms: {site.phoneDisplay} or{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-brand-600 hover:underline">
                  {site.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
