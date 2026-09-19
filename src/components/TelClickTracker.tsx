'use client'

import { useEffect } from 'react'

// Google Ads conversion label for "Click to Call (website)".
// Calls placed from the ad itself are counted by Google's own "Calls from ads" action.
// This covers the other path: visitor clicks the ad, lands on the site, taps a number.
// Until a real label is pasted here the ADS conversion is skipped. The GA4 event
// below fires either way, so analytics works before the Ads action exists.
const TEL_CONVERSION_LABEL = 'AW-11501071777/REPLACE_WITH_LABEL'

// NOTE: a tel: tap is not a completed call. It means someone opened their dialer.
// Real call counts and durations need the Google Ads "calls from a website"
// conversion (free, swaps in a forwarding number for ad traffic) or a call
// tracking service. Treat this as intent, not as calls.
export default function TelClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (!target?.closest) return
      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!link) return

      const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
      if (typeof w.gtag !== 'function') return

      // GA4: which number, on which page, and from which block on that page.
      w.gtag('event', 'tel_click', {
        link_location: link.dataset.loc ?? 'unspecified',
        unit_size: link.dataset.unit ?? undefined,
        page_path: window.location.pathname,
      })

      if (!TEL_CONVERSION_LABEL.endsWith('REPLACE_WITH_LABEL')) {
        w.gtag('event', 'conversion', { send_to: TEL_CONVERSION_LABEL })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
