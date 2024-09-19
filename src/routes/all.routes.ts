import { FastifyInstance } from 'fastify'
import { listagemDeDados } from '../middlewares/listegemDeDados'
import { inserindoDadosNoBanco } from '../middlewares/inserindoDadosNoBanco'
import { Helloword } from '../middlewares/HelloWord'
import { NewTransation } from '../middlewares/NewTransaction'

// criando um funcao que ajusta as rotas de forma completa quando for chamanda vai execultar uma funcao
export async function allRoutes(router: FastifyInstance) {
  // aqui temos o prefixo da rota e tambem temos a funcao a ser execultada
  router.get('/', Helloword())

  router.get('/testConnectionDatabase', listagemDeDados())

  router.get('/testeDeInsercao', inserindoDadosNoBanco())

  router.post('/criandoTransaction', NewTransation())
}
