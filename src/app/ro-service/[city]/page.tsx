import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { FaqList, Testimonials, WhyUsGrid } from "@/components/sections";
import { Breadcrumbs, Section, SectionHeading } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { areas, faqs, services, site } from "@/lib/site";

type Params = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city } = await params;
  const area = areas.find((a) => a.slug === city);
  if (!area) return {};
  const title = `RO Service in ${area.name} — Water Purifier Repair & Installation`;
  const description = `Doorstep RO water purifier repair, installation, filter replacement and AMC in ${area.name}. Certified technicians, genuine parts, 2-hour response. Call ${site.phoneDisplay}.`;
  return {
    title,
    description,
    alternates: { canonical: `/ro-service/${area.slug}` },
    openGraph: { title, description, url: `/ro-service/${area.slug}` },
  };
}

export default async function AreaPage({ params }: Params) {
  const { city } = await params;
  const area = areas.find((a) => a.slug === city);
  if (!area) notFound();

  const trail = [
    { href: "/", label: "Home" },
    { href: "/service-areas", label: "Service Areas" },
    { href: `/ro-service/${area.slug}`, label: area.name },
  ];

  const localFaqs = [
    {
      q: `Do you provide same-day RO service in ${area.name}?`,
      a: `Yes. ${area.name} is inside our regular service zone, and requests booked before evening are normally attended the same day, with a 2-hour target response for urgent breakdowns.`,
    },
    ...faqs.slice(1),
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema("ro-repair-service", area.name)!,
          faqSchema(localFaqs),
          breadcrumbSchema(trail),
        ]}
      />
      <Breadcrumbs trail={trail} />

      <Hero
        title={`RO Service in ${area.name}`}
        highlight="Repair & Installation"
        suffix="at Your Doorstep"
        intro={`Fast, reliable RO water purifier repair, installation, filter replacement and AMC across ${area.name}, ${area.parent}. Certified technicians, genuine spare parts, and transparent pricing.`}
      />

      <Section>
        <SectionHeading
          center={false}
          title={`Water purifier service in ${area.name}`}
          subtitle={`Our technicians cover ${area.name} and the surrounding neighbourhoods of ${area.parent} every day of the week. Whether your purifier has stopped giving water, is leaking, is making noise or is simply due for a filter change, you can book a doorstep visit in under a minute.`}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.slug} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-base font-bold text-ink">
                <Link href={`/services/${s.slug}`} className="hover:text-brand-600">
                  {s.title} in {area.name}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.short}</p>
            </article>
          ))}
        </div>
      </Section>

      <WhyUsGrid />
      <Testimonials />
      <FaqList items={localFaqs} />

      <Section className="pt-0">
        <h2 className="text-sm font-bold uppercase tracking-wider text-ink">Nearby service areas</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {areas
            .filter((a) => a.slug !== area.slug)
            .map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/ro-service/${a.slug}`}
                  className="inline-block rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-muted hover:border-brand-300 hover:text-brand-700"
                >
                  RO service in {a.name}
                </Link>
              </li>
            ))}
        </ul>
      </Section>

    </>
  );
}
