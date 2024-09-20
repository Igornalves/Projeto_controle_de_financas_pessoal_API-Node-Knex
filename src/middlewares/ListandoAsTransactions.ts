import { FastifyReply, FastifyRequest } from 'fastify'
import { knex } from '../database/configsDatabase'

export async function LisntandoDeTransactions(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const { sessionId } = request.cookies

  // criando um select para ver todas as transacoes do existentes no banco de dados
  const allTransactions = await knex('transactions')
    .where({ session_id: sessionId })
    .select('*')

  response.send({ allTransactions })
}
