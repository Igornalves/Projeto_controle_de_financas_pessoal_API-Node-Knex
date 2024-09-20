import { knex } from '../database/configsDatabase'
import crypto from 'node:crypto'
import { FastifyReply, FastifyRequest } from 'fastify'

// passando para a funcao o que ela deve reeceber quando a rota for chamanda
export async function inserindoDadosNoBanco(
  request: FastifyRequest,
  response: FastifyReply,
) {
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
