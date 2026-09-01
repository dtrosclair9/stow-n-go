import type { Metadata } from 'next'
import ServiceLandingPage, { type ServicePageData } from '@/components/ServiceLandingPage'
import { BASE_URL, ogImage } from '@/lib/site'

const SLUG = 'portable-storage-containers-morgan-city-la'

export const metadata: Metadata = {
  title: 'Portable Storage Containers in Morgan City, LA',
  description:
    'Delivered storage containers for Morgan City homes, shipyards, and job sites. Ground-level units from $114 a month. Call (985) 855-6525 for a delivery quote.',
  alternates: { canonical: `${BASE_URL}/services/${SLUG}` },
  openGraph: {
    title: 'Portable Storage Containers in Morgan City, LA | Stow-N-Go',
    description: 'Ground-level storage units delivered to the Morgan City area from $114 a month.',
    url: `${BASE_URL}/services/${SLUG}`,
    images: [ogImage],
  },
}

const data: ServicePageData = {
  slug: SLUG,
  serviceType: 'Portable storage container rental',
  areaServed: ['Morgan City', 'Berwick', 'Patterson', 'Amelia', 'Bayou Vista', 'Gibson'],
  label: 'Morgan City, Louisiana',
  h1: 'Portable Storage Containers in Morgan City, LA',
  intro: [
    'Stow-N-Go runs portable storage units west to Morgan City, Berwick, Patterson, and Amelia. The unit rides out on our trailer, lands on your driveway or laydown area, and loads at ground level.',
    'Morgan City sits at the far edge of our regular routes, so delivery there is quoted by phone for your exact address. The monthly rent is the same as everywhere else we serve, starting at $114.',
  ],
  image: {
    src: '/images/stow-n-go-portable-storage-units-raceland-yard.jpg',
    alt: 'Stow-N-Go portable storage unit ready for delivery to the Morgan City, Louisiana area',
  },
  whyHeading: 'What Morgan City Uses the Units For',
  why: [
    {
      title: 'Marine and fabrication crews',
      body: 'Tools, rigging, consumables, and PPE stay dry and locked a few steps from the work instead of riding back and forth in trucks. The 20 ft unit is the usual pick for crews.',
    },
    {
      title: 'Between houses',
      body: 'When a sale closes before the next place is ready, a loaded unit can wait at your family member’s land in Berwick, or come back to our yard in Raceland until you call for it.',
    },
    {
      title: 'Shop and warehouse overflow',
      body: 'A unit beside the building handles seasonal stock and records without committing to more warehouse lease than the business needs.',
    },
    {
      title: 'Project staging',
      body: 'Renovations and small commercial jobs in St. Mary Parish use the units to stage materials so weather and theft stop eating the schedule.',
    },
  ],
  includedHeading: 'What Comes With the Rental',
  includedNote: 'Rentals bill monthly for as long as the unit stays with you, with no set end date required. For a Morgan City delivery quote, call',
  included: [
    'Delivery to Morgan City, Berwick, Patterson, or Amelia, quoted for your address',
    'Placement where your crew or family actually needs it',
    'Lockable roll-up door with your own padlock',
    'Steel unit built at our Raceland facility',
    'Pickup or relocation whenever the job wraps',
    'Option to hold your loaded unit at our yard between addresses',
  ],
  pricing: {
    heading: 'Morgan City Area Pricing',
    rows: [
      { name: '12 ft unit', detail: "12' x 8' x 7'", price: '$114/mo' },
      { name: '16 ft unit', detail: "16' x 8' x 7'", price: '$124/mo' },
      { name: '20 ft unit', detail: "20' x 8' x 7.5'", price: '$134/mo' },
      { name: 'Delivery & pickup', detail: 'Quoted for Morgan City addresses', price: 'Call' },
    ],
    note: 'Monthly rent matches our whole service area. Delivery west of the Atchafalaya depends on your exact address, so the office quotes it in one call. Taxes apply.',
  },
  sections: [
    {
      heading: 'Storage Around the Shipyards',
      paragraphs: [
        'Most of our Morgan City deliveries go to working addresses: tools that won’t fit the truck bed, materials that can’t sit in the rain, and equipment waiting between jobs at the dock.',
        'Our units come out of a Raceland fabrication shop, so they’re steel-sided, roofed, and used to the same conditions your gear lives in. Units can stay on site for the length of a contract and move to the next yard when the work does.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Do you really deliver to Morgan City?',
      a: 'Yes. Morgan City, Berwick, Patterson, Amelia, and Bayou Vista are all on our delivery map. Since it is a longer run from Raceland, the delivery fee is quoted for your specific address rather than the flat core-area rate.',
    },
    {
      q: 'What does delivery to Morgan City cost?',
      a: 'It depends on the address. Call (985) 855-6525 with the street and we will give you the number before you commit to anything.',
    },
    {
      q: 'Can a business keep a unit at a shipyard or laydown yard?',
      a: 'Yes. Commercial placements are common, and month-to-month billing means the unit can stay for a two-month contract or a two-year one.',
    },
    {
      q: 'Why ground-level instead of a raised container?',
      a: 'Loading at grade means hand trucks, dollies, and heavy toolboxes roll straight in. Nobody lifts a compressor up into a doorway at the end of a shift.',
    },
    {
      q: 'Can you store the loaded unit for me?',
      a: 'Yes. If it can’t stay where you loaded it, it rides back to Double H Drive and your rental keeps going.',
    },
  ],
  cta: {
    heading: 'Price a Morgan City Delivery',
    body: 'One call gets you a unit size, the monthly rent, and the exact delivery number for your address.',
    button: 'Get the Quote',
  },
}

export default function Page() {
  return <ServiceLandingPage data={data} />
}
