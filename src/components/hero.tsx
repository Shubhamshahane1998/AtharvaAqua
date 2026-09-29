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
    <section id="home" className="relative isolate overflow-hidden bg-[#dfeaf8]">
      <div className="absolute inset-0 -z-20 bg-[#dfeaf8]" />

      <div className="mx-auto grid min-h-[700px] max-w-[1600px] items-center px-4 pb-8 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(460px,0.92fr)] lg:px-8 xl:px-12">
        <div className="relative z-10 max-w-[760px] py-6 lg:py-10">
          <h1 className="font-black uppercase leading-[0.84] tracking-[-0.06em] text-brand-700">
            <span className="block text-[2.7rem] sm:text-[3.8rem] lg:text-[5.8rem]">{title}</span>
            <span className="mt-2 block text-[2.5rem] sm:text-[3.6rem] lg:text-[5.2rem]">{highlight}</span>
          </h1>

          <div className="mt-6 flex items-center gap-4 text-[#28b89a]">
            <span className="hidden h-[2px] w-14 bg-[#28b89a]/60 sm:block" aria-hidden="true" />
            <p className="text-xl font-semibold italic tracking-tight text-[#1ca778] sm:text-2xl">
              {suffix}
            </p>
            <span className="hidden h-[2px] flex-1 max-w-24 bg-[#28b89a]/60 sm:block" aria-hidden="true" />
          </div>

          <p className="mt-6 max-w-[620px] text-lg font-medium leading-relaxed text-slate-700 sm:text-[1.15rem]">
            {intro ?? (
              <>
                Experience pure health with <strong className="font-bold text-ink">{site.shortName}</strong>. Expert RO repair,
                installation, and maintenance by certified technicians with fast 2-hour response time.
              </>
            )}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={site.phone ? `tel:${site.phone}` : undefined}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#0d4db7] px-7 py-4 text-lg font-bold text-white shadow-[0_10px_22px_rgba(13,77,183,0.35)] transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.6 3.1 4.1 5.6 7.2 7.2l2.4-2.4c.3-.3.8-.4 1.2-.2 1.3.4 2.8.7 4.3.7.7 0 1.3.6 1.3 1.3v4.1c0 .7-.6 1.3-1.3 1.3C10.9 23.9 0 13 0 1.3 0 .6.6 0 1.3 0h4.1c.7 0 1.3.6 1.3 1.3 0 1.5.2 3 .7 4.3.2.4.1.9-.2 1.2l-2.4 2.4Z" />
              </svg>
              Call {site.phone.replace("+91", "")}
            </a>

            <a
              href="https://wa.me/918088276882?text=Hi%2C%20I%20need%20RO%20water%20purifier%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#1eb56b] px-7 py-4 text-lg font-bold text-white shadow-[0_10px_22px_rgba(30,181,107,0.35)] transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M19.05 4.95A9.92 9.92 0 0 0 12.04 2C6.52 2 2.08 6.42 2.08 11.95c0 1.74.46 3.43 1.33 4.92L2 22l5.24-1.38a9.95 9.95 0 0 0 4.8 1.46h.01c5.52 0 9.96-4.42 9.96-9.94 0-2.66-1.04-5.17-2.96-7.06ZM12.04 20.6h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.27-4.42c0-4.56 3.72-8.27 8.3-8.27 2.21 0 4.29.86 5.86 2.43a8.14 8.14 0 0 1 2.42 5.84c0 4.56-3.72 8.27-8.3 8.27Zm4.54-6.18c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8 1-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.26-.74-.66-1.24-1.47-1.38-1.71-.15-.25-.02-.38.11-.5.11-.11.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.38-.78-1.89-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.14s.92 2.48.96 2.66c.04.18 1.63 2.51 3.94 3.51.55.24.98.38 1.32.49.56.18 1.08.15 1.48.09.45-.07 1.48-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
              </svg>
              WhatsApp Now
            </a>
          </div>
        </div>

        <div className="relative z-10 flex h-full items-end justify-center lg:justify-end">
          <div className="relative h-[500px] w-full max-w-[720px] lg:h-[680px]">
            <div className="absolute inset-x-12 bottom-0 top-20 rounded-[34px] bg-white/20 blur-3xl" aria-hidden="true" />
            <Image
              src={asset("/images/hero-technician.png")}
              alt="Atharva Aqua technician repairing a wall-mounted RO purifier"
              fill
              priority
              sizes="(min-width: 1280px) 52vw, 100vw"
              className="object-contain object-bottom drop-shadow-[0_18px_48px_rgba(17,38,76,0.2)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
