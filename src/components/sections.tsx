import Image from "next/image";
import Link from "next/link";
import { CheckIcon, assuranceIcons } from "./icons";
import { ProductCarousel } from "./product-carousel";
import { CallButton, Section, SectionHeading, TickList } from "./ui";
import { asset,
  assurances,
  faqs as defaultFaqs,
  services,
  testimonials,
  whyUs,
} from "@/lib/site";

export function ServicesGrid({ heading = true, limit }: { heading?: boolean; limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="bg-surface">
      <Section id="services">
        {heading && (
          <SectionHeading
            title="Our"
            accent="Premium Services"
            subtitle="Complete RO water purifier care — repair, installation, filters, AMC and testing — delivered at your doorstep by certified technicians."
          />
        )}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => {
            return (
              <article
                key={s.slug}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_14px_rgba(11,43,87,0.07)] transition-shadow hover:shadow-[0_6px_24px_rgba(11,43,87,0.12)]"
              >
                <div className="relative aspect-[320/252]">
                  <Image
                    src={asset(s.image)}
                    alt={`${s.title} by Atharva Aqua technicians`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <Image
                    src={asset(`/images/icons/overlay-${i % 6}.webp`)}
                    alt=""
                    aria-hidden="true"
                    width={56}
                    height={56}
                    className="absolute right-3 top-3 h-14 w-14 rounded-2xl shadow-md"
                  />
                </div>

                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h3 className="text-base font-bold text-ink">
                    <Link href={`/services/${s.slug}`} className="hover:text-brand-600">
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                  <CallButton variant="outline" className="mt-6 w-full max-w-[220px]" />
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

export function ProductsGrid({ heading = true }: { heading?: boolean }) {
  return (
    <Section id="products">
      {heading && (
        <SectionHeading
          title="Find the Right Water Purifier"
          accent=""
          subtitle="Explore our range of reliable water purifiers with professional installation, genuine parts, and full service support."
          secondLine="for Your Home & Business"
        />
      )}
      <ProductCarousel />
    </Section>
  );
}

const whyUsIcons = [
  "/images/icons/group-5.webp",
  "/images/icons/group-11.webp",
  "/images/icons/group-9.webp",
  "/images/icons/group-10.webp",
  "/images/icons/group-8.webp",
  "/images/icons/group-7.webp",
];

export function WhyUsGrid() {
  const left = whyUs.filter((_, i) => i % 2 === 0);
  const right = whyUs.filter((_, i) => i % 2 === 1);

  const Card = ({ item, index }: { item: (typeof whyUs)[number]; index: number }) => {
    return (
      <div className="rounded-xl border-l-[3px] border-brand-500 bg-white p-4 shadow-[0_2px_12px_rgba(11,43,87,0.06)]">
        <Image
          src={asset(whyUsIcons[index % whyUsIcons.length])}
          alt=""
          aria-hidden="true"
          width={56}
          height={56}
          className="h-14 w-14"
        />
        <h3 className="mt-2.5 text-base font-bold leading-snug text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
      </div>
    );
  };

  return (
    <Section id="why-us">
      <SectionHeading
        title="Why Choose"
        accent="Atharva Aqua ?"
        subtitle="We provide reliable RO water purifier services with a focus on quality, trust, and customer satisfaction"
      />

      <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_minmax(0,420px)_1fr]">
        <div className="space-y-6">
          {left.map((w, i) => (
            <Card key={w.title} item={w} index={i * 2} />
          ))}
        </div>

        {/* Purifier + splash composited here rather than shipped as one flat image. */}
        <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:order-none">
          <div className="absolute left-1/2 top-[6%] h-[68%] w-[68%] -translate-x-1/2 rounded-full bg-brand-50" />
          <Image
            src={asset("/images/water-splash.webp")}
            alt=""
            aria-hidden="true"
            fill
            sizes="420px"
            className="object-contain object-bottom"
          />
          <Image
            src={asset("/images/water-purifier.webp")}
            alt="KENT RO water purifier serviced by Atharva Aqua"
            fill
            sizes="420px"
            className="scale-[0.62] object-contain"
            style={{ objectPosition: "center 42%" }}
          />
        </div>

        <div className="space-y-6">
          {right.map((w, i) => (
            <Card key={w.title} item={w} index={i * 2 + 1} />
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-0 rounded-2xl bg-brand-50/80 px-4 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-brand-300">
        {assurances.map((a, i) => {
          const Icon = assuranceIcons[i % assuranceIcons.length];
          return (
            <div key={a.title} className="flex items-start gap-4 px-3 py-2 lg:px-5 lg:py-0 lg:first:pl-4 lg:last:pr-4">
              <Icon className="mt-0.5 h-10 w-10 shrink-0 text-brand-600" />
              <div>
                <h3 className="text-base font-semibold leading-snug text-ink">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <div className="bg-surface">
      <Section id="testimonials">
        <SectionHeading title="What Our" accent="Customers Say" />
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 shadow-[0_2px_14px_rgba(11,43,87,0.07)]">
              <div className="flex gap-1 text-brand-500" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="m10 1.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={asset(t.avatar)}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span>
                  <span className="block text-sm font-bold text-ink">{t.name}</span>
                  <span className="block text-xs text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </div>
  );
}

export function FaqList({ items = defaultFaqs }: { items?: { q: string; a: string }[] }) {
  return (
    <Section id="faq">
      <SectionHeading
        title="Frequently Asked"
        accent="Questions"
        subtitle="Quick answers about RO service, filter life, AMC plans and response times."
      />
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200">
        {items.map((f) => (
          <details key={f.q} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-ink">
              {f.q}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-brand-500 transition-transform group-open:rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

const aboutCollage = [
  "/images/products/lx-one-titanium.webp",
  "/images/products/aqua-supreme.webp",
  "/images/products/purasis-puroaqua.webp",
  "/images/products/aqua-era.webp",
  "/images/products/aqua-innovative.webp",
  "/images/products/lexpure-ivory.webp",
];

export function AboutBlock() {
  return (
    <section id="about" className="about-bloom">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          About Atharva Aqua Sales &amp; Services
        </h2>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {aboutCollage.map((src) => (
              <div
                key={src}
                className="relative aspect-3/4 overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10"
              >
                <Image
                  src={asset(src)}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 640px) 160px, 30vw"
                  className="object-contain p-1.5"
                />
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-base font-bold text-white">
              Your Trusted Partner for Complete RO Water Purifier Solutions
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              At Atharva Aqua Sales &amp; Services, we provide reliable RO repair, installation,
              filter replacement, AMC maintenance, UV &amp; UF repair, water quality testing, and
              technical support for all major brands. Our goal is to deliver clean, safe, and
              healthy drinking water through fast, affordable, and professional service.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              Whether you need routine maintenance, urgent repairs, or a new installation, our
              experienced technicians offer dependable doorstep service using genuine spare parts.
              Trusted by homes, offices, restaurants, and commercial spaces, we&apos;re committed to
              quality workmanship, transparent pricing, and complete customer satisfaction.
            </p>

            <ul className="mt-6 space-y-2.5">
              {[
                "Certified & Skilled RO Technicians",
                "Genuine Spare Parts & Filters",
                "Same-Day Doorstep Service",
                "Affordable AMC & Maintenance Plans",
                "Reliable Support for All Major Brands",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white">
                  <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white">
                    <CheckIcon className="h-2.5 w-2.5 text-brand-700" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <CallButton label="Book Your Service Today" variant="light" className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** The light-background version used on the standalone /about page. */
export function AboutDetail() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-brand-50">
          <Image
            src={asset("/images/water-purifier.webp")}
            alt="RO water purifier serviced by Atharva Aqua"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-contain p-8"
          />
        </div>
        <div>
          <SectionHeading
            as="h1"
            center={false}
            eyebrow="About Atharva Aqua"
            title="Your Trusted Partner for Complete"
            accent="RO Water Purifier Solutions"
          />
          <p className="mt-5 text-sm leading-relaxed text-muted">
            At Atharva Aqua Sales &amp; Services, we provide reliable RO repair, installation,
            filter replacement, AMC maintenance, UV &amp; UF repair, water quality testing, and
            technical support for all major brands.
          </p>
          <div className="mt-6">
            <TickList
              items={[
                "Certified & skilled RO technicians",
                "Genuine spare parts & filters",
                "Same-day doorstep service",
                "Affordable AMC & maintenance plans",
                "Reliable support for all major brands",
              ]}
            />
          </div>
          <CallButton label="Book Your Service Today" className="mt-8" />
        </div>
      </div>
    </Section>
  );
}
