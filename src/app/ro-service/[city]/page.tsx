import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { FaqList } from "@/components/sections";
import { Breadcrumbs, Section, TickList } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { areaBySlug, areas, faqs, services, site } from "@/lib/site";

type Params = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city } = await params;
  const area = areaBySlug(city);
  if (!area) return {};
  // Kept under ~60 characters so it is not truncated in results.
  const title = `RO Service in ${area.name} | Repair, AMC & Installation`;
  const description = `Doorstep RO water purifier repair, installation, filter replacement and AMC across ${area.name}, ${area.parent}. Genuine parts, 2-hour response. Call ${site.phoneDisplay}.`;
  return {
    title,
    description,
    alternates: { canonical: `/ro-service/${area.slug}` },
    openGraph: { title, description, url: `/ro-service/${area.slug}` },
  };
}

export default async function AreaPage({ params }: Params) {
  const { city } = await params;
  const area = areaBySlug(city);
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
    {
      q: `Which parts of ${area.name} do you cover?`,
      a: `We cover ${area.localities.slice(0, -1).join(", ")} and ${area.localities.slice(-1)}, along with the surrounding parts of ${area.parent}. If your locality is not listed, call us — it is usually still on a technician route.`,
    },
    {
      q: `How is the water quality in ${area.name}?`,
      a: area.water,
    },
    ...faqs.slice(1, 4),
  ];

  const nearby = area.nearby.map(areaBySlug).filter((a) => a !== undefined);

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
        suffix="At Your Doorstep"
        intro={`Doorstep RO water purifier repair, installation, filter replacement and AMC across ${area.name}, ${area.parent} — by certified technicians using genuine spare parts.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Water purifier service in {area.name}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{area.intro}</p>

            <h2 className="mt-10 text-xl font-bold text-ink">
              Water supply in {area.name}, and what it means for your purifier
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{area.water}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We measure input and output TDS on every visit, so the filter or membrane we
              recommend matches the water actually coming into your home — not a generic service
              schedule.
            </p>

            <h2 className="mt-10 text-xl font-bold text-ink">Localities we cover in {area.name}</h2>
            <div className="mt-4">
              <TickList items={area.localities} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Not listed? Call {site.phoneDisplay} — most of {area.parent} is already on a
              technician route.
            </p>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-brand-50/60 p-6">
              <h2 className="text-lg font-bold text-ink">Book a visit in {area.name}</h2>
              <p className="mt-2 text-sm text-muted">
                Same-day doorstep slots, 8:00 AM to 9:00 PM, every day.
              </p>
              <a
                href={`tel:${site.phone}`}
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
              >
                Call {site.phoneDisplay}
              </a>
              
            </div>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink">
          Our services in {area.name}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <FaqList items={localFaqs} />

      <Section className="pt-0">
        <h2 className="text-xl font-bold text-ink">Nearby areas we also cover</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {nearby.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/ro-service/${a.slug}`}
                className="inline-block rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-muted hover:border-brand-300 hover:text-brand-700"
              >
                RO service in {a.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/service-areas"
              className="inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 hover:border-brand-400"
            >
              All service areas
            </Link>
          </li>
        </ul>
      </Section>
    </>
  );
}
