import { createToken } from './../../../helpers/jwt'
import { arg, mutationField, nonNull } from 'nexus'
import { Users } from '../../../generated/nexus-prisma'
import bcrypt from 'bcryptjs'

export const createOneUser = mutationField('createOneUser', {
  type: Users.$name,
  args: {
    data: nonNull(
      arg({
        type: `${Users.$name}CreateInput`,
      }),
    ),
  },
  resolve: async (_, args, context) => {
    const userAlreadyExists = await context.prisma.users.findUnique({
      where: {
        email: args.data.email,
      },
    })
    if (userAlreadyExists) throw new Error('User already exists')
    const hash = bcrypt.hashSync(args.data.password, 10)
    const user = await context.prisma.users.create({
      data: {
        ...args.data,
        password: hash,
      },
    })
    const token = createToken(user.id)
    return {
      ...user,
      token,
    }
  },
})
