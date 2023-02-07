import { arg } from 'nexus'
import { nonNull } from 'nexus'
import { mutationField } from 'nexus'
import bcrypt from 'bcryptjs'
import { createToken } from '../../../helpers/jwt'

export const Auth = mutationField('Auth', {
  type: 'Authentication',
  args: {
    data: nonNull(
      arg({
        type: 'AuthenticationInput',
      }),
    ),
  },
  resolve: async (_parent, { data }, ctx) => {
    const user = await ctx.prisma.users.findUnique({
      where: {
        email: data.email,
      },
    })
    if (!user) {
      throw new Error('User not found')
    }
    const valid = await bcrypt.compare(data.password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }
    const token = createToken(user.id)

    return {
      user,
      token,
    }
  },
})
