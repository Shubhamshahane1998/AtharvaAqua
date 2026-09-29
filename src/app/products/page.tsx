import type { Metadata } from "next";
import { ProductsGrid } from "@/components/sections";
import { Breadcrumbs, CtaBand, Section, SectionHeading } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, businessId } from "@/lib/schema";
import { products, site } from "@/lib/site";

const trail = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

export const metadata: Metadata = {
  title: "Water Purifiers for Home & Business in Pune",
  description:
    "Buy RO, UV and UF water purifiers in Pune & Pimpri-Chinchwad with professional installation, genuine parts and full after-sales service support from Atharva Aqua.",
  alternates: { canonical: "/products" },
};

function productListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Water purifiers available from Atharva Aqua",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: `${p.tagline}. ${p.features.join(". ")}.`,
        image: new URL(p.image, site.url).toString(),
        brand: { "@type": "Brand", name: p.name },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
          seller: { "@id": businessId },
        },
      },
    })),
  };
}

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), productListSchema()]} />
      <Breadcrumbs trail={trail} />
      <Section className="pb-0">
        <SectionHeading
          eyebrow="Products"
          title="Water Purifiers for Your"
          accent="Home & Business"
          subtitle="Every purifier we sell comes with professional installation, genuine spare parts, and ongoing service support. Prices are shared on enquiry, based on your water quality and capacity needs."
        />
      </Section>
      <ProductsGrid heading={false} />
      <CtaBand title="Not sure which purifier fits your water?" subtitle="Share your TDS reading and family size — we'll recommend the right model, honestly." />
    </>
  );
}
