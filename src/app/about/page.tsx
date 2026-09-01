import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BASE_URL, SITE, ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us | Portable Storage Since 2006',
  description:
    'Stow-N-Go has built and delivered portable storage units from Raceland, LA since 2006. Locally owned, serving Lafourche, Terrebonne, and Assumption parishes.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'About Stow-N-Go | Raceland, LA',
    description: 'Locally owned portable storage, built in Raceland since 2006.',
    url: `${BASE_URL}/about`,
    images: [ogImage],
  },
}

const values = [
  {
    title: 'We Build the Units',
    description:
      'The fleet comes out of our own Raceland facility. When a door needs adjusting or a floor needs work, it goes back to the shop that built it.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: 'A Local Phone Number',
    description:
      'Call the office and a person who walked the yard that morning picks up.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Simple Terms',
    description:
      'A flat delivery fee, no lease, and no fine print. You’ll know the cost before the truck ever leaves the yard.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      name: 'About Stow-N-Go',
      url: `${BASE_URL}/about`,
      description: 'The story of Stow-N-Go, a portable storage company built in Raceland, Louisiana in 2006.',
      mainEntity: { '@id': `${BASE_URL}/#business` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
      ],
    },
  ],
}

const cities = [
  'Raceland', 'Houma', 'Thibodaux', 'Lockport', 'Larose', 'Cut Off',
  'Galliano', 'Gray', 'Schriever', 'Bayou Blue', 'Morgan City', 'Napoleonville',
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100" aria-label="About introduction">
        <div className="container-wide pt-12 pb-12 md:pt-16">
          <p className="section-label">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
            About Stow-N-Go
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            A Raceland company that took the storage unit off the lot and put it in
            your driveway, starting back in 2006.
          </p>
        </div>
      </section>

      {/* ── STORY ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="story-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-96 lg:h-[480px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/stow-n-go-portable-storage-units-raceland-yard.jpg"
                alt="Stow-N-Go portable storage units lined up at the Raceland, Louisiana facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="section-label">Since 2006</p>
              <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Built Here, Not Bought Off a Lot
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Stow-N-Go started in 2006 in Raceland, when two locals needed
                  storage for their own projects and didn’t like the options, so they
                  built a storage unit that could ride on a trailer. The idea stuck.
                </p>
                <p>
                  Locals have known the red and white units as portable mini-storage
                  since the beginning. The company has manufactured its own fleet at
                  the facility on Double H Drive ever since, from 12 ft driveway units
                  up to 20 ft units and air-conditioned job site offices.
                </p>
                <p>
                  The company remains locally owned today, with the same yard, the
                  same phone number, and units on driveways and job sites across
                  Lafourche, Terrebonne, and Assumption parishes.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/services" className="btn-accent">
                  See Sizes &amp; Prices
                </Link>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-outline-dark"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="values-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">How We Work</p>
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2">
              What You Can Count On
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <article key={value.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-5" role="img" aria-label={value.title}>
                  {value.icon}
                </div>
                <h3 className="text-primary font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="service-area-heading">
        <div className="container-wide text-center">
          <p className="section-label">Where We Deliver</p>
          <h2 id="service-area-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
            Lafourche, Terrebonne &amp; Assumption Parishes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            The yard sits at {SITE.address.street} in Raceland, which puts most of the
            bayou region within a short haul. Delivery and pickup runs a flat $119 in
            the core area, and farther spots like Grand Isle can usually be arranged
            for an added fee.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm font-medium">
            {cities.map((city) => (
              <span key={city} className="bg-gray-50 border border-gray-200 text-primary px-4 py-2 rounded-full">
                {city}, LA
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-primary section-padding text-white text-center" aria-labelledby="about-cta-heading">
        <div className="container-wide">
          <h2 id="about-cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Units on Driveways Since 2006
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Call the office and we’ll find the right size for whatever needs a home.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-accent text-base">
              Call {SITE.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-outline text-base">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
