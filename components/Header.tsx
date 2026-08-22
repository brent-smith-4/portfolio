'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import ThemeSwitch from './ThemeSwitch'

// Transparent whenever nothing is behind it - the jungle canopy shows
// through unbroken over gaps between sections, not just at the very top of
// the page. A backing fades in only while a real content panel
// (`data-header-shadow-target`, the translucent cards in Main.tsx and the
// project article panel) is actually scrolled up underneath the header's
// own footprint, and fades back out once that panel scrolls past.
//
// This checks getBoundingClientRect() directly on every scroll/resize frame
// rather than using IntersectionObserver: IO's callbacks are async and
// batched, and a mobile browser's address bar collapsing mid-scroll fires
// resize events that could leave a stale rootMargin snapshot briefly wrong.
// A synchronous per-frame check has no state to go stale.
function useContentBehindHeader() {
  const headerRef = useRef<HTMLElement>(null)
  const [covered, setCovered] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-header-shadow-target]')
    )
    let frame: number | null = null

    const check = () => {
      frame = null
      const headerRect = header.getBoundingClientRect()
      const overlap = targets.some((el) => {
        const rect = el.getBoundingClientRect()
        return rect.bottom > headerRect.top && rect.top < headerRect.bottom
      })
      setCovered(overlap)
    }

    const scheduleCheck = () => {
      if (frame === null) frame = requestAnimationFrame(check)
    }

    scheduleCheck()
    window.addEventListener('scroll', scheduleCheck, { passive: true })
    window.addEventListener('resize', scheduleCheck)
    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleCheck)
      window.removeEventListener('resize', scheduleCheck)
    }
  }, [pathname])

  return { headerRef, covered }
}

const Header = () => {
  const { headerRef, covered } = useContentBehindHeader()

  const headerClass = `flex items-center w-full justify-between px-4 py-10 sm:px-6 ${
    siteMetadata.stickyNav ? 'sticky top-0 z-50' : 'relative'
  }`

  return (
    <header ref={headerRef} className={headerClass}>
      <div
        aria-hidden="true"
        className={`bg-forest-bg-light/95 dark:bg-forest-bg-dark/95 absolute inset-0 -z-10 backdrop-blur-sm transition-opacity duration-300 ${
          covered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="text-glow mr-3 translate-y-0.5 text-3xl leading-none">🐸</div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="text-glow hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex min-w-0 flex-1 items-center justify-end space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar flex min-w-0 items-center gap-x-4 overflow-x-auto outline-hidden sm:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-glow hover:text-primary-500 dark:hover:text-primary-400 m-1 shrink-0 font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
