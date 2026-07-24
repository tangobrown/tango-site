import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
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
    <html lang="en" className={atkinson.variable}>
      <body>
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  );
}
