import { FastifyReply, FastifyRequest } from 'fastify'
import { knex } from '../database/configsDatabase'

export async function ResumoDaContaDoUser(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const { sessionId } = request.cookies

  // criando uma query com o knex para listar o valor existente na conta do user de forma completa
  const summary = await knex('transactions')
    .where({ session_id: sessionId })
    .sum('amount', { as: 'amount' })
    .first()

  response.send({ summary })
}
