import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { knex } from '../database/configsDatabase'

export function BuscaPeloTransactionEspecifica() {
  return async (request: FastifyRequest, response: FastifyReply) => {
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getTransactionParamsSchema.parse(request.params)

    const TransactionSearch = await knex('transactions').where('id', id).first()

    response.send({ TransactionSearch })
  }
}
