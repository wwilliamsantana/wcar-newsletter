import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const fontInter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Newsletter WCAR',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fontInter.variable}  antialiased`}>{children}</body>
    </html>
  )
}
