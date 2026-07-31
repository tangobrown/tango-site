import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, Playfair_Display } from "next/font/google";
import ContactProvider from "@/components/ContactProvider";
import "./globals.css";

// Atkinson Hyperlegible ships two weights (400 + 700). We load once and
// point both --font-heading and --font-body at it so every element on
// the page uses the same family. Headings render at 700, paragraph
// copy at 400.
const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

// Playfair Display italic 500 — used exclusively for the "Tango." wordmark
// per the logo handoff. Kept isolated to that one element via --font-playfair
// so nothing else on the site accidentally picks up a serif.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tango Brown — Digital Growth Consultant",
  description:
    "Freelance digital growth consultant based in Exeter, Devon. Website builds, hosting, SEO and AI automation for UK businesses.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${atkinson.variable} ${playfair.variable}`}>
      <body>
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  );
}
