import type { Metadata } from "next";
import { AboutDetail, Testimonials, WhyUsGrid } from "@/components/sections";
import { Breadcrumbs, CtaBand } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

const trail = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const metadata: Metadata = {
  title: "About Atharva Aqua Sales & Services",
  description:
    "Atharva Aqua Sales & Services provides RO repair, installation, filter replacement, AMC maintenance and water testing across Pune & Pimpri-Chinchwad using genuine spare parts.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <Breadcrumbs trail={trail} />
      <AboutDetail />
      <WhyUsGrid />
      <Testimonials />
      <CtaBand />
    </>
  );
}
