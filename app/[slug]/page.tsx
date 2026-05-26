import { allProjects } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { notFound } from 'next/navigation'
import { genPageMetadata } from 'app/seo'
import NextImage from 'next/image'
import Link from 'next/link'

const Image = (props: React.ComponentProps<typeof NextImage>) => (
  <NextImage {...props} style={{ maxWidth: '100%', height: 'auto', width: 'auto' }} />
)

export const generateStaticParams = async () => allProjects.map((p) => ({ slug: p.slug }))

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) return {}
  return genPageMetadata({ title: project.title, description: project.summary })
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <article className="mx-auto max-w-3xl space-y-6 py-10">
      <Link
        href="/#projects"
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium leading-6"
      >
        &larr; Back to Projects
      </Link>
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        {project.title}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">{project.summary}</p>
      <div className="flex gap-4">
        {project.demoHref && (
          <a
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-500 hover:bg-primary-600 rounded-md px-4 py-2 text-sm font-medium text-white"
          >
            Live Demo &rarr;
          </a>
        )}
        {project.githubHref && (
          <a
            href={project.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            GitHub &rarr;
          </a>
        )}
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <MDXLayoutRenderer code={project.body.code} components={{ Image }} />
      </div>
    </article>
  )
}
