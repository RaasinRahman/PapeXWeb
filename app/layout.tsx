import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PapeX',
  description: 'Digital Receipts Revolutionized',
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/icons/Orange Primary/Orange-Navy.png' }
    ],
    apple: '/icons/Orange Primary/Orange-Navy.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
