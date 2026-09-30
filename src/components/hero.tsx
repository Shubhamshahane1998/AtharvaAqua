import { CallButton, WhatsAppButton } from "./ui";
import { asset, site } from "@/lib/site";

/**
 * Two treatments of the same markup.
 *
 * Desktop keeps the Figma design: photo bleeding off the right, a pale wash
 * from the left, dark blue type. That wash cannot work on a phone — the text
 * column spans the full width, so it lands directly on the technician and the
 * contrast collapses. Below `md` the photo therefore sits under a dark scrim
 * with centred white type, which is legible over any part of the image.
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
    <section className="relative isolate overflow-hidden bg-ink md:bg-[#dfe8f7]">
      {/*
        A plain <img> rather than next/image: with `images.unoptimized` the
        optimizer never runs, so next/image emits a bare src with no srcset and
        every phone downloads the desktop file. This is the LCP element, so it
        picks its own width and carries fetchPriority.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element -- see note above */}
      <img
        src={asset("/images/hero-technician-1280.webp")}
        srcSet={[
          `${asset("/images/hero-technician-768.webp")} 768w`,
          `${asset("/images/hero-technician-1280.webp")} 1280w`,
          `${asset("/images/hero-technician-1920.webp")} 1920w`,
        ].join(", ")}
        sizes="100vw"
        width={1920}
        height={1049}
        fetchPriority="high"
        decoding="async"
        alt="Atharva Aqua technician servicing a wall-mounted RO water purifier in a kitchen"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[62%_center] md:object-[72%_center]"
      />

      {/* Phone: dark scrim for contrast. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-ink/85 via-ink/80 to-ink/90 md:hidden"
      />
      {/* Desktop: the pale left-to-right wash from the design. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-linear-to-r from-[#dfe8f7] via-[#dfe8f7]/70 to-transparent md:block"
      />

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center md:max-w-xl md:items-start md:text-left">
          <p className="order-first mb-3 flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-mint md:order-none md:mb-0 md:mt-5 md:text-sm md:normal-case md:tracking-normal">
            <span aria-hidden="true" className="hidden h-px w-10 bg-mint/50 md:block" />
            {suffix}
          </p>

          <h1 className="order-1 text-[28px] font-extrabold uppercase leading-[1.12] tracking-tight sm:text-4xl md:order-first lg:text-5xl">
            <span className="block text-white md:text-brand-800">{title}</span>{" "}
            <span className="block text-brand-300 md:text-sky">{highlight}</span>
          </h1>

          <span
            aria-hidden="true"
            className="order-2 mt-5 block h-1 w-16 rounded-full bg-brand-400 md:hidden"
          />

          <p className="order-3 mt-5 max-w-md text-[15px] leading-relaxed text-blue-50/90 md:order-none md:mt-4 md:text-base md:text-slate-700">
            {intro ?? (
              <>
                Experience pure health with{" "}
                <strong className="font-semibold text-white md:text-ink">{site.shortName}</strong>.
                Expert RO repair, installation, and maintenance by certified technicians with fast
                2-hour response time.
              </>
            )}
          </p>

          <div className="order-4 mt-8 flex w-full max-w-xs flex-col gap-3 md:w-auto md:max-w-none md:flex-row md:gap-4">
            <CallButton
              label={`Call ${site.phone.replace("+91", "")}`}
              variant="deep"
              className="w-full md:w-auto"
            />
            <WhatsAppButton className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
