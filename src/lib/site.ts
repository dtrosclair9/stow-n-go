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

// Objection-handling FAQs for /contact, the page Google Ads traffic lands on.
// Every price here is written as a literal "$129.99" ON PURPOSE so the pre-launch
// claim grep can actually find it — unlike UNITS above, where the $ is added in JSX.
// If prices change, grep this file for the bare number AND the $-prefixed string.
// Nothing in here states a delivery timeframe, a security feature, or a warranty.
// Those are unconfirmed; answers route to a phone call instead.
export const CONTACT_FAQS = [
  {
    q: 'How much does a portable storage unit cost?',
    a: 'A 12 ft unit is $129.99 a month, a 16 ft is $144.99, and a 20 ft is $164.99. Delivery is $119 in the core service area, so a 16 ft unit delivered to your place runs $263.99 the first month and $144.99 every month after that.',
  },
  {
    q: 'Is there a minimum rental period?',
    a: 'No. It is month to month, with no contract to sign and no term to commit to. When you are done, call and we will schedule a pickup.',
  },
  {
    q: 'What does the $119 delivery fee cover?',
    a: 'Bringing the unit out to your address and setting it where you want it. We are based in Raceland, so most of Lafourche, Terrebonne, and Assumption Parish is a short run for us. Addresses further out, like Grand Isle, get quoted on the phone.',
  },
  {
    q: 'What size do I need?',
    a: 'The 12 ft holds about a bedroom or two, seasonal gear, or a small renovation. The 16 ft covers most household moves and remodels. The 20 ft is for whole-home storage, job site materials, and commercial use. If you are between two sizes, call and describe what you are putting in it.',
  },
  {
    q: 'Will it fit in my driveway?',
    a: 'The 12 ft unit is 12 feet long by 8 feet wide, the 16 ft is 16 by 8, and the 20 ft is 20 by 8. You also need clearance for the truck to back in and set it down. If you are not sure the spot works, call and walk us through it before you schedule anything.',
  },
  {
    q: 'Can I get to my things whenever I want?',
    a: 'Yes. The unit sits at your place, so there is no gate code, no office hours to work around, and no drive across town. Open it at midnight if you want to.',
  },
  {
    q: 'How is this different from renting a storage unit across town?',
    a: 'You do not drive to it. There is no truck to rent, no loading everything twice, and no hauling boxes across a parking lot. We drop the unit in your driveway, you fill it on your own schedule, and it either stays there or comes back to our yard.',
  },
  {
    q: 'What if I would rather not have it sitting at my house?',
    a: 'We can keep it at our Raceland yard instead of leaving it with you. Call and we will go over how that works and what it costs.',
  },
  {
    q: 'How soon can you deliver?',
    a: 'Same day or the next day, depending on how late in the day you call. Call in the morning and there is a good chance it goes out that afternoon. Call late and it is usually the next day. Either way you will know before you hang up.',
  },
  {
    q: 'Do I need a permit to put one in my yard?',
    a: 'That depends on your parish, and on your HOA if you live in a subdivision. Rules are not the same everywhere down here, so it is worth a quick call to your parish office before you schedule a delivery.',
  },
  {
    q: 'What areas do you deliver to?',
    a: 'Lafourche, Terrebonne, and Assumption Parish, which covers Houma, Thibodaux, Raceland, Morgan City, Larose, Cut Off, and everything in between. Further out we will quote you on the phone.',
  },
  {
    q: 'Do you rent office units?',
    a: 'Yes. The 16 ft office unit is $259 a month and it is air conditioned. Job sites use them as a cool, dry place to handle paperwork and lock up tools at the end of the day.',
  },
  {
    q: 'How long have you been doing this?',
    a: 'Stow-N-Go has been renting portable storage around Lafourche Parish since 2006, and we build the units ourselves in Raceland.',
  },
]
