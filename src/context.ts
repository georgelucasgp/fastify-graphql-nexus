import { PrismaClient } from '@prisma/client'

export interface Context {
  prisma: PrismaClient
  request: {
    headers: {
      authorization: string
    }
  }
}

export const context = (request: any): Context => ({
  prisma: new PrismaClient(),
  request,
})
