import type { Metadata } from 'next'
import Script from 'next/script'
import { Barlow_Condensed, Work_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TelClickTracker from '@/components/TelClickTracker'
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
    'Portable storage units delivered to your driveway or job site across Houma, Thibodaux, Raceland and the bayou region. From $129.99/mo. Call (985) 855-6525.',
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
        {/* Google Tag Manager — GTM-MCS253LF */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MCS253LF');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCS253LF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
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
        <TelClickTracker />
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
