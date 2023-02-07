import { arg, mutationField, nonNull } from 'nexus'
import { Permissions } from '../../../generated/nexus-prisma'

export const updateOnePermission = mutationField('updateOnePermission', {
  type: Permissions.$name,
  args: {
    data: nonNull(
      arg({
        type: `${Permissions.$name}UpdateInput`,
      }),
    ),
    where: nonNull(
      arg({
        type: `${Permissions.$name}WhereUniqueInput`,
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.permissions.update({
      where: {
        id: args.where.id,
      },
      data: args.data,
    })
  },
})
