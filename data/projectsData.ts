interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Mise - Recipe Recommender',
    description: `Tell Mise what you're craving: a vibe, an ingredient, a cuisine - and it returns recipes that match. Built with keyword matching and semantic transformers to understand natural language input.`,
    imgSrc: '/static/images/mise-icon.png',
    href: 'https://mise-recipe-recommender.fly.dev',
  },
]

export default projectsData
