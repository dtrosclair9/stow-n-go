import Link from 'next/link'
import Image from 'next/image'
import { SERVICES, SITE } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700" role="contentinfo">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/stow-n-go-logo.png"
              alt="Stow-N-Go"
              width={169}
              height={80}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Portable storage units built in Raceland and delivered across the bayou
              region since {SITE.founded}.
            </p>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gray-600 hover:text-accent transition-colors text-sm"
              aria-label="Stow-N-Go on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent font-semibold text-xs uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Photo Gallery' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-accent font-semibold text-xs uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-gray-600 hover:text-accent text-sm transition-colors">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-accent font-semibold text-xs uppercase tracking-widest mb-5">Contact Us</h3>
            <address className="not-italic space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {SITE.address.street}<br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </div>
              <div>
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2.5 hover:text-accent transition-colors">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 hover:text-accent transition-colors break-all">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {SITE.email}
                </a>
              </div>
              <p className="text-gray-500">Office open {SITE.hoursDisplay}.</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved. Insured.</p>
          <nav className="flex items-center gap-4" aria-label="Legal">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="/accessibility" className="hover:text-accent transition-colors">Accessibility</Link>
            <span>{SITE.address.city}, {SITE.address.state}</span>
          </nav>
        </div>
      </div>
    </footer>
  )
}
