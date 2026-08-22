import Link from '@/components/Link'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Image from '@/components/Image'
import Reveal from '@/components/Reveal'

// Skills given the primary (accent) visual treatment in the pills below.
const primarySkills = new Set([
  'Python',
  'SQL',
  'PyTorch',
  'Natural Language Processing (NLP)',
  'Recommender Systems',
])

const skillGroups = [
  {
    title: 'Languages & Tools',
    skills: ['Python', 'SQL', 'R', 'Git', 'Jupyter Notebook'],
  },
  {
    title: 'Machine Learning & AI',
    // Fixed 3-column grid (2 rows x 3 cols) instead of flex-wrap so rows are
    // predictable. The two long entries are placed together in row 1.
    layout: 'grid',
    skills: [
      'Natural Language Processing (NLP)',
      'Artificial Intelligence (AI)',
      'Machine Learning',
      'Deep Learning',
      'Neural Networks',
      'Recommender Systems',
    ],
  },
  {
    title: 'Statistics & Modeling',
    skills: [
      'Regression Analysis',
      'Classification',
      'Clustering',
      'Statistical Modeling',
      'Model Selection',
      'Statistics',
    ],
  },
  {
    title: 'Libraries & Frameworks',
    skills: [
      'Pandas',
      'NumPy',
      'Scikit-Learn',
      'PyTorch',
      'TensorFlow',
      'SciPy',
      'Matplotlib',
      'Seaborn',
      'Plotly',
    ],
  },
  {
    title: 'Data Analysis',
    skills: ['Data Analysis', 'Data Visualization', 'Data Mining', 'Data Cleaning'],
  },
]

// Semi-opaque backing so text stays readable regardless of what's behind it
// (trees, fireflies, etc). Trees are also structurally confined to the
// left/right margins outside this content column, so it's belt-and-braces.
const card =
  'bg-forest-surface-light/90 dark:bg-forest-surface-dark/90 rounded-3xl px-6 py-10 backdrop-blur-sm sm:px-10'

export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero */}
      <Reveal className="flex min-h-[80vh] flex-col items-center justify-center">
        <div
          className={`${card} flex w-full max-w-4xl flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left`}
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
              Hi, I'm Brent
            </h1>
            <p className="text-forest-text-light dark:text-forest-text-dark max-w-xl text-lg leading-8">
              Data Scientist based in Atlanta, GA. I build data-driven projects at the intersection
              of NLP, causal inference, and machine learning.
            </p>
          </div>
          <div className="shrink-0">
            <Image
              src="/static/images/profile-pic.jpg"
              alt="Brent Smith"
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
        </div>
      </Reveal>

      {/* About */}
      <Reveal
        id="about"
        className="flex min-h-[70vh] scroll-mt-24 flex-col items-center justify-center"
      >
        <div className={`${card} w-full max-w-2xl space-y-4 text-center`}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <div className="prose text-forest-text-light dark:text-forest-text-dark max-w-none">
            <p>
              I've always been a builder, a solver, and a storyteller. Growing up I was obsessed
              with Lego Star Wars; I would build elaborate worlds for my figures to "live in". Then
              came the storyteller, I loved dreaming up and drawing fantasy stories to enact in my
              backyard. The solver came last, I was min-maxing Pokémon and Destiny builds without
              realizing that was analysis too.
            </p>
            <p>
              Those instincts led me to a degree in economics with a computer science minor from the
              University of Georgia, and I still can't shake them: I write a fantasy book series in
              my free time, and I create DS/ML projects like Mise & Slay the Spire analysis for fun.
              Data science is where it all merges: identifying what problem you're solving, solving
              it with data, and telling a story that anyone can listen and learn from. Today I work
              on the data-quality side of machine learning at Shiplify, auditing shipment and
              property records and labeling messy, ambiguous real-world cases.
            </p>
            <p>
              Outside of work, I cook (hence the Mise project), paint to relax, rock climb, and play
              video games (League, Cyberpunk 2077, Helldivers 2). I am a fan of the NFL & NBA:
              Bengals, Pacers, Pistons, and Cavs. Yes, I was born a midwest boy. And most
              importantly, I try to spend as much time as I can with family and friends.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Projects */}
      <Reveal
        id="projects"
        className="flex min-h-[70vh] scroll-mt-24 flex-col items-center justify-center"
      >
        <div className={`${card} w-full max-w-4xl space-y-4 text-center`}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Projects
          </h2>
          <div className="-m-4 flex flex-wrap justify-center">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                slug={d.slug}
                demoHref={d.demoHref}
                githubHref={d.githubHref}
              />
            ))}
          </div>
          <p className="text-forest-text-light dark:text-forest-text-dark mt-8 text-lg">
            More projects and experiments live on my{' '}
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </Reveal>

      {/* Skills */}
      <Reveal
        id="skills"
        className="flex min-h-[70vh] scroll-mt-24 flex-col items-center justify-center"
      >
        <div className={`${card} w-full max-w-4xl space-y-4 text-center`}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Skills
          </h2>
          <div className="space-y-2.5">
            {skillGroups.map((group) => (
              <div key={group.title} className="space-y-2">
                <h3 className="text-primary-700 dark:text-primary-400 text-sm font-semibold tracking-wide uppercase">
                  {group.title}
                </h3>
                <div
                  className={
                    group.layout === 'grid'
                      ? 'grid grid-cols-2 justify-center gap-2 sm:grid-cols-[repeat(3,auto)]'
                      : 'flex flex-wrap justify-center gap-2'
                  }
                >
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-forest-bg-light dark:bg-forest-bg-dark rounded-md px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Contact */}
      <Reveal
        id="contact"
        className="flex min-h-[70vh] scroll-mt-24 flex-col items-center justify-center pb-10"
      >
        <div className={`${card} w-full max-w-2xl space-y-4 text-center`}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Get in Touch
          </h2>
          <p className="text-forest-text-light dark:text-forest-text-dark">
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
      </Reveal>
    </div>
  )
}
