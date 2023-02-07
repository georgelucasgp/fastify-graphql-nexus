import { arg, nonNull, queryField } from 'nexus'
import { Users } from '../../../generated/nexus-prisma'

export const findOneUser = queryField('findOneUser', {
  type: Users.$name,
  args: {
    where: nonNull(
      arg({
        type: `${Users.$name}WhereUniqueInput`,
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.users.findUnique({
      where: {
        id: args.where.id,
      },
    })
  },
})
