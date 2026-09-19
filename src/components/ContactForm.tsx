'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

// Jacob's Formspree form; deliveries go to foretcr@gmail.com (free-tier single
// recipient on his account). Swap recipient in the Formspree dashboard if he ever
// wants leads at jacob@stowngo.net instead.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaeyjbrn'

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
        // Fires only on confirmed sends, not button clicks.
        const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
        if (typeof w.gtag === 'function') {
          // Google Ads conversion
          w.gtag('event', 'conversion', {
            send_to: 'AW-11501071777/9oSwCOC1--wcEKHbkewq',
          })
          // GA4 recommended event for a lead form completion
          w.gtag('event', 'generate_lead', {
            form_id: 'contact',
            page_path: window.location.pathname,
          })
        }
      } else {
        const json = await res.json()
        setErrorMessage(json?.errors?.[0]?.message ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="(985) 555-1234"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
            Delivery City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="Houma, Thibodaux, Raceland..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
          What Do You Need?
        </label>
        <select
          id="service"
          name="service"
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition bg-white"
        >
          <option value="">Select an option...</option>
          <option>12 ft storage unit</option>
          <option>16 ft storage unit</option>
          <option>20 ft storage unit</option>
          <option>Air-conditioned office unit</option>
          <option>Storage after storm damage</option>
          <option>Store a loaded unit at your yard</option>
          <option>Something else / not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Tell Us What You Are Storing <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-y"
          placeholder="What you are storing, when you need the unit, and where it would sit..."
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3">
          {errorMessage}
        </p>
      )}

      {status === 'success' ? (
        <div role="status" className="text-sm text-green-700 bg-green-50 border border-green-200 rounded px-4 py-4 text-center">
          <p className="font-semibold text-base mb-1">Message Sent!</p>
          <p>Thanks for reaching out. The office will get back to you soon.</p>
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-accent text-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send My Message'}
        </button>
      )}
    </form>
  )
}
