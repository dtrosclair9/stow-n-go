'use client'

import { useEffect } from 'react'

// Google Ads conversion label for "Click to Call (website)".
// Calls placed from the ad itself are counted by Google's own "Calls from ads" action.
// This covers the other path: visitor clicks the ad, lands on the site, taps a phone number.
// Until a real label is pasted here the listener is a no-op — safe to ship either way.
const TEL_CONVERSION_LABEL = 'AW-11501071777/REPLACE_WITH_LABEL'

export default function TelClickTracker() {
  useEffect(() => {
    if (TEL_CONVERSION_LABEL.endsWith('REPLACE_WITH_LABEL')) return

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (!target?.closest) return
      const link = target.closest('a[href^="tel:"]')
      if (!link) return

      const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
      if (typeof w.gtag === 'function') {
        w.gtag('event', 'conversion', {
          send_to: TEL_CONVERSION_LABEL,
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
