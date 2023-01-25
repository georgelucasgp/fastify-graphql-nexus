import Redis from 'ioredis'
import mercurius from 'mercurius'

export const redis = new Redis({
  host: 'pcontrol-redis',
  port: 6379,
})

const persistedQueryProvider = {
  ...mercurius.persistedQueryDefaults.automatic(),
  getQueryFromHash: async (hash: any) => redis.get(hash),
  saveQuery: async (hash: any, query: any) => redis.set(hash, query),
}

export default persistedQueryProvider
