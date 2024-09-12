import fastify from 'fastify'
import { knex } from './database/configsDatabase'

// criando uma const que recebe a funcao que permite usar todas as funcionalidades da biblioteca
const server = fastify()

// criando um rota para testa a conexao com o banco de dados
server.get('/testConnectionDatabase', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

// colocando o server para reconhecer qual porta ela vai coloca a aplicacao para roda e informa atravez de um console.log que já esta rodando o projeto de forma local
server
  .listen({
    port: 3454,
  })
  .then(() => {
    console.log('HTTP server running on port 3454 !!!')
  })
