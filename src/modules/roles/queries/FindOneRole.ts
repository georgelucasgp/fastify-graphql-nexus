import { arg, nonNull, queryField } from 'nexus'
import { Roles } from '../../../generated/nexus-prisma'

export const findOneRole = queryField('findOneRole', {
  type: 'Roles',
  args: {
    where: nonNull(
      arg({
        type: `${Roles.$name}WhereUniqueInput`,
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.roles.findUnique({
      where: {
        id: args.where.id,
      },
    })
  },
})
