import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

export interface Context {
  prisma: PrismaClient
}

export const context: Context = {
  prisma: prismaClient,
}
