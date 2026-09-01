'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SERVICES, SITE } from '@/lib/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const onServices = pathname.startsWith('/services')

  return (
    <header
      className={`bg-white sticky top-0 z-50 border-b border-gray-200 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Stow-N-Go home">
            <Image
              src="/images/stow-n-go-logo.png"
              alt="Stow-N-Go portable storage, Raceland Louisiana"
              width={127}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav: Home | Services (dropdown) | About | Contact | Phone */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/' ? 'text-accent' : 'text-gray-700 hover:text-accent'
              }`}
            >
              Home
            </Link>

            {/* Services dropdown: opens on hover and on focus-within for keyboards */}
            <div className="relative group">
              <Link
                href="/services"
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  onServices ? 'text-accent' : 'text-gray-700 hover:text-accent'
                }`}
                aria-haspopup="true"
              >
                Services
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block group-focus-within:block">
                <ul className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 w-64">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                      >
                        {s.navLabel}
                      </Link>
                    </li>
                  ))}
                  <li className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      href="/services"
                      className="block px-4 py-2.5 text-sm font-semibold text-accent hover:bg-gray-50 transition-colors"
                    >
                      All Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/about' ? 'text-accent' : 'text-gray-700 hover:text-accent'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/contact' ? 'text-accent' : 'text-gray-700 hover:text-accent'
              }`}
            >
              Contact
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-accent text-sm !py-2 !px-5 ml-2">
              {SITE.phoneDisplay}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-primary p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav id="mobile-nav" className="lg:hidden border-t border-gray-200 pb-4 pt-3 bg-white" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              <Link href="/" className="px-2 py-2.5 text-sm font-medium rounded text-gray-700 hover:text-accent transition-colors">
                Home
              </Link>
              <button
                className="flex items-center justify-between px-2 py-2.5 text-sm font-medium rounded text-gray-700 hover:text-accent transition-colors text-left"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-controls="mobile-services"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div id="mobile-services" className="flex flex-col border-l-2 border-accent/30 ml-3 pl-3">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="px-2 py-2 text-sm text-gray-600 hover:text-accent transition-colors"
                    >
                      {s.navLabel}
                    </Link>
                  ))}
                  <Link href="/services" className="px-2 py-2 text-sm font-semibold text-accent">
                    All Services
                  </Link>
                </div>
              )}
              <Link href="/about" className="px-2 py-2.5 text-sm font-medium rounded text-gray-700 hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/contact" className="px-2 py-2.5 text-sm font-medium rounded text-gray-700 hover:text-accent transition-colors">
                Contact
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-accent text-sm text-center mt-3">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
