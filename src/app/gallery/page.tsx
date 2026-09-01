import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'
import { BASE_URL, ogImage } from '@/lib/site'
import { photos } from './photos'

export const metadata: Metadata = {
  title: 'Photo Gallery | Units, Deliveries & the Yard',
  description:
    'Photos of Stow-N-Go portable storage units on driveways, deliveries in progress, and the Raceland, Louisiana facility where the units are built.',
  alternates: { canonical: `${BASE_URL}/gallery` },
  openGraph: {
    title: 'Photo Gallery | Stow-N-Go',
    description: 'Portable storage units, deliveries, and the Raceland facility.',
    url: `${BASE_URL}/gallery`,
    images: [ogImage],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ImageGallery',
      name: 'Stow-N-Go Photo Gallery',
      url: `${BASE_URL}/gallery`,
      description: 'Photos of Stow-N-Go portable storage units, deliveries, and the Raceland facility.',
      image: photos.map((p) => `${BASE_URL}${p.src}`),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${BASE_URL}/gallery` },
      ],
    },
  ],
}

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GalleryClient />
    </>
  )
}
