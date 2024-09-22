import { FastifyInstance } from 'fastify'
import { inserindoDadosNoBanco } from '../middlewares/inserindoDadosNoBanco'
import { Helloword } from '../middlewares/HelloWord'
import { NewTransation } from '../middlewares/NewTransaction'
import { LisntandoDeTransactions } from '../middlewares/ListandoAsTransactions'
import { BuscaPeloTransactionEspecifica } from '../middlewares/BuscaPeloTransactionEspecifica'
import { ResumoDaContaDoUser } from '../middlewares/ResumoDaContaDoUser'
import { listandoOsDadosPorPesquisaWhere } from '../middlewares/listandoOsDadosPorPesquisaWhere'
import { checkSessionIdUser } from '../middlewares/check-session-id-user'
import { hookGlobal } from '../hook/hookGlobal'

// testes automatizados os principais sao:
// Unitarios: unidade da sua aplicacao (uma parte isolada da aplicacao)
// integracao: comunicacao entre duas ou mais unidades
// e2e - ponta a ponta: simulam um usuario operando na nossa aplicacao

// BackEnd: chamadas http WebSockets

// Piramide de testes: E2E (Nao depende de nunhuma tecnologia nao dependem de arquitetura) teste lentos
// 2000 testes -> teste E2E =>16 mins

// Cookies <-> Formas da gente manter contexto entre as requisicoes

// criando um funcao que ajusta as rotas de forma completa quando for chamanda vai execultar uma funcao
export async function allRoutes(router: FastifyInstance) {
  // usando um hook global apenas no meu plugin local para incluir para todas as rotas da aplicacao que esta aqui no contexto da funcao
  router.addHook('preHandler', hookGlobal)

  // aqui temos o prefixo da rota e tambem temos a funcao a ser execultada quando for requisitado alguma coisa para rota ou enviado
  router.get('/', Helloword)

  router.get(
    '/listandoOsDadosPorPesquisaWhere',
    {
      preHandler: [checkSessionIdUser],
    },
    listandoOsDadosPorPesquisaWhere,
  )

  router.get(
    '/testeDeInsercao',
    { preHandler: [checkSessionIdUser] },
    inserindoDadosNoBanco,
  )

  router.post('/criandoTransaction', NewTransation)

  router.get(
    '/listagemDeTransactions',
    { preHandler: [checkSessionIdUser] },
    LisntandoDeTransactions,
  )

  router.get(
    '/transactionsEspecifica/:id',
    { preHandler: [checkSessionIdUser] },
    BuscaPeloTransactionEspecifica,
  )

  router.get(
    '/resumoDaContaBancaria',
    { preHandler: [checkSessionIdUser] },
    ResumoDaContaDoUser,
  )
}
