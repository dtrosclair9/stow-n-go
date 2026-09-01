import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { BASE_URL, SITE, ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us | Rent a Storage Unit',
  description:
    'Call (985) 855-6525 to rent a portable storage unit in the Houma, Thibodaux, or Raceland area. Office open 9 to 5 daily at 105 Double H Dr in Raceland.',
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Contact Stow-N-Go | Raceland, LA',
    description: 'Rent a portable storage unit. Call (985) 855-6525 or send a message.',
    url: `${BASE_URL}/contact`,
    images: [ogImage],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Stow-N-Go',
  url: `${BASE_URL}/contact`,
  description: 'Contact page for Stow-N-Go portable storage in Raceland, Louisiana.',
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
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100" aria-label="Contact introduction">
        <div className="container-wide pt-12 pb-12 md:pt-16">
          <p className="section-label">Get a Unit</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
            Contact Stow-N-Go
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            The fastest way to check availability is a phone call. If you’d rather
            write it out, the form below goes straight to the office.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="contact-form-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 id="contact-info-heading" className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Reach Out Directly
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">Phone</p>
                    <a href={`tel:${SITE.phoneRaw}`} className="text-gray-600 hover:text-accent transition-colors text-lg font-medium">
                      {SITE.phoneDisplay}
                    </a>
                    <p className="text-gray-500 text-sm">Office open {SITE.hoursDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-gray-600 hover:text-accent transition-colors break-all">
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">Yard &amp; Office</p>
                    <p className="text-gray-600">
                      {SITE.address.street}<br />
                      {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                    </p>
                    <p className="text-gray-500 text-sm">Delivering across Lafourche, Terrebonne &amp; Assumption parishes, and west to Morgan City</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">Facebook</p>
                    <a
                      href={SITE.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      Stow-N-Go
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=105+Double+H+Dr,+Raceland,+LA+70394&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map to Stow-N-Go at 105 Double H Dr, Raceland, LA"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 id="contact-form-heading" className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
