# Atharva Aqua Sales & Services — website

SEO-first marketing site for an RO water purifier repair and service business in
Pune / Pimpri-Chinchwad. Next.js 16 (App Router) + React 19 + Tailwind v4, statically
prerendered.

## Run

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where the content lives

Almost all copy is data, not JSX. Edit **`src/lib/site.ts`**:

| Export | Drives |
| --- | --- |
| `site` | Business name, phone, email, address, hours, canonical URL |
| `services` | Service cards, `/services/[slug]` pages, footer, schema offer catalog |
| `products` | Product cards on `/` and `/products`, Product schema |
| `areas` | `/ro-service/[city]` local pages, footer links, `areaServed` schema |
| `whyUs`, `assurances`, `testimonials`, `faqs` | Home and service page sections |

Adding an area or a service automatically creates its page, its sitemap entry and
its internal links — no other file needs touching.

## SEO

- Per-page `metadata` / `generateMetadata` with canonicals, OG and Twitter cards
  (`src/app/layout.tsx` holds the defaults and `metadataBase`).
- JSON-LD in `src/lib/schema.ts`, injected via `<JsonLd>`: `LocalBusiness`,
  `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, `ItemList` of `Product`.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` from the same data.
- Location landing pages at `/ro-service/<area>` target "RO service in <area>"
  queries — the main organic lever for a local service business.

## Before going live

1. Set `NEXT_PUBLIC_SITE_URL` to the real domain (see `.env.example`). Canonicals,
   sitemap and schema all derive from it.
2. Fill in the real street address and lat/lng in `site.address` / `site.geo`, and
   keep them byte-identical to the Google Business Profile listing.
3. Replace `src/app/favicon.ico` and add a real logo image if one exists — the
   header logo is currently inline SVG in `src/components/logo.tsx`.
4. Verify the property in Google Search Console and submit `/sitemap.xml`.
5. The enquiry form (`src/components/enquiry-form.tsx`) hands off to WhatsApp; wire
   it to a server action or CRM endpoint when an inbox exists.

## Images

Product, hero and mascot PNGs from the design export live in `public/images/`.
`public/images/icons/` holds the small icon PNGs from the same export — currently
unused, since the UI draws icons as inline SVG (`src/components/icons.tsx`).
