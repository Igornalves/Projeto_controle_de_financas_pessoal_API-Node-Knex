import { knex } from '../database/configsDatabase'
import { FastifyReply, FastifyRequest } from 'fastify'

// criando um rota para testa a conexao com o banco de dados
export function listagemDeDados() {
  return async (request: FastifyRequest, response: FastifyReply) => {
    // const tables = await knex('sqlite_schema').select('*')
    const tables = await knex('transactions').where('amount', 1000).select('*')

    console.log('listagem de campos feita com sucesso !!!')

    response.send(tables)
  }
}
