import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PrivateClubBanner } from '@/components/PrivateClubBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ['club privato', 'gaming', 'ping pong', 'nintendo switch', 'board games', 'relax'],
  authors: [{ name: 'CROCO HUB' }],
  creator: 'CROCO HUB',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <PrivateClubBanner />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 