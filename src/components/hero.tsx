import { CallButton, WhatsAppButton } from "./ui";
import { asset, site } from "@/lib/site";

/**
 * One block of markup, two layouts.
 *
 * Desktop keeps the Figma design: a landscape photo bleeding off the right
 * under a pale left-to-right wash, with the text in a left column.
 *
 * On a phone the text spans the full width, so anything behind it destroys the
 * contrast. The mobile art is a portrait crop with the technician low in the
 * frame, and it sits *below* the copy in normal flow rather than behind it —
 * the tint continues into the photo's own background, so it reads as one panel.
 *
 * The <picture> swaps the file at the breakpoint, so a phone never downloads
 * the landscape version and vice versa.
 */
export function Hero({
  title = "RO Water Purifier",
  highlight = "Repair & Service",
  suffix = "At Your Doorstep",
  intro,
}: {
  title?: string;
  highlight?: string;
  suffix?: string;
  intro?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-[#eaf3ff] to-[#cfe0f8] md:bg-[#dfe8f7] md:bg-none">
      <div className="mx-auto max-w-6xl px-5 pb-2 pt-12 sm:px-6 md:py-24">
        <div className="flex flex-col items-center text-center md:max-w-xl md:items-start md:text-left">
          <h1 className="text-[30px] font-extrabold uppercase leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block text-brand-800">{title}</span>{" "}
            <span className="block text-sky">{highlight}</span>
          </h1>

          <p className="mt-4 flex w-full items-center justify-center gap-3 text-sm font-bold text-mint md:mt-5 md:justify-start">
            <span aria-hidden="true" className="h-px flex-1 max-w-16 bg-mint/45 md:hidden" />
            <span aria-hidden="true" className="hidden h-px w-10 bg-mint/45 md:block" />
            {suffix}
            <span aria-hidden="true" className="h-px flex-1 max-w-16 bg-mint/45 md:hidden" />
          </p>

          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-700 md:text-base">
            {intro ?? (
              <>
                Experience pure health with{" "}
                <strong className="font-semibold text-ink">{site.shortName}</strong>. Expert RO
                repair, installation, and maintenance by certified technicians with fast 2-hour
                response time.
              </>
            )}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 md:mt-8 md:justify-start md:gap-4">
            <CallButton label={`Call ${site.phone.replace("+91", "")}`} variant="deep" />
            <WhatsAppButton />
          </div>
        </div>
      </div>

      {/*
        A plain <img> rather than next/image: with `images.unoptimized` the
        optimizer never runs, so next/image emits a bare src with no srcset and
        every phone would download the desktop file. This is the LCP element,
        so it carries fetchPriority.
      */}
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={[
            `${asset("/images/hero-technician-768.webp")} 768w`,
            `${asset("/images/hero-technician-1280.webp")} 1280w`,
            `${asset("/images/hero-technician-1920.webp")} 1920w`,
          ].join(", ")}
          sizes="100vw"
        />
        <source
          srcSet={[
            `${asset("/images/hero-mobile-640.webp")} 640w`,
            `${asset("/images/hero-mobile-828.webp")} 828w`,
          ].join(", ")}
          sizes="100vw"
        />
        <img
          src={asset("/images/hero-mobile-640.webp")}
          width={828}
          height={822}
          fetchPriority="high"
          decoding="async"
          alt="Atharva Aqua technician servicing a wall-mounted RO water purifier in a kitchen"
          className="block h-auto w-full md:absolute md:inset-0 md:-z-10 md:h-full md:object-cover md:object-[72%_center]"
        />
      </picture>

      {/* Desktop only: the pale left-to-right wash from the design. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-linear-to-r from-[#dfe8f7] via-[#dfe8f7]/70 to-transparent md:block"
      />
    </section>
  );
}
