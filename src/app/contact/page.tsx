import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import StickyCallBar from '@/components/StickyCallBar'
import { BASE_URL, SITE, ogImage, UNITS, CONTACT_FAQS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Rent a Storage Unit | Prices & Sizes',
  description:
    'Portable storage units delivered in Houma, Thibodaux, Raceland and Morgan City. $129.99 to $164.99 a month plus $119 delivery, no minimum term. Call (985) 855-6525.',
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Rent a Portable Storage Unit | Stow-N-Go',
    description:
      'Delivered to your driveway from $129.99 a month plus $119 delivery. No minimum rental term. Call (985) 855-6525.',
    url: `${BASE_URL}/contact`,
    images: [ogImage],
  },
}

const AREAS = [
  'Houma',
  'Thibodaux',
  'Raceland',
  'Morgan City',
  'Larose',
  'Cut Off',
  'Lockport',
  'Gray',
  'Schriever',
  'Napoleonville',
]

const STEPS = [
  {
    n: '1',
    h: 'Call and pick a size',
    p: 'Tell us what you are storing and we will point you at the right unit. Takes a couple of minutes and there is nothing to fill out.',
  },
  {
    n: '2',
    h: 'We bring it to you',
    p: 'The unit gets delivered to your address and set where you want it. $119 in the core service area, quoted by phone further out.',
  },
  {
    n: '3',
    h: 'Keep it as long as you need',
    p: 'Month to month, no contract. Load it on your own schedule, get into it whenever you want, and call us when you are ready for it to go.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${BASE_URL}/contact#page`,
      name: 'Rent a Storage Unit from Stow-N-Go',
      url: `${BASE_URL}/contact`,
      description:
        'Rent a portable storage unit delivered in the Houma, Thibodaux, Raceland and Morgan City area. Prices, sizes, delivery fee and service area.',
      mainEntity: {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#business`,
        name: SITE.name,
        telephone: SITE.phoneRaw,
        email: SITE.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.state,
          postalCode: SITE.address.zip,
          addressCountry: 'US',
        },
        sameAs: [SITE.facebook],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/contact#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Rent a Unit', item: `${BASE_URL}/contact` },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/contact#faq`,
      mainEntity: CONTACT_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO: price anchor + phone as the primary action ────── */}
      <section className="bg-white" aria-labelledby="rent-heading">
        <div className="container-wide pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="section-label">Rent a Unit</p>
              <h1
                id="rent-heading"
                className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-5 leading-tight"
              >
                Portable storage delivered to your driveway, from $129.99 a month
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We build the units in Raceland and haul them out across Lafourche,
                Terrebonne and Assumption. No minimum term, no contract, and the
                price you see below is the price.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="btn-accent text-base text-center"
                  aria-label={`Call Stow-N-Go at ${SITE.phoneDisplay}`}
                >
                  Call {SITE.phoneDisplay}
                </a>
                <a href="#callback" className="btn-outline-dark text-base text-center">
                  Have us call you
                </a>
              </div>

              <p className="text-sm text-gray-500">
                Office open {SITE.hoursDisplay}. Most people call, check a size, and
                have it handled in one conversation.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/portable-storage-unit-delivered-home-raceland-la.jpg"
                alt="A Stow-N-Go portable storage unit with a red roll-up door set on the grass beside a house in Raceland, Louisiana"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICES: the differentiator, stated plainly ──────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="prices-heading">
        <div className="container-wide">
          <h2 id="prices-heading" className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Sizes and prices
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Monthly rates. Delivery is a flat $119 in the core service area, which is
            most of what we cover, because we are hauling from Raceland and not from
            a depot two parishes over.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {UNITS.map((unit) => (
              <div
                key={unit.name}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold text-primary">{unit.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{unit.size}</p>
                <p className="text-3xl font-bold text-accent mt-4">
                  ${unit.price}
                  <span className="text-base font-normal text-gray-500">/mo</span>
                </p>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed flex-1">
                  {unit.bestFor}
                </p>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="btn-accent text-sm text-center mt-5"
                >
                  Check availability
                </a>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-6">
            A 16 ft unit delivered comes to $263.99 the first month, then $144.99 after
            that. Outlying addresses like Grand Isle are quoted on the phone.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="how-heading">
        <div className="container-wide">
          <h2 id="how-heading" className="text-3xl md:text-4xl font-bold text-primary mb-10">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.n}>
                <div className="w-11 h-11 rounded-full bg-accent text-white font-bold text-lg flex items-center justify-center mb-4">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.h}</h3>
                <p className="text-gray-600 leading-relaxed">{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="area-heading">
        <div className="container-wide">
          <h2 id="area-heading" className="text-3xl md:text-4xl font-bold text-white mb-3">
            Where we deliver
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Lafourche, Terrebonne and Assumption Parish, and the towns in between. If
            you do not see yours, call and ask. We probably go there.
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {AREAS.map((area) => (
              <li
                key={area}
                className="border border-white/25 text-white text-sm rounded-full px-4 py-2"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CALLBACK FORM: secondary path ───────────────────────── */}
      <section id="callback" className="section-padding bg-white" aria-labelledby="callback-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2
                id="callback-heading"
                className="text-3xl md:text-4xl font-bold text-primary mb-4"
              >
                Would you rather we call you?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Fill this out and we will get back to you. A call is still faster if
                you need an answer today, and the number is{' '}
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="text-accent font-semibold hover:underline"
                >
                  {SITE.phoneDisplay}
                </a>
                .
              </p>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-primary">Office hours</p>
                  <p className="text-gray-600">{SITE.hoursDisplay}</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-gray-600 hover:text-accent transition-colors break-all"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-primary">Yard</p>
                  <p className="text-gray-600">
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS: objection handling ────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="faq-heading">
        <div className="container-wide max-w-4xl">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Questions people ask before they rent
          </h2>
          <p className="text-gray-600 mb-10">
            If yours is not here, call and ask. We would rather answer it now than have
            you find out later.
          </p>
          <div className="space-y-4">
            {CONTACT_FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-lg border border-gray-200">
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-4 font-semibold text-primary list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-sans font-semibold">{faq.q}</h3>
                  <svg
                    className="w-5 h-5 text-accent shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP + CLOSING CTA ───────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="map-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 id="map-heading" className="text-3xl font-bold text-primary mb-4">
                Ready when you are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Give us a call, tell us roughly what you are storing and where it is
                going, and we will tell you what is available and what it runs.
              </p>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-accent text-base">
                Call {SITE.phoneDisplay}
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps?q=105+Double+H+Dr,+Raceland,+LA+70394&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Stow-N-Go at 105 Double H Dr, Raceland, LA"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer so the sticky mobile bar never covers the last CTA */}
      <div className="h-20 lg:hidden" aria-hidden="true" />

      <StickyCallBar />
    </>
  )
}
