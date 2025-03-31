import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PapeX',
  description: 'Digital Receipts Revolutionized',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png'
  },
  metadataBase: new URL('https://papex.app')
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
