'use client'

import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import ThemeSwitch from './ThemeSwitch'

// Transparent at the very top of the page (over the hero), so the jungle
// canopy shows through unbroken. Past a small scroll threshold, hero
// content scrolls up underneath the sticky nav with nothing separating the
// two layers - so a backing fades in to keep nav text from colliding with
// whatever's now behind it. The nav text itself never moves or changes;
// only this backdrop's opacity animates.
function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

const Header = () => {
  const scrolled = useScrolled()

  const headerClass = `flex items-center w-full justify-between py-10 ${
    siteMetadata.stickyNav ? 'sticky top-0 z-50' : 'relative'
  }`

  return (
    <header className={headerClass}>
      <div
        aria-hidden="true"
        className={`bg-forest-bg-light/95 dark:bg-forest-bg-dark/95 absolute inset-0 -z-10 backdrop-blur-sm transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
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
