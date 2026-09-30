import { CallButton, WhatsAppButton } from "./ui";
import { asset, site } from "@/lib/site";

/**
 * One block of markup, two layouts — in both, the photo is the background.
 *
 * Desktop: a landscape frame bleeding off the right under a pale
 * left-to-right wash, with the copy in a left column.
 *
 * Mobile: a portrait frame whose upper third is empty tint by design. The
 * copy sits over that empty area, so the panel is a single continuous image
 * rather than a tinted block butted against a photo. Anchoring the image to
 * the bottom keeps the technician in frame as the section grows.
 *
 * The <picture> swaps the file at the breakpoint, so a phone never downloads
 * the landscape art and vice versa.
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
    <section className="relative isolate min-h-[min(160vw,640px)] overflow-hidden bg-[#e7f0fd] md:aspect-[1280/709] md:min-h-[430px]">
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
          height={1242}
          fetchPriority="high"
          decoding="async"
          alt="Atharva Aqua technician servicing a wall-mounted RO water purifier in a kitchen"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom md:object-[72%_center]"
        />
      </picture>

      {/* Desktop only: the pale left-to-right wash from the design. */}
      <div
        aria-hidden="false"
        className="absolute inset-0 -z-10 hidden bg-linear-to-r from-[#dfe8f7] via-[#dfe8f7]/70 to-transparent md:block"
      />

      {/* Full height on desktop so the copy sits centred against the frame. */}
      <div className="mx-auto max-w-6xl px-5 pt-10 sm:px-6 md:flex md:h-full md:items-center md:py-0">
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
    </section>
  );
}
