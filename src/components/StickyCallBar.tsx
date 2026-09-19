import { SITE } from '@/lib/site'

// Mobile-only call bar pinned to the bottom of the viewport.
// 3 of the first 4 bookings came by phone, and Google's data shows nobody taps
// the call button inside the ad — they click through and dial from the page.
// NOTE: no backdrop-blur anywhere in here. A backdrop-filter on an ancestor
// creates a containing block and collapses fixed children. Solid bg only.
export default function StickyCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs text-gray-500 leading-tight">Units from $129.99/mo</p>
          <p className="text-sm font-semibold text-primary leading-tight truncate">
            Check what&apos;s available
          </p>
        </div>
        <a
          href={`tel:${SITE.phoneRaw}`}
          data-loc="sticky-bar"
          className="btn-accent text-sm !py-3 !px-5 shrink-0"
          aria-label={`Call Stow-N-Go at ${SITE.phoneDisplay}`}
        >
          Call {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  )
}
