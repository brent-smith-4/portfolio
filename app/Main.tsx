import Link from '@/components/Link'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Image from '@/components/Image'

const skills = [
  'Python',
  'pandas',
  'scikit-learn',
  'SQL',
  'matplotlib',
  'seaborn',
  'Git',
]

export default function Home() {
  return (
    <div className="space-y-16 divide-y divide-gray-200 dark:divide-gray-700">

      {/* Hero */}
      <div className="flex flex-col-reverse items-center gap-8 pt-10 sm:flex-row sm:justify-between">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
            Hi, I'm Brent
          </h1>
          <p className="max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Aspiring Data Scientist based in Atlanta, GA. I build data-driven projects to develop
            my skills and transition into the field - from NLP-powered apps to causal inference
            analyses.
          </p>
        </div>
        <div className="shrink-0">
          <Image
            src="/static/images/avatar.png"
            alt="Brent Smith"
            width={160}
            height={160}
            className="rounded-full"
          />
        </div>
      </div>

      {/* About */}
      <div className="space-y-4 pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <div className="prose max-w-none text-gray-600 dark:text-gray-400">
          <p>
            Write your bio here. Edit this directly in <code>app/Main.tsx</code>.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="space-y-4 pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Projects
        </h2>
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-4 pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Tools & Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="space-y-4 pt-10 pb-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Reach me at{' '}
          <a
            href={`mailto:${siteMetadata.email}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {siteMetadata.email}
          </a>{' '}
          or connect on{' '}
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>

    </div>
  )
}
