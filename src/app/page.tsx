import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/hero";
import {
  AboutBlock,
  ProductsGrid,
  ServicesGrid,
  Testimonials,
  WhyUsGrid,
} from "@/components/sections";
import { Section, CallButton, WhatsAppButton } from "@/components/ui";
import {
  HelpGearIcon,
  HelpHeadsetIcon,
  HelpShieldIcon,
  HelpWrenchIcon,
} from "@/components/icons";
import { asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "RO Water Purifier Repair & Service in Pune | Atharva Aqua",
  description:
    "Same-day RO repair, installation, filter replacement and AMC in Pune & Pimpri-Chinchwad. Certified technicians, genuine spare parts, 2-hour response. Call +91 80882 76882.",
  alternates: { canonical: "/" },
};

/**
 * Measured off the reference against a 112px circle, scaled to this one:
 * diagonal at 45 degrees, 12px long, 13px clear of the circle, 37% down;
 * horizontal 10px long, 18px clear, 51% down.
 */
// Mobile-only flourish: the desktop design has no dashes around the mascot.
const spark = "absolute  h-[4px] rounded-full bg-[#bfdbfe] sm:hidden";

const helpPoints = [
  { label: "Expert Guidance", Icon: HelpGearIcon },
  { label: "Professional Installation", Icon: HelpWrenchIcon },
  { label: "Genuine Products", Icon: HelpShieldIcon },
  { label: "After-Sales Support", Icon: HelpHeadsetIcon },
];

function HelpChoosing() {
  return (
    <Section className="pt-0">
      <div className="grid items-center gap-8 rounded-2xl bg-white px-5 py-8 shadow-[0_2px_18px_rgba(11,43,87,0.09)] sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-10 lg:px-10">
        {/* Mascot sits above the copy on a phone, beside it from `sm` up. */}
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:gap-6 sm:text-left lg:min-w-0">
          {/* The mirrored dashes either side of the mascot are decorative. */}
          <div className="relative shrink-0">
            <Image
              src={asset("/images/technician-mascot.webp")}
              alt=""
              aria-hidden="true"
              width={150}
              height={150}
              className="h-[120px] w-[120px] rounded-full bg-brand-50 object-contain sm:h-[150px] sm:w-[150px]"
            />
            <span aria-hidden="true" className={`${spark} -left-[23px] top-[30%] w-[15px] -rotate-130`} />
            <span aria-hidden="true" className={`${spark} -left-[28px] top-[51%] w-[15px] ` } />
            <span aria-hidden="true" className={`${spark} -right-[23px] top-[30%] w-[15px] rotate-130`} />
            <span aria-hidden="true" className={`${spark} -right-[28px] top-[51%] w-[15px]`} />
          </div>
          <div>
            <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-600">
              Need help choosing ?
            </span>
            <h2 className="mt-3 text-xl font-extrabold leading-snug text-ink sm:text-2xl">
              Not Sure Which Purifier
              <span className="block text-brand-600 sm:text-ink">is Right for You?</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Tell us about your water quality, family size, and requirements. Our experts will help
              you choose the best purifier for your needs.
            </p>
          </div>
        </div>

        <div className="lg:border-l lg:border-slate-200 lg:pl-10">
          {/* Bordered 2x2 tiles on a phone; plain centred column from `sm` up. */}
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
            {helpPoints.map(({ label, Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200 p-2.5 text-left sm:block sm:border-0 sm:p-0 sm:text-center"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-500 sm:h-11 sm:w-11 sm:mx-auto">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="min-w-0 text-[13px] font-normal leading-tight text-slate-800 sm:mt-2 sm:text-sm sm:leading-5">
                  {label}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <CallButton label="Talk to an Expert" size="md" className="w-full sm:w-auto" />
            <WhatsAppButton
              variant="outline"
              size="md"
              message="Hi, I need help choosing the right water purifier."
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}


export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProductsGrid />
      <HelpChoosing />
      <AboutBlock />
      <WhyUsGrid />
      <Testimonials />
    </>
  );
}
