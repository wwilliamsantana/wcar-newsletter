import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'
import z from 'zod'

const postSchema = z.object({
  email: z.email({ message: 'E-mail inválido!' }),
})

export async function POST(request: NextRequest) {
  const response = await postSchema.safeParse(request.json)

  if (response.success) {
    const { email } = response.data
  }

  return Response.json({ message: 'Create success!' })
}
