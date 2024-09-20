import { FastifyReply, FastifyRequest } from 'fastify'

// funcao async de forma que espera ser carregada a variavel para que ela possa ser mostrada na tela
export async function Helloword(
  request: FastifyRequest,
  response: FastifyReply,
) {
  // fazendo o test de envio da mensagem para o sistema
  const message = await 'hello word !!!'

  console.log('message enviada com sucesso')

  response.send(message)
}
