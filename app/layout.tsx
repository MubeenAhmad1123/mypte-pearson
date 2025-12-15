import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'myPTE - Pearson Test of English',
  description: 'Book your tests and access your results',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}