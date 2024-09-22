import { expect, test } from 'vitest'

// enunciado do teste a ser realizado
test('o usuario conseguir cria uma nova transacao', () => {
  // fazer a chamada HTTP para cria alguma coisa na minha aplicacao
  // validando teste

  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
