import type { Metadata } from 'next'
import './globals.css'
import { barlow, gloock } from './fonts'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'PapeX | Digital Receipts Revolutionized',
  description: 'PapeX is developing a digital platform that eliminates the need for physical, email, or text receipts, seamlessly bridging the gap between financial transactions and financial management.',
  generator: 'Next.js',
  keywords: ['digital receipts', 'paperless receipts', 'electronic receipts', 'financial management', 'eco-friendly', 'retail technology', 'POS integration', 'expense tracking'],
  authors: [{ name: 'PapeX Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://papex.app',
    title: 'PapeX | Digital Receipts Revolutionized',
    description: 'PapeX is developing a digital platform that eliminates the need for physical, email, or text receipts, seamlessly bridging the gap between financial transactions and financial management.',
    siteName: 'PapeX',
    images: [
      {
        url: 'https://papex.app/blog/blog_image.png',
        width: 1200,
        height: 630,
        alt: 'PapeX - The Smarter Way to Do Receipts',
        type: 'image/png'
      },
      {
        url: 'https://papex.app/apple-icon.png',
        width: 800,
        height: 600,
        alt: 'PapeX Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PapeX | Digital Receipts Revolutionized',
    description: 'PapeX is developing a digital platform that eliminates the need for physical, email, or text receipts, seamlessly bridging the gap between financial transactions and financial management.',
    images: ['https://papex.app/blog/blog_image.png'],
    creator: '@papex_receipts'
  },
  icons: {
    icon: [
      { url: '/papex-favicon.ico', sizes: 'any' },
      { url: '/papex-favicon.png', type: 'image/png' }
    ],
    shortcut: [{ url: '/papex-favicon.ico' }],
    apple: [{ url: '/apple-icon.png' }],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-icon.png',
      },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${gloock.variable}`}>
      <head>
        <link rel="icon" href="/papex-favicon.ico" sizes="any" />
        <link rel="icon" href="/papex-favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-barlow">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
