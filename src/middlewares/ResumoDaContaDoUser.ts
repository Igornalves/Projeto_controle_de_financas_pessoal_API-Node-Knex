import { FastifyReply, FastifyRequest } from 'fastify'
import { knex } from '../database/configsDatabase'

export function ResumoDaContaDoUser() {
  return async (request: FastifyRequest, response: FastifyReply) => {
    // criando uma query com o knex para listar o valor existente na conta do user de forma completa
    const summary = await knex('transactions')
      .sum('amount', { as: 'amount' })
      .first()

    const sessionId = request.cookies.sessionId

    if (!sessionId) {
      return response.status(401).send({
        error: 'Nao autorizado !!!!',
      })
    }

    response.send({ summary })
  }
}
