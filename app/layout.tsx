import type { Metadata, Viewport } from "next";
import { SITE_URL } from "./lib/site";
import "./globals.css";

// Icons and the manifest are intentionally root-relative (no metadataBase) so
// they load on any host, including preview deployments.
export const metadata: Metadata = {
  title: {
    default: "Clarkson Elementary PTO",
    template: "%s | Clarkson Elementary PTO",
  },
  description:
    "Clarkson Elementary PTO brings parents, teachers, and the community together to support every Redhawk.",
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Clarkson PTO",
  },
  openGraph: {
    title: "Clarkson Elementary PTO",
    description: "One team. Every Redhawk.",
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: "Clarkson Elementary PTO",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Clarkson Elementary PTO. One team. Every Redhawk.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarkson Elementary PTO",
    description: "One team. Every Redhawk.",
    images: [`${SITE_URL}/og-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  // vinext 0.0.50 drops the `viewportFit` field, so it rides along with width.
  // viewport-fit=cover enables the safe-area insets used in globals.css.
  width: "device-width, viewport-fit=cover",
  initialScale: 1,
  themeColor: "#d91f26",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
