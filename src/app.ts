import fastify from 'fastify'
import mercurius from 'mercurius'
import { context } from './context'
import { schema } from './schema'
import persistedQueryProvider from './redis'

declare module 'mercurius' {}
export const app = fastify()

app.register(mercurius, {
  schema,
  context: () => context,
  ...persistedQueryProvider,
  graphiql: true,
})
