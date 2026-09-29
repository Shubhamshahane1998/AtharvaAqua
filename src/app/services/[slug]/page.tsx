import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CallButton, Section, TickList, WhatsAppButton } from "@/components/ui";
import { Testimonials, WhyUsGrid } from "@/components/sections";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { areas, services } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Pune & Pimpri-Chinchwad`,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Atharva Aqua`,
      description: service.short,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const trail = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: `/services/${service.slug}`, label: service.title },
  ];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd data={[serviceSchema(service.slug)!, breadcrumbSchema(trail)]} />
      <Breadcrumbs trail={trail} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {service.title} <span className="text-brand-500">in Pune</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted">{service.short}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{service.body}</p>

            <h2 className="mt-10 text-xl font-bold text-ink">What this service covers</h2>
            <div className="mt-4">
              <TickList items={service.bullets} />
            </div>

            <h2 className="mt-10 text-xl font-bold text-ink">How the visit works</h2>
            <ol className="mt-4 space-y-4">
              {[
                ["Book in a minute", "Call or WhatsApp us with your purifier brand and the problem you're seeing."],
                ["Doorstep diagnosis", "A certified technician arrives at your slot and tests the full system on site."],
                ["Transparent quote", "You approve the parts and price before any work starts — no hidden charges."],
                ["Fix and verify", "We complete the job with genuine parts and verify output TDS before handover."],
              ].map(([heading, body], i) => (
                <li key={heading} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{heading}</span>
                    <span className="mt-1 block text-sm text-muted">{body}</span>
                  </span>
                </li>
              ))}
            </ol>

            <h2 className="mt-10 text-xl font-bold text-ink">Areas we cover</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/ro-service/${a.slug}`}
                    className="inline-block rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-muted hover:border-brand-300 hover:text-brand-700"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-brand-50/60 p-6">
              <h2 className="text-lg font-bold text-ink">Book {service.title}</h2>
              <p className="mt-2 text-sm text-muted">
                Same-day doorstep slots across Pune &amp; Pimpri-Chinchwad.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <CallButton />
                <WhatsAppButton message={`Hi, I need ${service.title} for my water purifier.`} />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-ink">Other services</h2>
              <ul className="mt-4 space-y-2.5">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-muted hover:text-brand-600"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <WhyUsGrid />
      <Testimonials />
    </>
  );
}
