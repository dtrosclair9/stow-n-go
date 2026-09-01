import type { Metadata } from 'next'
import ServiceLandingPage, { type ServicePageData } from '@/components/ServiceLandingPage'
import { BASE_URL, ogImage } from '@/lib/site'

const SLUG = 'storm-damage-storage-louisiana'

export const metadata: Metadata = {
  title: 'Storm Damage Storage in South Louisiana',
  description:
    'Hurricane or storm damage? We deliver a secure storage unit to your driveway so repairs can start. ALE coverage in many Louisiana policies can reimburse storage fees.',
  alternates: { canonical: `${BASE_URL}/services/${SLUG}` },
  openGraph: {
    title: 'Storm Damage Storage in South Louisiana | Stow-N-Go',
    description: 'A storage unit in your driveway while your home gets repaired after a storm.',
    url: `${BASE_URL}/services/${SLUG}`,
    images: [ogImage],
  },
}

const data: ServicePageData = {
  slug: SLUG,
  serviceType: 'Storm damage and disaster recovery storage',
  areaServed: ['Houma', 'Thibodaux', 'Raceland', 'Larose', 'Cut Off', 'Galliano', 'Morgan City', 'Lockport'],
  label: 'South Louisiana',
  h1: 'Storm Damage Storage Containers in South Louisiana',
  intro: [
    'After a hurricane or a bad storm, repairs can’t start until the house is cleared. A Stow-N-Go unit in the driveway gives your furniture and belongings a dry, lockable place to wait while crews work, without hauling everything across the parish.',
    'Many Louisiana homeowners policies include Additional Living Expense coverage, and ALE commonly lists storage fees among the costs it can reimburse while a home is uninhabitable during covered repairs. Ask your adjuster about it and keep your Stow-N-Go receipts.',
  ],
  image: {
    src: '/images/stow-n-go-portable-storage-units-raceland-yard.jpg',
    alt: 'Stow-N-Go storage unit ready to deliver to a storm-damaged South Louisiana home',
  },
  whyHeading: 'Why On-Site Storage After a Storm',
  why: [
    {
      title: 'Repairs start sooner',
      body: 'Roofers, drywall crews, and flooring installers need empty rooms. Clearing into a unit ten feet from the door happens in a day, so the rebuild schedule stops waiting on logistics.',
    },
    {
      title: 'Your things stay with you',
      body: 'Salvageable furniture stays at your address where you can check on it, instead of sitting in a facility across town while contractors ask where the armoire went.',
    },
    {
      title: 'Locked and out of the weather',
      body: 'A steel unit with your lock on it keeps belongings dry through the next round of rain and away from the eyes that circulate after storms.',
    },
    {
      title: 'A local truck',
      body: 'We’re based in Raceland, so the unit comes from up the road no matter which parish took the hit.',
    },
  ],
  includedHeading: 'How the Storm Rental Works',
  includedNote: 'Rent runs month to month, matching however long the repairs take. When the adjuster leaves and you know what you need, call',
  included: [
    'A 12, 16, or 20 ft unit delivered to your driveway or yard',
    'Placement clear of work zones and dumpster paths',
    'Waterlogged furniture rolls in at grade',
    'You hold the only key the whole time',
    'Monthly receipts you can submit with an ALE claim',
    'Pickup when the house is ready again',
  ],
  pricing: {
    heading: 'Storm Storage Pricing',
    rows: [
      { name: '12 ft unit', detail: "12' x 8' x 7'", price: '$114/mo' },
      { name: '16 ft unit', detail: "16' x 8' x 7'", price: '$124/mo' },
      { name: '20 ft unit', detail: "20' x 8' x 7.5'", price: '$134/mo' },
      { name: 'Delivery & pickup', detail: 'Flat rate, core area', price: '$119' },
    ],
    note: 'These are the same rates we charge every other month of the year. Taxes apply.',
  },
  sections: [
    {
      heading: 'What ALE Coverage Can Mean for You',
      paragraphs: [
        'Additional Living Expense coverage, sometimes called Loss of Use, is the part of a Louisiana homeowners policy that pays the extra costs of living elsewhere while your home is uninhabitable from a covered loss. Alongside hotel and meal costs, storage fees for your belongings are a commonly reimbursed ALE expense.',
        'That’s worth knowing before you decide you can’t afford storage during a rebuild. Document the damage, ask your adjuster specifically whether storage falls under your ALE limits, and save every monthly receipt. We bill clean and simple so the paper trail is easy.',
        'One honest note: after a major landfall, demand for units spikes across the whole region and fleets run out. If a storm is in the Gulf and you know the house took damage, call early rather than late.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Will insurance pay for my storage unit after a hurricane?',
      a: 'Often, yes. If your home is uninhabitable from a covered loss, Additional Living Expense coverage in many Louisiana policies can reimburse storage fees along with other extra living costs. Confirm with your adjuster; every policy has its own limits.',
    },
    {
      q: 'How fast can a unit arrive after a storm?',
      a: 'It depends on how many units are already out and what the roads look like. Call as soon as you have assessed the damage; the earlier you call, the earlier you land on the delivery schedule.',
    },
    {
      q: 'Can the unit stay in the driveway during the whole repair?',
      a: 'Yes. Units regularly sit on site for the full length of a rebuild, and the month-to-month rent keeps running until you have us pick it up.',
    },
    {
      q: 'What size do I need for a storm cleanout?',
      a: 'A 16 ft unit holds the contents of two or three rooms, which fits most roof-leak and partial-flood situations. Gutting a whole house usually calls for a 20 ft unit or two units.',
    },
    {
      q: 'Should wet furniture go straight into the unit?',
      a: 'Dry things out first when you can. The units shed rain and breathe better than a sealed trailer, and the insulated option helps, but sealed-in moisture invites mildew anywhere.',
    },
    {
      q: 'Can I rent a unit before a storm arrives?',
      a: 'Yes. Some families rent ahead of a forecast landfall to consolidate belongings and paperwork under one lock. Availability tightens fast once a storm gets a name, so book while it is still a cone on the map.',
    },
    {
      q: 'Do you handle the insurance paperwork?',
      a: 'We provide clear monthly receipts and any documentation of the rental you ask for. Filing the claim itself stays between you and your insurer.',
    },
  ],
  cta: {
    heading: 'House Took a Hit?',
    body: 'Get the rooms cleared so the repairs can start. One call lines up a unit and a delivery day.',
    button: 'Call Us First',
  },
}

export default function Page() {
  return <ServiceLandingPage data={data} />
}
