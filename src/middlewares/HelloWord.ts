import { FastifyReply, FastifyRequest } from 'fastify'

export function Helloword() {
  // retorno async de forma que espera ser carregada a variavel para que ela possa ser mostrada na tela
  return async (request: FastifyRequest, response: FastifyReply) => {
    // fazendo o test de envio da mensagem para o sistema
    const message = await 'hello word !!!'

    const sessionId = request.cookies.sessionId

    if (!sessionId) {
      return response.status(401).send({
        error: 'Nao autorizado !!!!',
      })
    }

    console.log('message enviada com sucesso')

    response.send(message)
  }
}
