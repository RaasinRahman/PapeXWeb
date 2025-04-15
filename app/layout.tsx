import type { Metadata } from 'next'
import './globals.css'
import { barlow, gloock } from './fonts'

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
        url: '/icons/Navy Primary/Navy-Carolina.png',
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
    images: ['/icons/Navy Primary/Navy-Carolina.png']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/Navy Primary/Navy-Carolina.png', sizes: 'any' }
    ],
    shortcut: [{ url: '/favicon.ico' }],
    apple: [{ url: '/icons/Navy Primary/Navy-Carolina.png' }],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/icons/Navy Primary/Navy-Carolina.png',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/Navy Primary/Navy-Carolina.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </head>
      <body className="font-barlow">{children}</body>
    </html>
  )
}
