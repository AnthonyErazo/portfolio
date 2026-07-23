import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/instrument-serif";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: `Portafolio de ${SITE_NAME}`,
  authors: [{ name: "Anthony Josue Erazo Llacsahuanga", url: SITE_URL }],
  creator: "Anthony Josue Erazo Llacsahuanga",
  publisher: SITE_NAME,
  category: "technology",
  keywords: [
    "Anthony Erazo",
    "desarrollador Full Stack",
    "desarrollador backend",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Flutter",
    "AWS",
    "Google Cloud",
    "Lima Perú",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "es_PE",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Anthony Erazo, desarrollador Full Stack en Lima, Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#04070c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
