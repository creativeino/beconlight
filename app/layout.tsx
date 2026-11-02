import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { FloatingActions } from "@/components/floating-actions";
import { site } from "@/lib/site";
import "./globals.css";

const display = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Beacon Light Academy — O & A Levels School in Karachi",
    template: "%s · Beacon Light Academy",
  },
  description: site.description,
  keywords: [
    "Beacon Light Academy",
    "O Levels Karachi",
    "A Levels Karachi",
    "AKU-EB",
    "Pearson Edexcel",
    "school admissions Karachi",
    "Gulshan-e-Maymar school",
    "Gulshan-e-Iqbal school",
  ],
  openGraph: {
    title: "Beacon Light Academy — We are different & that makes the difference",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2342",
};

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": ["School", "EducationalOrganization"],
  name: site.name,
  url: site.url,
  description: site.description,
  foundingDate: "1986-01-10",
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "E-24, Block 7, Gulshan-e-Iqbal",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
        />
        <ScrollProgress />
        <SmoothScroll />
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
