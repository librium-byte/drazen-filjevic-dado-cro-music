import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DynamicLetterGlitch } from '../components/DynamicWrappers';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://dadocromusic.crnalista.online";
const siteName = "Dražen Filjević - Dado Cro Music - Prevara i Prijevare";
const siteDescription = "Informacije o Draženu Filjeviću (dado cro music) i njegovim prijevarama u PVC industriji. Preko 130 prevarenih ljudi, 400,000+ € ukradeno. Upozorenje za sve koji posluju s njim.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "drazen filjevic",
    "dražen filjević",
    "dado cro music",
    "music cro dado",
    "dado music cro",
    "drazen filjevic prevara",
    "prevara",
    "scam",
    "fraud",
    "pvc prozori",
    "pvc vrata",
    "pvc instalacije",
    "prevarant",
    "lopov",
    "prijevara",
  ],
  authors: [{ name: "Žrtve Dražena Filjevića" }],
  creator: "Žrtve Dražena Filjevića",
  publisher: "dadocromusic.crnalista.online",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/drazen-cro-dado-music.png`,
        width: 1200,
        height: 630,
        alt: "Dražen Filjević - Dado Cro Music",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/drazen-cro-dado-music.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": siteName,
              "url": siteUrl,
              "description": siteDescription,
              "inLanguage": "hr",
              "about": {
                "@type": "Person",
                "name": "Dražen Filjević",
                "alternateName": ["dado cro music", "Dado"],
                "description": "Prevarant u PVC industriji s preko 130 žrtava i 400,000+ € ukradenog novca"
              }
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <div className="fixed inset-0 -z-10">
          <DynamicLetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
        <main className="min-h-screen w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
