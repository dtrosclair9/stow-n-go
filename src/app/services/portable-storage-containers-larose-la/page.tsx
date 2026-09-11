import type { Metadata } from 'next'
import ServiceLandingPage, { type ServicePageData } from '@/components/ServiceLandingPage'
import { BASE_URL, ogImage } from '@/lib/site'

const SLUG = 'portable-storage-containers-larose-la'

export const metadata: Metadata = {
  title: 'Portable Storage in Larose & Cut Off, LA',
  description:
    'Storage containers delivered down Bayou Lafourche to Larose, Cut Off, Galliano and Golden Meadow. Units from $129.99/mo, built in Raceland. (985) 855-6525.',
  alternates: { canonical: `${BASE_URL}/services/${SLUG}` },
  openGraph: {
    title: 'Portable Storage in Larose & Cut Off, LA | Stow-N-Go',
    description: 'Delivered storage units for the bayou communities, from $129.99 a month.',
    url: `${BASE_URL}/services/${SLUG}`,
    images: [ogImage],
  },
}

const data: ServicePageData = {
  slug: SLUG,
  serviceType: 'Portable storage container rental',
  areaServed: ['Larose', 'Cut Off', 'Galliano', 'Golden Meadow', 'Lockport', 'Mathews'],
  label: 'Bayou Lafourche',
  h1: 'Portable Storage Containers in Larose & Cut Off, LA',
  intro: [
    'From Lockport down to Golden Meadow, Stow-N-Go brings the storage unit to you. We set it on your driveway, your slab, or your camp property, and it stays put while you load at ground level.',
    'The bayou communities have rented from us since 2006 for moves, camp cleanouts, and crew gear rotating through Port Fourchon. Our yard in Raceland is a straight run up Highway 1, which keeps scheduling simple.',
  ],
  image: {
    src: '/images/stow-n-go-portable-storage-units-raceland-yard.jpg',
    alt: 'Stow-N-Go portable storage unit at the Raceland yard, ready for a run down the bayou',
  },
  whyHeading: 'Why the Bayou Calls Us',
  why: [
    {
      title: 'Fourchon crew gear',
      body: 'Offshore rotations leave gear on land for weeks at a time. A locked unit at the house or the company lot in Galliano beats a pile of totes in the carport.',
    },
    {
      title: 'Camp season',
      body: 'Opening or closing a camp means moving furniture, gear, and appliances somewhere dry. The unit rides down LA-1 with us so your truck doesn’t make six trips.',
    },
    {
      title: 'Moves along one road',
      body: 'Moving from Cut Off to Larose or Lockport to Mathews is one haul for us. Load the unit once and we set it at the new address.',
    },
    {
      title: 'Hurricane season reality',
      body: 'Lower Lafourche knows what June through November can bring. A unit lets you consolidate and protect belongings before a storm, or clear a damaged house fast afterward.',
    },
  ],
  includedHeading: 'What Comes With a Bayou Delivery',
  includedNote: 'The rental runs monthly until we haul the unit back, with no term to commit to up front. To put a delivery on the schedule, ring',
  included: [
    'Delivery anywhere from Lockport to Golden Meadow',
    'Placement on driveways, slabs, and camp lots the truck can reach',
    'Steel unit with a roll-up door you lock yourself',
    'Heavy gear and appliances roll in at grade',
    'A move to your next address when you relocate along the bayou',
    'If the driveway has to clear, the loaded unit rides back to Raceland with us',
  ],
  pricing: {
    heading: 'South Lafourche Pricing',
    rows: [
      { name: '12 ft unit', detail: "12' x 8' x 7'", price: '$129.99/mo' },
      { name: '16 ft unit', detail: "16' x 8' x 7'", price: '$144.99/mo' },
      { name: '20 ft unit', detail: "20' x 8' x 7.5'", price: '$164.99/mo' },
      { name: 'Delivery & pickup', detail: 'Flat in the core area; Golden Meadow and beyond quoted', price: '$119' },
    ],
    note: 'Rent is the same up and down the bayou. Deliveries past Golden Meadow, including Grand Isle, are quoted by address. Taxes apply.',
  },
  sections: [
    {
      heading: 'Up and Down LA-1',
      paragraphs: [
        'Larose, Cut Off, and Galliano live along a single stretch of LA-1, and so does most of what we deliver there. We’ve set units down for families between houses in Cut Off, shops in Galliano keeping supplies out of the weather, and deckhands in Larose storing an apartment between hitches.',
        'Being close matters here. When a front is coming up the Gulf, you don’t want your storage company routing a truck from Baton Rouge. Ours leaves from Raceland, straight up Highway 1, and the person answering the phone has driven every mile of LA-1 you have.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Do you deliver storage units to Larose, Cut Off, and Galliano?',
      a: 'Yes, those are regular routes for us, along with Lockport, Mathews, and Golden Meadow. Delivery and pickup is a flat $119 in the core area; the farthest addresses down the bayou get a quick quote by phone.',
    },
    {
      q: 'What about Grand Isle?',
      a: 'We can usually arrange Grand Isle deliveries for an added fee. Call with the address and we will price the run.',
    },
    {
      q: 'Can I store my stuff in the unit before a storm?',
      a: 'Yes, plenty of bayou families use a unit to consolidate belongings ahead of hurricane season. Keep in mind the unit protects against rain and wind-blown debris like a small outbuilding would; it isn’t a substitute for evacuating irreplaceable items from a flood zone.',
    },
    {
      q: 'Can a unit sit at my camp?',
      a: 'As long as the truck can reach the spot on solid ground, yes. Tell us about the access road and we will plan the placement.',
    },
    {
      q: 'How big is each unit inside?',
      a: 'The 12 ft unit is 12 by 8 ft with a 7 ft ceiling, roughly a bedroom and a half of furniture. The 16 ft handles most household moves. The 20 ft takes a full house or a serious pile of equipment.',
    },
  ],
  cta: {
    heading: 'Need a Unit Down the Bayou?',
    body: 'Give the office your address between Lockport and Golden Meadow and we will line up the size and the delivery day.',
    button: 'Schedule a Delivery',
  },
}

export default function Page() {
  return <ServiceLandingPage data={data} />
}
