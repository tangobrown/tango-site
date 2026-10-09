import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";

// Onest — the one family for everything (headings 600, body 500).
const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

// Geist + Geist Mono are only used inside the hero animation.
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-geist-mono",
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
    <html lang="en-GB" className={`${onest.variable} ${geist.variable} ${geistMono.variable}`}>
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
