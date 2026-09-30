import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | RO Water Purifier Repair & Service in Pune`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "RO service Pune",
    "RO repair near me",
    "water purifier service Pune",
    "RO installation Pimpri-Chinchwad",
    "RO filter replacement",
    "RO AMC plan Pune",
    "UV UF purifier repair",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.shortName} | RO Water Purifier Repair & Service in Pune`,
    description: site.description,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} | RO Water Purifier Repair & Service`,
    description: site.description,
    images: ["/images/og-cover.jpg"],
  },
  category: "Home Services",
};

export const viewport: Viewport = {
  themeColor: "#1e63c8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="font-sans">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
