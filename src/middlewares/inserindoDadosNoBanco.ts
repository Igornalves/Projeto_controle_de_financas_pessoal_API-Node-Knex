import { knex } from '../database/configsDatabase'
import crypto from 'node:crypto'
import { FastifyReply, FastifyRequest } from 'fastify'

export function inserindoDadosNoBanco() {
  return async (request: FastifyRequest, response: FastifyReply) => {
    const transaction = await knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'Transacao de teste no banco de dados',
        amount: 1000,
      })
      .returning('*')
    console.log('dados inseridos com sucesso no banco !!!')
    response.send(transaction)
  }
}
