import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL, SITE, SERVICES, UNITS, DELIVERY_FEE, ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Portable Storage Services & Prices',
  description:
    'Portable storage containers, office units, and yard storage across Houma, Thibodaux, Raceland and the bayou region. 12 to 20 ft units from $114 a month.',
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: 'Portable Storage Services & Prices | Stow-N-Go',
    description: 'Delivered storage units from $114 a month across Lafourche, Terrebonne, and Assumption parishes.',
    url: `${BASE_URL}/services`,
    images: [ogImage],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      name: 'Stow-N-Go Services',
      description: 'Portable storage and office unit services offered by Stow-N-Go in South Louisiana.',
      url: `${BASE_URL}/services`,
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.cardTitle,
          description: s.cardBlurb,
          provider: { '@type': 'LocalBusiness', '@id': `${BASE_URL}/#business`, name: 'Stow-N-Go', url: BASE_URL },
          url: `${BASE_URL}/services/${s.slug}`,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
      ],
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100" aria-label="Services introduction">
        <div className="container-wide pt-12 pb-14 md:pt-16 md:pb-18">
          <p className="section-label">Services &amp; Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-5 max-w-3xl leading-tight">
            Portable Storage Services in Houma, Thibodaux &amp; Raceland
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Every service below runs on the same fleet of units we build ourselves in
            Raceland. Pick the page that matches your situation, or call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-accent font-semibold hover:underline">
              {SITE.phoneDisplay}
            </a>{' '}
            and describe what you need.
          </p>
        </div>
      </section>

      {/* ── PRICING TABLE ───────────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="pricing-heading">
        <div className="container-wide">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-3">
            Unit Sizes &amp; Monthly Prices
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl">
            Delivery and pickup within our core area is a flat ${DELIVERY_FEE}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {UNITS.map((unit) => (
              <div key={unit.name} className="bg-white rounded-lg p-6">
                <p className="text-primary font-bold text-lg font-serif">{unit.name}</p>
                <p className="text-gray-500 text-sm mt-0.5">{unit.size}</p>
                <p className="text-accent font-bold text-3xl mt-4 font-serif">
                  ${unit.price}<span className="text-base text-gray-500 font-sans font-medium">/mo</span>
                </p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{unit.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ───────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="service-list-heading">
        <div className="container-wide">
          <h2 id="service-list-heading" className="text-3xl md:text-4xl font-bold text-primary mb-10">
            Pick Your Situation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-gray-200 rounded-lg p-7 hover:border-accent hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <h3 className="text-primary font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                  {service.cardTitle}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{service.cardBlurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-accent font-semibold text-sm">
                  View Details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-white border-t border-gray-100 text-center" aria-labelledby="services-cta-heading">
        <div className="container-wide">
          <h2 id="services-cta-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Not Sure Which Size You Need?
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
            Say roughly how many rooms of stuff you’ve got and we’ll point you to the
            right size.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-accent text-base">
              Call {SITE.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-outline-dark text-base">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
