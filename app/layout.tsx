import type { Metadata, Viewport } from "next";
import { Staatliches } from "next/font/google";
import "./globals.css";

// Staatliches (400) — headings, wordmark, band, card titles.
// (Kept on the --font-bebas variable / `font-bebas` token so all existing
// heading classes pick it up.)
const heading = Staatliches({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

// Body font is Scoutie Sans (300–700), loaded via a <link> in <head> below
// and wired to the --font-public variable in globals.css. It ships too new to
// be in next/font's catalogue yet, hence the stylesheet approach.

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
    <html lang="en-GB" className={heading.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Scoutie+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
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
