import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'
import z from 'zod'

const postSchema = z.object({
  email: z.email({ message: 'E-mail inválido!' }),
})

export async function POST(request: NextRequest) {
  const response = await postSchema.safeParse(request.json)

  if (!response.success) {
    return Response.json({ message: 'Dado inválido!' })
  }
  const { email } = response.data

  const responseDb = await prisma.subscriber.create({
    data: {
      email,
    },
  })

  if (!responseDb.id) {
    return Response.json(
      {
        message: 'Não foi possível processar sua solicitação!',
      },
      {
        status: 500,
      },
    )
  }

  return Response.json({ message: 'Create success!' }, { status: 201 })
}
