import { FastifyReply, FastifyRequest } from 'fastify'

export function Helloword() {
  // retorno async de forma que espera ser carregada a variavel para que ela possa ser mostrada na tela
  return async (request: FastifyRequest, response: FastifyReply) => {
    const message = await 'hello word !!!'

    console.log('message enviada com sucesso')

    response.send(message)
  }
}
