import Link from '@/components/Link'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Image from '@/components/Image'

const skills = [
  'Python',
  'SQL',
  'R',
  'Git',
  'Machine Learning',
  'Deep Learning',
  'Neural Networks',
  'Natural Language Processing (NLP)',
  'Artificial Intelligence (AI)',
  'Generative AI',
  'Recommender Systems',
  'Regression Analysis',
  'Classification',
  'Clustering',
  'Statistical Modeling',
  'Model Selection',
  'Pandas',
  'NumPy',
  'Scikit-Learn',
  'PyTorch',
  'TensorFlow',
  'SciPy',
  'Matplotlib',
  'Seaborn',
  'Plotly',
  'Data Analysis',
  'Data Visualization',
  'Data Mining',
  'Data Cleaning',
  'Jupyter Notebook',
  'Statistics',
]

export default function Home() {
  return (
    <div className="space-y-16">

      {/* Hero */}
      <div className="flex flex-col items-center gap-8 pt-10 text-center sm:flex-row sm:text-left sm:justify-between">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
            Hi, I'm Brent
          </h1>
          <p className="max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Data Scientist based in Atlanta, GA. I build data-driven projects at the
            intersection of NLP, causal inference, and machine learning.
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
      <div id="about" className="space-y-4 pt-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <div className="prose max-w-none text-gray-600 dark:text-gray-400">
          <p>
            I've always been a builder, a solver, and a storyteller, though it took me a while to find the field that matched all three.
          </p>
          <p>
            The builder came first; I was obsessed with Legos growing up (specifically Star Wars). I would create elaborate worlds for my figures to "live" in, tinkering with my own vehicles and building creations that weren't on any box set.
            The storyteller came second; I would obsess over drawing fictional fantasy stories to enact in my backyard with friends, both real and imaginary, making sure to hit every cathartic note.
            The solver came at the end; as a kid I was the one poring over video game guidebooks for Pokémon and Destiny, trying to master drop rates, damage formulas, and the most optimal build for whatever challenge was ahead. I was doing analysis, even if I didn't know it then.
            These are all still instincts I can't shake: I love puzzles and worldbuilding, I'm currently taking my high school English teacher's advice and writing a fantasy book series in my free time, and I'm also working on a causal analysis project for the roguelike card game Slay the Spire.
          </p>
          <p>
            That's what eventually pointed me toward a degree in economics, with a computer science minor, from the University of Georgia. Economics taught me how to identify and solve the cause-and-effect problems in the world, while computer science showed me how to build toward those solutions myself.
            Data science is where those two ideas merge beautifully: you need to know what you're looking to solve, how to solve it with data, and how to tell a story with that data in a way that engages people who don't care for all the math behind it.
            Today I work on the data-quality side of machine learning at Shiplify, auditing shipment and property records and applying ground-truth labels to ambiguous, messy real-world cases.
          </p>
          <p>
            Now I'm building toward a professional career in data science, where the building, the solving, and the storytelling finally live in the same job: building systems, solving problems that don't have clean definitions or answers, and telling the story of what the data actually means.
          </p>
          <p>
            Now, let me be clear: I'm not all work and no play. I love cooking, which is exactly where the Mise project came from. I paint to relax, play my share of video games (League of Legends, Cyberpunk 2077, Helldivers 2, and many more), and watch a lot of sports: NFL (go Bengals!) and NBA (Pacers, Pistons, Cavs). Yes, I was born a Midwest boy. Most importantly of all, I have a deep bond with my family and friends, and I spend time with them whenever I can.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="space-y-4 pt-10 text-center">
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
      </div>

      {/* Skills */}
      <div id="skills" className="space-y-4 pt-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
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
      <div id="contact" className="space-y-4 pt-10 pb-10 text-center">
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
