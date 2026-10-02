export const site = {
  name: "Atharva Aqua Sales & Services",
  shortName: "Atharva Aqua",
  tagline: "RO Water Purifier Repair & Service at Your Doorstep",
  description:
    "Expert RO water purifier repair, installation, filter replacement and AMC maintenance in Pune & Pimpri-Chinchwad. Certified technicians, genuine parts, 2-hour response time.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://atharvaaquasaleservice.in",
  phone: "+918088276882",
  phoneDisplay: "+91 80882 76882",
  whatsapp: "918088276882",
  email: "biradardeepak120@gmail.com",
  address: {
    street: "Pune",
    city: "Pune",
    region: "Maharashtra",
    postalCode: "411001",
    country: "IN",
  },
  geo: { lat: 18.5204, lng: 73.8567 },
  hours: "Mo-Su 08:00-21:00",
  /** Google Business Profile. Linking it from schema ties the site to the Maps listing. */
  googleBusinessProfile: "https://maps.app.goo.gl/eD2fzUmuATwhNLov8",
  /**
   * The share link from the Business Profile's own Share button, used for the
   * footer address. Same listing as above (entity /g/11p1gdgj2r) but it opens
   * the Google listing panel rather than Maps directions. Schema keeps the
   * maps.app.goo.gl form, because `hasMap` is defined as a map URL.
   */
  googleListing: "https://share.google/g88i74fwoxPyo3ptQ",
} as const;

/**
 * Prefixes a public-folder path with the deployment base path.
 *
 * `next/image` with `unoptimized: true` emits `src` verbatim instead of routing
 * it through the optimizer, so basePath is never applied — every image would
 * 404 on a project site served from a subdirectory.
 */

export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

/**
 * Set on any deploy that is a preview rather than the canonical site.
 *
 * Publishing the same pages at two public URLs makes them compete with each
 * other; the secondary copy is marked noindex so only one can rank.
 */
export const noIndex = process.env.NEXT_PUBLIC_NOINDEX === "true";

export const telLink = `tel:${site.phone}`;

/**
 * The link-preview card, 1200x630.
 *
 * The filename carries a version suffix on purpose: WhatsApp, Facebook and
 * LinkedIn cache a scraped preview per URL for weeks, so editing the image in
 * place leaves every existing share showing the old one. Bump the number
 * whenever the artwork changes and the new card is picked up immediately.
 */
export const ogImage = "/images/og-cover-2.jpg";

/**
 * Joins a path onto the site URL.
 *
 * `new URL("/services", base)` discards the base's own path, which silently
 * breaks every canonical, sitemap entry and schema id when the site is served
 * from a subdirectory — as it is on a GitHub Pages project site.
 */
export const abs = (path: string) => {
  const root = site.url.replace(/\/$/, "");
  return path === "/" ? root : `${root}${path.startsWith("/") ? path : `/${path}`}`;
};

export const whatsappLink = (msg = "Hi, I need RO water purifier service.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export type Service = {
  slug: string;
  title: string;
  image: string;
  short: string;
  body: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "ro-repair-service",
    image: "/images/services/ro-repair-service.webp",
    title: "RO Repair Service",
    short:
      "Fast diagnosis and repair for RO systems with low water flow, leakage, unusual noise, and poor purification performance.",
    body: "Our certified technicians diagnose and repair every part of your RO system — pump, membrane, solenoid valve, float valve, adaptor, tank and tubing. Most faults are fixed in a single doorstep visit using genuine spare parts, with a service warranty on the work carried out.",
    bullets: [
      "Low water flow and no-water faults",
      "Leakage and continuous drain issues",
      "Noisy pump or motor replacement",
      "Bad taste, odour or high output TDS",
    ],
  },
  {
    slug: "ro-installation",
    image: "/images/services/ro-installation.webp",
    title: "RO Installation",
    short:
      "Professional installation of all major RO, UV, and UF water purifiers with complete testing and setup.",
    body: "New purifier installation done right — correct wall mounting, inlet tapping, drain routing, pressure check and TDS calibration. We install every major brand and hand over only after a full performance test in front of you.",
    bullets: [
      "Wall-mount and under-sink installation",
      "Inlet, drain and power line setup",
      "Input and output TDS calibration",
      "Product demo and usage guidance",
    ],
  },
  {
    slug: "filter-replacement",
    image: "/images/services/filter-replacement.webp",
    title: "Filter Replacement",
    short:
      "Replace old filters and membranes with genuine parts to ensure clean, safe, and great-tasting drinking water.",
    body: "Sediment, carbon and RO membrane replacement using 100% original components. We check the pre-filter condition, flush the system and verify purity with a TDS meter before leaving.",
    bullets: [
      "Sediment and pre-carbon filters",
      "RO membrane replacement",
      "Post-carbon and mineral cartridge",
      "UV lamp replacement",
    ],
  },
  {
    slug: "amc-maintenance-plan",
    image: "/images/services/amc-maintenance-plan.webp",
    title: "AMC Maintenance Plan",
    short:
      "Annual maintenance plans with scheduled servicing, preventive checkups, and priority technician support.",
    body: "Affordable annual maintenance contracts covering scheduled filter changes, preventive checkups and priority support. We call you before each service is due, so your purifier never runs on an expired filter.",
    bullets: [
      "Scheduled periodic servicing",
      "Priority technician allocation",
      "Preventive health checkups",
      "Transparent, fixed annual pricing",
    ],
  },
  {
    slug: "uv-uf-repair",
    image: "/images/services/uv-uf-repair.webp",
    title: "UV & UF Repair",
    short:
      "Reliable repair and servicing for UV and UF water purifiers to maintain safe and hygienic drinking water.",
    body: "UV lamp, ballast, quartz sleeve and UF module servicing for both gravity and electric purifiers. We restore correct disinfection performance and verify it before handover.",
    bullets: [
      "UV lamp and ballast replacement",
      "Quartz sleeve cleaning",
      "UF membrane servicing",
      "Full system sanitisation",
    ],
  },
  {
    slug: "water-quality-testing",
    image: "/images/services/water-quality-testing.webp",
    title: "Water Quality Testing",
    short:
      "Professional water quality testing to check TDS, purity, and recommend the right filtration solution.",
    body: "On-site testing of TDS, hardness and general water quality, with an honest recommendation on the right purification technology for your supply — so you buy only what your water actually needs.",
    bullets: [
      "Input and output TDS measurement",
      "Hardness and taste assessment",
      "Technology recommendation (RO / UV / UF)",
      "No-obligation expert advice",
    ],
  },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "aqua-era",
    name: "Aqua ERA",
    tagline: "Pure. Premium. Powerful.",
    image: "/images/products/aqua-era.webp",
    features: [
      "Advanced multi-stage purification",
      "Large storage tank",
      "Stylish and space-saving design",
    ],
  },
  {
    slug: "aqua-innovative",
    name: "Aqua Innovative",
    tagline: "Reliable & Efficient",
    image: "/images/products/aqua-innovative.webp",
    features: [
      "RO + UV + UF purification",
      "Suitable for home use",
      "Professional installation included",
    ],
  },
  {
    slug: "lexpure-ivory",
    name: "Lexpure Ivory",
    tagline: "Clean Water, Healthy Life",
    image: "/images/products/lexpure-ivory.webp",
    features: [
      "Advanced filtration system",
      "Compact and elegant design",
      "Ideal for small families",
    ],
  },
  {
    slug: "purasis-puroaqua",
    name: "Purasis Puroaqua",
    tagline: "Premium Purification",
    image: "/images/products/purasis-puroaqua.webp",
    features: [
      "Multi-stage purification",
      "Modern and durable design",
      "Professional installation included",
    ],
  },
  {
    slug: "aqua-supreme",
    name: "Aqua Supreme",
    tagline: "Advanced & Stylish",
    image: "/images/products/aqua-supreme.webp",
    features: [
      "Titanium series technology",
      "Excellent purification capacity",
      "Ideal for home and office use",
    ],
  },
  {
    slug: "lx-one-titanium",
    name: "LX One Titanium",
    tagline: "Premium & Stylish",
    image: "/images/products/lx-one-titanium.webp",
    features: [
      "13L storage capacity",
      "Titanium series design",
      "Smart LED indicators",
    ],
  },
];

