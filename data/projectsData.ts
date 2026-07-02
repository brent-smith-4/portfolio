interface Project {
  title: string
  description: string
  slug?: string
  imgSrc?: string
  demoHref?: string
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
    title: 'Slay the Spire - Card Selection Study',
    description: `An analysis of card reward choices in Slay the Spire, controlling for confounders like difficulty level to isolate their true effect on win rate, floors reached, and floors gained. Currently in progress.`,
    slug: 'slay-the-spire',
    imgSrc: '/static/images/card-reward.png',
    githubHref: 'https://github.com/brent-smith-4/sts-card-choice-analysis',
  },
]

export default projectsData
