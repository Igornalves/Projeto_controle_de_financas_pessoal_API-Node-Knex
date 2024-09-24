import { test, beforeAll, afterAll, describe, expect, beforeEach } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../src/app'

// enunciado do teste a ser realizado
// test('o usuario conseguir cria uma nova transacao', () => {
// fazer a chamada HTTP para cria alguma coisa na minha aplicacao
// validando teste
// const responseStatusCode = 201
// expect(responseStatusCode).toEqual(201)
// })

// com o describe eu posso dentro dos tests criar uma categoria de testes para aplicacao de forma que ajude melher a entender a onde o erro esta ocorrendo
describe('Transactions Routes', () => {
  // quando o fastfiy terminar de cadastra os plugins ele vai trazer um valor valido para que os tests possam ser execultados
  beforeAll(async () => {
    await app.ready()
  })

  // O bloco "afterAll" é um hook que será executado após todos os testes terem sido finalizados.
  // Ele é utilizado para executar alguma tarefa de limpeza ou fechamento de recursos que foram abertos durante os testes.
  // Neste caso, "app.close()" é chamado para fechar a aplicação após todos os testes serem executados.
  // O "await" é utilizado para garantir que o fechamento da aplicação ocorra de forma assíncrona, aguardando sua conclusão antes de prosseguir.
  // Isso é importante para garantir que a aplicação seja corretamente finalizada, liberando quaisquer recursos ou conexões de forma segura.
  afterAll(async () => {
    await app.close()
  })


  beforeEach(async () => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  // teste a ser criado para ver se a rota post esta funcionando de forma completa
  test('o usuario conseguir cria uma nova transacao', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await request(app.server)
      .post('/transactions/criandoTransaction')
      .send({
        title: 'colocando dinheiro',
        amount: 2000,
        type: 'credito',
      })
      .expect(201)

    // console.log(response.headers)
  })

  // todo test E2E dev se abster de qualquer contexto para que possam funcionar de forma independente
  test('fazendo as listagens de todas as transactions da aplicacao', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions/criandoTransaction')
      .send({
        title: 'colocando dinheiro',
        amount: 2000,
        type: 'credito',
      })

    const cookies = createTransactionResponse.get('Set-Cookie')

    if (!cookies) {
      throw new Error('Cookie não encontrado na resposta')
    }

    // console.log(cookies)

    const listandoTransactionResponse = await request(app.server)
      .get('/transactions/listagemDeTransactions')
      .set('Cookie', cookies)
      .expect(200)

    // console.log(listandoTransactionResponse.body)

    expect(listandoTransactionResponse.body.allTransactions).toEqual([
      expect.objectContaining({
        title: 'colocando dinheiro',
        amount: 2000,
      }),
    ])
  })
})
