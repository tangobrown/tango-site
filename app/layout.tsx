import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Public_Sans } from "next/font/google";
import "./globals.css";

// Bebas Neue (400) — headings, wordmark, band, card titles.
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

// Public Sans (300–700) — body, nav, buttons, forms, quotes.
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-public",
  display: "swap",
});

const SITE_URL = "https://timbrown.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tim Brown | Digital Growth Expert for UK Small Businesses",
  description:
    "Freelance web design, SEO and AI workflows, built by one person who answers the phone. Based in Devon, working with clients anywhere.",
  openGraph: {
    title: "Tim Brown | Digital Growth Expert for UK Small Businesses",
    description:
      "Websites, search and quiet automation — built by one person who answers the phone.",
    url: SITE_URL,
    siteName: "Tim Brown",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tim Brown | Digital Growth Expert for UK Small Businesses",
    description:
      "Websites, search and quiet automation — built by one person who answers the phone.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tim Brown",
  jobTitle: "Freelance web designer",
  description:
    "Freelance web design, SEO and AI automation, based in Devon, UK.",
  url: SITE_URL,
  address: { "@type": "PostalAddress", addressRegion: "Devon", addressCountry: "GB" },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web design" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & optimisation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & automation" } },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${bebas.variable} ${publicSans.variable}`}>
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
