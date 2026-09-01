import type { Metadata } from 'next'
import ServiceLandingPage, { type ServicePageData } from '@/components/ServiceLandingPage'
import { BASE_URL, ogImage } from '@/lib/site'

const SLUG = 'self-storage-raceland-la'

export const metadata: Metadata = {
  title: 'Storage Units in Raceland, LA',
  description:
    'Storage units from the company based in Raceland. Have a unit delivered to you, or keep your loaded unit at our yard at 105 Double H Dr. From $114 a month.',
  alternates: { canonical: `${BASE_URL}/services/${SLUG}` },
  openGraph: {
    title: 'Storage Units in Raceland, LA | Stow-N-Go',
    description: 'Delivered storage units and yard storage in Raceland, from $114 a month.',
    url: `${BASE_URL}/services/${SLUG}`,
    images: [ogImage],
  },
}

const data: ServicePageData = {
  slug: SLUG,
  serviceType: 'Storage unit rental and yard storage',
  areaServed: ['Raceland', 'Mathews', 'Lockport', 'Des Allemands', 'Bayou Blue', 'Schriever'],
  label: 'Raceland, Louisiana',
  h1: 'Storage Units in Raceland, LA',
  intro: [
    'Stow-N-Go is the storage company that actually lives in Raceland. The units are built here, and the office at 105 Double H Dr answers seven days a week.',
    'Storage here works two ways. Most people have a unit delivered to their address and keep it there. If a driveway needs to stay clear, we can instead park your loaded unit at our yard for as long as the rental runs. Either way it starts at $114 a month.',
  ],
  image: {
    src: '/images/stow-n-go-facility-raceland-la.jpg',
    alt: 'The Stow-N-Go facility on Double H Drive in Raceland, Louisiana',
    pos: 'center 40%',
  },
  whyHeading: 'The Hometown Advantage',
  why: [
    {
      title: 'Delivered or kept at the yard',
      body: 'Load the unit at your place and choose where it lives: your property, or our yard down the road. Switching later is one phone call and a haul.',
    },
    {
      title: 'No drive across the parish',
      body: 'Raceland deliveries are our shortest runs. Scheduling is simple because the yard sits minutes away, off Highway 90 near Highway 1.',
    },
    {
      title: 'A real person at a local office',
      body: 'Questions about sizes, moving dates, or getting into a stored unit go to the office on Double H Drive, open 9 to 5 every day.',
    },
    {
      title: 'The same box either way',
      body: 'Delivered rentals and yard-stored rentals use the same steel units with roll-up doors and your own lock, so nothing gets repacked when plans change.',
    },
  ],
  includedHeading: 'What a Raceland Rental Includes',
  includedNote: 'Everything bills by the month, no term commitment. The office can check sizes on the yard today at',
  included: [
    'Your choice: unit at your address or stored at our yard',
    'Delivery and pickup anywhere in the Raceland area',
    'A roll-up door, locked with your padlock',
    'Ground-level loading at your place',
    'Access to your yard-stored unit arranged through the office',
    'Easy switch between on-site and yard storage as needs change',
  ],
  pricing: {
    heading: 'Raceland Storage Pricing',
    rows: [
      { name: '12 ft unit', detail: "12' x 8' x 7'", price: '$114/mo' },
      { name: '16 ft unit', detail: "16' x 8' x 7'", price: '$124/mo' },
      { name: '20 ft unit', detail: "20' x 8' x 7.5'", price: '$134/mo' },
      { name: 'Delivery & pickup', detail: 'Flat rate, core area', price: '$119' },
    ],
    note: 'The monthly rate is the same whether the unit sits at your address or at our yard. Ask the office about yard storage logistics when you book.',
  },
  sections: [
    {
      heading: 'Storage From the Company Next Door',
      paragraphs: [
        'Raceland families have used these units for everything: clearing a camp down the bayou, holding furniture between closings in Mathews, keeping tools locked up during a Lockport job, and swallowing the garage overflow that every household grows eventually.',
        'Because this is home base, Raceland gets our most flexible scheduling. Need the unit moved from the driveway to the yard because company is coming for the holidays? That is a routine Tuesday for us, and your rental keeps running like nothing happened.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Does Stow-N-Go have storage units in Raceland?',
      a: 'Yes, this is our home base. Units rent from $114 a month, delivered to your Raceland address or kept loaded at our yard at 105 Double H Dr.',
    },
    {
      q: 'How do I get into my unit if it is stored at your yard?',
      a: 'Call the office to arrange access. The office is open 9 AM to 5 PM every day of the week, and a heads-up call is all it usually takes.',
    },
    {
      q: 'Which is better, keeping the unit at my house or at your yard?',
      a: 'If you have the space and want daily access, keep it at your place. If the driveway needs to stay clear or you’re between addresses, the yard makes more sense. The rate is the same and you can switch.',
    },
    {
      q: 'Do you rent to businesses in Raceland?',
      a: 'Yes. Local shops and contractors keep units for stock, records, and equipment, both on their own property and at our yard.',
    },
    {
      q: 'Can I change sizes after I start renting?',
      a: 'Yes. If the 12 ft fills up faster than expected, call the office about swapping to a 16 or 20 ft or adding a second unit alongside it. Billing simply adjusts to whatever is on rent.',
    },
    {
      q: 'What sizes are usually available?',
      a: '12, 16, and 20 ft units, plus insulated 16 ft units and air-conditioned office units. Availability moves week to week, so call for what is on the yard right now.',
    },
  ],
  cta: {
    heading: 'Storage Two Minutes From Home',
    body: 'Call the Double H Drive office with a rough list of what needs to fit. We’ll have a size and a date for you before you hang up.',
    button: 'Talk to the Office',
  },
}

export default function Page() {
  return <ServiceLandingPage data={data} />
}
