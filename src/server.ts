import fastify from 'fastify'
// import { knex } from './database/configsDatabase'
import { allRoutes } from './routes/all.routes'

// criando uma const que recebe a funcao que permite usar todas as funcionalidades da biblioteca
const server = fastify()

// Registrando a rota
server.register(allRoutes)

// colocando o server para reconhecer qual porta ela vai coloca a aplicacao para roda e informa atravez de um console.log que já esta rodando o projeto de forma local
server
  .listen({
    port: 3454,
  })
  .then(() => {
    console.log('HTTP server running on port 3454 !!!')
  })
