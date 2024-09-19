import { FastifyReply, FastifyRequest } from 'fastify'
import { knex } from '../database/configsDatabase'

export function LisntandoDeTransactions() {
  return async (request: FastifyRequest, response: FastifyReply) => {
    // criando um select para ver todas as transacoes do existentes no banco de dados
    const allTransactions = await knex('transactions').select('*')

    const sessionId = request.cookies.sessionId

    if (!sessionId) {
      return response.status(401).send({
        error: 'Nao autorizado !!!!',
      })
    }

    response.send({ allTransactions })
  }
}
