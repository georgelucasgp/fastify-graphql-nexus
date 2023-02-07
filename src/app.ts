import fastify from 'fastify'
import mercurius from 'mercurius'
import { schema } from './schema'
import persistedQueryProvider from './redis'
import { context } from './context'

declare module 'mercurius' {}
export const app = fastify()

app.register(mercurius, {
  schema,
  context: (request) => context(request),
  ...persistedQueryProvider,
  graphiql: true,
})
