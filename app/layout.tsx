import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navigation from '@/components/navigation/navigation'
import Footer from '@/components/navigation/footer'
import siteConfig from '@/config/site'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

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
        url: 'http://localhost:3009/opengraph-image.png',
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
  /* Verification by google search console */
  verification: {
    google: "QeWyBhtuwYXZhhQQ5BdQmp0_fLOQENvm-hF9Is_IUGE"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-R4M4P5B4Q3"></Script>
          <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BQX1LQ6LJN');`}
          </Script>
      <body className={inter.className}>
        <Navigation />
        {/** the calculations make sure that the footer does not overlap (original is -300px) */}
        <div className='pt-10 min-h-[calc(100vh-100px)]'>{children}</div>
        <Footer />
      </body>
    </html>
  );
};