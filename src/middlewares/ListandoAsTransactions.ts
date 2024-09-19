import { FastifyReply, FastifyRequest } from 'fastify'
import { knex } from '../database/configsDatabase'

export function LisntandoDeTransactions() {
  return async (request: FastifyRequest, response: FastifyReply) => {
    // criando um select para ver todas as transacoes do existentes no banco de dados
    const allTransactions = await knex('transactions').select('*')

    response.send({ allTransactions })
  }
}
