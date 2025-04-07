import type { Metadata } from 'next'
import './globals.css'
import { barlow, gloock } from './fonts'

export const metadata: Metadata = {
  title: 'PapeX',
  description: 'Digital Receipts Revolutionized',
  generator: 'Next.js',
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
      <body className="font-barlow">{children}</body>
    </html>
  )
}
