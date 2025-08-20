import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FashionTV',
  description: 'Elevate your beauty with luxury cosmetics at FashionTV',
  keywords: ['fashion', 'FashionTV', 'luxury', 'cosmetics', 'beauty'],
  authors: [{ name: 'FashionTV' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className={${inter.className} bg-white text-pink-600 min-h-screen antialiased}>
        <div className="relative min-h-screen bg-gradient-to-br from-pink-100 to-white">
          {children}
        </div>
      </body>
    </html>
  )
}
);