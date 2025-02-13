// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/navigation/footer';
import siteConfig from '@/config/site';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: "%s | " + siteConfig.siteName,
    default: siteConfig.siteName,
  },
  description: 'Become your best inner cheerleader',
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.description,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: siteConfig.siteName,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 628,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    languages: {
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}`,
    },
  },
  verification: {
    google: "QeWyBhtuwYXZhhQQ5BdQmp0_fLOQENvm-hF9Is_IUGE"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Verification Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-9008787039545928" />
        {/* Pinterest Domain Verification (if needed) */}
        <meta name="p:domain_verify" content="cc30a0584cc8194d713685c3a5301e06" />

        {/* Google Analytics */}
        <Script 
          strategy="afterInteractive" 
          src="https://www.googletagmanager.com/gtag/js?id=G-BQX1LQ6LJN" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BQX1LQ6LJN');
          `}
        </Script>
        <Script 
          strategy="afterInteractive" 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9008787039545928"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <div className="pt-10 min-h-[calc(100vh-100px)]">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}