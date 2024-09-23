import fastify from 'fastify'
// import { knex } from './database/configsDatabase'
import { allRoutes } from './routes/all.routes'
// import { env } from './env/intex'
import cookie from '@fastify/cookie'

// criando uma const que recebe a funcao que permite usar todas as funcionalidades da biblioteca
export const app = fastify()

app.register(cookie)

// usando uma hook global para poder verificar todas as rotas existentes na aplicacao
// app.addHook('preHandler', hookGlobal)

// Registrando as rotas para que sejam execultadas de forma completa
app.register(allRoutes, {
  prefix: '/transactions',
})
