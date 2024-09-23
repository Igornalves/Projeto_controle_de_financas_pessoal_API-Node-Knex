import { app } from './app'
import { env } from './env/intex'

// colocando o server para reconhecer qual porta ela vai coloca a aplicacao para roda e informa atravez de um console.log que já esta rodando o projeto de forma local
app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running on port 3454 !!!')
  })
