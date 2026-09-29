import type { Metadata } from "next";
import { Breadcrumbs, Section } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const trail = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy Policy" },
];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects the personal information you share when booking RO water purifier service.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <Breadcrumbs trail={trail} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted">Last updated: 29 September 2026</p>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted">
            <section>
              <h2 className="text-lg font-bold text-ink">Information we collect</h2>
              <p className="mt-2">
                When you call, message or submit an enquiry, we collect the details you choose to
                give us — typically your name, phone number, service address or locality, and a
                description of the purifier issue. We do not ask for financial, card or government
                identification details through this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">How we use it</h2>
              <p className="mt-2">
                Your information is used only to schedule and deliver the service you requested, to
                contact you about the visit, to send AMC renewal or filter-change reminders where
                you have asked for them, and to maintain a service history for your purifier.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">Sharing</h2>
              <p className="mt-2">
                We do not sell or rent your personal information. Details are shared only with the
                technician assigned to your job, and with any spare-parts supplier where a warranty
                claim requires it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">Cookies and analytics</h2>
              <p className="mt-2">
                This website does not set advertising cookies. If analytics are enabled in future,
                they will be limited to aggregate, non-identifying traffic measurement, and this
                policy will be updated before that happens.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">Your choices</h2>
              <p className="mt-2">
                You can ask us to correct or delete the contact details we hold for you at any time
                by writing to{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-brand-600 hover:underline">
                  {site.email}
                </a>
                {" "}or calling {site.phoneDisplay}.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">Contact</h2>
              <p className="mt-2">
                {site.name}, Pune &amp; Pimpri-Chinchwad, Maharashtra. Phone {site.phoneDisplay}.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
