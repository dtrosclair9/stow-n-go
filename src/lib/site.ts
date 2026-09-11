// Stow-N-Go site-wide constants. Single source of truth for identity, contact,
// and the service page list. Canonical host is www (matches 20 years of indexed URLs).
export const BASE_URL = 'https://www.stowngo.net'

export const SITE = {
  name: 'Stow-N-Go',
  legalName: 'Stow-N-Go LLC',
  domain: 'www.stowngo.net',
  phoneDisplay: '(985) 855-6525',
  phoneRaw: '+19858556525',
  email: 'jacob@stowngo.net',
  address: {
    street: '105 Double H Dr',
    city: 'Raceland',
    state: 'LA',
    zip: '70394',
  },
  geo: { lat: 29.7204088, lng: -90.5874386 },
  facebook: 'https://www.facebook.com/stowngo/',
  founded: 2006,
  hours: 'Mo-Su 09:00-17:00',
  hoursDisplay: '9 AM to 5 PM, seven days a week',
}

// Shared OG image. Plain object (NOT `as const`) so it satisfies Next's Metadata
// types on Vercel. Spread `images: [ogImage]` into EVERY page's openGraph.
export const ogImage = {
  url: '/images/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Stow-N-Go portable storage units, Raceland Louisiana',
}

export type ServiceEntry = {
  slug: string
  navLabel: string
  cardTitle: string
  cardBlurb: string
}

// Order here drives the Services dropdown, footer links, services index, and sitemap.
export const SERVICES: ServiceEntry[] = [
  {
    slug: 'portable-storage-containers-houma-la',
    navLabel: 'Houma Portable Storage',
    cardTitle: 'Portable Storage Containers in Houma',
    cardBlurb: 'Ground-level storage units delivered anywhere in Houma and Terrebonne Parish, from $129.99 a month.',
  },
  {
    slug: 'portable-storage-containers-thibodaux-la',
    navLabel: 'Thibodaux Portable Storage',
    cardTitle: 'Portable Storage Containers in Thibodaux',
    cardBlurb: 'Delivered storage for Thibodaux homes, farms, and Nicholls State students.',
  },
  {
    slug: 'portable-storage-containers-morgan-city-la',
    navLabel: 'Morgan City Portable Storage',
    cardTitle: 'Portable Storage Containers in Morgan City',
    cardBlurb: 'Storage containers delivered to homes, shipyards, and job sites in the Morgan City area.',
  },
  {
    slug: 'portable-storage-containers-larose-la',
    navLabel: 'Larose & Cut Off',
    cardTitle: 'Portable Storage in Larose & Cut Off',
    cardBlurb: 'Serving the bayou communities from Larose to Golden Meadow, including Port Fourchon crews.',
  },
  {
    slug: 'storm-damage-storage-louisiana',
    navLabel: 'Storm Damage Storage',
    cardTitle: 'Storm Damage Storage',
    cardBlurb: 'A unit in your driveway while your home gets repaired. ALE insurance coverage can reimburse storage fees; ask your adjuster.',
  },
  {
    slug: 'portable-office-rental-houma-la',
    navLabel: 'Portable Office Rental',
    cardTitle: 'Portable Office Rental',
    cardBlurb: 'Air-conditioned 16 ft office units delivered to job sites across the Houma-Thibodaux area. $259 a month.',
  },
  {
    slug: 'self-storage-raceland-la',
    navLabel: 'Raceland Storage Yard',
    cardTitle: 'Storage Units in Raceland',
    cardBlurb: 'Rent a unit at our Raceland yard on Double H Drive, or have one delivered to you.',
  },
]

// Unit lineup. Prices raised by the owner 2026-09-11. Delivery is $119 in the
// core service area; outlying areas are quoted by phone.
// NOTE: these render as `${unit.price}` — the dollar sign is added in JSX, so a
// price here is NOT greppable as "$129.99". When prices change, search for the
// bare number too, and verify against the rendered card, not a $-prefixed grep.
export const UNITS = [
  { name: '12 ft Unit', size: "12' x 8' x 7'", price: '129.99', bestFor: 'A bedroom or two, seasonal gear, small renovations' },
  { name: '16 ft Unit', size: "16' x 8' x 7'", price: '144.99', bestFor: 'Most household moves and remodels. Insulated option available' },
  { name: '20 ft Unit', size: "20' x 8' x 7.5'", price: '164.99', bestFor: 'Whole-home storage, job site materials, commercial use' },
  { name: '16 ft Office', size: "16' x 8' x 7.5'", price: '259', bestFor: 'Job site offices. Air conditioned', office: true },
]

export const DELIVERY_FEE = 119
