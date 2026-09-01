import Image from 'next/image'
import Link from 'next/link'
import { BASE_URL, SITE } from '@/lib/site'

export type FAQ = { q: string; a: string }
export type WhyItem = { title: string; body: string }
export type PricingRow = { name: string; detail: string; price: string }

export type ServicePageData = {
  slug: string
  serviceType: string
  areaServed: string[]
  label: string
  h1: string
  intro: string[]
  image?: { src: string; alt: string; pos?: string }
  ctaImage?: { src: string }
  whyHeading: string
  why: WhyItem[]
  includedHeading: string
  included: string[]
  includedNote: string
  pricing?: { heading: string; rows: PricingRow[]; note: string }
  sections?: { heading: string; paragraphs: string[] }[]
  faqHeading?: string
  faqs: FAQ[]
  cta: { heading: string; body: string; button: string }
}

export default function ServiceLandingPage({ data }: { data: ServicePageData }) {
  const pageUrl = `${BASE_URL}/services/${data.slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: data.h1,
        serviceType: data.serviceType,
        description: data.intro.join(' '),
        url: pageUrl,
        provider: {
          '@type': 'LocalBusiness',
          '@id': `${BASE_URL}/#business`,
          name: SITE.name,
          telephone: SITE.phoneRaw,
          url: BASE_URL,
        },
        areaServed: data.areaServed.map((name) => ({ '@type': 'City', name })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
          { '@type': 'ListItem', position: 3, name: data.h1, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: data.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100" aria-label="Page introduction">
        <div className="container-wide pt-10 pb-14 md:pt-14 md:pb-20">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-6">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-accent">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-accent">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-700" aria-current="page">{data.label}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label">{data.label}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6 leading-tight">
                {data.h1}
              </h1>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {data.intro.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`tel:${SITE.phoneRaw}`} className="btn-accent">
                  Call {SITE.phoneDisplay}
                </a>
                <Link href="/contact" className="btn-outline-dark">
                  Request a Quote
                </Link>
              </div>
            </div>
            {data.image && (
              <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  className="object-cover"
                  style={data.image.pos ? { objectPosition: data.image.pos } : undefined}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── WHY ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="why-heading">
        <div className="container-wide">
          <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-primary mb-10">
            {data.whyHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.why.map((item) => (
              <article key={item.title} className="bg-white rounded-lg p-7 border border-gray-100 shadow-sm">
                <h3 className="text-primary font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUDED ────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="included-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 id="included-heading" className="text-3xl font-bold text-primary mb-4">
                {data.includedHeading}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {data.includedNote}{' '}
                <a href={`tel:${SITE.phoneRaw}`} className="text-accent font-semibold hover:underline">
                  {SITE.phoneDisplay}
                </a>
              </p>
            </div>
            <ul className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 bg-gray-50 rounded px-4 py-3">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      {data.pricing && (
        <section className="section-padding bg-primary" aria-labelledby="pricing-heading">
          <div className="container-wide">
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-10">
              {data.pricing.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.pricing.rows.map((row) => (
                <div key={row.name} className="bg-white rounded-lg p-6">
                  <p className="text-primary font-bold text-lg">{row.name}</p>
                  <p className="text-gray-500 text-sm mt-1">{row.detail}</p>
                  <p className="text-accent font-bold text-3xl mt-4 font-serif">{row.price}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-sm mt-6 max-w-3xl">{data.pricing.note}</p>
          </div>
        </section>
      )}

      {/* ── EXTRA SECTIONS (local context etc.) ─────────────────── */}
      {data.sections?.map((section) => (
        <section key={section.heading} className="section-padding bg-white border-t border-gray-100" aria-label={section.heading}>
          <div className="container-wide max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-6">{section.heading}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="faq-heading">
        <div className="container-wide max-w-4xl">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-primary mb-10">
            {data.faqHeading ?? 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-lg border border-gray-200">
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-4 font-semibold text-primary list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-sans font-semibold">{faq.q}</h3>
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
      <section className="relative" aria-labelledby="service-cta-heading">
        <div className="absolute inset-0">
          <Image
            src={data.ctaImage?.src ?? '/images/portable-storage-unit-delivered-home-raceland-la.jpg'}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative container-wide py-20 md:py-28">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 max-w-xl">
            <h2 id="service-cta-heading" className="text-3xl font-bold text-primary mb-3">
              {data.cta.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-7">{data.cta.body}</p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${SITE.phoneRaw}`} className="btn-accent">
                {data.cta.button}
              </a>
              <Link href="/contact" className="btn-outline-dark">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
