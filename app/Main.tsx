import Link from '@/components/Link'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Image from '@/components/Image'

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

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <div className="flex flex-col items-center gap-8 pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
            Hi, I'm Brent
          </h1>
          <p className="max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Data Scientist based in Atlanta, GA. I build data-driven projects at the intersection of
            NLP, causal inference, and machine learning.
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

      {/* About */}
      <div id="about" className="scroll-mt-24 space-y-4 pt-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <div className="prose max-w-none text-gray-600 dark:text-gray-400">
          <p>
            I've always been a builder, a solver, and a storyteller. Growing up I was obsessed with Lego Star Wars;
            I would build elaborate worlds for my figures to "live in". Then came the storyteller, I loved dreaming up
            and drawing fantasy stories to enact in my backyard. The solver came last, I was min-maxing Pokémon and
            Destiny builds without realizing that was analysis too.
          </p>
          <p>
            Those instincts led me to a degree in economics with a computer science minor from the
            University of Georgia, and I still can't shake them: I write a fantasy book series in my
            free time, and I create DS/ML projects like Mise & Slay the Spire analysis for fun. Data science is where it
            all merges: identifying what problem you're solving, solving it with data, and telling a
            story that anyone can listen and learn from. Today I work on the data-quality side of machine learning at
            Shiplify, auditing shipment and property records and labeling messy, ambiguous
            real-world cases.
          </p>
          <p>
            Outside of work, I cook (hence the Mise project), paint to relax, rock climb, and play video
            games (League, Cyberpunk 2077, Helldivers 2). I am a fan of NFL & NBA:
            Bengals, Pacers, Pistons, Cavs. Yes I am a midwest boy. And most of all, I try to spend as much time as I can
            with family and friends.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="scroll-mt-24 space-y-4 pt-10 text-center">
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
        <p className="mt-8 text-lg text-gray-600 dark:text-gray-400">
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

      {/* Skills */}
      <div id="skills" className="scroll-mt-24 space-y-4 pt-10 text-center">
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
                    className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="scroll-mt-24 space-y-4 pt-10 pb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
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
