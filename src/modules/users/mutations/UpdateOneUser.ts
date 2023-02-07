import { arg, mutationField, nonNull } from 'nexus'
import { Users } from '../../../generated/nexus-prisma'

export const updateOneUser = mutationField('updateOneUser', {
  type: Users.$name,
  args: {
    data: nonNull(
      arg({
        type: `${Users.$name}UpdateInput`,
      }),
    ),
    where: nonNull(
      arg({
        type: `${Users.$name}WhereUniqueInput`,
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.users.update({
      where: {
        id: args.where.id,
      },
      data: args.data,
    })
  },
})
