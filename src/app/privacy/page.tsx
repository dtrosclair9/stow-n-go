import type { Metadata } from 'next'
import { BASE_URL, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Stow-N-Go collects, uses, and protects information submitted through stowngo.net, including the contact form and technical logs.',
  alternates: { canonical: `${BASE_URL}/privacy` },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-wide max-w-3xl">
        <h1 className="text-4xl font-serif font-bold text-primary mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: September 2, 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            This policy describes what information {SITE.legalName} (&ldquo;Stow-N-Go,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects through {SITE.domain}, how we use
            it, and the choices you have.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary">Information we collect</h2>
          <p>
            <strong>Contact form.</strong> When you send a message through our contact
            form, we receive the information you enter: your name, phone number, email
            address, delivery city, the service you are interested in, and your message.
            We use it to respond to your inquiry and arrange rentals. Form submissions
            are processed by Formspree, Inc., which delivers them to our email.
          </p>
          <p>
            <strong>Phone calls.</strong> If you call us, we may keep your name and
            number so we can call you back about your rental.
          </p>
          <p>
            <strong>Technical logs.</strong> Our website host automatically records
            basic technical data such as IP address, browser type, pages visited, and
            timestamps. We use this to keep the site working and secure.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary">Third-party services</h2>
          <p>These are the third parties involved in running this website:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Formspree</strong> processes contact form submissions.</li>
            <li><strong>Vercel</strong> hosts the website and records standard server logs.</li>
            <li><strong>Google Maps</strong> powers the embedded map on our contact page. Loading the map may send technical data (such as your IP address) to Google.</li>
            <li><strong>Google Ads</strong> measurement (the Google tag) helps us understand whether our advertising works, for example whether a visit came from one of our ads. It may set cookies and send technical data to Google, handled under <a href="https://policies.google.com/privacy" className="text-accent underline">Google&apos;s privacy policy</a>.</li>
          </ul>
          <p>
            Fonts on this site are self-hosted, so viewing pages does not send font
            requests to outside services.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary">How we use information</h2>
          <p>
            We use the information you send us to respond to inquiries, schedule
            deliveries and pickups, and manage rentals. We do not sell your personal
            information, and we do not share it with anyone except the service
            providers listed above as needed to operate the site and the business.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary">Cookies and tracking</h2>
          <p>
            This site uses the Google tag for advertising measurement, which may set
            cookies that help attribute visits and inquiries to our ads. The embedded
            Google map may also set its own cookies when it loads. Both are governed
            by Google’s privacy policy. We do not use other third-party tracking
            pixels, and you can limit ad cookies through your browser settings or
            Google’s ad settings at adssettings.google.com.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary">Keeping and deleting information</h2>
          <p>
            We keep inquiry and rental records as long as needed to run the business
            and meet legal obligations. If you would like us to delete a message you
            sent through the site, contact us and we will take care of it.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary">Questions</h2>
          <p>
            Reach us about anything in this policy at{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-accent underline">{SITE.phoneDisplay}</a>,{' '}
            <a href={`mailto:${SITE.email}`} className="text-accent underline">{SITE.email}</a>, or by
            mail at {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}.
          </p>
        </div>
      </div>
    </div>
  )
}
