import { knex as SetupKnex } from 'knex'

export const knex = SetupKnex({
  client: 'sqlite3',
  connection: {
    filename: './src/database/SalesSystem.db',
  },
})
