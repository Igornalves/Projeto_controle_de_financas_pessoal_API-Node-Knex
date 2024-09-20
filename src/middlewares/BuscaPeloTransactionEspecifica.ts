import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { knex } from '../database/configsDatabase'

export function BuscaPeloTransactionEspecifica() {
  return async (request: FastifyRequest, response: FastifyReply) => {
    // criando um objeto de forma que vai detalhar os dados e sua tipagem no qual devee receber o parametro
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid(),
    })

    // passando o id para a requisicao como um parametro
    const { id } = getTransactionParamsSchema.parse(request.params)

    // fazendo uma procura no banco de dados de forma que ele possa trazer os dados apenas do ID correto que foi criado
    const TransactionSearch = await knex('transactions').where('id', id).first()

    const sessionId = request.cookies.sessionId

    if (!sessionId) {
      return response.status(401).send({
        error: 'Nao autorizado !!!!',
      })
    }

    console.log('Pesquisa da transaction foi feita com sucesso !!!')

    // enviando os dados para quando for feita a requisicao seja vista pelo user
    response.send({ TransactionSearch })
  }
}
