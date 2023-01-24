import { app } from './app'

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
