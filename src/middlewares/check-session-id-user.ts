import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdUser(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return response.status(401).send({
      error: 'Nao autorizado !!!!',
    })
  }
}
