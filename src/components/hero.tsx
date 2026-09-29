import Image from "next/image";
import { CallButton, WhatsAppButton } from "./ui";
import { asset, site } from "@/lib/site";

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
    <section className="relative isolate overflow-hidden bg-[#dfe8f7]">
      <Image
        src={asset("/images/hero-technician.png")}
        alt="Atharva Aqua technician servicing a wall-mounted RO water purifier in a kitchen"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[72%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-[#dfe8f7] via-[#dfe8f7]/95 to-[#dfe8f7]/70 md:via-[#dfe8f7]/70 md:to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="max-w-xl">
          <h1 className="text-[26px] font-extrabold uppercase leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block text-brand-800">{title}</span>
            <span className="block text-sky">{highlight}</span>
          </h1>

          <p className="mt-5 flex items-center gap-3 text-sm font-bold text-mint">
            <span aria-hidden="true" className="hidden h-px w-10 bg-mint/50 sm:block" />
            {suffix}
            <span aria-hidden="true" className="h-px flex-1 max-w-24 bg-mint/50" />
          </p>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-700 sm:text-base">
            {intro ?? (
              <>
                Experience pure health with{" "}
                <strong className="font-semibold text-ink">{site.shortName}</strong>. Expert RO
                repair, installation, and maintenance by certified technicians with fast 2-hour
                response time.
              </>
            )}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton label={`Call ${site.phone.replace("+91", "")}`} variant="deep" />
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}