export const whyUs = [
  {
    title: "Pure & Safe Drinking Water",
    body: "We ensure clean, healthy, and safe drinking water for you and your family.",
  },
  {
    title: "Genuine Spare Parts",
    body: "We use 100% original filters and parts for long-lasting performance.",
  },
  {
    title: "Expert & Certified Technicians",
    body: "Skilled and experienced professionals providing reliable RO solutions.",
  },
  {
    title: "Affordable AMC Plans",
    body: "Cost-effective maintenance plans to keep your purifier always in top condition.",
  },
  {
    title: "Same-Day Doorstep Service",
    body: "Quick response and on-time service at your doorstep across your city.",
  },
  {
    title: "24/7 Customer Support",
    body: "We're always here to help you with any RO-related queries or issues.",
  },
];

export const assurances = [
  { title: "100% Satisfaction Guarantee", body: "Your satisfaction is our top priority." },
  { title: "Water Quality Assurance", body: "Advanced testing for pure and safe water." },
  { title: "Trusted by Hundreds", body: "Trusted by homes and businesses across the city." },
  { title: "Service You Can Trust", body: "Honest service, transparent pricing, complete trust." },
];

export const testimonials = [
  {
    quote:
      "Excellent service! The technician arrived within an hour of my call and fixed the leakage issue perfectly. Very professional.",
    name: "Rahul Sharma",
    avatar: "/images/avatars/avatar-1.webp",
    role: "Pune Resident",
  },
  {
    quote:
      "Atharva Aqua handled our office water purifier installation. The TDS calibration was done precisely. Highly recommended for AMC.",
    name: "Priya Deshmukh",
    avatar: "/images/avatars/avatar-2.webp",
    role: "Business Owner",
  },
  {
    quote:
      "Been using their AMC plan for 2 years. Never had to worry about filter changes. They call us before service is due. Hassle-free!",
    name: "Amit Patel",
    avatar: "/images/avatars/avatar-3.webp",
    role: "Homeowner",
  },
];

export type { Area } from "./areas";
export { areas, areaBySlug } from "./areas";

export const faqs = [
  {
    q: "How quickly can a technician reach me?",
    a: "We target a 2-hour response time across Pune and Pimpri-Chinchwad, with same-day doorstep service for most repair requests booked before evening.",
  },
  {
    q: "Which RO water purifier brands do you repair in Pune?",
    a: "Yes. Our technicians service every major RO, UV and UF purifier brand — including Kent, Aquaguard, Pureit, Livpure, AO Smith, Blue Star and Havells — using genuine spare parts and filters.",
  },
  {
    q: "How often should RO filters be replaced?",
    a: "Sediment and carbon filters are typically replaced every 6 to 12 months, and the RO membrane every 2 to 3 years, depending on your input water TDS and daily usage.",
  },
  {
    q: "What does the AMC plan cover?",
    a: "Our annual maintenance contract covers scheduled servicing, preventive checkups, priority technician support and reminder calls before each service is due.",
  },
  {
    q: "Do you provide service for offices and commercial spaces?",
    a: "Yes. We serve homes, offices, restaurants and commercial spaces, including multi-unit installations and commercial AMC plans.",
  },
];
