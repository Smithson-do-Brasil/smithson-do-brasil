import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_EMAILJS_SERVICE_ID: z.string(),
  VITE_EMAILJS_TEMPLATE_ID: z.string(),
  VITE_EMAILJS_PUBLIC_KEY: z.string(),
  VITE_MAINTENANCE_MODE: z.coerce.boolean(),
})

export const env = envSchema.parse(import.meta.env)
