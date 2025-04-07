import type { Metadata } from 'next'
import './globals.css'
import { barlow, gloock } from './fonts'

export const metadata: Metadata = {
  title: 'PapeX',
  description: 'Digital Receipts Revolutionized',
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/papex-favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: 'any' },
      { url: '/papex-favicon.png', sizes: 'any' }
    ]
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/papex-favicon.ico" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-barlow">{children}</body>
    </html>
  )
}
