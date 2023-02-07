import { arg, mutationField, nonNull } from 'nexus'
import { Permissions } from '../../../generated/nexus-prisma'

export const deleteOnePermission = mutationField('deleteOnePermission', {
  type: Permissions.$name,

  args: {
    where: nonNull(
      arg({
        type: `${Permissions.$name}WhereUniqueInput`,
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.permissions.delete({
      where: {
        id: args.where.id,
      },
    })
  },
})
