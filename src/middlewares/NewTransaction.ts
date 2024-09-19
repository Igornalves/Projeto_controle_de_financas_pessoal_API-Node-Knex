import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { knex } from '../database/configsDatabase'
import { randomUUID } from 'node:crypto'

// {  title, amount, type: credito ou debito }

export function NewTransation() {
  return async (request: FastifyRequest, response: FastifyReply) => {
    // fazendo a validacao dos dados pelo zod de forma que quando recebidas pela rota e funcao seja validado os dados de forma completa
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credito', 'debito']),
    })

    // criando uma constante que desestrutura dos dados e recebe a requisicao do body
    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()
      response.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      })
    }

    // fazendo uma insercao no banco depois da validacao dos dados
    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credito' ? amount : amount * -1,
      session_id: sessionId,
    })

    // mandando uma resposta apos ter criado e enviado os dados para o banco de dados
    response.status(201).send('transaction criada com sucesso !!!!')

    // criando uma print no console para mostra a confirmacao que os dados foram enviados
    console.log(
      'confimacao de dados envidados pela requisicao de forma completa',
    )
  }
}
