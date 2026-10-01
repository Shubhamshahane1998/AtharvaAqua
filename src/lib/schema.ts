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
    // The structured form is what Google actually reads for hours.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    // Ties this site to the Maps listing, so Google treats them as one entity.
    sameAs: [site.googleBusinessProfile],
    hasMap: site.googleBusinessProfile,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Card, Bank Transfer",
    // A service business without premises describes its radius, not a shopfront.
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: a.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${a.parent}, Maharashtra, India`,
      },
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      geoRadius: "30000",
    },
    knowsAbout: services.map((s) => s.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "RO Water Purifier Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        url: abs("/#services"),
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
    url: abs("/#services"),
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
