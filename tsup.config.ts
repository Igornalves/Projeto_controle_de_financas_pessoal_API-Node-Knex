import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/app.ts',
    'src/server.ts',
    'src/@types/knex.d.ts',
    'src/env/intex.ts',
    'src/database/configsDatabase.ts',
    'src/hook/hookGlobal.ts',
    'src/routes/all.routes.ts',
    'src/middlewares/BuscaPeloTransactionEspecifica.ts',
    'src/middlewares/check-session-id-user.ts',
    'src/middlewares/HelloWord.ts',
    'src/middlewares/inserindoDadosNoBanco.ts',
    'src/middlewares/ListandoAsTransactions.ts',
    'src/middlewares/listandoOsDadosPorPesquisaWhere.ts',
    'src/middlewares/NewTransaction.ts',
    'src/middlewares/ResumoDaContaDoUser.ts',
    'src/database/migrations/20240912224239_create-transactions.ts',
    'src/database/migrations/20240912230109_add-session-id-to-transactions.ts',
    'src/database/seeds/create-insert.ts',
  ],
  outDir: 'build',
  format: ['cjs', 'esm'],
  target: 'es2023',
  clean: true,
})
