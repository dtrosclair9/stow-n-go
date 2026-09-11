import type { Metadata } from 'next'
import ServiceLandingPage, { type ServicePageData } from '@/components/ServiceLandingPage'
import { BASE_URL, ogImage } from '@/lib/site'

const SLUG = 'portable-office-rental-houma-la'

export const metadata: Metadata = {
  title: 'Portable Office Rental in Houma, LA',
  description:
    'Air-conditioned 16 ft portable office units delivered to job sites across Houma, Thibodaux, and the bayou region. $259 a month from a local Raceland company.',
  alternates: { canonical: `${BASE_URL}/services/${SLUG}` },
  openGraph: {
    title: 'Portable Office Rental in Houma, LA | Stow-N-Go',
    description: 'Air-conditioned job site offices delivered locally. $259 a month.',
    url: `${BASE_URL}/services/${SLUG}`,
    images: [ogImage],
  },
}

const data: ServicePageData = {
  slug: SLUG,
  serviceType: 'Portable office rental',
  areaServed: ['Houma', 'Thibodaux', 'Raceland', 'Larose', 'Galliano', 'Morgan City', 'Lockport'],
  label: 'Job Site Offices',
  h1: 'Portable Office Rental in Houma, LA',
  intro: [
    'A job site runs better when the paperwork, the plans, and the superintendent have somewhere cool to work. Stow-N-Go rents air-conditioned 16 ft portable office units and delivers them to sites across Houma, Thibodaux, and the surrounding parishes for $259 a month.',
    'The offices come out of the same Raceland shop as our storage fleet, so questions about setup go to the people who built them.',
  ],
  image: {
    src: '/images/storage-unit-built-in-raceland-facility.jpg',
    alt: 'Portable office unit under construction at the Stow-N-Go facility in Raceland, Louisiana',
  },
  whyHeading: 'Why Crews Take Our Offices',
  why: [
    {
      title: 'Air conditioning that matters',
      body: 'South Louisiana summers cook a bare trailer by 9 AM. The office units are air conditioned, so plans, laptops, and people function all day.',
    },
    {
      title: 'A local $259 flat rate',
      body: 'With the national office-trailer companies you usually wait on a callback to learn the price. Ours is a flat monthly number from a company up the road.',
    },
    {
      title: 'Sized for real sites',
      body: 'At 16 by 8 ft, the unit fits a desk, chairs, a plan table, and shelving, and it lands in a single parking spot on a tight site.',
    },
    {
      title: 'Pair it with storage',
      body: 'Many sites take an office unit and a 20 ft storage unit together, delivered on the same schedule, so tools and paperwork both have a home.',
    },
  ],
  includedHeading: 'What the Office Rental Covers',
  includedNote: 'Offices rent by the month for the life of the project, short or long. To talk power hookup and delivery for your site, call',
  included: [
    'Air-conditioned 16 ft office unit, $259 per month',
    'Delivery and placement on your site',
    'A door that locks with your padlock',
    'Steel construction built at our Raceland facility',
    'Relocation to the next project when this one wraps',
    '20 ft office layouts available on request',
  ],
  pricing: {
    heading: 'Office Unit Pricing',
    rows: [
      { name: '16 ft office', detail: "16' x 8' x 7.5', air conditioned", price: '$259/mo' },
      { name: '20 ft office', detail: 'Larger layout for bigger crews', price: 'Call' },
      { name: 'Delivery & pickup', detail: 'Flat rate, core area', price: '$119' },
      { name: 'Add a storage unit', detail: '12 to 20 ft alongside the office', price: 'From $129.99/mo' },
    ],
    note: 'Site needs power for the A/C; the office will walk through hookup details for your location when you book.',
  },
  sections: [
    {
      heading: 'Offices for the Work Between Houma and the Gulf',
      paragraphs: [
        'Construction sites in Houma, fabrication yards in Morgan City, and staging areas headed to Port Fourchon all need the same thing: a clean, cool spot on site where decisions get made.',
        'Renting from Stow-N-Go means the office was built up the road, hauled on our own trailer, and backed by a phone number that rings in Raceland.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much does a portable office cost to rent?',
      a: 'Our 16 ft air-conditioned office unit is $259 a month, plus a flat $119 delivery and pickup in our core area. A 20 ft office layout is available; call for its rate.',
    },
    {
      q: 'Is the office really air conditioned?',
      a: 'Yes, the office units have A/C. They are the only units in our fleet that do; the storage units are insulated at most.',
    },
    {
      q: 'What power does the office need?',
      a: 'The A/C needs site power. When you book, the office will go over hookup requirements for your specific site so electrical is sorted before delivery day.',
    },
    {
      q: 'How long can we keep it?',
      a: 'The length of the project, whatever that turns out to be. Billing is monthly with no fixed end date, and we move offices between sites all the time.',
    },
    {
      q: 'Can the office unit be moved during the project?',
      a: 'Yes. If the site plan changes or the work moves, we can haul the office to a new spot on the same site or to the next job. Relocations get scheduled through the office like any other delivery.',
    },
    {
      q: 'Can you deliver an office and a storage unit together?',
      a: 'Yes, and it is common. One delivery run can place an office for the paperwork and a 20 ft storage unit for tools and materials.',
    },
  ],
  cta: {
    heading: 'Put an Office on Your Site',
    body: 'Have the site address and a rough start date handy. We’ll handle the hauling and have it level and lockable when the crew shows up.',
    button: 'Book an Office Unit',
  },
}

export default function Page() {
  return <ServiceLandingPage data={data} />
}
