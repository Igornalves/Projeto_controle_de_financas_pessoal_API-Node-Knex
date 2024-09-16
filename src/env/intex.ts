import 'dotenv/config'
import { z } from 'zod'

// formato que vai ser recebido os dados na variavel
const envSchema = z.object({
  DATABASE_URL: z.string(),
  DATABASE_CLIENT: z.string(),
})

export const env = envSchema.parse(process.env)
