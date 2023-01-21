import { arg, mutationField, nonNull } from 'nexus'

export const updateOnePermission = mutationField('updateOnePermission', {
  type: 'Permissions',
  args: {
    data: nonNull(
      arg({
        type: 'PermissionUpdateInput',
      }),
    ),
    where: nonNull(
      arg({
        type: 'PermissionWhereUniqueInput',
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.permissions.update({
      where: {
        id: args.where.id,
      },
      data: {
        name: args.data.name,
      },
    })
  },
})
