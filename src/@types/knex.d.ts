// criando uma definicao de tipos para o knex reconhecer as types criados nos codigos e arquivos da aplicacao

// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transcitons: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
