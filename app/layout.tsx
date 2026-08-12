import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Archivo — all headings and body copy.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

// JetBrains Mono — every eyebrow, label, caption, price, ticker item,
// nav link, arrow glyph and service bullet.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://tangodigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tango Digital — Websites, lead generation & AI automation in Exeter",
  description:
    "Agency-grade websites, lead generation and AI automation for small businesses — built by one operator, without agency pricing. Book a free 20-minute call.",
  keywords: [
    "digital growth consultant",
    "Exeter",
    "web design",
    "lead generation",
    "AI automation",
    "small business marketing",
  ],
  openGraph: {
    title: "Tango Digital — Next-gen marketing for small business",
    description:
      "Websites, lead generation and AI automation, built by one operator. Skip the agency price tag.",
    url: SITE_URL,
    siteName: "Tango Digital",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tango Digital — Next-gen marketing for small business",
    description:
      "Websites, lead generation and AI automation, built by one operator. Skip the agency price tag.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// LocalBusiness structured data for the Exeter practice. Address is a
// placeholder until the client confirms.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tango Digital",
  description:
    "Freelance digital growth consultancy — websites, lead generation and AI automation for small businesses.",
  areaServed: "United Kingdom",
  founder: { "@type": "Person", name: "Tim Brown" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Exeter",
    addressCountry: "GB",
  },
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${archivo.variable} ${jetbrainsMono.variable} scroll-smooth scroll-pt-24`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
