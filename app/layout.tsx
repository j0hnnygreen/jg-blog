import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { siteName, siteUrl } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Cybersecurity & Dev Notes`,
    template: "%s | johnnygreen",
  },
  description:
    "Personal blog with cybersecurity tools, resources, cheatsheets and notes.",
  icons: {
    icon: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteName,
    url: "/",
    description:
      "Personal blog with cybersecurity tools, resources, cheatsheets and notes.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@im_greej",
    creator: "@im_greej",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef1f6" },
    { media: "(prefers-color-scheme: dark)", color: "#070b12" },
  ],
};

// Applied before first paint so the saved preference is used immediately,
// avoiding a flash of the wrong theme. No stored entry (= "system") follows
// the OS color scheme again.
const THEME_INIT_SCRIPT = `(function () {
  try {
    var stored = localStorage.getItem("theme");
    var pref = stored === "light" || stored === "dark" ? stored : "system";
    var theme = pref === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : pref;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.themePref = pref;
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
