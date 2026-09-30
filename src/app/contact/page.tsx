import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { Breadcrumbs, CallButton, Section, SectionHeading, WhatsAppButton } from "@/components/ui";
import { ClockIcon, MailIcon, PhoneSolidIcon, PinIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { site, telLink } from "@/lib/site";

const trail = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Contact Atharva Aqua — Book RO Service in Pune",
  description: `Call ${site.phoneDisplay} or WhatsApp us to book RO water purifier repair, installation or AMC in Pune and Pimpri-Chinchwad. Open daily, 8 AM to 9 PM.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <Breadcrumbs trail={trail} />
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Book a Technician or"
          accent="Ask a Question"
          subtitle="The fastest way to reach us is a call or WhatsApp message. Prefer to write it out? Use the form and we'll get back to you."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-ink">Send an enquiry</h2>
              <p className="mt-1 mb-6 text-sm text-muted">
                Tell us what&apos;s wrong and where you are — we&apos;ll confirm a slot.
              </p>
              <EnquiryForm />
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl bg-brand-50/70 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-ink">Contact details</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <PhoneSolidIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">Phone</span>
                    <a href={telLink} className="font-semibold text-ink hover:text-brand-600">
                      {site.phoneDisplay}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">Email</span>
                    <a href={`mailto:${site.email}`} className="break-all font-semibold text-ink hover:text-brand-600">
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">Service area</span>
                    <span className="font-semibold text-ink">Pune &amp; Pimpri-Chinchwad, Maharashtra</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">Hours</span>
                    <span className="font-semibold text-ink">Every day, 8:00 AM – 9:00 PM</span>
                  </span>
                </li>
              </ul>

              <div className="mt-7 flex flex-col gap-3">
                <CallButton label="Call Now" />
                <WhatsAppButton />
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
