import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navigation from '@/components/navigation/navigation'
import Footer from '@/components/navigation/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Epic Cheerleader',
  description: 'Become your inner cheerleader',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {/** the calculations make sure that the footer does not overlap (original is -300px) */}
        <div className='pt-10 min-h-[calc(100vh-100px)]'>{children}</div>
        <Footer />
      </body>
    </html>
  );
};