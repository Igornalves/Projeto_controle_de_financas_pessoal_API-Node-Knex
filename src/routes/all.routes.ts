import { FastifyInstance } from 'fastify'
import { inserindoDadosNoBanco } from '../middlewares/inserindoDadosNoBanco'
import { Helloword } from '../middlewares/HelloWord'
import { NewTransation } from '../middlewares/NewTransaction'
import { LisntandoDeTransactions } from '../middlewares/ListandoAsTransactions'
import { BuscaPeloTransactionEspecifica } from '../middlewares/BuscaPeloTransactionEspecifica'
import { ResumoDaContaDoUser } from '../middlewares/ResumoDaContaDoUser'
import { listandoOsDadosPorPesquisaWhere } from '../middlewares/listandoOsDadosPorPesquisaWhere'

// Cookies <-> Formas da gente manter contexto entre as requisicoes

// criando um funcao que ajusta as rotas de forma completa quando for chamanda vai execultar uma funcao
export async function allRoutes(router: FastifyInstance) {
  // aqui temos o prefixo da rota e tambem temos a funcao a ser execultada quando for requisitado alguma coisa para rota ou enviado
  router.get('/', Helloword())

  router.get(
    '/listandoOsDadosPorPesquisaWhere',
    listandoOsDadosPorPesquisaWhere(),
  )

  router.get('/testeDeInsercao', inserindoDadosNoBanco())

  router.post('/criandoTransaction', NewTransation())

  router.get('/listagemDeTransactions', LisntandoDeTransactions())

  router.get('/transactionsEspecifica/:id', BuscaPeloTransactionEspecifica())

  router.get('/resumoDaContaBancaria', ResumoDaContaDoUser())
}
