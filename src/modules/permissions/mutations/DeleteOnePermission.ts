import { arg, mutationField, nonNull } from 'nexus'

export const deleteOnePermission = mutationField('deleteOnePermission', {
  type: 'Permissions',
  args: {
    where: nonNull(
      arg({
        type: 'PermissionWhereUniqueInput',
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
