import fastify from 'fastify'
// import { knex } from './database/configsDatabase'
import { allRoutes } from './routes/all.routes'
import { env } from './env/intex'
import cookie from '@fastify/cookie'

// criando uma const que recebe a funcao que permite usar todas as funcionalidades da biblioteca
const server = fastify()

server.register(cookie)

// usando uma hook global para poder verificar todas as rotas existentes na aplicacao
// server.addHook('preHandler', hookGlobal)

// Registrando as rotas para que sejam execultadas de forma completa
server.register(allRoutes, {
  prefix: '/transactions',
})

// colocando o server para reconhecer qual porta ela vai coloca a aplicacao para roda e informa atravez de um console.log que já esta rodando o projeto de forma local
server
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running on port 3454 !!!')
  })
