import type { Metadata } from 'next'
import ServiceLandingPage, { type ServicePageData } from '@/components/ServiceLandingPage'
import { BASE_URL, ogImage } from '@/lib/site'

const SLUG = 'portable-storage-containers-houma-la'

export const metadata: Metadata = {
  title: 'Portable Storage Containers in Houma, LA',
  description:
    'Ground-level portable storage delivered anywhere in Houma and Terrebonne Parish. 12 to 20 ft units from $129.99 a month, flat $119 delivery. (985) 855-6525.',
  alternates: { canonical: `${BASE_URL}/services/${SLUG}` },
  openGraph: {
    title: 'Portable Storage Containers in Houma, LA | Stow-N-Go',
    description: '12 to 20 ft units delivered across Houma from $129.99 a month.',
    url: `${BASE_URL}/services/${SLUG}`,
    images: [ogImage],
  },
}

const data: ServicePageData = {
  slug: SLUG,
  serviceType: 'Portable storage container rental',
  areaServed: ['Houma', 'Bayou Cane', 'Gray', 'Schriever', 'Bayou Blue', 'Dulac', 'Montegut', 'Chauvin'],
  label: 'Houma, Louisiana',
  h1: 'Portable Storage Containers in Houma, LA',
  intro: [
    'Stow-N-Go delivers portable storage containers to driveways, businesses, and job sites all over Houma and Terrebonne Parish. The unit arrives on our trailer, gets set down where you want it, and stays as long as you need it.',
    'A 16 ft unit runs $144.99 a month with a flat $119 for delivery and pickup. Call around and compare what delivered storage costs in Houma before you book anything, including from us. We put our numbers right here because they hold up.',
  ],
  image: {
    src: '/images/portable-storage-unit-delivered-home-raceland-la.jpg',
    alt: 'Stow-N-Go portable storage unit set at a South Louisiana home build',
    pos: '85% 42%',
  },
  ctaImage: { src: '/images/delivery-truck-hauling-portable-storage-unit.jpg' },
  whyHeading: 'Why Houma Rents From Stow-N-Go',
  why: [
    {
      title: 'Ground-level loading',
      body: 'Our units sit flat on the ground. Furniture, appliances, and shop equipment roll straight in without a ramp, which matters when it’s 95 degrees in a Houma July.',
    },
    {
      title: 'Twenty minutes from our yard',
      body: 'Houma is a short haul from our Raceland facility, so scheduling a delivery or a swap doesn’t involve routing a truck from another city.',
    },
    {
      title: 'Built for this climate',
      body: 'We build the units ourselves for South Louisiana rain and heat, and insulated 16 ft units are available if what you are storing needs the extra buffer.',
    },
    {
      title: 'Residential and commercial',
      body: 'The same fleet serves home moves in Bayou Cane, renovation projects in Gray, and material storage for businesses along Highway 311 and Grand Caillou Road.',
    },
  ],
  includedHeading: 'What Comes With a Houma Rental',
  includedNote: 'Month-to-month terms, so a three-week kitchen remodel and a year of overflow storage both fit. To check what is available for your dates, call',
  included: [
    'Delivery to your Houma address, placed where you want it',
    'Pickup or a move to your next address when you’re done',
    'A roll-up door that takes your padlock',
    'Weather-resistant steel construction',
    'Ground-level access the whole time it is on site',
    'The option to store your loaded unit at our Raceland yard',
  ],
  pricing: {
    heading: 'Houma Portable Storage Pricing',
    rows: [
      { name: '12 ft unit', detail: "12' x 8' x 7'", price: '$129.99/mo' },
      { name: '16 ft unit', detail: "16' x 8' x 7'", price: '$144.99/mo' },
      { name: '20 ft unit', detail: "20' x 8' x 7.5'", price: '$164.99/mo' },
      { name: 'Delivery & pickup', detail: 'Flat rate, core area', price: '$119' },
    ],
    note: 'No deposit required and no minimum rental term. Insulated 16 ft units available. Taxes apply.',
  },
  sections: [
    {
      heading: 'How Houma Uses the Units',
      paragraphs: [
        'Terrebonne Parish keeps our units busy year round. Families in Bayou Cane and Broadmoor use them between house closings. Contractors stage materials in them on job sites from Schriever to Bayou Blue. Businesses along the Intracoastal use the 20 ft units for equipment and records that outgrew the back room.',
        'Hurricane season keeps us busiest. After a storm, a unit in the driveway is often what lets a Houma family clear damaged rooms fast enough for repairs to start. If that’s your situation, our storm damage storage page covers how ALE insurance coverage can treat storage fees.',
        'Wherever you are between Gray and Dulac, the truck route is the same: we load a unit at the Raceland yard, run it down Highway 90 or 24, and set it exactly where you point.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much does portable storage cost in Houma?',
      a: 'From Stow-N-Go, $129.99 a month for a 12 ft unit, $144.99 for a 16 ft, and $164.99 for a 20 ft, plus a flat $119 for delivery and pickup.',
    },
    {
      q: 'Where can the unit sit at my Houma house?',
      a: 'Most people take the driveway. A yard, a slab, or a job site pad works too, as long as our truck can reach the spot. If you rent or live under an HOA, check their rules on temporary containers before delivery day.',
    },
    {
      q: 'Do you deliver to Bayou Cane, Gray, Schriever, and Bayou Blue?',
      a: 'Yes. All the Houma-area communities are standard runs for us, including Dulac, Chauvin, and Montegut down the bayou.',
    },
    {
      q: 'How fast can I get a unit delivered in Houma?',
      a: 'It depends on fleet availability and the delivery schedule that week. Call (985) 855-6525 and the office will give you a real date instead of a promise we might not keep.',
    },
    {
      q: 'Can my business rent one long term?',
      a: 'Yes. Month-to-month billing continues as long as you keep the unit, and plenty of Terrebonne businesses keep a 20 ft unit on site year round for equipment, stock, or records.',
    },
    {
      q: 'Do I need a permit to put a storage container at my Houma house?',
      a: 'For a unit sitting in a private driveway during a normal rental, most residents never deal with a permit. Rules can differ inside city limits, in flood zones, and under HOAs, so if you’re unsure, a quick call to the parish or your association settles it before delivery day.',
    },
    {
      q: 'What should not go in the unit?',
      a: 'Anything hazardous, flammable, or alive: fuel, propane, chemicals, plants, animals. Storage units are insulated at best, so heat-sensitive items like candles or electronics ride better in a garage or a climate-controlled space.',
    },
  ],
  cta: {
    heading: 'Get a Unit to Your Houma Address',
    body: 'Tell us the cross street and roughly how many rooms of stuff you’ve got. We’ll size the unit and put you on the delivery schedule.',
    button: 'Call the Office',
  },
}

export default function Page() {
  return <ServiceLandingPage data={data} />
}
