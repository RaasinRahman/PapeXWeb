import type { Metadata } from 'next'
import './globals.css'
import { barlow, gloock } from './fonts'

export const metadata: Metadata = {
  title: 'PapeX',
  description: 'Digital Receipts Revolutionized',
  generator: 'v0.dev',
  icons: {
    icon: '/papex-favicon.png'
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
        <link rel="icon" href="/papex-favicon.png" />
        <link rel="shortcut icon" href="/papex-favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-barlow">{children}</body>
    </html>
  )
}
