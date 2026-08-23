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
    description: `Tell Mise what you're craving: a vibe, an ingredient, a cuisine - and it returns recipes that match. Built with keyword matching and semantic transformers to understand natural language input.`,
    slug: 'mise',
    imgSrc: '/static/images/mise-icon.png',
    demoHref: 'https://mise-recipe-recommender.fly.dev',
    githubHref: 'https://github.com/brent-smith-4/recipe-recommender',
  },
  {
    title: 'Card Choice in Slay the Spire',
    description: `Rogue-like game where the card rewards you choose could make or break a run. ETL pipeline on 7+ million player runs to model/identify what cards are best, controlled for confounders.`,
    slug: 'slay-the-spire',
    imgSrc: '/static/images/card-reward.png',
    dashboardHref: 'https://brent-smith-4.github.io/sts-card-choice-analysis/',
    githubHref: 'https://github.com/brent-smith-4/sts-card-choice-analysis',
  },
]

export default projectsData
