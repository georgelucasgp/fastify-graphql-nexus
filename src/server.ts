import fastify from 'fastify'
import mercurius from 'mercurius'
import Redis from 'ioredis'
import { schema } from './schema'
import { context } from './context'

declare module 'mercurius' {}
const app = fastify()

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
  graphiql: true,
  context: () => context,
  ...persistedQueryProvider,
})

app.listen({ port: 4000, host: '0.0.0.0' }, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`\
  🚀 Server ready at: http://localhost:4000/graphiql
  ⭐️ See sample queries: http://pris.ly/e/ts/graphql-fastify-sdl-first#using-the-graphql-api
  `)
})
