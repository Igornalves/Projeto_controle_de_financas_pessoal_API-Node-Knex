// ajustando a importacao da biblioteca knex e a interface Knex para usar nas configs
import { knex as SetupKnex, Knex } from 'knex'
import 'dotenv/config'

// console.log(process.env)

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found.')
}

if (!process.env.DATABASE_CLIENT) {
  throw new Error('DATABASE_CLIENT env not found.')
}

// exportando as configs para o projeto de forma que possa usar para cria as migrations de forma completa
export const configs: Knex.Config = {
  client: process.env.DATABASE_CLIENT,
  connection: {
    filename: process.env.DATABASE_URL,
  },
  // opcao que marca para informa ao banco no caso SQLite que nao existes campos padroes nas tabelas criadas no banco de dados do SQLite, pq se nao vai passa um console.log informando para colocar no campo da conexao
  useNullAsDefault: true,
  // ajustando as configs das migrations que vao ser criadas ou modificadas
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
  seeds: {
    extension: 'ts',
    directory: './src/database/seeds',
  },
}

// criando um const que quando chamada vai fazer a connection da aplicacao com o banco de forma que nos permite utilizar todas a funcionalidades do Knex para querys no banco
export const knex = SetupKnex(configs)
