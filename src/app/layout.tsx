import type { Metadata } from 'next'
import Script from 'next/script'
import { Barlow_Condensed, Work_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BASE_URL, SITE, ogImage } from '@/lib/site'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Stow-N-Go | Portable Storage in Houma & Thibodaux, LA',
    template: '%s | Stow-N-Go',
  },
  description:
    'Portable storage units delivered to your driveway or job site across Houma, Thibodaux, Raceland and the bayou region. From $114/mo. Call (985) 855-6525.',
  keywords: [
    'portable storage containers Houma LA',
    'portable storage Thibodaux',
    'storage container rental Louisiana',
    'mobile storage units Raceland',
    'storage units Raceland LA',
    'Stow-N-Go',
  ],
  authors: [{ name: SITE.name }],
  other: {
    'geo.region': 'US-LA',
    'geo.placename': 'Raceland',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: SITE.name,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${workSans.variable} ${barlow.variable}`}>
      <body className="font-sans text-gray-800 antialiased">
        {/* Google tag (gtag.js) — Google Ads conversion measurement, AW-11501071777 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11501071777"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11501071777');`}
        </Script>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
