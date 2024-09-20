import { FastifyReply, FastifyRequest } from 'fastify'

export async function hookGlobal(
  request: FastifyRequest,
  response: FastifyReply,
) {
  return console.log(`[${request.method}], ${request.url}`)
}
