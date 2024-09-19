import { knex } from '../database/configsDatabase'
import { FastifyReply, FastifyRequest } from 'fastify'

// criando um rota para testa a conexao com o banco de dados
export function listagemDeDados() {
  // criando um retorno onde vai ser async de forma que ele mostre a pesquisa a ser feita na query do banco de dados
  return async (request: FastifyRequest, response: FastifyReply) => {
    // const tables = await knex('sqlite_schema').select('*')
    const tables = await knex('transactions').where('amount', 1000).select('*')

    console.log('listagem de campos feita com sucesso !!!')

    // envidando uma resposta de forma que mostre os dados para o cliente
    response.send({ tables })
  }
}
