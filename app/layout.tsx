import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Clarkson Elementary PTO",
    template: "%s | Clarkson Elementary PTO",
  },
  description:
    "Clarkson Elementary PTO brings parents, teachers, and the community together to support every Redhawk.",
  metadataBase: new URL("https://clarksonpto.org"),
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Clarkson PTO",
  },
  openGraph: {
    title: "Clarkson Elementary PTO",
    description: "One team. Every Redhawk.",
    type: "website",
    locale: "en_US",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/redhawk.png",
    shortcut: "/redhawk.png",
    apple: "/redhawk.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
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
