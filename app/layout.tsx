import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KoinX - Crypto Tax Platform',
  description: 'Simplify your crypto tax calculations with KoinX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-[#EFF2F5]">
          {children}
        </main>
      </body>
    </html>
  )
}

