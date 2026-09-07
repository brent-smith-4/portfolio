interface Project {
  title: string
  description: string
  slug?: string
  imgSrc?: string
  demoHref?: string
  dashboardHref?: string
  githubHref?: string
}

const projectsData: Project[] = [
  {
    title: 'Mise - Recipe Recommender',
    description: `Tell Mise what you're craving: a vibe, an ingredient, a cuisine - and it returns recipes that match. Built with keyword matching (BM25) and semantic transformers (MiniLM) to understand natural language input.`,
    slug: 'mise',
    imgSrc: '/static/images/mise-icon.png',
    demoHref: 'https://mise-recipe-recommender.fly.dev',
    githubHref: 'https://github.com/brent-smith-4/recipe-recommender',
  },
  {
    title: 'Card Choice in Slay the Spire',
    description: `Rogue-like game where the cards you choose could make or break a run. Logistic regression across 3,100+ card-character pairs from 6.2M player runs, checked for false discovery and unstable estimates.`,
    slug: 'slay-the-spire',
    imgSrc: '/static/images/card-reward.png',
    dashboardHref: 'https://brent-smith-4.github.io/sts-card-choice-analysis/',
    githubHref: 'https://github.com/brent-smith-4/sts-card-choice-analysis',
  },
]

export default projectsData
