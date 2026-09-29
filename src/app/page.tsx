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
import { HeadsetIcon, SettingsIcon, ShieldIcon, ToolIcon } from "@/components/icons";
import { asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "RO Water Purifier Repair & Service in Pune | Atharva Aqua",
  description:
    "Same-day RO repair, installation, filter replacement and AMC in Pune & Pimpri-Chinchwad. Certified technicians, genuine spare parts, 2-hour response. Call +91 80882 76882.",
  alternates: { canonical: "/" },
};

const helpPoints = [
  { label: "Expert Guidance", Icon: SettingsIcon },
  { label: "Professional Installation", Icon: ToolIcon },
  { label: "Genuine Products", Icon: ShieldIcon },
  { label: "After-Sales Support", Icon: HeadsetIcon },
];

function HelpChoosing() {
  return (
    <Section className="pt-0">
      <div className="grid items-center gap-8 rounded-2xl bg-white px-6 py-8 shadow-[0_2px_18px_rgba(11,43,87,0.09)] lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-10 lg:px-10">
        <div className="flex items-center gap-6 lg:min-w-0">
          <Image
            src={asset("/images/technician-mascot.png")}
            alt=""
            aria-hidden="true"
            width={150}
            height={150}
            className="hidden h-[150px] w-[150px] shrink-0 rounded-full bg-brand-50 object-contain sm:block"
          />
          <div>
            <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-600">
              Need help choosing ?
            </span>
            <h2 className="mt-3 text-xl font-extrabold leading-snug text-ink sm:text-2xl">
              Not Sure Which Purifier
              <span className="block">is Right for You?</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Tell us about your water quality, family size, and requirements. Our experts will help
              you choose the best purifier for your needs.
            </p>
          </div>
        </div>

        <div className="lg:border-l lg:border-slate-200 lg:pl-10">
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {helpPoints.map(({ label, Icon }) => (
              <li key={label} className="text-center">
                <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-brand-500">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-2 text-sm font-normal leading-5 text-slate-800">{label}</p>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <CallButton label="Talk to an Expert" />
            <WhatsAppButton
              variant="outline"
              message="Hi, I need help choosing the right water purifier."
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
