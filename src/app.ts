import fastify from 'fastify'
import mercurius from 'mercurius'
import Redis from 'ioredis'
import { context } from './context'
import { schema } from './schema'

declare module 'mercurius' {}
export const app = fastify()

const redis = new Redis({
  host: 'pcontrol-redis',
  port: 6379,
})

const persistedQueryProvider = {
  ...mercurius.persistedQueryDefaults.automatic(),
  getQueryFromHash: async (hash: any) => redis.get(hash),
  saveQuery: async (hash: any, query: any) => redis.set(hash, query),
}

app.register(mercurius, {
  schema,
  context: () => context,
  ...persistedQueryProvider,
  graphiql: true,
})
