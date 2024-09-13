import { FastifyInstance } from 'fastify'
import { listagemDeDados } from '../middlewares/listegemDeDados'
import { inserindoDadosNoBanco } from '../middlewares/inserindoDadosNoBanco'

// criando um funcao que ajusta as rotas de forma completa quando for chamanda vai execultar uma funcao
export async function allRoutes(router: FastifyInstance) {
  router.get('/testConnectionDatabase', listagemDeDados())

  router.get('/testeDeInsercao', inserindoDadosNoBanco())
}
