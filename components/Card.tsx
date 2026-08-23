import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, slug, demoHref, dashboardHref, githubHref }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
    >
      {/* Brand-consistent masthead so wildly different screenshots (bright
          app UI vs. a near-black game capture) still read as the same
          card format instead of clashing with each other. */}
      <div className="bg-primary-500 h-1.5 w-full" />
      {imgSrc && (
        <div className="ring-1 ring-black/10 ring-inset dark:ring-white/10">
          <Image
            alt={title}
            src={imgSrc}
            className="aspect-video w-full object-cover object-center"
            width={544}
            height={306}
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">{title}</h2>
        <p className="prose text-forest-text-light dark:text-forest-text-dark mb-3 max-w-none">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Learn More — comment out when write-ups are not ready */}
          {slug && (
            <Link
              href={`/${slug}`}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
            >
              Learn more &rarr;
            </Link>
          )}
          {demoHref && (
            <a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
            >
              Live demo &rarr;
            </a>
          )}
          {dashboardHref && (
            <a
              href={dashboardHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
            >
              Live Dashboard &rarr;
            </a>
          )}
          {githubHref && (
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
            >
              GitHub &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card
