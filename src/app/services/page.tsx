import type { Metadata } from "next";
import { ServicesGrid, FaqList } from "@/components/sections";
import { Breadcrumbs, CtaBand, Section, SectionHeading } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const trail = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

export const metadata: Metadata = {
  title: "RO Water Purifier Services in Pune — Repair, Installation & AMC",
  description:
    "All RO water purifier services in Pune & Pimpri-Chinchwad: repair, installation, filter replacement, AMC plans, UV & UF repair and water quality testing at your doorstep.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema()]} />
      <Breadcrumbs trail={trail} />
      <Section className="pb-0">
        <SectionHeading
          eyebrow="Services"
          title="Complete RO Water Purifier"
          accent="Care"
          subtitle="From an urgent leak to a planned annual maintenance contract — every service below is delivered at your doorstep by certified technicians using genuine parts."
        />
      </Section>
      <ServicesGrid heading={false} />
      <FaqList />
      <CtaBand />
    </>
  );
}
