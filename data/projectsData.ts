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
  // {
  //   title: 'Slay the Spire - Causal Analysis',
  //   description: `A causal analysis of card selection in Slay the Spire and its impact on run outcomes. Exploring how specific card choices influence win rates using causal inference methods.`,
  //   slug: 'slay-the-spire',
  //   imgSrc: '/static/images/card-reward.png',
  // },
]

export default projectsData
