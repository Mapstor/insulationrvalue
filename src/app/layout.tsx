import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Insulation R-Values | Complete R-Value Guide & Calculator',
    template: '%s | InsulationRValues.com',
  },
  description: 'The most comprehensive insulation R-value resource. R-value charts, calculators, climate zone requirements, and expert guides for every insulation type.',
  metadataBase: new URL('https://insulationrvalues.com'),
  verification: {
    google: 'google12f8c2f9c03913a3',
    other: {
      'msvalidate.01': '57C407E8336C4915E2D28EEA649C8078',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://insulationrvalues.com',
    siteName: 'InsulationRValues.com',
    title: 'Insulation R-Values | Complete R-Value Guide & Calculator',
    description: 'The most comprehensive insulation R-value resource. R-value charts, calculators, climate zone requirements, and expert guides for every insulation type.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'InsulationRValues.com - Complete R-Value Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insulation R-Values | Complete R-Value Guide & Calculator',
    description: 'The most comprehensive insulation R-value resource. R-value charts, calculators, climate zone requirements, and expert guides for every insulation type.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for common external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5VGCEYXFNG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5VGCEYXFNG');
          `}
        </Script>

        {/* Raptive ad script — inserted after approval */}
        {/* <script async src="//..." /> */}
      </head>
      <body className="font-sans bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
