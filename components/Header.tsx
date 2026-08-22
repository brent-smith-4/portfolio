import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  let headerClass =
    'flex items-center w-full bg-forest-bg-light/80 dark:bg-forest-bg-dark/80 backdrop-blur-sm justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3 translate-y-0.5 text-3xl leading-none">🐸</div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex min-w-0 flex-1 items-center justify-end space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar flex min-w-0 items-center gap-x-4 overflow-x-auto sm:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary-500 dark:hover:text-primary-400 m-1 shrink-0 font-medium text-gray-900 dark:text-gray-100"
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
