import { abs, areas, faqs, services, site } from "./site";

export const businessId = abs("/#business");

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    image: abs("/images/og-cover.jpg"),
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHours: site.hours,
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: a.name,
    })),
    knowsAbout: services.map((s) => s.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "RO Water Purifier Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        url: abs(`/services/${s.slug}`),
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.short,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": abs("/#website"),
    url: site.url,
    name: site.name,
    publisher: { "@id": businessId },
  };
}

export function serviceSchema(slug: string, areaName?: string) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: areaName ? `${service.title} in ${areaName}` : service.title,
    description: service.short,
    serviceType: service.title,
    url: abs(`/services/${slug}`),
    provider: { "@id": businessId },
    areaServed: areaName
      ? { "@type": "City", name: areaName }
      : areas.map((a) => ({ "@type": "City", name: a.name })),
  };
}

export function faqSchema(items: { q: string; a: string }[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { href: string; label: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.label,
      item: abs(t.href),
    })),
  };
}
