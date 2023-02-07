import { arg, nonNull, queryField } from 'nexus'
import { Permissions } from '../../../generated/nexus-prisma'

export const findOnePermission = queryField('findOnePermission', {
  type: Permissions.$name,
  args: {
    where: nonNull(
      arg({
        type: `${Permissions.$name}WhereUniqueInput`,
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.permissions.findUnique({
      where: {
        id: args.where.id,
      },
    })
  },
})
