import { FastifyReply, FastifyRequest } from 'fastify'
import { knex } from '../database/configsDatabase'

export function ResumoDaContaDoUser() {
  return async (request: FastifyRequest, response: FastifyReply) => {
    const summary = await knex('transactions')
      .sum('amount', { as: 'amount' })
      .first()

    response.send({ summary })
  }
}
