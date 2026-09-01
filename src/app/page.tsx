import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BASE_URL, SITE, SERVICES, UNITS, DELIVERY_FEE, ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Stow-N-Go | Portable Storage in Houma & Thibodaux, LA',
  description:
    'Portable storage units delivered to your driveway or job site across Houma, Thibodaux, Raceland and the bayou region. From $114/mo. Call (985) 855-6525.',
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Stow-N-Go | Portable Storage in Houma & Thibodaux, LA',
    description:
      'Ground-level portable storage delivered across Houma, Thibodaux and Raceland. From $114 a month. Call (985) 855-6525.',
    url: BASE_URL,
    images: [ogImage],
  },
}

const homeFaqs = [
  {
    q: 'How much does a portable storage unit cost to rent?',
    a: 'Rent starts at $114 a month for a 12 ft unit. A 16 ft unit is $124 a month and a 20 ft unit is $134 a month. Delivery and pickup within our core service area is a flat $119. There is no minimum rental term.',
  },
  {
    q: 'What sizes do the units come in?',
    a: 'Three storage sizes: 12 ft (12\' x 8\' x 7\'), 16 ft (16\' x 8\' x 7\'), and 20 ft (20\' x 8\' x 7.5\'). We also rent 16 ft air-conditioned office units. All storage units sit flat on the ground, so you load at ground level with no ramp climbing.',
  },
  {
    q: 'How does portable storage work?',
    a: 'You call, pick a size, and we haul the unit to your address and set it down where you want it. You load it on your own schedule. When you’re done, we pick it up, move it to your next address, or store it at our Raceland yard.',
  },
  {
    q: 'What area does Stow-N-Go deliver to?',
    a: 'We deliver across Lafourche, Terrebonne, and Assumption parishes, including Raceland, Houma, Thibodaux, Lockport, Larose, Cut Off, Galliano, Gray, Schriever, and Bayou Blue, and west into St. Mary Parish as far as Morgan City. Farther locations like Grand Isle can usually be arranged for an added delivery fee.',
  },
  {
    q: 'How long can I keep the unit?',
    a: 'As long as you want. Rentals run month to month with no minimum term, so a two-week remodel and a two-year storage need both work fine.',
  },
  {
    q: 'Are the units weatherproof?',
    a: 'The units are steel-sided, roofed, and built to keep rain out, and insulated 16 ft units are available. They are not air conditioned, so think of them like a garage rather than a climate-controlled vault. Our office units do have A/C.',
  },
  {
    q: 'Can Stow-N-Go store my loaded unit for me?',
    a: 'Yes. If you cannot keep the unit at your property, we can haul it back to our yard at 105 Double H Dr in Raceland and keep it there while you rent it.',
  },
  {
    q: 'How is this different from renting a self-storage unit in town?',
    a: 'The storage comes to you. Instead of loading a truck, driving to a facility, and unloading into a hallway unit, you walk from your door to your driveway. Your things stay at your place where you can reach them any time.',
  },
  {
    q: 'Who builds the units?',
    a: 'We do. Stow-N-Go has manufactured its own storage units at the Raceland facility since 2006.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'SelfStorage'],
      '@id': `${BASE_URL}/#business`,
      name: SITE.name,
      legalName: SITE.legalName,
      description:
        'Portable storage company in Raceland, Louisiana. Builds and delivers ground-level storage units and air-conditioned portable offices across Lafourche, Terrebonne, and Assumption parishes.',
      url: BASE_URL,
      telephone: SITE.phoneRaw,
      email: SITE.email,
      image: `${BASE_URL}/images/stow-n-go-logo.png`,
      priceRange: '$114-$250 per month',
      foundingDate: '2006',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      openingHours: 'Mo-Su 09:00-17:00',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Lafourche Parish' },
        { '@type': 'AdministrativeArea', name: 'Terrebonne Parish' },
        { '@type': 'AdministrativeArea', name: 'Assumption Parish' },
        { '@type': 'AdministrativeArea', name: 'St. Mary Parish' },
      ],
      sameAs: [SITE.facebook],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Portable Storage Services',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.cardTitle, url: `${BASE_URL}/services/${s.slug}` },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: SITE.name,
      publisher: { '@id': `${BASE_URL}/#business` },
    },
    {
      '@type': 'HowTo',
      '@id': `${BASE_URL}/#howto`,
      name: 'How portable storage from Stow-N-Go works',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Pick a size',
          text: 'Call (985) 855-6525 and say what needs storing. We will match you to a 12, 16, or 20 ft unit and check availability.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'We deliver it',
          text: 'We haul the unit to your address and set it down on your driveway, yard, or job site, positioned where you want it.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Load on your schedule',
          text: 'Take your time loading at ground level. Keep the unit as long as you need it, month to month.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'We pick it up',
          text: 'When you are finished, we haul the unit away, move it to your next address, or store it loaded at our Raceland yard.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/#faq`,
      mainEntity: homeFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

const steps = [
  { n: '1', title: 'Pick a size', body: 'Call the office and say what you’re storing. We’ll point you to the right unit and check availability for your dates.' },
  { n: '2', title: 'We deliver it', body: 'Our truck sets the unit down right where you want it on your driveway, yard, or job site.' },
  { n: '3', title: 'Load on your schedule', body: 'Everything loads at ground level. No ramp, no rented truck, no rushed weekend.' },
  { n: '4', title: 'We pick it up', body: 'Finished? We haul it away, move it to your next address, or store it loaded at our Raceland yard.' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO: split layout, no gradient wash ────────────────── */}
      <section className="bg-white" aria-label="Hero">
        <div className="container-wide py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="section-label mb-3">Raceland, Louisiana &middot; Since 2006</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.05]">
                Portable Storage Units Delivered in Houma, Thibodaux &amp; Raceland
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
                We build our own ground-level storage units and haul them to your
                driveway, business, or job site anywhere in the bayou region. You load
                it where it sits. We pick it up when you’re done.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={`tel:${SITE.phoneRaw}`} className="btn-accent text-base">
                  Call {SITE.phoneDisplay}
                </a>
                <Link href="/services" className="btn-outline-dark text-base">
                  See Sizes &amp; Prices
                </Link>
              </div>
              <p className="mt-6 text-accent-dark font-bold text-lg font-serif">
                From $114 a month. No minimum rental term.
              </p>
            </div>
            <div className="relative h-72 md:h-96 lg:h-[480px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/portable-storage-unit-delivered-home-raceland-la.jpg"
                alt="Stow-N-Go portable storage unit delivered to a South Louisiana home driveway"
                fill
                className="object-cover"
                style={{ objectPosition: '85% 42%' }}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────── */}
      <div className="bg-primary" role="region" aria-label="Company highlights">
        <div className="container-wide py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center text-white">
            <div>
              <p className="font-bold text-2xl font-serif text-accent-light">Since 2006</p>
              <p className="text-sm text-gray-300">Built in Raceland</p>
            </div>
            <div>
              <p className="font-bold text-2xl font-serif text-accent-light">$114/mo</p>
              <p className="text-sm text-gray-300">Starting price</p>
            </div>
            <div>
              <p className="font-bold text-2xl font-serif text-accent-light">3 Parishes</p>
              <p className="text-sm text-gray-300">Lafourche, Terrebonne, Assumption</p>
            </div>
            <div>
              <p className="font-bold text-2xl font-serif text-accent-light">Month to Month</p>
              <p className="text-sm text-gray-300">No minimum term</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── UNIT LINEUP: spec cards ─────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="units-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">Sizes &amp; Prices</p>
            <h2 id="units-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2">
              The Unit Lineup
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Every unit comes out of our Raceland facility. Prices are published
              because you shouldn’t have to call three companies to find out what
              storage costs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {UNITS.map((unit) => (
              <article
                key={unit.name}
                className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <p className="text-primary font-bold text-xl font-serif">{unit.name}</p>
                <p className="text-gray-500 text-sm mt-0.5">{unit.size}</p>
                <p className="text-accent font-bold text-4xl mt-4 font-serif">
                  ${unit.price}
                  <span className="text-base text-gray-500 font-sans font-medium">/mo</span>
                </p>
                <p className="text-gray-600 text-sm mt-4 leading-relaxed flex-1">{unit.bestFor}</p>
              </article>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Delivery and pickup is a flat ${DELIVERY_FEE} in our core service area. Outlying areas quoted by phone.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="how-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 id="how-heading" className="text-3xl md:text-4xl font-bold text-primary">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                <p className="text-7xl font-serif font-bold text-accent/15" aria-hidden="true">{step.n}</p>
                <h3 className="text-primary font-bold text-xl -mt-6 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ───────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="services-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">What We Do</p>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Storage Services Across the Bayou Region
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Moving, remodeling, storm repairs, job sites, or plain old too much
              stuff. There is a page for the way you need storage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-accent hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <h3 className="text-primary font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {service.cardTitle}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{service.cardBlurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-accent font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ───────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="about-snippet-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:min-h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/stow-n-go-portable-storage-units-raceland-yard.jpg"
                alt="Rows of Stow-N-Go portable storage units at the Raceland, Louisiana yard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="section-label">About Stow-N-Go</p>
              <h2 id="about-snippet-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Built in Raceland, Rented Across the Bayou
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Stow-N-Go has built its own storage units in Raceland since 2006. The
                fleet still comes out of the facility on Double H Drive, which is why
                it holds up to South Louisiana heat, rain, and the occasional rough
                hurricane season.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                The company is still locally owned today, still on Double H Drive, and
                still hauling every unit with its own truck.
              </p>
              <Link href="/about" className="btn-dark">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="home-faq-heading">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-10">
            <p className="section-label">Straight Answers</p>
            <h2 id="home-faq-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Portable Storage Questions
            </h2>
          </div>
          <div className="space-y-4">
            {homeFaqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-lg border border-gray-200">
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-4 list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-sans font-semibold text-primary">{faq.q}</h3>
                  <svg className="w-5 h-5 text-accent shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: floating card over photo ───────────────────────── */}
      <section className="relative" aria-labelledby="cta-heading">
        <div className="absolute inset-0">
          <Image
            src="/images/delivery-truck-hauling-portable-storage-unit.jpg"
            alt=""
            aria-hidden="true"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative container-wide py-20 md:py-28">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 max-w-xl">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Need a Unit This Week?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-7">
              Tell us your address and what you’re storing. The office is open{' '}
              {SITE.hoursDisplay}, and we deliver across Lafourche, Terrebonne, and
              Assumption parishes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${SITE.phoneRaw}`} className="btn-accent text-base">
                Call {SITE.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-outline-dark text-base">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
