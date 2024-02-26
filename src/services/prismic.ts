import * as prismic from '@prismicio/client'

export const repositoryName = import.meta.env
  .VITE_PRISMIC_REPOSITORY_NAME as string

export const client = prismic.createClient(repositoryName, {
  accessToken: import.meta.env.VITE_PRISMIC_ACCESS_TOKEN,
  routes: [],
})
