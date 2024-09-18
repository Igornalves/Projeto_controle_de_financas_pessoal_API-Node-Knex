import 'dotenv/config'
import { z } from 'zod'

// formato que vai ser recebido os dados na variavel
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  DATABASE_CLIENT: z.string(),
  PORT: z.number().default(3454),
})

// faz a validacao direto porem nao mostra o erro de forma direta
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalido variaveis ambiente !!!', _env.error.format())

  throw new Error('Invalido variaveis ambiente !!!')
}

export const env = _env.data
