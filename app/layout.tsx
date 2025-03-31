import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PapeX',
  description: 'Digital Receipts Revolutionized',
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
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
        <link rel="icon" href="https://papex.app/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="https://papex.app/favicon.ico" />
        <link rel="apple-touch-icon" href="https://papex.app/apple-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
