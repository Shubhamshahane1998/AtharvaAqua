import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Section, SectionHeading } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { areas } from "@/lib/site";

const trail = [
  { href: "/", label: "Home" },
  { href: "/service-areas", label: "Service Areas" },
];

export const metadata: Metadata = {
  title: "RO Service Areas in Pune & Pimpri-Chinchwad",
  description:
    "Atharva Aqua provides doorstep RO water purifier repair, installation and AMC across Pune and Pimpri-Chinchwad — Hinjewadi, Wakad, Baner, Kothrud, Hadapsar, Kharadi and more.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  const grouped = areas.reduce<Record<string, typeof areas>>((acc, a) => {
    (acc[a.parent] ??= []).push(a);
    return acc;
  }, {});

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <Breadcrumbs trail={trail} />
      <Section>
        <SectionHeading
          eyebrow="Service Areas"
          title="Doorstep RO Service Across"
          accent="Pune & Pimpri-Chinchwad"
          subtitle="Choose your area to see local service details and response times. Don't see your locality? Call us — we cover most of the metropolitan region."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {Object.entries(grouped).map(([parent, list]) => (
            <div key={parent} className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-ink">{parent}</h2>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {list.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/ro-service/${a.slug}`}
                      className="text-sm text-muted hover:text-brand-600"
                    >
                      RO service in {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
