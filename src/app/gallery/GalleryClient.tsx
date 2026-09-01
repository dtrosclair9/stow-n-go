'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { photos, categories } from './photos'

export default function GalleryClient() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? photos : photos.filter((p) => p.category === active)

  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100" aria-label="Gallery introduction">
        <div className="container-wide pt-12 pb-12 md:pt-16">
          <p className="section-label">Photos</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">Photo Gallery</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            The units, the truck, and the Raceland shop where it all gets built.
          </p>
        </div>
      </section>

      {/* ── FILTER & GRID ───────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="gallery-grid-heading">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 justify-center mb-10" role="group" aria-label="Filter photos by category">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  active === cat ? 'bg-accent text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <h2 id="gallery-grid-heading" className="sr-only">
            Photos {active !== 'All' ? `in ${active}` : ''}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((photo) => (
              <figure
                key={photo.src}
                className="relative group overflow-hidden rounded-xl shadow-sm border border-gray-100"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-primary/80 to-transparent">
                  <span className="inline-block text-accent-light text-xs font-semibold uppercase tracking-wider mb-0.5">
                    {photo.category}
                  </span>
                  <p className="text-white text-sm font-semibold">{photo.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-16">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 section-padding text-center border-t border-gray-200" aria-labelledby="gallery-cta-heading">
        <div className="container-wide">
          <h2 id="gallery-cta-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Want One of These in Your Driveway?
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
            Pick a size and we will handle the hauling.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/services" className="btn-accent text-base">
              See Sizes &amp; Prices
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-dark text-base">
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
