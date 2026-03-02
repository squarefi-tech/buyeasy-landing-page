import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BUYEASY - Foreign Exchange, Multi-Currency Accounts & International Payments',
  description: 'Licensed financial services provider specializing in foreign exchange, multi-currency accounts, and international money transfers. Fast, secure, and fully compliant business payments.',
  keywords: ['foreign exchange', 'FX', 'multi-currency accounts', 'international payments', 'money remittance', 'cross-border payments', 'SWIFT', 'SEPA', 'business payments'],
  openGraph: {
    title: 'BUYEASY - Foreign Exchange & International Payments',
    description: 'Licensed financial services provider for FX, multi-currency accounts, and cross-border payments.',
    url: 'https://www.buyeasy.app',
    siteName: 'BUYEASY',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
