import { config } from 'dotenv'
import { z } from 'zod'

// console.log(process.env.NODE_ENV)
// throw new Error()

// desenvolvendo uma logica que as variaveis de ambiente podem ser rodadas quando for feita os tests ou quando tiver em desenvolvimento
if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

// formato que vai ser recebido os dados na variavel
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  DATABASE_CLIENT: z.enum(['sqlite3', 'pg']),
  // faz uma conversao para que de fato vc possa colocar um valor e ele ser transformado
  PORT: z.coerce.number().default(3454),
})

// faz a validacao direto porem nao mostra o erro de forma direta
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalido variaveis ambiente !!!', _env.error.format())

  throw new Error('Invalido variaveis ambiente !!!')
}

export const env = _env.data
