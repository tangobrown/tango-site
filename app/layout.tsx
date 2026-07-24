import type { Metadata, Viewport } from "next";
import { DM_Sans, Figtree } from "next/font/google";
import ContactProvider from "@/components/ContactProvider";
import "./globals.css";

const heading = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
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
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  );
}
