import type { Metadata } from 'next'
import ServiceLandingPage, { type ServicePageData } from '@/components/ServiceLandingPage'
import { BASE_URL, ogImage } from '@/lib/site'

const SLUG = 'portable-storage-containers-thibodaux-la'

export const metadata: Metadata = {
  title: 'Portable Storage Containers in Thibodaux, LA',
  description:
    'Storage containers delivered to Thibodaux homes, farms, and Nicholls State students. Load at ground level in your own driveway. Units from $129.99 a month.',
  alternates: { canonical: `${BASE_URL}/services/${SLUG}` },
  openGraph: {
    title: 'Portable Storage Containers in Thibodaux, LA | Stow-N-Go',
    description: 'Delivered storage for Thibodaux homes, farms, and students. From $129.99 a month.',
    url: `${BASE_URL}/services/${SLUG}`,
    images: [ogImage],
  },
}

const data: ServicePageData = {
  slug: SLUG,
  serviceType: 'Portable storage container rental',
  areaServed: ['Thibodaux', 'Schriever', 'Chackbay', 'Labadieville', 'Napoleonville', 'Raceland'],
  label: 'Thibodaux, Louisiana',
  h1: 'Portable Storage Containers in Thibodaux, LA',
  intro: [
    'A Stow-N-Go unit in your Thibodaux driveway means packing a move or a renovation at your own pace instead of racing a rental truck back to the counter. We bring the container to you, you fill it, and we take it wherever it goes next.',
    'We’ve delivered around Thibodaux since 2006, from historic district houses off Canal Boulevard to sugarcane operations out Highway 20, so the truck already knows the way.',
  ],
  image: {
    src: '/images/delivery-truck-hauling-portable-storage-unit.jpg',
    alt: 'Stow-N-Go truck hauling a portable storage unit down the highway',
  },
  whyHeading: 'Why Thibodaux Calls Stow-N-Go',
  why: [
    {
      title: 'Renovating an older home',
      body: 'Thibodaux has houses worth preserving, and remodeling one means clearing rooms. A unit outside keeps furniture dry and close instead of scattered between a garage and a storage lot across town.',
    },
    {
      title: 'Nicholls students and parents',
      body: 'When the dorms close, a delivered unit swallows a whole apartment in one afternoon. Load it near campus, and we can hold it at our yard until August.',
    },
    {
      title: 'Farm and camp storage',
      body: 'Seasonal equipment, feed, hunting gear, and camp furniture all fit the 20 ft units, delivered right to the property so nothing rides in a pickup twice.',
    },
    {
      title: 'Careful placement',
      body: 'Older Thibodaux driveways and tight lots take some judgment. We set the unit where doors swing clear and nothing blocks the carport.',
    },
  ],
  includedHeading: 'What a Thibodaux Rental Includes',
  includedNote: 'Keep the unit for three weeks or three years; billing just runs monthly until we pick it up. For availability around your dates, the office is at',
  included: [
    'Delivery and placement anywhere our truck can reach in Thibodaux',
    'Loads flat off the ground, no ramp or lift gate',
    'Steel construction that stands up to bayou weather',
    'You keep the only key',
    'Relocation to a new address when plans change',
    'Loaded-unit storage at our Raceland yard, ten minutes down Highway 1',
  ],
  pricing: {
    heading: 'Thibodaux Portable Storage Pricing',
    rows: [
      { name: '12 ft unit', detail: "12' x 8' x 7'", price: '$129.99/mo' },
      { name: '16 ft unit', detail: "16' x 8' x 7'", price: '$144.99/mo' },
      { name: '20 ft unit', detail: "20' x 8' x 7.5'", price: '$164.99/mo' },
      { name: 'Delivery & pickup', detail: 'Flat rate, core area', price: '$119' },
    ],
    note: 'Rent runs until we pick the unit up. A 16 ft insulated option is available for storage that needs a buffer from the heat. Taxes apply.',
  },
  sections: [
    {
      heading: 'Who Rents in Thibodaux',
      paragraphs: [
        'Thibodaux storage needs run the full range. In May, it’s students emptying apartments near Nicholls State and parents who would rather load once than haul everything back to Lafayette or Metairie. In the fall, it’s families mid-renovation and farms staging equipment between seasons out toward Chackbay and Labadieville.',
        'Our yard sits in Raceland, a straight shot down Highway 1, so Thibodaux deliveries are quick to schedule and cheap to run. That’s also what makes yard storage practical here: load the unit at your place, and if the driveway needs to clear, we bring the whole thing back to Double H Drive until you want it again.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much is a storage container rental in Thibodaux?',
      a: 'Units run $129.99 to $164.99 a month depending on size, and delivery plus pickup is a flat $119. There is no minimum number of months.',
    },
    {
      q: 'Do you offer student storage for Nicholls State?',
      a: 'Yes. We deliver units near campus, you load your apartment or dorm contents, and we can store the loaded unit at our Raceland yard over the summer. One 12 ft unit typically holds a full student apartment.',
    },
    {
      q: 'Can the unit go on a farm or rural property?',
      a: 'Yes, as long as the truck can get to the spot on firm ground. We place units on farms, camps, and acreage around Chackbay, Choctaw, and down Bayou Lafourche all the time.',
    },
    {
      q: 'How far in advance should I book?',
      a: 'A week of notice usually works, and more helps in May and December when moves stack up. Call the office and we’ll tell you what the schedule really looks like.',
    },
    {
      q: 'Will the unit damage my driveway?',
      a: 'The units are designed to sit flat and spread their weight, and we place them carefully. Tell us if the surface is fresh concrete or pavers and we will plan the placement with you.',
    },
    {
      q: 'Is anything off limits inside the unit?',
      a: 'Fuel, propane bottles, chemicals, and anything living. Insulated units soften the heat, though nothing in the storage fleet is air conditioned, so plan around that for delicate items.',
    },
  ],
  cta: {
    heading: 'Storage on Your Thibodaux Schedule',
    body: 'Moving, renovating, or clearing out for the semester, the first step is one phone call about dates and sizes.',
    button: 'Check Availability',
  },
}

export default function Page() {
  return <ServiceLandingPage data={data} />
}
