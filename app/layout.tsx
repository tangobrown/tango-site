import type { Metadata, Viewport } from "next";
import { Antonio, Instrument_Serif } from "next/font/google";
import { ContactPanelProvider } from "@/components/ContactPanel";
import "./globals.css";

// Antonio (uppercase, light) for display type and labels; Instrument Serif
// for body copy and italic accents.
const antonio = Antonio({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-antonio",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const SITE_URL = "https://timbrown.co";
const TITLE = "Tim Brown | Website Growth Expert";
const DESCRIPTION =
  "Blazing fast websites, built, hosted and optimised for UK companies that want to grow. Based in Devon, working with clients anywhere.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Tim Brown",
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#110f0d",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tim Brown",
  jobTitle: "Website growth expert",
  description: DESCRIPTION,
  url: SITE_URL,
  address: { "@type": "PostalAddress", addressRegion: "Devon", addressCountry: "GB" },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Websites for service businesses" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce websites" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI services" } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${antonio.variable} ${serif.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ContactPanelProvider>{children}</ContactPanelProvider>
      </body>
    </html>
  );
}
