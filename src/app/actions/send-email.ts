'use server'

import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import z from 'zod'

export type SendEmailState = {
  message: string
  isError: boolean
}

const postSchema = z.object({
  email: z.email({ error: 'E-mail inválido.' }),
})

export async function SendEmailAction(
  initialState: unknown,
  formData: FormData,
): Promise<SendEmailState | undefined> {
  const getEmailForm = formData.get('email')

  const response = postSchema.safeParse({
    email: getEmailForm as string,
  })

  if (!response.success) {
    console.log(response.error.issues[0].message)
    return {
      message: 'Não foi possível processar sua solicitação!',
      isError: true,
    }
  }

  const { email } = response.data

  try {
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
      message: 'Cadastrado com sucesso!!',
      isError: false,
    }
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return {
          message: 'E-mail já cadastrado!',
          isError: true,
        }
      }
    }
  }
}
