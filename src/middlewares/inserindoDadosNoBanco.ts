import { knex } from '../database/configsDatabase'
import crypto from 'node:crypto'
import { FastifyReply, FastifyRequest } from 'fastify'

export function inserindoDadosNoBanco() {
  // criando um retorno onde vai ser async de forma que ele mostre a pesquisa a ser feita na query do banco de dados
  return async (request: FastifyRequest, response: FastifyReply) => {
    // crinado uma insersao no banco de dados de forma que possa colocar um user dentro da tabela
    const transaction = await knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'Transacao de teste no banco de dados',
        amount: 1000,
      })
      .returning('*')

    // mostrando no console um bem sucedido para afirmar melhro que os dados sao enviados
    console.log('dados inseridos com sucesso no banco !!!')

    // envidando uma resposta de forma que mostre os dados para o cliente
    response.send({ transaction })
  }
}
