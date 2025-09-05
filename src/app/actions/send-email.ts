'use server'

import { prisma } from '@/lib/prisma'
import z from 'zod'

export type SendEmailState = {
  message: string
  isError: boolean
}

const postSchema = z.object({
  email: z.email({ error: 'E-mail inválido.' }),
})

export async function SendEmailAction(
  initialState: any,
  formData: FormData,
): Promise<SendEmailState> {
  const getEmailForm = await formData.get('email')

  const response = await postSchema.safeParse(getEmailForm)

  if (!response.success) {
    return {
      message: response.error.issues[0].message,
      isError: true,
    }
  }

  const { email } = response.data

  const responseDb = await prisma.subscriber.create({
    data: {
      email,
    },
  })

  if (!responseDb.id) {
    return {
      message: 'Não foi possível processar sua solicitação!',
      isError: true,
    }
  }

  return {
    message: 'Create success!',
    isError: false,
  }
}
