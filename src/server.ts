import fastify from 'fastify'
import { knex } from './database/database'

const server = fastify()

server.get('/testConnectionDatabase', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

server
  .listen({
    port: 3454,
  })
  .then(() => {
    console.log('HTTP server running on port 3454 !!!')
  })
